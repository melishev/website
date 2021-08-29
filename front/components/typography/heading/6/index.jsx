import styles from './styles.module.scss';
import propTypes from 'prop-types';

const Heading6 = ({ children }) => {
  return (
    <h6 className={styles.Heading}>{children}</h6>
  );
};

Heading6.propTypes = {
  children: propTypes.string.isRequired,
};

export default Heading6;
