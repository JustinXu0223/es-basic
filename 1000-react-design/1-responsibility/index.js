/** 责任分离
 * 由外层组件控制连接逻辑
 * 内容组件只关心渲染问题
* */
import React from 'react';

import GetTextPresentational from './getTextPresentational';

class GetTextContainer extends React.Component {
  state = {
    text: null,
  };

  componentDidMount() {
    fetch('https://api.com/', { headers: { Accept: 'application/json' } })
      .then(response => response.json())
      .then((json) => {
        this.setState({ text: json.joke });
      });
  }

  render() {
    const {
      state: {
        text,
      },
    } = this;
    return (
      <div>
        <GetTextPresentational text={text} />
      </div>
    );
  }
}

export default GetTextContainer;
