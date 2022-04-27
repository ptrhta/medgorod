<?php include "header.php"; ?>

<main class="main">
    <div class="main-header">
        <div class="container">
            <div class="breadcrumbs main__breadcrumbs row">
                <a href="#" class="breadcrumbs__back"></a>
                <a href="#" class="breadcrumbs__link">Главная</a>
                <span class="divider"></span>
                <a href="#" class="breadcrumbs__link">Акции</a>
            </div>

            <h1 class="main__title title">Акции и спецпредложения</h1>
            <p class="main__descr">В данном разделе представлены акции от сети клиник «Медгород», представленная здесь информация полностью актуальна.</p>
            <img src="/assets/header-bg.svg" alt="" class="main-header__bg">
        </div>
    </div>

    <div class="main__content">
        <div class="container">
            <section class="slider swiper"  data-slick='{"slidesToShow": 1, autoSlidesToShow: true, autoplay: true, autoplaySpeed: 2000, }'>
                <?
                    require_once("./slider.php");
                ?>
                <div class="swiper-wrapper">
                    <? foreach ($slider as $slide) { ?>
                        <div class="slider__slide swiper-slide slide row">
                            <div class="slide__container">
                                <p class="slide__label">Акция</p>

                                <h2 class="slide__title"><?=$slide["title"]?></h2>
                                <? if ($slide["subtitle"]) { ?>
                                    <p class="slide__title slide__subtitle"><?=$slide["subtitle"]?></p>
                                <? } ?>

                                <? if ($slide["price"]) { ?>
                                    <div class="slide__price-wrap">
                                        <? if ($slide["oldPrice"]) { ?>
                                            <div class="slide__oldPrice-row row row--between">
                                                <p class="slide__oldPrice oldPrice"><?=$slide["price"]?> руб.</p>
                                                <span class="slide__discount">-<?=$slide["sale"]?></span>
                                            </div>
                                        <? } ?>

                                        <p class="slide__price price"><?=$slide["price"]?> руб.</p>
                                    </div>
                                <? } ?>

                                <p class="slide__active">Акция действует до <?=$slide["saleDate"]?> г.</p>

                                <div class="slide__btns row">
                                    <button class="btn slide__btn">Записаться</button>
                                    <a href="#" class="btn btn--dark">Подробнее</a>
                                </div>

                            </div>
                            <img src="<?=$slide["img"]?>" class="slide__img" alt="<?=$slide["title"]?>">
                        </div>
                    <? } ?>
                </div>
            </section>
        </div>
    </div>
</main>

<?php include "footer.php"; ?>