import styles from './styles.module.scss';
import propTypes from 'prop-types';

const Strong = ({ children }) => {
  return (
    <strong className={styles.Strong}>{children}</strong>
  );
};

Strong.propTypes = {
  children: propTypes.string.isRequired,
};

export default Strong;
