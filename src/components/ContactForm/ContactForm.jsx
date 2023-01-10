import { useDispatch } from 'react-redux';
import { addContact } from 'redux/operations';
import { useSelector } from 'react-redux/es/exports';
import { selectContacts } from 'redux/selectors';

import { nanoid } from 'nanoid';
import { Formik } from 'formik';
import * as yup from 'yup';
import 'yup-phone';

import {
  StyledForm,
  Label,
  Input,
  StyledErrorMessage,
} from './ContactForm.styled';
import { Button } from 'components/ContactItem/ContactItem.styled';

const schema = yup.object().shape({
  name: yup.string().required('This field is required'),
  number: yup
    .string()
    .phone(null, true, 'Enter your phone number in the format +000000000000')
    .required(),
});

const idInputName = nanoid();
const idInputNumber = nanoid();

const initialValues = {
  name: '',
  number: '',
};

export const ContactForm = () => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const handleSubmit = ({ name, number }, { resetForm }) => {
    const hasName = contacts.some(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (hasName) {
      alert(`${name} is alredy in contacts`);
      return;
    }

    dispatch(addContact({ name, number }));
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      <StyledForm>
        <Label htmlFor={idInputName}>Name</Label>
        <Input id={idInputName} type="text" name="name" placeholder="Name" />
        <StyledErrorMessage name="name" component="p" />

        <Label htmlFor={idInputNumber}>Number</Label>
        <Input
          id={idInputNumber}
          type="tel"
          name="number"
          placeholder="+0000000000000"
        />

        <Button type="submit">Add contact</Button>
        <StyledErrorMessage name="number" component="p" />
      </StyledForm>
    </Formik>
  );
};
