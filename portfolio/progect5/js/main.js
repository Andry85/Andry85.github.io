var ticker;
$(function() {


    $('.carusel-list > li:nth-child(2n+1)').css('marginLeft','0'); 

    if($('.ticker').length > 0 ){
        if($('.ticker').css('display') != 'none'){
            tickerLoader(100);
        }
    }
});
function tickerLoader(num){
    var csrf_token = $('#csrf_token').data('value');
    var current_locale = $('#locale').data('value');
    var result,
        names;

    names = ['Bruce Tucker','Felicia Fletcher','Josephine May','Benjamin Bell','Mathew Perry','Madison Neal','Beverly Andrews','Mia Arnold','Mitchell Hopkins','Martin Ellis','Jose Morris','Herminia Jacobs','Stanley Reynolds','Heather Carter','Corey Garcia','Gavin Jennings','Justin Mckinney','Audrey Bishop','Rodney Hunt','Mary Watson','Duane Palmer','Willard Rhodes','Michelle Reid','Edna Jenkins','Vernon Johnston','Alan Ward','Kylie Steward','Mary Cunningham','Darlene Rivera','Ivan Thompson','Clinton Rogers','Alan Hale','Terry Moreno','Christy Bowman','Jimmie Lee','Jessie Washington','Arron Chambers','Riley Little','Claude Grant','Riley Simmmons','Vernon Palmer','Becky Douglas','Sergio Ruiz','Wallace Castillo','Peyton Foster','Ted Lambert','Diana Morrison','Lois Wagner','Cherly Webb','Lonnie Herrera','Jackie Fowler','Donald Soto','Joe Williams','Brent Allen','Earl Hoffman','Bryan Davidson','Guy Gomez','Steve Gutierrez','Lois Harper','Jamie Pierce','David Rice','Ramona Gutierrez','Lucas Hale','Debbie Morrison','Deann Griffin','Heather Wilson','Hailey Welch','Julia Mitchelle','Jessie Jennings','Lydia Griffin','Tanya Austin','Matthew Burke','Charles Frazier','Alexa Carr','Mildred Bishop','Caroline Hughes','Mike Sanchez','Leonard Schmidt','Lonnie Owens','Kathy Mccoy','Alan Hernandez'/*,'Clarence Mills','Jennie Black','Pamela Bell','Ramon Medina','Fred Stone','Holly Burke','Bruce Mills','Max Austin','Janice West','Ruby Castro','Enrique Dixon','David Holland','Arthur Wood','Stacey Gomez','Justin Morales','Leroy Daniels','Flenn Barnett','Kelly Cunningham','Mae West','Kathy Williams','Charles Hunt','Stephanie Carlson','Johnny James','Jack Soto','Janice Burke','Lillian Spencer','Joyce Phillips','Jeremiah Woods','Alicia Gregory','Carter Howard','Eli Burns','Tamara Ramirez','Emma Russell','Pedro Ramos','Denise Black','Leslie George','Jackson Turner','Clarence Dixon','Eugene Hoffman','Sandra Johnston','Courtney Nichols','Jessie Howell','Francisco Jordan','Carter Armstrong','Jorge Porter','Chris Hansen','Tamara Jacobs','Harry Anderson','Cory Watson','Howard Newman','Clarence Freeman','Harper Patterson','Dustin Gibson','Chloe Herrera','Alexander Thompson','Dan Weaver','Stanley Craig','Julia Lee','Milton Johnston','Sherry Fowler','Raul Day','Darren Sims','Aiden Taylor','Wyatt Woods','Clarence Bell','Arthur Watkins','Lucille Dixon','Marc Foster','Clinton Mitchell','Sherri Mcdonalid','Aubrey Arnold','Tonya Taylor','Caleb Dunn','Cecil Berry','Lesa Robertson','Eli Mendoza','Larry Webb','Joan Garcia','Keith Anderson','Darlene Ortiz','Irma Garrett','Arthur Reid','Kristen Stone','Cory Jenkins','Sue Reyes','Jayden Snyder','Carl Snyder','Jonathan Barnes','Brandie Nguyen','Pedro Gibson','Sherri Mcdonalid','Aaron Dixon','Willard Owens','Lois Garrett','Roberta Dean','Derek Gregory','Alberto Hudson','Aubrey Coleman','Scott Mitchell','Karl Williams','Tina Armstrong','Myrtle Cruz','Gertrude Butler','Jeff Chavez','Albert Warren','Beatrice Rivera','Francisco Robertson','Walter Sanchez','Paul Perry','Ramona Watts','Marsha Mcdonalid','Max Jacobs','Eric Patterson','Scarlett Carroll','Rodney Flores','Peter Duncan','Jayden Stephens','Cassandra Nguyen','Ian Burke'*/];

    if(current_locale == 'es'){
        names = ['MoisГ©s JimГ©nez','Arturo Rico','Gonzalo Mora','Edgar Carbonero','JesГєs CedeГ±o','Alberto GarcГ­a','Leonel MartГ­nez','Luis Silva','Fernando RodrГ­guez','Osvaldo GГіmez','Federico SГЎnchez','Francisco OrdoГ±ez','Gustavo Jurado','Daniel GonzГЎlez','Mario FernГЎndez','Santiago Torres','Miguel BenГ­tez','SebastiГЎn Jurado','David Flores','Samuel AscГЎzubi','Julieta PГ©rez','Camila lara','Valeria Quispe','Mariana Rojas','Samantha MuГ±oz','SofГ­a LГіpez','Valentina Salazar','LucГ­a Calvete','Catalina Reyes','Violeta Laguna','Victoria Manzueta','Martina PГЎez','Jimena AlvГ­tez','Sandra Valero','Claudia BГЎrcena','Rosa CalderГіn','Martha Quintero','Paola Rivera','Alejandra Soto','MarГ­a Arias'];
    }
    result = shuffle(names);
    ticker = result;
    tickerUpdate();
}

