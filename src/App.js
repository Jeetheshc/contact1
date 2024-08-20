import React, { useState } from 'react';
import ContactForm from './ContactForm';
import './App.css';
const App = () => {
  const [contacts, setContacts] = useState(() => {
    const savedContacts = localStorage.getItem('contacts');
    return savedContacts ? JSON.parse(savedContacts) : [];
  });

  const addContact = (contact) => {
    const updatedContacts = [...contacts, contact];
    setContacts(updatedContacts);
    localStorage.setItem('contacts', JSON.stringify(updatedContacts));
  };

  return (
    <div className="container mt-5" >
      <h1>Contact Form</h1>
      <ContactForm addContact={addContact} />
      <h2>Contact List</h2>
      <ul className="list-group-item list-group-item-action">
        {contacts.map((contact, index) => (
          <li key={index} className="list-group-item list-group-item-action">
            {contact.name} - {contact.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
