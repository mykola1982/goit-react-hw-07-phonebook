import { useDispatch } from 'react-redux/es/exports';
import { deleteContact } from 'redux/operations';

import PropTypes from 'prop-types';
import { Item, Button } from './ContactItem.styled';

export const ContactItem = ({ id, name, number }) => {
  const dispatch = useDispatch();
  return (
    <Item>
      <p>
        {name}:&nbsp;{number}
      </p>
      <Button type="button" onClick={() => dispatch(deleteContact(id))}>
        Delete contact
      </Button>
    </Item>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
