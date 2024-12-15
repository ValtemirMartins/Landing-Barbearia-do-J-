document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.querySelector('.menu-toggle');
  const mobileNav = document.querySelector('.mobile-nav');
  let isMenuOpen = false;

  menuToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      isMenuOpen = !isMenuOpen;
      mobileNav.classList.toggle('active');
      menuToggle.setAttribute('aria-expanded', isMenuOpen);
  });

  const mobileLinks = document.querySelectorAll('.mobile-nav a');
  mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
          mobileNav.classList.remove('active');
          isMenuOpen = false;
          menuToggle.setAttribute('aria-expanded', false);
      });
  });

  document.addEventListener('click', (e) => {
      if (isMenuOpen && !menuToggle.contains(e.target) && !mobileNav.contains(e.target)) {
          mobileNav.classList.remove('active');
          isMenuOpen = false;
          menuToggle.setAttribute('aria-expanded', false);
      }
  });
});
