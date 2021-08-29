import styles from './styles.module.scss';
import propTypes from 'prop-types';

const Heading2 = ({ children }) => {
  return (
    <h2 className={styles.Heading}>{children}</h2>
  );
};

Heading2.propTypes = {
  children: propTypes.string.isRequired,
};

export default Heading2;
