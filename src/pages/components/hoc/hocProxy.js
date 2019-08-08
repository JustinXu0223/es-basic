import React from 'react';
import { getDisplayName } from './utils';

export default function ProxyHoc(Component) {
  const NewComponent = (props) => {
    const newProps = {
      name: '高阶组件增加的属性',
      age: 1,
    };
    // notice 1. 包装显示名称以便轻松调试
    ProxyHoc.displayName = `ProxyHoc(${getDisplayName(Component)})`;
    return <Component {...props} {...newProps} />;
  };

  return NewComponent;
}
