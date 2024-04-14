//show menu

const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close');

// if navToggle exists, add 'show-menu' class to navMenu
if(navToggle){
    navToggle.addEventListener('click', ()=> {
        navMenu.classList.add('show-menu');
    });
}

// if navClose exists, remove 'show-menu' class from navMenu
if(navClose){
    navClose.addEventListener('click', ()=>{
        navMenu.classList.remove('show-menu');
    });
}