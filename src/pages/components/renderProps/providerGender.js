import React from 'react';
import PropTypes from 'prop-types';

const ProviderGender = (props) => {
  // 判断是否是女性用户
  const isWoman = Math.random() > 0.1;
  if (isWoman) {
    const allProps = { add: '高阶组件增加的属性', ...props };
    return props.children(allProps);
  }
  return <div>女士专用，男士无权浏览</div>;
};

ProviderGender.defaultProps = {
  children: () => null,
};

ProviderGender.propTypes = {
  children: PropTypes.func,
};

export default ProviderGender;
