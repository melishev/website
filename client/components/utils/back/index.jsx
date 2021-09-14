/* eslint-disable jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions */

import styles from './styles.module.scss';

import { useDispatch, useSelector } from 'react-redux';
import { closeNavigation, selectModalNavigation } from 'redux/state/modals';

const Back = () => {
  const dispatch = useDispatch();
  const modalNavigation = useSelector(selectModalNavigation);

  return <div className={`${styles.Back} ${modalNavigation.open ? styles.Back_open : ''}`} onClick={() => dispatch(closeNavigation())} />;
};

export default Back;
