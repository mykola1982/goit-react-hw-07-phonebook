import PropTypes from 'prop-types';
import { FilterStyled } from './Filter.styled';
import { Label, Input } from 'components/ContactForm/ContactForm.styled';

export const Filter = ({ value, onChange }) => {
  return (
    <FilterStyled>
      <Label>Find contact by name</Label>
      <Input type="text" name="filter" value={value} onChange={onChange} />
    </FilterStyled>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
