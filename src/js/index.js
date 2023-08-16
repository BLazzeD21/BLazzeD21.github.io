const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');
const close = document.querySelector('.menu__close');
const socialItems = document.querySelectorAll('.menu_social_link');
const itemsOfMenu = document.querySelectorAll('.menu__link');


const openMenu = (button) => {
  button.addEventListener('click', () => {
    menu.classList.add('active');
    hamburger.classList.add('visible');
  });
};

const closeMenu = (button) => {
  button.addEventListener('click', () => {
    menu.classList.remove('active');
    hamburger.classList.remove('visible');
  });
};

const openLinks = (items) => {
  items.forEach((item) => {
    item.addEventListener('click', () => {
      menu.classList.remove('active');
      hamburger.classList.remove('visible');
    });
  });
};

openMenu(hamburger);
closeMenu(close);
openLinks(socialItems);
openLinks(itemsOfMenu);

