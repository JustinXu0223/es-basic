class Router {
  constructor() {
    this.routes = {};
    this.currentUrl = '';
    this.initListener();
  }

  push(path, callback) {
    this.routes[path] = callback || function () {};
  }

  updateView() {
    this.currentUrl = location.hash.slice(1) || '/';
    this.routes[this.currentUrl] && this.routes[this.currentUrl]();
  }

  initListener() {
    window.addEventListener('load', this.updateView.bind(this), false);
    window.addEventListener('hashchange', this.updateView.bind(this), false);
  }

  removeListener() {
    window.removeEventListener('load', () => {}, false);
    window.removeEventListener('hashchange', () => {}, false);
  }
}
