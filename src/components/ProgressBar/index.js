import PropTypes from 'prop-types';
import { Container } from './styles.js';

export const ProgressBar = props => {
  const { value, max, color, width } = props;

  return (
    <Container color={color} width={width}>
      <progress value={value} max={max} />
    </Container>
  )

};

ProgressBar.propTypes = {
  value: PropTypes.number.isRequired,
  max: PropTypes.number,
  color: PropTypes.string,
  width: PropTypes.string,
};

ProgressBar.defaultProps = {
  max: 100,
  color: '#e2c72d',
  width: '10rem',
};

export default ProgressBar;