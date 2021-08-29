import styles from './styles.module.scss';
import propTypes from 'prop-types';

const Heading3 = ({ children }) => {
  return (
    <h3 className={styles.Heading}>{children}</h3>
  );
};

Heading3.propTypes = {
  children: propTypes.string.isRequired,
};

export default Heading3;
