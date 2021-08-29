import styles from './styles.module.scss';
import propTypes from 'prop-types';

const Heading4 = ({ children }) => {
  return (
    <h4 className={styles.Heading}>{children}</h4>
  );
};

Heading4.propTypes = {
  children: propTypes.string.isRequired,
};

export default Heading4;
