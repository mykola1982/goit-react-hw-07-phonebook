import { Component } from 'react';
import { nanoid } from 'nanoid';

import { Container } from './App.styled';

import { Section } from 'components/Section';
import { ContactForm } from 'components/ContactForm';
import { Filter } from 'components/Filter';
import { ContactList } from 'components/ContactList';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],

    filter: '',
  };
  addContact = ({ name, number }) => {
    const newContact = { name: name, id: nanoid(), number: number };

    this.setState(prevState => ({
      contacts: [newContact, ...prevState.contacts],
    }));
  };

  handleChangeFilter = event => {
    const { value } = event.currentTarget;
    this.setState({ filter: value });
  };

  getVisibelContats = () => {
    const { contacts, filter } = this.state;

    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  render() {
    const { filter } = this.state;
    const visibleContacts = this.getVisibelContats();

    return (
      <Container>
        <Section title={'Phonebook'}>
          <ContactForm onSubmit={this.addContact} />
        </Section>

        <Section title={'Contacts'}>
          <Filter value={filter} onChange={this.handleChangeFilter}></Filter>
          <ContactList contacts={visibleContacts} />
        </Section>
      </Container>
    );
  }
}
