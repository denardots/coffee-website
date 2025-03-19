"use strict";

import Swiper from "swiper";
import {Navigation, Pagination} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./css/style.css";

const header = document.getElementById("header");
const nav = document.getElementById("nav");
const menuCloseButton = document.getElementById("menuCloseButton");
const menuOpenButton = document.getElementById("menuOpenButton");
const navLinks = document.querySelectorAll(".header__nav__list__link");

// Listener para abrir el menú
menuOpenButton.addEventListener("click", () => {
  nav.classList.toggle("header__nav--active");
  header.classList.toggle("header--inactive");
});

// Listener para cerrar el menú
menuCloseButton.addEventListener("click", () => menuOpenButton.click());

// Listener para cerrar el menú al hacer clic en un enlace
navLinks.forEach(link => link.addEventListener("click", () => menuOpenButton.click()));

// Instanciamos la clase Swiper y la configuramos para el slider
const swiper = new Swiper(".swiper", {
  // Agregamos los modulos de Navegación y Paginación
  modules: [Navigation, Pagination],
  // Definimos el modo de deslizar
  loop: true,
  grabCursor: true,
  // Definimos la paginación
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true
  },
  // Definimos los botones de navegación
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
  // Definimos la cantidad de slides por pantalla
  breakpoints: {
    0: {
      slidesPerView: 1
    },
    700: {
      slidesPerView: 2
    },
    1024: {
      slidesPerView: 3
    }
  }
});

// Definimos el espacio entre los slides
swiper.spacesBetween = 25;