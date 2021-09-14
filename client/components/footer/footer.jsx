import styles from './footer.module.scss';

import Link from 'next/link';

const Footer = () => {
  return (
    <footer className={styles.Footer}>
      <Link href="/">
        <a>
          <small>Melishev&#160;™</small>
        </a>
      </Link>
      <span className="typography-input">All rights reserved</span>
    </footer>
  );
};

export default Footer;
