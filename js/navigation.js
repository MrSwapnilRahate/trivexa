/* ============================================
   TRIVEXA — Navigation Controller
   ============================================ */

class NavigationController {
  constructor() {
    this.nav = document.querySelector('.nav');
    this.hamburger = document.querySelector('.nav__hamburger');
    this.mobileMenu = document.querySelector('.mobile-menu');
    this.mobileLinks = document.querySelectorAll('.mobile-menu__link');
    this.isOpen = false;

    this.initScroll();
    this.initMobileMenu();
    this.initSmoothScroll();
    this.setActiveLink();
  }

  initScroll() {
    let lastScroll = 0;
    window.addEventListener('scroll', () => {
      const scrollY = window.scrollY;
      if (scrollY > 50) {
        this.nav.classList.add('nav--scrolled');
      } else {
        this.nav.classList.remove('nav--scrolled');
      }
      lastScroll = scrollY;
    }, { passive: true });
  }

  initMobileMenu() {
    if (!this.hamburger || !this.mobileMenu) return;

    this.hamburger.addEventListener('click', () => {
      this.isOpen = !this.isOpen;
      this.mobileMenu.classList.toggle('mobile-menu--open', this.isOpen);
      document.body.style.overflow = this.isOpen ? 'hidden' : '';
      
      // Animate hamburger
      const spans = this.hamburger.querySelectorAll('span');
      if (this.isOpen) {
        spans[0].style.transform = 'rotate(45deg) translate(4px, 4px)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'rotate(-45deg) translate(4px, -4px)';
      } else {
        spans[0].style.transform = '';
        spans[1].style.opacity = '';
        spans[2].style.transform = '';
      }
    });

    this.mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        this.isOpen = false;
        this.mobileMenu.classList.remove('mobile-menu--open');
        document.body.style.overflow = '';
        const spans = this.hamburger.querySelectorAll('span');
        spans[0].style.transform = '';
        spans[1].style.opacity = '';
        spans[2].style.transform = '';
      });
    });
  }

  initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(link => {
      link.addEventListener('click', (e) => {
        const href = link.getAttribute('href');
        if (href === '#') return;
        const target = document.querySelector(href);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    });
  }

  setActiveLink() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav__link').forEach(link => {
      const href = link.getAttribute('href');
      if (href === currentPage || (currentPage === '' && href === 'index.html')) {
        link.classList.add('nav__link--active');
      }
    });
  }
}

window.NavigationController = NavigationController;
