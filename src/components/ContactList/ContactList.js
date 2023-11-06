import React from 'react';

const ContactList = ({ contacts, onDeleteContact }) => (
  <ul>
    {contacts.map((contact) => (
      <li key={contact.id}>
        {contact.name}: {contact.number}
        <button onClick={() => onDeleteContact(contact.id)}>Видалити</button>
      </li>
    ))}
  </ul>
);

export default ContactList;

