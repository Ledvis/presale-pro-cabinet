import MAX_WINDOW_SCROLL from './config';

export default new class Navigation {
  constructor() {
    this.navigation = document.querySelector('.navigation');
    this.toggler = this.navigation.querySelector('.navigation__toggler');
  }

  showPanelInView() {
    if (window.scrollY >= MAX_WINDOW_SCROLL) {
      this.navigation.classList.add('navigation--in-view');
    } else {
      this.navigation.classList.remove('navigation--in-view');
    }
  }

  showNavigation() {
    if (this.navigation.classList.contains('navigation--active')) {
      this.navigation.classList.remove('navigation--active');
    } else {
      this.navigation.classList.add('navigation--active');
    }
  }

  init() {
    window.addEventListener('scroll', () => {
      this.showPanelInView();
    });

    this.toggler.addEventListener('click', () => {
      this.showNavigation();
    });
  }
}();
