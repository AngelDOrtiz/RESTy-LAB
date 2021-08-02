/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';
import RadioButtons from '../Radio/RadioButtons';
import styles from './Form.css';


const Form = ({ url, body, method, onSubmit, onChange }) => {
  return (
    <section className={styles.Form}>
      <form onSubmit={onSubmit}>
        <input type="text" placeholder="URL" value={url} name="url" onChange={onChange} />
        <section>
          <RadioButtons method={method} onChange={onChange}/>
          <button>Search</button>
        </section>
        <textarea placeholder="Raw JSON Body" name="body" value={body} onChange={onChange}></textarea>
      </form>
    </section>
  );
};

Form.propTypes = {
  url: PropTypes.string.isRequired,
  method: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired
};

export default Form;
