import styles from './styles.module.scss';
import propTypes from 'prop-types';

const Blockquote = ({ children }) => {
  return (
    <blockquote className={styles.Blockquote}>{children}</blockquote>
  );
};

Blockquote.propTypes = {
  children: propTypes.string.isRequired,
};

export default Blockquote;
