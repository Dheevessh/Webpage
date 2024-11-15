document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Setup
    const menu = document.querySelector('#mobile-menu');
    const menuLinks = document.querySelector('.navbar__menu');
    const navLogo = document.querySelector('#navbar__logo');
  
    // Display Mobile Menu
    const mobileMenu = () => {
        menu.classList.toggle('is-active');
        menuLinks.classList.toggle('active');
    };
  
    menu.addEventListener('click', mobileMenu);
  
    // Show active menu when scrolling
    const highlightMenu = () => {
        const elem = document.querySelector('.highlight');
        const homeMenu = document.querySelector('#home-page');
        const aboutMenu = document.querySelector('#about-page');
        const servicesMenu = document.querySelector('#services-page');
        let scrollPos = window.scrollY;
  
        // Adds 'highlight' class to menu items based on scroll position
        if (window.innerWidth > 960 && scrollPos < 600) {
            homeMenu.classList.add('highlight');
            aboutMenu.classList.remove('highlight');
            servicesMenu.classList.remove('highlight');
        } else if (window.innerWidth > 960 && scrollPos < 1400) {
            aboutMenu.classList.add('highlight');
            homeMenu.classList.remove('highlight');
            servicesMenu.classList.remove('highlight');
        } else if (window.innerWidth > 960 && scrollPos < 2345) {
            servicesMenu.classList.add('highlight');
            aboutMenu.classList.remove('highlight');
            homeMenu.classList.remove('highlight');
        } else if (elem && (window.innerWidth < 960 || scrollPos >= 2345)) {
            elem.classList.remove('highlight');
        }
    };
  
    window.addEventListener('scroll', highlightMenu);
    window.addEventListener('click', highlightMenu);
  
    // Close mobile menu when clicking on a menu item
    const hideMobileMenu = () => {
        const menuBars = document.querySelector('.is-active');
        if (window.innerWidth <= 768 && menuBars) {
            menu.classList.remove('is-active');
            menuLinks.classList.remove('active');
        }
    };
  
    menuLinks.addEventListener('click', hideMobileMenu);
    navLogo.addEventListener('click', hideMobileMenu);
  
    // Slideshow Effect
    const slides = document.querySelectorAll('.slide');
    let currentSlide = 0;

    function showNextSlide() {
        slides[currentSlide].classList.remove('active');
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].classList.add('active');
    }

    setInterval(showNextSlide, 3000);
  
});
