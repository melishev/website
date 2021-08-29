import styles from './styles.module.scss';
import propTypes from 'prop-types';

const Heading5 = ({ children }) => {
  return (
    <h5 className={styles.Heading}>{children}</h5>
  );
};

Heading5.propTypes = {
  children: propTypes.string.isRequired,
};

export default Heading5;