function tickerUpdate(){

    var header = $('.ticker-title');
    var current_locale = $('#locale').data('value');

    var profits_text, latest_text;
    profits_text = '24h Profits:';
    latest_text = 'Latest WIN:';
    if(current_locale == 'es'){
        profits_text = 'Ganancia en 24h:';
        latest_text = 'Гљltima GANADA:';
    }

    // select element
    var item = ticker[getRandomInt(0,ticker.length-1)],
        h24 = Math.round(getRandomInt(15000,100000)/100,2),
        win = Math.round(getRandomInt(1775,8100)/100,2),
        curr_num = getRandomInt(1,10),
        curr = '$';

    var items = $('.ticker1-item'),
        n = 0;

    if(curr_num >= 6 && curr_num <= 9){
        curr = '€';
    }
    if(curr_num == 10){
        curr = '£';
    }

    if(current_locale == 'es'){
        curr = '$';
    }

    // We remove the strings which are the oldest
    items.each(function(){
        n++;
        if(n > 6 ){
            $(this).remove();
        }
    });

    var newhtml = '<div class="ticker-item ticker1-item">'+item+'<br><strong>'+profits_text+' '+curr+h24+'</strong><br>'+latest_text+' '+curr+win+'</div>';

    header.after(newhtml);


    setTimeout(function(){ tickerUpdate() },getRandomInt(3000,12000));

}
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex ;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}





function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getCookie(name,dflt) {
    var matches = document.cookie.match(new RegExp(
        "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : dflt;
}

function setCookie(name, value, options) {
    options = options || {};

    var expires = options.expires;

    if (typeof expires == "number" && expires) {
        var d = new Date();
        d.setTime(d.getTime() + expires*1000);
        expires = options.expires = d;
    }
    if (expires && expires.toUTCString) {
        options.expires = expires.toUTCString();
    }

    value = encodeURIComponent(value);

    var updatedCookie = name + "=" + value;

    for(var propName in options) {
        updatedCookie += "; " + propName;
        var propValue = options[propName];
        if (propValue !== true) {
            updatedCookie += "=" + propValue;
        }
    }

    document.cookie = updatedCookie;
}


function ExitSplash(params){
    params = params || {};
    params.message = params.message || '';
    params.iframe_url;
    params.url_type = params.url_type || 'static';
    params.extra_desctruction = params.extra_desctruction || function(){};

    PreventExitSplash = false;

    if(params.url_type == 'static'){
        $('a[target!="blank"]').on('click',function(){
            PreventExitSplash=true;
        });
    }
    else{
        $(document).on('click','a[target!="blank"]',function(){
            PreventExitSplash=true;
        });
    }


}
