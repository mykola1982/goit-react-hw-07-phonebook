import { Component } from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';

import { Form, Label, Input } from './ContactForm.styled';
import { Button } from 'components/ContactItem/ContactItem.styled';

export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  static propTypes = { onSubmit: PropTypes.func.isRequired };

  idInputName = nanoid();
  idInputNumber = nanoid();

  handleChange = event => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;

    return (
      <Form onSubmit={this.handleSubmit}>
        <Label htmlFor={this.idInputName}>Name</Label>
        <Input
          id={this.idInputName}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
          onChange={this.handleChange}
        />

        <Label htmlFor={this.idInputNumber}>Number</Label>
        <Input
          id={this.idInputNumber}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={number}
          onChange={this.handleChange}
        />

        <Button type="submit">Add contact</Button>
      </Form>
    );
  }
}
