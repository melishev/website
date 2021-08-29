import styles from './styles.module.scss';
import propTypes from 'prop-types';

const Heading1 = ({ children }) => {
  return (
    <h1 className={styles.Heading}>{children}</h1>
  );
};

Heading1.propTypes = {
  children: propTypes.string.isRequired,
};

export default Heading1;
