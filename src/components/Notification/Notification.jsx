import * as s from './Notification.styled';
import PropTypes from 'prop-types';

export const Notification = ({ message }) => <s.Text>{message}</s.Text>;

Notification.propTypes = {
  message: PropTypes.string,
};
