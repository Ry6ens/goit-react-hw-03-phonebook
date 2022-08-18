import { Component } from 'react';
import { nanoid } from 'nanoid';
import Notiflix from 'notiflix';

import Section from './Section/Section';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  addContact = data => {
    if (this.isDuplicate(data)) {
      return Notiflix.Notify.warning(`${data.name} is already in contacts`);
    }

    this.setState(prevState => {
      const newContact = {
        id: nanoid(),
        ...data,
      };
      return { contacts: [...prevState.contacts, newContact] };
    });
  };

  removeContact = id => {
    this.setState(({ contacts }) => {
      const newContacts = contacts.filter(item => item.id !== id);
      return {
        contacts: newContacts,
      };
    });
  };

  isDuplicate({ name }) {
    const { contacts } = this.state;
    const result = contacts.find(item => item.name === name);
    return result;
  }

  handleFilter = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  getFilterItems() {
    const { contacts, filter } = this.state;

    if (!filter) {
      return contacts;
    }

    const normalizeFilterToLowerCase = filter.toLocaleLowerCase();

    const filterItems = contacts.filter(({ name, number }) => {
      const normalizeNameToLowerCase = name.toLocaleLowerCase();
      const normalizeNumberToLowerCase = number.toLocaleLowerCase();

      const result =
        normalizeNameToLowerCase.includes(normalizeFilterToLowerCase) ||
        normalizeNumberToLowerCase.includes(normalizeFilterToLowerCase);
      return result;
    });
    return filterItems;
  }

  render() {
    const { addContact, handleFilter } = this;
    const phonebook = this.getFilterItems();
    const removeContact = this.removeContact;

    return (
      <div className="container">
        <Section title="Phonebook">
          <ContactForm onSubmit={addContact} />
        </Section>
        <Section title="Contacts">
          <Filter onChangeFilter={handleFilter} />
          <ContactList items={phonebook} removeItem={removeContact} />
        </Section>
      </div>
    );
  }
}

export default App;
