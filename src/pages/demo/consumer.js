import React from 'react';
// import PropTypes from 'prop-types';

import { ThemeConsumer } from '../components/context/themeProvider';

const Consumer = () => (
  <ThemeConsumer>
    {
      theme => (
        <p
          style={{
            color: theme.textColor,
            backgroundColor: theme.mainColor,
          }}
        >
          内容区域
        </p>
      )
    }
  </ThemeConsumer>
);


Consumer.defaultProps = {};

Consumer.propTypes = {};

export default Consumer;
