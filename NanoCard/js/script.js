window.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.querySelector('.hamburger');
  const menu = document.querySelector('.menu-items');
  const menuItem = document.querySelectorAll('.menu_item');

  const modal = document.querySelector('.modal');
  const overlay = document.querySelector('.overlay');
  const buttons = document.querySelectorAll('.order');
  const modalClose = document.querySelector('.modal__close');

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('menu_active');
    menu.classList.toggle('menu-items_active');
  });

  menuItem.forEach((item) => {
    item.addEventListener('click', () => {
      hamburger.classList.toggle('menu_active');
      menu.classList.toggle('menu-items_active');
    });
  });

  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      modal.classList.add('modal__active');
      overlay.classList.add('modal__active');
    });
  });

  modalClose.addEventListener('click', () => {
    modal.classList.remove('modal__active');
    overlay.classList.remove('modal__active');
  });
});

