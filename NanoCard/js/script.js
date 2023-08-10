window.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.querySelector('.hamburger');
  const menu = document.querySelector('.menu-items');
  const menuItem = document.querySelectorAll('.menu_item');

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
});

