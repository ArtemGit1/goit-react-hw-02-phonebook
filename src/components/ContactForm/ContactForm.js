import React, { Component } from 'react';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleNameChange = (event) => {
    this.setState({ name: event.target.value });
  };

  handleNumberChange = (event) => {
    this.setState({ number: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onAddContact({
      name: this.state.name,
      number: this.state.number
    });
    this.setState({ name: '', number: '' });
  };
  

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="name"
          required
          value={this.state.name}
          onChange={this.handleNameChange}
        />
        <input
          type="tel"
          name="number"
          required
          value={this.state.number}
          onChange={this.handleNumberChange}
        />
        <button type="submit">Add Contact</button>
      </form>
    );
  }
}

export default ContactForm;
