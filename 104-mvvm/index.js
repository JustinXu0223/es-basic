

// window.onload = function () {
//   const data = {};
//   const input = document.getElementById('input');
//   Object.defineProperty(data, 'text', {
//     set(value) {
//       input.value = value;
//       this.value = value;
//       console.log(data);
//     },
//   });
//   input.onchange = function (e) {
//     data.text = e.target.value;
//   };
//
//   setTimeout(() => {
//     data.text = '测试';
//   }, 2000);
// };

window.onload = function () {
  const data = {};
  const input = document.getElementById('input');
  const newObj = new Proxy(data, {
    set(target, key, value, receiver) {
      console.log('@target:', target);
      console.log('@newObj:', newObj);
      if (key === 'text') {
        input.value = value;
      }
      return Reflect.set(target, key, value, receiver);
    },
  });
  input.onchange = function (e) {
    newObj.text = e.target.value;
  };

  setTimeout(() => {
    newObj.text = '测试';
  }, 2000);
};
