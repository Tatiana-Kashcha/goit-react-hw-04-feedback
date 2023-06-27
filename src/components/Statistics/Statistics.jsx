import * as s from './Statistics.styled';
import PropTypes from 'prop-types';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <s.List>
      <s.ListItems>
        <p>Good: {good}</p>
      </s.ListItems>
      <s.ListItems>
        <p>Neutral: {neutral}</p>
      </s.ListItems>
      <s.ListItems>
        <p>Bad: {bad}</p>
      </s.ListItems>
      <s.ListItems>
        <p>Total: {total}</p>
      </s.ListItems>
      <s.ListItems>
        <p>Positive feedback: {positivePercentage}%</p>
      </s.ListItems>
    </s.List>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
