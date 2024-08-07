
// Core de Swiper y estilos
import Swiper from 'swiper';
import 'swiper/css';
// Módulo Navigation de Swiper y estilos
import { Navigation } from "swiper/modules";
import "swiper/css/navigation";

// Configurar Swiper
const swiper = new Swiper(".swiper", {
    modules: [Navigation], // definir los módulos a usar
    loop: true,            // definir si los slides estarán en bucle
    slidesPerView: 3,      // agregar número de slides para la pantalla
    spaceBetween: 20,      // separación entre slides en px
    navigation: {          // definir botones next y prev para el módulo Navigation
    prevEl: ".swiper-button-prev",
    nextEl: ".swiper-button-next",
    
    }
});

const swiperMobileProjects = new Swiper(".swipper_mobile_projects",{
    modules: [Navigation], // definir los módulos a usar
    loop: true,            // definir si los slides estarán en bucle
    slidesPerView: 1,      // agregar número de slides para la pantalla
    spaceBetween: 20,      // separación entre slides en px
    navigation: {          // definir botones next y prev para el módulo Navigation
    prevEl: ".swiper-button-prev",
    nextEl: ".swiper-button-next",
    }   
})
const swiper2 = new Swiper(".swiper2", {
    modules: [Navigation], // definir los módulos a usar
    loop: true,            // definir si los slides estarán en bucle
    slidesPerView: 1,      // agregar número de slides para la pantalla
    spaceBetween: 20,      // separación entre slides en px
    navigation: {          // definir botones next y prev para el módulo Navigation
    prevEl: ".swiper-button-prev",
    nextEl: ".swiper-button-next",
    
    }
});
