

window.onload = function () {
  const xElem = document.querySelector('.x-view');
  const yElem = document.querySelector('.y-view');

  document.querySelector('.content-view').addEventListener('mousemove', (e) => {
    // 浏览器视口（内容区域的左上角）有滚动条时候，滚动条部分不计算入内
    // xElem.innerText = `x: ${e.clientX}px`;
    // yElem.innerText = `y: ${e.clientY}px`;
    // 分辨率有关
    // xElem.innerText = `x: ${e.screenX}px`;
    // yElem.innerText = `y: ${e.screenY}px`;
    // 相对于浏览器中完全呈现的内容区域的左上角
    xElem.innerText = `x: ${e.pageX}px`;
    yElem.innerText = `y: ${e.pageY}px`;
  }, false);
};
