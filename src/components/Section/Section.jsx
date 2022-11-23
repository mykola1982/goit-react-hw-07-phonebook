import PropTypes from 'prop-types';
import { SectionStyled, SectionTitle } from './Section.styled';

export const Section = ({ title, children }) => (
  <SectionStyled>
    <SectionTitle>{title}</SectionTitle>
    {children}
  </SectionStyled>
);

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
