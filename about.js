// // Display mobile menu
const hamburger = document.getElementById('hamburger');
const menu = document.getElementById('desktop-nav');
const menuItems = document.querySelector('.close-menu');

function openMenu() {
  hamburger.classList.toggle('fa-xmark');
  menu.classList.toggle('show');
  document.body.style.overflow = document.body.style.overflow === 'hidden' ? 'auto' : 'hidden';
}

function closeMenu() {
  hamburger.classList.replace('fa-xmark', 'fa-bars');
  menu.classList.replace('show', 'hide');
  document.body.style.overflow = document.body.style.overflow === 'hidden' ? 'auto' : 'auto';
}

hamburger.addEventListener('click', openMenu);
menuItems.addEventListener('click', closeMenu);
