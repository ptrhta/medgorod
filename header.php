<!DOCTYPE html>
<html lang="ru">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta name="robots" content="noindex">
    <title>МЕДГОРОД</title>
    <link rel="icon" href="/favicon.ico" type="image/x-icon">
    <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon">
    <link rel="stylesheet" href="./dist/reset.css">
    <link rel="stylesheet" href="./dist/fonts/ProximaNova/stylesheet.css">
    <link rel="stylesheet" href="https://unpkg.com/swiper@8/swiper-bundle.min.css" />
    <link rel="stylesheet" href="./dist/css/style.css">
</head>

<body>
    <header class="header">
        <div class="header-top">
            <div class="container row row--between">
                <div class="row header-top__row">
                    <a href="/"><img src="/assets/full-logo.svg" alt="МЕДГОРОД" class="header__logo"></a>
                    <div class="header-geo col">
                        <p class="header-geo__city">Москва</p>
                        <p class="header-geo__near">7 клиник <span class="grey">рядом с Вами!</span></p>
                    </div>
                </div>

                <div class="header-contacts col">
                    <p class="header-contacts__title">Запись на приём</p>
                    <div class="row header-contacts__links">
                        <a href="#" class="header-contacts__link">
                            <img src="/assets/telegram-icon.svg" alt="Telegram" class="header-contacts__icon">
                        </a>
                        <a href="#" class="header-contacts__link">
                            <img src="/assets/viber-icon.svg" alt="Viber" class="header-contacts__icon">
                        </a>
                        <a href="#" class="header-contacts__link">
                            <img src="/assets/wp-icon.svg" alt="WhatsApp" class="header-contacts__icon">
                        </a>
                        <a href="tel:+74955404803" class="header-contacts__phone">8 (495) 540-48-03</a>
                    </div>
                    <a href="mailto:medgorod@bk.ru" class="header-contacts__mail">medgorod@bk.ru</a>
                </div>
            </div>

        </div>

        <div class="header-bottom">
            <div class="container row row--between">
                <div class="header-bottom__left row">
                    <a href="/" class="header-bottom__home"><img src="/assets/home-icon.svg" alt="МЕДГОРОД"></a>

                    <div class="menu__icon">
                        <span></span>
                    </div>

                    <nav class="menu__body">
                        <ul class="menu__list">
						    <li>
                                <a href="#" class="menu__link menu__link--parent">Услуги</a>
				                <ul class="menu__sub-list">
							        <li><a href="/" class="menu__sub-link">Ссылка</a></li>
                                    <li><a href="/" class="menu__sub-link">Ссылка</a></li>
                                    <li><a href="/" class="menu__sub-link">Ссылка</a></li>
                                </ul>
                            </li>		
		
							<li><a href="#" class="menu__link">О клинике</a></li>
                            <li><a href="#" class="menu__link">Врачи</a></li>
                            <li><a href="#" class="menu__link">Цены</a></li>
                            <li><a href="#" class="menu__link">Отзывы</a></li>
                            <li><a href="#" class="menu__link">Акции</a></li>
                            <li><a href="#" class="menu__link menu__link--last">Клиники</a></li>
                        </ul>
                    </nav>
                </div>
               
                  <div class="header-bottom__right row">
                    <button class="search-btn"></button>
                    <button class="btn">Обратный звонок</button>
                </div>
            </div>
        </div>
    </header>