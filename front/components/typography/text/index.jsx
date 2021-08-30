import styles from './styles.module.scss';
import propTypes from 'prop-types';

const Text = ({ children }) => {
  return (
    <p className={styles.Text}>{children}</p>
  );
};

Text.propTypes = {
  children: propTypes.string,
};

Text.defaultProps = {
  children: 'Text for Melishev ™',
};

export default Text;
