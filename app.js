// pure JS for hamburger menu
const menuBtn = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.mobile-nav');
const bodyElement = document.querySelector('body');

menuBtn.addEventListener('click', () => {
  menuBtn.classList.toggle('active');
  mobileMenu.classList.toggle('active');
  bodyElement.classList.toggle('active');
});

//close navigation menu when click on window
document.addEventListener('click', (clickEvent) => {
  if (clickEvent.target.id !== 'hamburger') {
    menuBtn.classList.remove('active');
    mobileMenu.classList.remove('active');
    bodyElement.classList.remove('active');
  }
});

// script for navigation menu
const bicicletasBtn = document.getElementById('bicicletas-btn')
      segurosBtn = document.getElementById('seguros-btn')
      contatoBtn = document.getElementById('contato-btn');

bicicletasBtn.addEventListener('click', () => {
  console.log(bicicletasBtn);

  let scrollDiv = document.getElementById('bicicletas-section').offsetTop;
  window.scrollTo({ top: scrollDiv, behavior: 'smooth' });
});

segurosBtn.addEventListener('click', () => {
  console.log(segurosBtn);

  let scrollDiv = document.getElementById('seguros-section').offsetTop;
  window.scrollTo({ top: scrollDiv, behavior: 'smooth' });
});

contatoBtn.addEventListener('click', () => {
  console.log(contatoBtn);

  let scrollDiv = document.getElementById('footer').offsetTop;
  window.scrollTo({ top: scrollDiv, behavior: 'smooth' });
});