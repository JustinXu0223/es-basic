import React from 'react';
// import PropTypes from 'prop-types';

// components
import Base from '../components/oop/base';

class Demo1 extends Base {
  getHeader = () => <span>demo1</span>;
}

class Demo2 extends Base {
  getHeader = () => <span>Demo2</span>;
}


export { Demo1, Demo2 };
