/**
你是否在日常开发中遇到一个问题，在滚动事件中需要做个复杂计算或者实现一个按钮的防二次点击操作。

这些需求都可以通过函数防抖动来实现。尤其是第一个需求，如果在频繁的事件回调中做复杂计算，
很有可能导致页面卡顿，不如将多次计算合并为一次计算，只在一个精确点做操作。

PS：防抖和节流的作用都是防止函数多次调用。区别在于，假设一个用户一直触发这个函数，
且每次触发函数的间隔小于wait，防抖的情况下只会调用一次，而节流的 情况会每隔一定时间（参数wait）调用函数。

我们先来看一个袖珍版的防抖理解一下防抖的实现：
* */

function simpleDebounce(func, wait = 50) {
  let timer = 0;
  return function (...args) {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, wait);
  };
}

/**
这是一个简单版的防抖，但是有缺陷，这个防抖只能在最后调用。一般的防抖会有immediate选项，
表示是否立即调用。这两者的区别，举个栗子来说：

例如在搜索引擎搜索问题的时候，我们当然是希望用户输入完最后一个字才调用查询接口，
这个时候适用延迟执行的防抖函数，它总是在一连串（间隔小于wait的）函数触发之后调用。
例如用户给interviewMap点star的时候，我们希望用户点第一下的时候就去调用接口，
并且成功之后改变star按钮的样子，用户就可以立马得到反馈是否star成功了，这个情况适用立即执行的防抖函数，
它总是在第一次调用，并且下一次调用必须与前一次调用的时间间隔大于wait才会触发。
下面我们来实现一个带有立即执行选项的防抖函数
*
* */

/**
 * 防抖函数，返回函数连续调用时，空闲时间必须大于或等于 wait，func 才会执行
 * @param  {function} func        回调函数
 * @param  {number}   wait        表示时间窗口的间隔
 * @param  {boolean}  immediate   设置为ture时，是否立即调用函数
 * @return {function}             返回客户调用函数
 */
function debounce(func, wait = 50, immediate) {
  let timer; let context; let
    args;

  // 延迟执行函数
  const later = () => setTimeout(() => {
    // 延迟函数执行完毕，清空缓存的定时器序号
    timer = null;
    // 延迟执行的情况下，函数会在延迟函数中执行
    // 使用到之前缓存的参数和上下文
    if (!immediate) {
      func.apply(context, args);
      context = args = null;
    }
  }, wait);

  // 这里返回的函数是每次实际调用的函数
  return function (...params) {
    // 如果没有创建延迟执行函数（later），就创建一个
    if (!timer) {
      timer = later();
      // 如果是立即执行，调用函数
      // 否则缓存参数和调用上下文
      if (!immediate) {
        func.apply(this, args);
        return;
      }
      context = this;
      args = params;
      return;
    }
    // 如果已有延迟执行函数（later），调用的时候清除原来的并重新设定一个
    // 这样做延迟函数会重新计时
    clearTimeout(timer);
    timer = later();
  };
}

/** *
 * 对于按钮防点击来说的实现：如果函数是立即执行的，就立即调用，如果函数是延迟执行的，
 * 就缓存上下文和参数，放到延迟函数中去执行。一旦我开始一个定时器，
 * 只要我定时器还在，你每次点击我都重新计时。一旦你点累了，定时器时间到，定时器重置为 null，就可以再次点击了。
 *
 * 对于延时执行函数来说的实现：清除定时器ID，如果是延迟调用就调用函数
* */
