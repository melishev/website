import styles from './styles.module.scss';
import propTypes from 'prop-types';

const Lead = ({ children }) => {
  return (
    <span className={styles.Lead}>{children}</span>
  );
};

Lead.propTypes = {
  children: propTypes.string.isRequired,
};

export default Lead;
