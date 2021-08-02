import React, { Component } from 'react';
import Form from '../components/Form/Form';
import Display from '../components/Display/Display';
import { fetchApi } from '../services/resty.js';

export default class Resty extends Component {
  state = {
    search: '',
    method: '',
    body: '',
    display: '',
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });  
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    const { search, method, body } = this.state;
    const display = await fetchApi(search, method, body);
    this.setState({ display });
  }

  render() {
    const { search, method, body, display } = this.state;

    return (
      <>
        <Form
          search={search}
          method={method}
          body={body}
          onChange={this.handleChange}
          onSubmit={this.handleSubmit}
        />
        <Display display={display} />
      </>
    );
  }
}
