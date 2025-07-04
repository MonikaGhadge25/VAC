let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

window.onscroll = () =>{
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
}

var typed = new Typed('.multiple-text', {
    strings: ['Software Developer','Backend Developer', 'Data Analyst'],
    typeSpeed: 50,
    backSpeed: 50,
    backDelay: 1000,
    loop: true
});