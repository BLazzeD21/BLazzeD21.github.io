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

const smoothLinks = document.querySelectorAll('a[href^="#"]');
for (const smoothLink of smoothLinks) {
  smoothLink.addEventListener('click', function(e) {
    e.preventDefault();
    const id = smoothLink.getAttribute('href');

    document.querySelector(id).scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  });
};

const counter = document.querySelectorAll('.skills__ratings-counter');
const lines = document.querySelectorAll('.skills__ratings-line span');

counter.forEach((item, i) => {
  lines[i].style.width = item.innerHTML;
});
