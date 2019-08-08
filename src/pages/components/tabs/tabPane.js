import React from 'react';
import PropTypes from 'prop-types';

const TabPane = ({ children }) => (
  <div
    style={{
      width: '100%',
      minHeight: 400,
      border: '1px #fff solid',
    }}
  >
    {children}
  </div>
);

TabPane.defaultProps = {
  // activeIndex: 0,
  // index: 0,
  children: '',
};

TabPane.propTypes = {
  // activeIndex: PropTypes.number,
  // index: PropTypes.number,
  children: PropTypes.node,
};

export default TabPane;
