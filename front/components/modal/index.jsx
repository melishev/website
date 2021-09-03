import styles from './modal.module.scss';

import Link from 'next/link';

import { ReactSVG } from 'react-svg';

import { useDispatch, useSelector } from 'react-redux';
import { closeNavigation, selectModalNavigation } from 'redux/state/modals';
import { selectDataNavigation } from 'redux/state/global';

const Modal = () => {
  const dispatch = useDispatch();
  const modalNavigation = useSelector(selectModalNavigation);
  const dataNavigation = useSelector(selectDataNavigation);

  return (
    <div className={`${styles.ModalNavigation} ${modalNavigation.open ? styles.ModalNavigation_open : ''}`}>
      <div className={styles.ModalNavigation_top}><ReactSVG src="/svg/close.svg" onClick={() => dispatch(closeNavigation())} /></div>
      <nav>
        <ul>
          {dataNavigation.map((item) => (
            <li key={item.slug}><Link href={`/${item.slug}`}><a><span className="typography-lead">{item.name}</span></a></Link></li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Modal;
