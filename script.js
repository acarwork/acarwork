const burger = document.querySelector('.burger');
const menu = document.querySelector('nav ul');

burger.addEventListener('click', () => {
  menu.classList.toggle('show');
});
