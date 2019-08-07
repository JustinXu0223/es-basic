import React from 'react';

function getDisplayName(WrappedComponent) {
  return WrappedComponent.displayName || WrappedComponent.name || 'Component';
}

const judgeWoman = (Component) => {
  const NewComponent = (props) => {
    // 判断是否是女性用户
    const isWoman = Math.random() > 0.5;
    if (isWoman) {
      const allProps = { add: '高阶组件增加的属性', ...props };
      return <Component {...allProps} />;
    }
    return <span>女士专用，男士无权浏览</span>;
  };
  // notice 1. 包装显示名称以便轻松调试
  judgeWoman.displayName = `JudgeWoman(${getDisplayName(Component)})`;
  return NewComponent;
};

export default judgeWoman;

// notice 2. 不要在 render 方法中使用 HOC
class Demo extends React.Component {
  render() {
    // 每次调用 render 函数都会创建一个新的 EnhancedComponent// EnhancedComponent1 !== EnhancedComponent2
    const EnhancedComponent = enhance(MyComponent);
    // 这将导致子树每次渲染都会进行卸载，和重新挂载的操作！
    return <EnhancedComponent />;
  }
}

/** 如果在组件之外创建 HOC，这样一来组件只会创建一次。因此，每次 render 时都会是同一个组件。
 * 一般来说，这跟你的预期表现是一致的。在极少数情况下，你需要动态调用 HOC.
 * 你可以在组件的生命周期方法或其构造函数中进行调用。
* */
