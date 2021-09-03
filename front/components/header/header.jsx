import styles from './header.module.scss';

import Link from 'next/link';

import LogoSVG from 'public/svg/logo.svg';

import { useDispatch, useSelector } from 'react-redux';
import { openNavigation } from 'redux/state/modals';
import { selectDataNavigation } from 'redux/state/global';

import { ReactSVG } from 'react-svg';

import { DateTime } from 'luxon';

const Header = () => {
  const dispatch = useDispatch();

  const dataNavigation = useSelector(selectDataNavigation);

  return (
    <header className={styles.Header}>
      <div className={styles.Header_logo}>
        <Link href="/">
          <a>
            <LogoSVG className={styles.Logo_svg} />
          </a>
        </Link>
      </div>
      <nav>
        <ul>
          {dataNavigation.map((item) => (
            <li key={item.slug}>
              <Link href={`/${item.slug}`}>
                <a>
                  <span className="typography-lead">{item.name}</span>
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className={styles.Header_controls}>
        <small>
          Москва&#160;
          {DateTime.now().setZone('Europe/Moscow').setLocale('ru').toLocaleString(DateTime.TIME_24_SIMPLE)}
        </small>
        <button type="button" aria-label="Menu" onClick={() => dispatch(openNavigation())}><ReactSVG src="/svg/burger.svg" /></button>
      </div>
    </header>
  );
};

export default Header;
