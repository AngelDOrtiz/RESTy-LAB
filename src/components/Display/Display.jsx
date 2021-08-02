import React from 'react';
import PropTypes from 'prop-types';
import ReactJson from 'react-json-view';
import styles from './Display.css';

const Display = ({ display }) => {
  return (
    <pre className={styles.Display} data-testid="display">
      <ReactJson src={display} displayDataTypes={false} />
    </pre>
  );
};

Display.propTypes = {
  display: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired
};

export default Display;
