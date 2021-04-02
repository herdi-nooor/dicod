window.addEventListener('scroll', function(){
    var header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0);
})

const menuToggle = document.querySelector('.menu-togle input');
let nav = document.querySelector('nav ul');

menuToggle.addEventListener('click', function () { 
    nav.classList.toggle('slide');
});

const toggleMenu = document.querySelectorAll('a.slideHide').forEach(item => {
    item.addEventListener('click', event => {
        nav.classList.toggle('slide');
        menuToggle.checked = false;
    })
});

// console.log(toggleMenu);

// toggleMenu.addEventListener('click', event => { 
//     console.log("klikk");
// });

// let width = (window.innerWidth > 0) ? window.innerWidth : screen.width;



