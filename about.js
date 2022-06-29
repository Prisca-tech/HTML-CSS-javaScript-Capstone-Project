// // Display mobile menu
const hamburger = document.getElementById('hamburger');
const menu = document.getElementById('desktop-nav')
const menuItems = document.querySelector('#close-menu');

function openMenu() {
  hamburger.classList.toggle('fa-xmark');
  menu.classList.toggle('show');
}

function closeMenu() {
  hamburger.classList.replace('fa-xmark', 'fa-bars');
  menu.classList.replace('show');
}

hamburger.addEventListener('click', openMenu);
menuItems.addEventListener('click', closeMenu);
