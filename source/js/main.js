const buttonOpen = document.querySelector('.pay__methods-btn');
const menuOpen = document.querySelector('.pay__methods-list');

buttonOpen.addEventListener('click', function () {
  menuOpen.classList.toggle('pay__methods-list--show');
})
