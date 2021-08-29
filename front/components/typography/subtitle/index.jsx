import styles from './styles.module.scss';
import propTypes from 'prop-types';

const Subtitle = ({ children }) => {
  return (
    <p className={styles.Subtitle}>{children}</p>
  );
};

Subtitle.propTypes = {
  children: propTypes.string.isRequired,
};

export default Subtitle;
