/**
 防抖动和节流本质是不一样的。防抖动是将多次执行变为最后一次执行，
 节流是将多次执行变成每隔一段时间执行。
 * */

function now() {
  return +new Date()
}

/**
 * throttle 节流函数，返回函数连续调用时，func 执行频率限定为 次 / wait
 * @param  {function}   func      回调函数
 * @param  {number}     wait      表示时间窗口的间隔
 * @param  {object}     options   如果想忽略开始函数的的调用，传入{leading: false}。
 *                                如果想忽略结尾函数的调用，传入{trailing: false}
 *                                两者不能共存，否则函数不能执行
 * @return {function}             返回客户调用函数
 */

function throttle(func, wait = 50, options) {
  let timer, context, args, result;
  // 之前的时间戳
  let previous = 0;

  // 如果 options 没传则设为空对象
  if (!options) options = {};

  // 定时器回调函数
  const later = function() {
    // 如果设置了 leading，就将 previous 设为 0
    // 用于下面函数的第一个 if 判断
    previous = options.leading === false ? 0 : now();
    // 置空一是为了防止内存泄漏，二是为了下面的定时器判断
    timer = null;
    result = func.apply(context, args);
    if (!timer) context = args = null;
  };
  return function(...params) {
    // 获得当前时间戳
    const now = now();
    // 首次进入前者肯定为 true
    // 如果需要第一次不执行函数
    // 就将上次时间戳设为当前的
    // 这样在接下来计算 remaining 的值时会大于0
    if (!previous && options.leading === false) previous = now;
    // 计算剩余时间
    const remaining = wait - (now - previous);
    context = this;
    args = params;
    // 如果当前调用已经大于上次调用时间 + wait
    // 或者用户手动调了时间
    // 如果设置了 trailing，只会进入这个条件
    // 如果没有设置 leading，那么第一次会进入这个条件
    // 还有一点，你可能会觉得开启了定时器那么应该不会进入这个 if 条件了
    // 其实还是会进入的，因为定时器的延时
    // 并不是准确的时间，很可能你设置了2秒
    // 但是他需要2.2秒才触发，这时候就会进入这个条件
    if (remaining <= 0 || remaining > wait) {
      // 如果存在定时器就清理掉否则会调用二次回调
      if (timer) {
        clearTimeout(timer);
        timer = null;
      }
      previous = now;
      result = func.apply(context, args);
      if (!timer) context = args = null;
    } else if (!timer && options.trailing !== false) {
      // 判断是否设置了定时器和 trailing
      // 没有的话就开启一个定时器
      // 并且不能不能同时设置 leading 和 trailing
      timer = setTimeout(later, remaining);
    }
    return result;
  };
}

