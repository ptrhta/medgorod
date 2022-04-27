document.addEventListener("DOMContentLoaded", function () {
  "use strict";

  const slider = document.querySelector(".slider");

  if (slider) {
    const swiper = new Swiper(slider, {
      loop: true,
      speed: 500,
      autoplay: {
        delay: 3500,
        disableOnInteraction: false,
      },
    });
  }

  const isMobile = {
    Android: function () {
      return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function () {
      return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function () {
      return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function () {
      return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function () {
      return navigator.userAgent.match(/IEMobile/i);
    },
    any: function () {
      return (
        isMobile.Android() ||
        isMobile.BlackBerry() ||
        isMobile.iOS() ||
        isMobile.Opera() ||
        isMobile.Windows()
      );
    },
  };
  if (isMobile.any()) {
    document.querySelector("body").classList.add("_touch");
    let menuArrows = document.querySelectorAll(".menu__arrow");
    if (menuArrows.length > 0) {
      for (let index = 0; index < menuArrows.length; index++) {
        const menuArrow = menuArrows[index];
        menuArrow.addEventListener("click", function (e) {
          menuArrow.parentElement.classList.toggle("_active");
        });
      }
    }
  } else {
    document.querySelector("body").classList.add("_pc");
  }
  const iconMenu = document.querySelector(".menu__icon");
  const menuBody = document.querySelector(".menu__body");
  const menuRowBottom = document.querySelector(".header-bottom__left");
  const header = document.querySelector(".header");
  if (iconMenu) {
    iconMenu.addEventListener("click", function (e) {
      document.body.classList.toggle("_lock");
      iconMenu.classList.toggle("_active");
      menuBody.classList.toggle("_active");
      menuRowBottom.classList.toggle("header-bottom__left--active");
      header.classList.toggle("header--active");
    });
  }
  const menuLinks = document.querySelectorAll(".menu__link[data-goto]");
  if (menuLinks.length > 0) {
    menuLinks.forEach((menuLink) => {
      menuLink.addEventListener("click", onMenuLinkClick);
    });

    function onMenuLinkClick(e) {
      const menuLink = e.target;
      if (
        menuLink.dataset.goto &&
        document.querySelector(menuLink.dataset.goto)
      ) {
        const gotoBlock = document.querySelector(menuLink.dataset.goto);
        const gotoBlockValue =
          gotoBlock.getBoundingClientRect().top +
          pageYOffset -
          document.querySelector(".header").offsetHeight;
        if (iconMenu.classList.contains("_active")) {
          document.body.classList.remove("_lock");
          iconMenu.classList.remove("_active");
          menuBody.classList.remove("_active");
          menuRowBottom.classList.remove("header-bottom__left--active");
          header.classList.remove("header--active");
          if (
            menuBody.dataset.sub_menu_auto_close &&
            document.body.classList.contains("_touch")
          ) {
            let menuArrows = document.querySelectorAll(".menu__arrow");
            for (let index = 0; index < menuArrows.length; index++) {
              menuArrows[index].parentElement.classList.remove("_active");
            }
          }
        }
        window.scrollTo({
          top: gotoBlockValue,
          behavior: "smooth",
        });
        e.preventDefault();
      }
    }
  }
});
