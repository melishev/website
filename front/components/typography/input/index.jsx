import styles from './styles.module.scss';
import propTypes from 'prop-types';

const Input = ({ children }) => {
  return (
    <span className={styles.Input}>{children}</span>
  );
};

Input.propTypes = {
  children: propTypes.string.isRequired,
};

export default Input;
