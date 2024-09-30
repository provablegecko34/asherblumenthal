// add classes for mobile navigation toggling
const body = document.querySelector('body');
const navbarMenu = document.querySelector('#cs-navigation');
const hamburgerMenu = document.querySelector('#cs-navigation .cs-toggle');
const navigationList = document.querySelector('#cs-expanded'); // Assuming this is the ID of your navigation list

hamburgerMenu.addEventListener('click', () => {
  hamburgerMenu.classList.toggle('cs-active');
  navbarMenu.classList.toggle('cs-active');
  body.classList.toggle('cs-open');
  navigationList.setAttribute('aria-expanded', !navigationList.getAttribute('aria-expanded'));
});

// mobile nav toggle code
const dropdowns = Array.from(document.querySelectorAll('#cs-navigation .cs-dropdown'));
dropdowns.forEach(dropdown => {
  dropdown.addEventListener('click', () => {
    dropdown.classList.toggle('cs-active');
  });
});