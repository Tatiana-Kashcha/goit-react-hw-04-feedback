import * as s from './Section.styled';
import PropTypes from 'prop-types';

export const Section = ({ title, children }) => (
  <s.Container>
    <h2>{title}</h2>
    {children}
  </s.Container>
);

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.any.isRequired,
};
