import React from 'react';
import PropTypes from 'prop-types';

const ThemeContext = React.createContext();

const ThemeProvider = ThemeContext.Provider;

export const ThemeConsumer = ThemeContext.Consumer;

const Context = ({ value, children }) => (
  <div>
    <ThemeProvider value={value}>
      {children}
    </ThemeProvider>
  </div>
);

Context.defaultProps = {
  value: {},
};

Context.propTypes = {
  value: PropTypes.objectOf(PropTypes.any),
  children: PropTypes.node.isRequired,
};

export default Context;
