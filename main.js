//*show menu

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


//* Remove menu for mobile
const navLink = document.querySelectorAll('.nav__link');

const linkAction = () => {
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.remove('show-menu');
}
navLink.forEach(navlink => navlink.addEventListener('click', linkAction));


//*change background header
const scrollHeader = () => {
    const header = document.getElementById('header');
    this.scrollY >= 50 ? header.classList.add('scroll-header'):header.classList.remove('scroll-header');
}