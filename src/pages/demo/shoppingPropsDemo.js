import React from 'react';
import PropTypes from 'prop-types';

const List = ({ add, name }) => (
  <div>
    <span>{`${name}:`}</span>
    <span>{add}</span>
  </div>
);

List.defaultProps = {
  name: '',
  add: '',
};

List.propTypes = {
  name: PropTypes.string,
  add: PropTypes.string,
};

export default List;
