class Router {
  constructor() {
    this.routes = {};
    this.currentUrl = '';
    this.initListener();
    this.initBindLink();
  }

  push(path, callback) {
    this.routes[path] = callback || function () {};
  }

  updateView(url) {
    this.currentUrl = url;
    this.routes[this.currentUrl] && this.routes[this.currentUrl]();
  }

  initBindLink() {
    const allLink = document.querySelectorAll('a[data-href]');
    for (let i = 0, len = allLink.length; i < len; i++) {
      const current = allLink[i];
      current.addEventListener(
        'click',
        (e) => {
          e.preventDefault();
          const url = current.getAttribute('data-href');
          history.pushState({}, null, url);
          this.updateView(url);
        },
        false,
      );
    }
  }

  initListener() {
    window.addEventListener('popstate', () => this.updateView(window.location.pathname));
    window.addEventListener('load', () => this.updateView('/'), false);
  }

  removeListener() {
    window.removeEventListener('load', () => {}, false);
    window.removeEventListener('hashchange', () => {}, false);
  }
}
