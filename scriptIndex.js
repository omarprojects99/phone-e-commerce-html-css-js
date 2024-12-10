const mobileMenu = document.getElementById('mobile-menu');
const mobileMenuOpen = document.getElementById('mobile-menu-open');
const mobileMenuClose = document.getElementById('mobile-menu-close');

mobileMenuOpen.addEventListener('click', () => {
  mobileMenu.classList.remove('hidden');
});

mobileMenuClose.addEventListener('click', () => {
  mobileMenu.classList.add('hidden');
});
