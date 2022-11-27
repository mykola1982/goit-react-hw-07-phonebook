import PropTypes from 'prop-types';

export const ContactItem = ({ name, number }) => {
  return (
    <li>
      <span>{name}</span>
      <span>{number}</span>
    </li>
  );
};

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
