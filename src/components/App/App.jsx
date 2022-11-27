import { Component } from 'react';
import { nanoid } from 'nanoid';

// import { Container } from './App.styled';
// import { Forma } from 'components/Forma';
// import { Section } from 'components/Section';

export class App extends Component {
  state = {
    contacts: [],
    name: '',
    number: '',
  };

  handleChange = event => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();

    const { name, number } = this.state;
    const newContact = { name: name, id: nanoid(), number: number };

    this.setState(prevState => ({
      contacts: [newContact, ...prevState.contacts],
    }));

    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    const { contacts, name, number } = this.state;
    return (
      <div>
        <h1>Phonebook</h1>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name
            <input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              value={name}
              onChange={this.handleChange}
            />
          </label>

          <label>
            Number
            <input
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              value={number}
              onChange={this.handleChange}
            />
          </label>

          <button type="submit">Add contact</button>
        </form>
        <h2>Contacts</h2>
        <label>
          Find contact by name
          <input type="text" />
        </label>
        <ul>
          {contacts.map(({ name, id, number }) => {
            return (
              <li key={id}>
                {name} {number}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
