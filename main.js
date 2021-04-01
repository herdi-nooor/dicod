window.addEventListener('scroll', function(){
    var header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0);
})

const menuToggle = document.querySelector('.menu-togle input');
const nav = document.querySelector('nav ul');

menuToggle.addEventListener('click', function () { 
    nav.classList.toggle('slide');
});

let width = (window.innerWidth > 0) ? window.innerWidth : screen.width;



