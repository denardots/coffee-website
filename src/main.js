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

// Listener para controlar el menú
menuOpenButton.addEventListener("click", () => {
  nav.classList.toggle("header__nav--active");
  header.classList.toggle("header--inactive");
  menuOpenButton.classList.toggle("header__button--inactive");
});

// Listener para cerrar el menú
menuCloseButton.addEventListener("click", () => menuOpenButton.click());

// Listener para cerrar el menú al hacer clic en un enlace
navLinks.forEach(link => link.addEventListener("click", () => menuOpenButton.click()));

// Instancia de la clase Swiper y configuración de slider
const swiper = new Swiper(".swiper", {
  // Agregar los modulos de Navegación y Paginación
  modules: [Navigation, Pagination],
  // Definir el modo de deslización
  loop: true,
  grabCursor: true,
  // Configuración de la paginación
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true
  },
  // Centrar la paginación
  initialSlide: (navLinks.length / 2) - 1,
  // Botones de navegación
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
  // Configuración de la cantidad de slides por pantalla
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

// Espaciado entre los slides
swiper.spacesBetween = 25;