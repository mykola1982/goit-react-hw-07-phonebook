import { Component } from 'react';

import { Container } from './App.styled';
import { Forma } from 'components/Forma';
import { Section } from 'components/Section';

export class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  render() {
    return (
      <Container>
        <Section title="Phonebook">
          <Forma />
        </Section>
      </Container>
    );
  }
}
