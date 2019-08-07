import React from 'react';
import PropTypes from 'prop-types';

class GetTextPresentational extends React.PureComponent {
  render() {
    const {
      props: {
        text,
      },
    } = this;
    return (
      <div>
        <div>
        外部获取的数据：
          {text}
        </div>
        <div>UI代码</div>
      </div>
    );
  }
}

GetTextPresentational.propTypes = {
  text: PropTypes.string.isRequired,
};

export default GetTextPresentational;
