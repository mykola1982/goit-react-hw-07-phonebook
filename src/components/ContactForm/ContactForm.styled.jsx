import { Form, Field, ErrorMessage } from 'formik';
import styled from '@emotion/styled';

export const StyledForm = styled(Form)`
  width: 800px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
`;

export const Label = styled.label`
  font-weight: 500;
  font-size: 22px;
  line-height: 1.16;
`;

export const Input = styled(Field)`
  font-size: 18px;
  line-height: 1.16;
  width: 300px;
  height: 26px;
  border: 2px solid #212121;
  border-radius: 4px;
  outline: none;
  padding: 8px 16px;
  transition: border-color 250ms linear;

  :hover,
  :focus {
    border-color: orange;
  }
`;

export const StyledErrorMessage = styled(ErrorMessage)`
  font-size: 16px;
  font-weight: 700;
  line-height: 1.16;
  color: red;
`;
