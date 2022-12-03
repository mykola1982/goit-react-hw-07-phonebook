import PropTypes from 'prop-types';
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
  number: yup.string().phone(null, true).required('This field is required'),
});

const idInputName = nanoid();
const idInputNumber = nanoid();

const initialValues = {
  name: '',
  number: '',
};

export const ContactForm = ({ onSubmit }) => {
  const handleSubmit = (values, { resetForm }) => {
    onSubmit(values);
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
          placeholder="+380678888888"
        />

        <Button type="submit">Add contact</Button>
        <StyledErrorMessage name="number" component="p" />
      </StyledForm>
    </Formik>
  );
};

ContactForm.propType = {
  onSubmit: PropTypes.func.isRequired,
};
