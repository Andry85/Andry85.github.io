<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <title></title>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta name="Description" content="" />
    <meta name="KeyWords" content="" />
    <meta http-equiv="pragma" content="no-cache" />
    <meta http-equiv="cache-control" content="no-cache" />
    <meta name="robots" content="INDEX,FOLLOW" />
    <link rel="shortcut icon" href="#" />
    <link href="css/reset.css" rel="stylesheet" type="text/css" media="all" />
    <link href="css/style.css" rel="stylesheet" type="text/css" media="all" />
    <!--[if lte IE 7]><link rel="stylesheet" type="text/css" href="css/ie7.css"><![endif]-->
    <!--[if IE 8]><link rel="stylesheet" type="text/css" href="css/ie8.css"><![endif]-->
    <?php
$user_agent = $_SERVER['HTTP_USER_AGENT'];
if (stripos($user_agent, 'MSIE 6.0') !== false && stripos($user_agent, 'MSIE 8.0') === false && stripos($user_agent, 'MSIE 7.0') === false) {
   if (!isset($HTTP_COOKIE_VARS["ie"])) {setcookie("ie", "yes", time()+60*60*24*360);header ("Location: ie6/ie6.html");}
}
?>
</head>
<body>
	<div class="wrapper"> 	
    	<div class="page">    
            
            <div class="head">
                <div class="top">
                    <div class="avtorization-outer">
                        <div class="avtoriz">
                            <img src="images/kay.png" width="35" height="31" alt="" title="" />
                            <ul>
                                <li><a href="#" title="">Вход</a><span>|</span></li>
                                <li><a href="#" title="">Регистрация</a></li>
                            </ul>
                             <div class="clear"></div>
                        </div>
                        <div class="avtorization-inner">
                            <form method="post" action="#">
                                <div class="form-innner">
                                    <input class="tx" type="text" value="логин" />
                                    <input class="tx" type="password" value="*********" />
                                    <a href="#" title="">Забыли пароль ?</a>
                                    <input class="submit" type="submit" value="Войти" />
                                    <div class="clear"></div>
                                </div>
                                <div class="member">
                                    <input type="checkbox" />
                                    <label>Запомнить</label>
                                     <div class="clear"></div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div class="clear"></div>
                    <ul class="menu">
                        <li><a href="#" title="">Вакансии</a><span>|</span></li>
                        <li><a href="#" title="">Контакты</a><span>|</span></li>
                        <li><a href="#" title="">Реклама на сайте</a><span>|</span></li>
                        <li><a href="#" title="">Мои варианты</a><span>|</span></li>
                        <li><a href="#" title="">Каталог бизнес-центров</a><span>|</span></li>
                        <li><a href="#" title="">Каталог складских комплексов</a><span>|</span></li>
                        <li><a href="#" title="">Продажа домов в коттеджных посёлках</a></li>
                    </ul>
                </div>
                <div class="head-inner">
                    <a class="logo" href="#" title=""><img src="images/logo.png" width="193" height="53" alt="" title="" /></a>
                    <div class="banner">
                        <a href="#" title=""><img src="images/760-90.jpg" width="760" height="90" alt="" title="" /></a>
                    </div>
                    <div class="clear"></div>
                    <ul id="navi" class="clearfix">
                        <li class="first current"><a href="#" title=""><span>Каталог недвижимости</span></a></li>
                        <li><a href="#" title=""><span>На карте</span></a></li>
                        <li><a href="#" title=""><span>Новостройки и ЖК</span></a></li>
                        <li><a href="#" title=""><span>Дежурные риэлторы</span></a></li>
                        <li><a href="#" title=""><span>Новости и Аналитика</span></a></li>
                        <li class="last"><a href="#" title=""><span>Аукцион</span></a></li>                                                              
                    </ul>   
                </div>
            </div> 
             
             <div class="content">
             	<div class="search-outer">
                	 <form method="post" action="#">
                     	<input class="tex" type="text" value="" />
                        <input class="submit-1" type="submit" value="Найти" />    
                        <div class="clear"></div>
                        <ul class="chek-list">
                        	<li>
                            	<input id="name-1" type="checkbox" />
                                <label for="name-1">загородная</label>
                            </li>
                            <li>
                            	<input id="name-2" type="checkbox" />
                                <label for="name-2">жилая</label>
                            </li>
                            <li>
                            	<input id="name-3" type="checkbox" />
                                <label for="name-3">коммерческая</label>
                            </li>
                            <li>
                            	<input id="name-4" type="checkbox" />
                                <label for="name-4">1-комнатные</label>
                            </li>
                            <li>
                            	<input id="name-5" type="checkbox" />
                                <label for="name-5">2-х комнатные</label>
                            </li>
                        </ul>
                        <div class="clear"></div>
                        <span class="variants"><b>мои варианты</b></span>
                     </form>
                </div>
                <div class="preambule">
                	<div class="left-col">
                    	<div class="poisk-outer">
                        	<div class="tabs">
                            	<div class="tabs-title">	
                                    <ul class="clearfix">
                                        <li id="li-01"><a href="#" title="">Аренда</a><span></span></li>
                                        <li id="li-02" class="activ"><a href="#" title="">Продажа</a><span></span></li>
                                    </ul>  
                                </div>
                                <div class="tab-box">
                                    <form method="post" action="#">
                                        <div class="select-outer">
                                            <div class="select-inner">
                                                <label>Тип недвижимости:</label>
                                                <select name="select">
                                                    <option selected="selected" value="0">Квартиры</option>
                                                    <option value="1">Дома</option>
                                                    <option value="2">Комнаты</option>
                                                    <option value="3">Комнаты-1</option>
                                                    <option value="4">Комнаты-2</option>
                                                </select>
                                            </div>
                                            <div class="select-inner">
                                                <label>Количество комнат:</label>
                                                <input type="text" value="" />
                                            </div>
                                        </div>
                                        <div class="poisk-bottom-bg1">
                                            <div class="poisk-bottom-bg2">
                                                <a href="#" title="">Расширенный поиск</a>
                                                <input class="submit-1" type="submit" value="Найти" /> 
                                                <img class="zoom" src="images/zoom.png" width="55" height="57" alt="" title="" />  
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div class="ban">
                        	<a href="#" title=""><img src="images/240-400.jpg" width="240" height="400" alt="" title="" /></a>
                        </div>
                    </div>
                    <div class="right-col">
                    	<div class="titling">
                        	<dl class="clearfix">
                            	<dt>Спецпредложения:</dt>
                                <dd><a href="#" title="">Коммерческая недвижимость</a></dd>
                                <dd class="curent"><a href="#" title="">Жилая недвижимость</a></dd>
                                <dd><a href="#" title="">Загородная недвижимость</a></dd>
                            </dl>
                        </div>
                        <div class="spez">
                        	<ul>
                            	<li>
                                	<div class="pic">
                                    	<a href="#" title=""><img src="uploads/001.jpg" width="196" height="130" alt="" title="" /></a>
                                        <img class="zoom-small" src="images/zoom-small.png" width="35" height="27" alt="" title="" />
                                    </div>
                                    <div class="more-info">
                                    	<div class="info">
                                        	<p><b>Тип:</b>жилой дом</p>
                                            <p><b>Агентство:</b>“СВОЙ ДОМ”</p>
                                            <p><b>Метро:</b>Полянка</p>
                                        </div>
                                        <div class="firm"><img src="uploads/firms/001.jpg" width="42" height="42" alt="" title="" /></div>
                                        <div class="clear"></div>
                                    </div>
                                    <div class="price-outer">
                                    	<p>Цена:<i>15 295 400</i>руб.</p>
                                        <span>Без комиссии</span>
                                    </div>
                                </li>
                                <li>
                                	<div class="pic">
                                    	<a href="#" title=""><img src="uploads/001.jpg" width="196" height="130" alt="" title="" /></a>
                                        <img class="zoom-small" src="images/zoom-small.png" width="35" height="27" alt="" title="" />
                                    </div>
                                    <div class="more-info">
                                    	<div class="info">
                                        	<p><b>Тип:</b>жилой дом</p>
                                            <p><b>Агентство:</b>“СВОЙ ДОМ”</p>
                                            <p><b>Метро:</b>Полянка</p>
                                        </div>
                                        <div class="firm"><img src="uploads/firms/001.jpg" width="42" height="42" alt="" title="" /></div>
                                        <div class="clear"></div>
                                    </div>
                                    <div class="price-outer">
                                    	<p>Цена:<i>15 295 400</i>руб.</p>
                                        <span>Без комиссии</span>
                                    </div>
                                </li>
                                <li class="last">
                                	<div class="pic">
                                    	<a href="#" title=""><img src="uploads/001.jpg" width="196" height="130" alt="" title="" /></a>
                                        <img class="zoom-small" src="images/zoom-small.png" width="35" height="27" alt="" title="" />
                                    </div>
                                    <div class="more-info">
                                    	<div class="info">
                                        	<p><b>Тип:</b>жилой дом</p>
                                            <p><b>Агентство:</b>“СВОЙ ДОМ”</p>
                                            <p><b>Метро:</b>Полянка</p>
                                        </div>
                                        <div class="firm"><img src="uploads/firms/001.jpg" width="42" height="42" alt="" title="" /></div>
                                        <div class="clear"></div>
                                    </div>
                                    <div class="price-outer">
                                    	<p>Цена:<i>15 295 400</i>руб.</p>
                                        <span>Без комиссии</span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div class="text">
                        	<h2>О нас</h2>
                            <div class="text-inner">
                            	<p>Группа компаний "КОНТИНЕНТ-Недвижимость" — надежный партнер на рынке недвижимости с 1999 года. Более чем десятилетний опыт компании, деловая репутация, команда профессионалов, высокий уровень предоставления услуг, индивидуальный подход к каждому клиенту, бесплатные консультации, ежедневно обновляемый выбор вариантов, качество предлагаемых объектов, — позволяет успешно решать вопросы, связанные с недвижимостью. Подтверждение тому — множество клиентов и владельцев недвижимого имущества, выбравших нас в качестве своего представителя!</p>
                               <dl>
                               		<dt>Нашей специализацией является:</dt>
                                    <dd>аренда и продажа коммерческой недвижимости в Москве и Подмосковье: офисные, складские, производственные, торговые и другие нежилые помещения;</dd>
                                    <dd>продажа, аренда офисов в бизнес-центрах, прямая аренда офиса, аренда офиса без комиссии;</dd>
                                    <dd>аренда и продажа жилой недвижимости в Москве: квартиры, комнаты;</dd>
                                    <dd>аренда и продажа загородной недвижимости в Подмосковье: коттеджи, дома, таун-хаусы;</dd>
                                    <dd>юридическое сопровождение сделок по аренде и купле-продаже жилых и нежилых помещений. </dd>
                               </dl>
                               <p>Агентства "Континент-Недвижимость" и "Хорошие дома" предоставляют полный и выгодный набор агентских и консалтинговых услуг в недвижимости в Москве и Подмосковье:</p>
                               <p>поиск и подбор объектов, арендаторов и покупателей недвижимости;</p>
                               <p>представление интересов клиентов и собственников недвижимости, помощь в ведении переговоров, консультации;</p>
                            </div>
                        </div>
                    </div>
                    <div class="clear"></div>
                </div>
                <div class="real-estate">
                	<div class="titl">
                    	<p>Жилая недвижимость<span>|</span><a href="#" title="">Вся недвижимость...</a></p>
                    </div>
                    <ul class="catalog">
                    	<li>
                        	<div class="hd">
                            	<h4>Жилой дом</h4>
                                <p>горячее предложение</p>
                            </div>
                            <div class="img">
                            	<a href="#" title=""><img src="uploads/002.jpg" width="144" height="95" alt="" title="" /></a>
                            </div>
                            <p class="metro">Метро:<span>Полянка</span></p>
                            <p class="price">Цена:<i>15 295 400</i>руб.</p>
                            <a class="mor" href="#" title=""><span>подробнее...</span></a>
                        </li>
                        <li>
                        	<div class="hd">
                            	<h4>Жилой дом</h4>
                                <p>горячее предложение</p>
                            </div>
                            <div class="img">
                            	<a href="#" title=""><img src="uploads/002.jpg" width="144" height="95" alt="" title="" /></a>
                            </div>
                            <p class="metro">Метро:<span>Полянка</span></p>
                            <p class="price">Цена:<i>15 295 400</i>руб.</p>
                            <a class="mor" href="#" title=""><span>подробнее...</span></a>
                        </li>
                        <li>
                        	<div class="hd">
                            	<h4>Жилой дом</h4>
                                <p>горячее предложение</p>
                            </div>
                            <div class="img">
                            	<a href="#" title=""><img src="uploads/002.jpg" width="144" height="95" alt="" title="" /></a>
                            </div>
                            <p class="metro">Метро:<span>Полянка</span></p>
                            <p class="price">Цена:<i>15 295 400</i>руб.</p>
                            <a class="mor" href="#" title=""><span>подробнее...</span></a>
                        </li>
                        <li>
                        	<div class="hd">
                            	<h4>Жилой дом</h4>
                                <p>горячее предложение</p>
                            </div>
                            <div class="img">
                            	<a href="#" title=""><img src="uploads/002.jpg" width="144" height="95" alt="" title="" /></a>
                            </div>
                            <p class="metro">Метро:<span>Полянка</span></p>
                            <p class="price">Цена:<i>15 295 400</i>руб.</p>
                            <a class="mor" href="#" title=""><span>подробнее...</span></a>
                        </li>
                        <li>
                        	<div class="hd">
                            	<h4>Жилой дом</h4>
                                <p>горячее предложение</p>
                            </div>
                            <div class="img">
                            	<a href="#" title=""><img src="uploads/002.jpg" width="144" height="95" alt="" title="" /></a>
                            </div>
                            <p class="metro">Метро:<span>Полянка</span></p>
                            <p class="price">Цена:<i>15 295 400</i>руб.</p>
                            <a class="mor" href="#" title=""><span>подробнее...</span></a>
                        </li>
                        <li>
                        	<div class="hd">
                            	<h4>Жилой дом</h4>
                                <p>горячее предложение</p>
                            </div>
                            <div class="img">
                            	<a href="#" title=""><img src="uploads/002.jpg" width="144" height="95" alt="" title="" /></a>
                            </div>
                            <p class="metro">Метро:<span>Полянка</span></p>
                            <p class="price">Цена:<i>15 295 400</i>руб.</p>
                            <a class="mor" href="#" title=""><span>подробнее...</span></a>
                        </li>
                    </ul>
                </div>
                <div class="main">
                	<div class="left-part">
                    	<div class="left-part-title">	
                            <div class="reklama">
                                <div class="reklama-titl">
                                    <p>Реклама</p>
                                </div>
                                <a href="#" title=""><img src="images/240-400.jpg" width="240" height="400" alt="" title="" /></a>
                            </div>
                            <div class="news">
                                <div class="news-titl">
                                    <p>Новости<span>|</span><img src="images/arrow.png" width="16" height="10" alt="" title="" /><a href="#" title="">Все новости...</a></p>
                                </div>
                                <div class="news-block">
                                    <span class="date">07 марта</span>
                                    <h4><a href="#" title="">Нам достаточно существующих объемов ввода жилья</a></h4>
                                    <p>В дальнейшем власти Московской области не намерены увеличивать объемы ввода жилья, чиновники считают достаточными темпы строительства.</p>
                                    <a class="morre" href="#" title="">подробнее...</a>
                                </div>
                                <div class="news-block">
                                    <span class="date">07 марта</span>
                                    <h4><a href="#" title="">Нам достаточно существующих объемов ввода жилья</a></h4>
                                    <p>В дальнейшем власти Московской области не намерены увеличивать объемы ввода жилья, чиновники считают достаточными темпы строительства.</p>
                                    <a class="morre" href="#" title="">подробнее...</a>
                                </div>
                                <div class="news-block">
                                    <span class="date">07 марта</span>
                                    <h4><a href="#" title="">Нам достаточно существующих объемов ввода жилья</a></h4>
                                    <p>В дальнейшем власти Московской области не намерены увеличивать объемы ввода жилья, чиновники считают достаточными темпы строительства.</p>
                                    <a class="morre" href="#" title="">подробнее...</a>
                                </div>
                                <div class="news-block">
                                    <span class="date">07 марта</span>
                                    <h4><a href="#" title="">Нам достаточно существующих объемов ввода жилья</a></h4>
                                    <p>В дальнейшем власти Московской области не намерены увеличивать объемы ввода жилья, чиновники считают достаточными темпы строительства.</p>
                                    <a class="morre" href="#" title="">подробнее...</a>
                                </div>
                            </div>
                        	<div class="clear"></div>
                        </div>
                        <div class="articles border-rad">
                        	<div class="news-titl">
                            	<p>Статьи<span>|</span><img src="images/arrow.png" width="16" height="10" alt="" title="" /><a href="#" title="">Все статьи...</a></p>
                            </div>
                            <ul class="clearfix articl-list">
                            	<li>
                                	<span class="date">07 марта</span>
                                    <a href="#" title="">Элитный рынок московского жилья подошел к своему концу</a>
                                </li>
                                <li>
                                	<span class="date">07 марта</span>
                                    <a href="#" title="">Элитный рынок московского жилья подошел к своему концу</a>
                                </li>
                                <li>
                                	<span class="date">07 марта</span>
                                    <a href="#" title="">Элитный рынок московского жилья подошел к своему концу</a>
                                </li>
                                <li>
                                	<span class="date">07 марта</span>
                                    <a href="#" title="">Элитный рынок московского жилья подошел к своему концу</a>
                                </li>
                                <li>
                                	<span class="date">07 марта</span>
                                    <a href="#" title="">Элитный рынок московского жилья подошел к своему концу</a>
                                </li>
                                <li>
                                	<span class="date">07 марта</span>
                                    <a href="#" title="">Элитный рынок московского жилья подошел к своему концу</a>
                                </li>
                            </ul>
                        </div>
                        <div class="events border-rad">
                        	<div class="news-titl">
                            	<p>События на рынке недвижимости<span>|</span><img src="images/arrow.png" width="16" height="10" alt="" title="" /><a href="#" title="">Читать все...</a></p>
                            </div>
                            <ul class="event-list">
                            	<li class="clearfix">
                                	<a href="#" title=""><img src="uploads/003.jpg" width="70" height="53" alt="" title="" /></a>
                                    <span class="date">07 марта</span>
                                    <p>Элитный рынок московского жилья подошел к своему концу Случилось то, что предсказывали многие аналитики рынка — в Москве почти перестали строить элитное жилье, и рынок подошел…</p>
                                </li>
                                <li class="last clearfix">
                                	<a href="#" title=""><img src="uploads/003.jpg" width="70" height="53" alt="" title="" /></a>
                                    <span class="date">07 марта</span>
                                    <p>Элитный рынок московского жилья подошел к своему концу Случилось то, что предсказывали многие аналитики рынка — в Москве почти перестали строить элитное жилье, и рынок подошел…</p>
                                </li>
                            </ul>
                        </div>
                        <div class="menegers border-rad">
                        	<h3>Наши менеджеры</h3>
                            <ul class="list-manager">
                            	<li>
                                	<h4><a href="#" title="">Ирина</a></h4>
                                    <div class="foto">
                                    	<a href="#" title=""><img src="uploads/004.jpg" width="93" height="86" alt="" title="" /></a>
                                    </div>
                                    <p class="phone">(495) 123-45-67</p>
                                    <p class="icq">1861684868444</p>
                                </li>
                                <li>
                                	<h4><a href="#" title="">Ирина</a></h4>
                                    <div class="foto">
                                    	<a href="#" title=""><img src="uploads/004.jpg" width="93" height="86" alt="" title="" /></a>
                                    </div>
                                    <p class="phone">(495) 123-45-67</p>
                                    <p class="icq">1861684868444</p>
                                </li>
                                <li>
                                	<h4><a href="#" title="">Ирина</a></h4>
                                    <div class="foto">
                                    	<a href="#" title=""><img src="uploads/004.jpg" width="93" height="86" alt="" title="" /></a>
                                    </div>
                                    <p class="phone">(495) 123-45-67</p>
                                    <p class="icq">1861684868444</p>
                                </li>
                                <li>
                                	<h4><a href="#" title="">Ирина</a></h4>
                                    <div class="foto">
                                    	<a href="#" title=""><img src="uploads/004.jpg" width="93" height="86" alt="" title="" /></a>
                                    </div>
                                    <p class="phone">(495) 123-45-67</p>
                                    <p class="icq">1861684868444</p>
                                </li>
                                <li>
                                	<h4><a href="#" title="">Ирина</a></h4>
                                    <div class="foto">
                                    	<a href="#" title=""><img src="uploads/004.jpg" width="93" height="86" alt="" title="" /></a>
                                    </div>
                                    <p class="phone">(495) 123-45-67</p>
                                    <p class="icq">1861684868444</p>
                                </li>
                                <li>
                                	<h4><a href="#" title="">Ирина</a></h4>
                                    <div class="foto">
                                    	<a href="#" title=""><img src="uploads/004.jpg" width="93" height="86" alt="" title="" /></a>
                                    </div>
                                    <p class="phone">(495) 123-45-67</p>
                                    <p class="icq">1861684868444</p>
                                </li>
                            </ul>
                        </div>
                        <div class="block border-rad">
                        	<img src="uploads/005.jpg" width="168" height="156" alt="" title="" />
                            <h3>Недвижимость на карте</h3>
                            <p>Все предложения из базы объявлений «купить недвижимость» и «снять недвижимость» можно просмотреть на карте Москвы и других городов России.</p>
                            <p>Вместе с объектами из базы жилья на карте отображаются элементы как жилой инфраструктуры – детские сады и школы, медцентры и магазины, так и объекты коммерческой недвижимости – банки и бизнес-центры, кафе и кинотеатры.</p>
                            <div class="clear"></div>
                        </div>
                        <div class="proposal border-rad">
                        	<div class="heading">
                            	<table cellpadding="0" cellspacing="0">
                                	<tr>
                                    	<th width="59"><span>Фото</span></th>
                                        <th width="211"><span class="sp-1">Адрес</span></th>
                                        <th width="153"><span class="sp-2">Кол-во комнат</span></th>
                                        <th width="120"><span class="sp-3">Цена</span></th>
                                        <th width="105"><span class="sp-4">От кого</span></th>
                                    </tr>
                                </table>
                            </div>
                            <div class="proposal-inner">
                            	<table cellpadding="0" cellspacing="0">
                                	<tr>
                                    	<td width="92"><a href="#" title=""><img src="uploads/006.jpg" width="74" height="54" alt="" title="" /></a></td>
                                        <td width="258">
                                        	<div class="in">
                                            	<p>Москва СВАО Бутырский</p>
                                                <p>Хуторская 2-я ул</p>
                                                <p>Дмитровскаядо 5 минут пешком</p>
                                            </div>
                                        </td>
                                        <td width="100"><p class="col">4</p></td>
                                        <td width="126"><p class="pr">8 500 р. в год</p></td>
                                        <td width="89"><p class="from">Частное лицо</p></td>
                                    </tr>
                                    <tr>
                                    	<td><a href="#" title=""><img src="uploads/006.jpg" width="74" height="54" alt="" title="" /></a></td>
                                        <td>
                                        	<div class="in">
                                            	<p>Москва СВАО Бутырский</p>
                                                <p>Хуторская 2-я ул</p>
                                                <p>Дмитровскаядо 5 минут пешком</p>
                                            </div>
                                        </td>
                                        <td><p class="col">4</p></td>
                                        <td><p class="pr">8 500 р. в год</p></td>
                                        <td><p class="from">Частное лицо</p></td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div class="right-part">
                    	<div class="reklama">
                        	<div class="reklama-titl">
                            	<p>Реклама</p>
                            </div>
                            <a href="#" title=""><img src="images/240-400.jpg" width="240" height="400" alt="" title="" /></a>   
                        </div>
                        <div class="small-ban">
                            <a href="#" title=""><img src="images/240-200.jpg" width="240" height="200" alt="" title="" /></a>
                        </div>
                        <div class="reklama">
                        	<div class="reklama-titl">
                            	<p>Заголовок</p>
                            </div>
                            <div class="kat">
                            	<ul>
                                	<li>
                                    	<a href="#" title=""><img src="uploads/007.jpg" width="194" height="128" alt="" title="" /></a>
                                        <p class="metro"><span>Метро:</span>Полянка</p>
                                        <p class="cena">Цена:<i>15 295 400</i>руб.</p>
                                    </li>
                                    <li>
                                    	<a href="#" title=""><img src="uploads/007.jpg" width="194" height="128" alt="" title="" /></a>
                                        <p class="metro"><span>Метро:</span>Полянка</p>
                                        <p class="cena">Цена:<i>15 295 400</i>руб.</p>
                                    </li>
                                    <li>
                                    	<a href="#" title=""><img src="uploads/007.jpg" width="194" height="128" alt="" title="" /></a>
                                        <p class="metro"><span>Метро:</span>Полянка</p>
                                        <p class="cena">Цена:<i>15 295 400</i>руб.</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="small-ban">
                            <a href="#" title=""><img src="images/240-200.jpg" width="240" height="200" alt="" title="" /></a>
                        </div>
                    </div>
                    <div class="clear"></div>
                </div>            
             </div>  
             <div class="footer">
                <div class="footer-main">
                	<div class="footer-left">
                    	<div class="meter">
                        	<a href="#" title=""><img src="images/meter-1.gif" width="88" height="31" alt="" title="" /></a>
                            <a href="#" title=""><img src="images/meter-2.gif" width="31" height="31" alt="" title="" /></a>
                        </div>
                        <p class="copy">2012 ООО «САЙТ.РУ» </p>
                    </div>
                    <div class="footer-right">
                    	<dl class="dl-1">
                        	<dt>Недвижимость</dt>
                            <dd><a href="#" title="">Снять квартиру</a></dd>
                            <dd><a href="#" title="">Сдать квартиру</a></dd>
                            <dd><a href="#" title="">Купить квартиру</a></dd>
                            <dd><a href="#" title="">Продать квартиру</a></dd>
                            <dd><a href="#" title="">Обменять недвижимость</a></dd>
                            <dd><a href="#" title="">Аренда посуточно</a></dd>
                        </dl>
                        <dl class="dl-2">
                        	<dt>Сервисы</dt>
                            <dd><a href="#" title="">Недвижимость на карте</a></dd>
                            <dd><a href="#" title="">Аукцион</a></dd>
                            <dd><a href="#" title="">Фото домов</a></dd>
                            <dd><a href="#" title="">Улицы Москвы</a></dd>
                            <dd><a href="#" title="">Метрополитен</a></dd>
                            <dd><a href="#" title="">Улицы МО</a></dd>
                        </dl>
                        <dl class="dl-3">
                        	<dt>Информация</dt>
                            <dd><a href="#" title="">Форум</a></dd>
                            <dd><a href="#" title="">Полезная информация</a></dd>
                            <dd><a href="#" title="">Агентства недвижимости</a></dd>
                            <dd><a href="#" title="">Обзор прессы</a></dd>
                            <dd><a href="#" title="">Помощь</a></dd>
                        </dl>
                        <dl class="dl-4">
                        	<dt>Сотрудничество</dt>
                            <dd><a href="#" title="">О компании</a></dd>
                            <dd><a href="#" title="">Информационные партнеры</a></dd>
                            <dd><a href="#" title="">Реклама</a></dd>
                            <dd><a href="#" title="">Обратная связь</a></dd>
                            <dd><a href="#" title="">Семинары</a></dd>
                        </dl>
                        <div class="clear"></div>
                    </div>
                    <div class="clear"></div>
                </div>
            </div>  
    	</div>     
    </div>  
</body>
</html>