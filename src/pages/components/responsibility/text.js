import React from 'react';
import PropTypes from 'prop-types';

class Text extends React.PureComponent {
  render() {
    const {
      props: {
        text,
        onClick,
      },
    } = this;
    return (
      <div>
        <div>
        接口返回的数据：
          {text}
        </div>
        <button onClick={onClick}>点我啊</button>
      </div>
    );
  }
}

// 这里我建议，不是必须传入的参数，尽量不使用isRequired验证
// 比如input value 肯定是必须的 但是如果不做受控组件，那么回调onChange就不是必须
Text.defaultProps = {
  text: '',
  onClick: () => null,
};

Text.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func,
};

export default Text;
