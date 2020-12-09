(() => {
  const win = window
  const doc = document
  const docEl = doc.documentElement;
  const dpr = win.devicePixelRatio || 1;

  // adjust body font size
  function setBodyFontSize() {
    if (doc.body) {
      doc.body.style.fontSize = 12 * dpr + 'px';
    } else {
      doc.addEventListener('DOMContentLoaded', setBodyFontSize);
    }
  }
  setBodyFontSize();

  function setFontSize() {
    var rem = docEl.clientWidth / 7.5;
    docEl.style.fontSize = rem + 'px';
  }

  // set 1rem = viewWidth / 10
  function setRemUnit() {
    /**
     * iOS设备上webview直接打开图像链接后，显示宽度从375变为750，当返回重新矫正时，
     * clientWidth为750，而期望值为375。由于webview切换显示尺寸时机晚于setRemUnit
     * 执行，这里尝试用setTimeout延迟执行setRemUnit
     */
    setFontSize(); // 初始化很小
    setTimeout(() => {
      setFontSize();
    }, 350);
  }

  setRemUnit();

  // reset rem unit on page resize
  win.addEventListener('resize', setRemUnit);
  win.addEventListener('pageshow', e => {
    // e.persisted 在iOS webview中返回有可能为false
    if (e.persisted || (win.performance && performance.navigation.type === 2)) {
      setRemUnit();
    }
  });
})();
