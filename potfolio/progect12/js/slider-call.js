$(function() {
    $('#slides').slidesjs({
        navigation: {
            active: false
        },
        play: {
            auto: true,
            interval: 2500,
            swap: false,
            pauseOnHover: true,
            effect: "fade"
        },
        effect: {
            fade: {
                speed: 2000
            }
        },
        pagination: {
            effect: "fade"
        }

    });
});