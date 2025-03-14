import Swiper from "swiper";
import {Navigation, Pagination} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const header = document.getElementById("header");
const nav = document.getElementById("nav");
const menuCloseButton = document.getElementById("menuCloseButton");
const menuOpenButton = document.getElementById("menuOpenButton");
const navLinks = document.querySelectorAll(".header__nav__list__link");

menuOpenButton.addEventListener("click", () => {
  nav.classList.toggle("header__nav--active");
  header.classList.toggle("header--inactive");
});

menuCloseButton.addEventListener("click", () => menuOpenButton.click());

navLinks.forEach(link => link.addEventListener("click", () => menuOpenButton.click()));

// eslint-disable-next-line no-unused-vars
const swiper = new Swiper(".swiper", {
  modules: [Navigation, Pagination],
  loop: true,
  grabCursor: true,
  spacesBetween: 25,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
  breakpoints: {
    0: {
      slidesPerView: 1
    },
    768: {
      slidesPerView: 2
    },
    1024: {
      slidesPerView: 3
    }
  }
});