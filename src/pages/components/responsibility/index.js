/** 责任分离
 * 由外层组件控制连接逻辑
 * 内容组件只关心渲染问题
* */
import React from 'react';

import Text from './text';

class TextContainer extends React.Component {
  state = {
    text: '',
  };

  getData = () => {
    // 模拟异步请求
    setTimeout(() => {
      this.setState({ text: '测试数据' });
    }, 1000);
  };

  render() {
    const {
      state: {
        text,
      },
    } = this;
    return (
      <div>
        <Text text={text} onClick={this.getData} />
      </div>
    );
  }
}

export default TextContainer;
