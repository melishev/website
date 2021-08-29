import styles from './styles.module.scss';
import propTypes from 'prop-types';

const Small = ({ children }) => {
  return (
    <small className={styles.Small}>{children}</small>
  );
};

Small.propTypes = {
  children: propTypes.string.isRequired,
};

export default Small;
