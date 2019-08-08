import React from 'react';
import PropTypes from 'prop-types';

const TabPane = ({ active, children }) => (
  <div
    style={{
      width: '100%',
      minHeight: 400,
      border: active ? '1px #fff solid' : '0px',
    }}
  >
    {children}
  </div>
);

TabPane.defaultProps = {
  active: false,
  children: '',
};

TabPane.propTypes = {
  active: PropTypes.bool,
  children: PropTypes.node,
};

export default TabPane;
