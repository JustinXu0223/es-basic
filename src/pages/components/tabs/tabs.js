import React from 'react';
import PropTypes from 'prop-types';

class Tabs extends React.Component {
  state = {
    activeIndex: 0,
  };

  onClickItem = (index) => {
    this.setState({ activeIndex: index });
    this.props.onChange(index);
  };

  renderHeaderItem = () => {
    const {
      state: { activeIndex },
      props: { children },
    } = this;
    return React.Children.map(children, (childElem, index) => {
      if (!childElem.type) return null;
      const active = activeIndex === index;
      return (
        <div
          style={{
            maxWidth: '150px',
            color: active ? 'red' : 'green',
            border: active ? '1px red solid' : '0px',
          }}
          onClick={() => this.onClickItem(index)}
        >
          {childElem.props.tab}
        </div>
      );
    });
  };

  render() {
    const {
      state: { activeIndex },
      props: { children },
    } = this;
    return (
      <div>
        <div style={{ display: 'flex' }}>
          {this.renderHeaderItem()}
        </div>
        {
          React.Children.map(children, (childElem, index) => {
            if (!(childElem.type && activeIndex === index)) return null;
            return React.cloneElement(childElem, {
              active: activeIndex === index,
            });
          })
        }
      </div>
    );
  }
}

Tabs.defaultProps = {
  onChange: () => null,
};

Tabs.propTypes = {
  children: PropTypes.node.isRequired,
  onChange: PropTypes.func,
};

export default Tabs;
