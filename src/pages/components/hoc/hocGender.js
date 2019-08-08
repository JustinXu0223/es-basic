import React from 'react';

export default function JudgeWoman(Component) {
  const NewComponent = (props) => {
    // 判断是否是女性用户
    const isWoman = Math.random() > 0.5;
    if (isWoman) {
      const allProps = { add: '高阶组件增加的属性', ...props };
      return <Component {...allProps} />;
    }
    return <span>女士专用，男士无权浏览</span>;
  };
  return NewComponent;
}
