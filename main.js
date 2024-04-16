/**
 * Toggles the visibility of the navigation menu when the toggle button is clicked.
 */
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close');

// if navToggle exists, add 'show-menu' class to navMenu
if(navToggle){
    navToggle.addEventListener('click', ()=> {
        console.log('clicked showmenu');
        navMenu.classList.add('show-menu');
    });
}

// if navClose exists, remove 'show-menu' class from navMenu
if(navClose){
    navClose.addEventListener('click', ()=>{
        console.log('clicked hidemenu');
        navMenu.classList.remove('show-menu');
    });
}

/**
 *  Removes the 'show-menu' class from the navigation menu when any navigation link is clicked.
 * This function is intended for mobile views where the menu should hide after a selection is made.
 */
const navLink = document.querySelectorAll('.nav__link');

const linkAction = () => {
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.remove('show-menu');
}
navLink.forEach(item => item.addEventListener('click', linkAction));

/**
 * Changes the background of the header based on the scroll position of the window.
 * Adds 'shadow-header' class to header if window is scrolled more than 50 viewport height.
 */
const shadowHeader = () => {
    const header = document.getElementById('header');
    this.scrollY >= 50 ? header.classList.add('shadow-header'):header.classList.remove('shadow-header');
}
window.addEventListener('scroll', shadowHeader);