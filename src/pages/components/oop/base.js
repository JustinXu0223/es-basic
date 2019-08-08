import React from 'react';

class Base extends React.PureComponent {
  getHeader = () => null;

  render() {
    return (
      <div style={{ border: '1px solid red', margin: 5, width: 300 }}>
        {this.getHeader()}
        <div>这里是通用逻辑</div>
      </div>
    );
  }
}

export default Base;
