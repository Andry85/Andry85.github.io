// JavaScript Document
$(function() {

    /* Left side bar scroll */
    var wih, lfTop, tpoint, bpoint, resizeTimer, oldst, lmHeight, lmTop, leftMenu, doc;

    doc = $(document);
    leftMenu = $('.sidebar');
    lmHeight = leftMenu[0].clientHeight;
    lmTop = leftMenu.offset().top;
    footer = $('.footer');

    $(window).on('resize', onResize).on('scroll', onScroll);
    onResize();

    function onResize() {
        wih = window.innerHeight;
        lfTop = footer.offset().top;
        tpoint = lmHeight+lmTop-wih;
        bpoint = lfTop-wih;

        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(onScroll, 100);
    }

    function onScroll() {
        var st = doc.scrollTop();
        var delta = oldst - st;
        var lcY = leftMenu.offset().top-st;
        oldst = st;

        if(delta < 0) {
            if(lmHeight < wih && st < bpoint+wih-lmHeight) {
                if(st > lmTop)
                    leftMenu.css({'position': 'fixed', 'top': '0px'});
                else
                    leftMenu.css({'position': '', 'top': ''});
            } else if(st > tpoint) {
                leftMenu.css({'position': 'fixed', 'top': lmTop-tpoint-(st > bpoint ? st-bpoint : 0)+'px'});
            }
        } else if(delta > 0 && lcY < lmTop) {
            var pos = lcY+delta;
            if(pos > 0) {
                if(st <= lmTop) {
                    leftMenu.css({'position': '', 'top': ''});
                    return;
                }
                pos = 0;
            }
            leftMenu.css({'position': 'fixed', 'top': pos+'px'});
        }
    }
/* End */



});
//end read