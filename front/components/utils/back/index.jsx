import styles from './styles.module.scss';

import { useSelector } from 'react-redux';
import { selectModalNavigation } from 'redux/state/modals';

const Back = () => {
  const modalNavigation = useSelector(selectModalNavigation);

  return <div className={`${styles.Back} ${modalNavigation.open ? styles.Back_open : ''}`} />;
};

export default Back;
