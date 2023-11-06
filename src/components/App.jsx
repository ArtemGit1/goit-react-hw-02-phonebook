import React, { Component } from 'react';
import ContactForm from './ContactForm/ContactForm.js';
import ContactList from './ContactList/ContactList.js';
import Filter from './Filter/Filter.js';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  handleAddContact = (newContact) => {
    this.setState((prevState) => ({
      contacts: [...prevState.contacts, newContact],
    }));
  };

  handleFilterChange = (event) => {
    this.setState({ filter: event.target.value });
  };

  handleDeleteContact = (contactId) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter((contact) => contact.id !== contactId),
    }));
  };

  render() {
    const { contacts, filter } = this.state;

    let filteredContacts = contacts;

    if (filter) {
      filteredContacts = contacts.filter((contact) =>
        contact.name.toLowerCase().includes(filter.toLowerCase())
      );
    }

    return (
      <div>
        <h1>Телефонна книга</h1>
        <ContactForm onAddContact={this.handleAddContact} />

        <h2>Контакти</h2>
        <Filter filter={filter} onFilterChange={this.handleFilterChange} />
        <ContactList contacts={filteredContacts} onDeleteContact={this.handleDeleteContact} />
      </div>
    );
  }
}

export default App;
