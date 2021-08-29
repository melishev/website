import styles from './footer.module.scss';

import Link from 'next/link';

import { Small, Input } from 'components/typography';

const Footer = () => {
  return (
    <footer className={styles.Footer}>
      <Link href="/">
        <a>
          <Small>Melishev&#160;™</Small>
        </a>
      </Link>
      <Input>All rights reserved</Input>
    </footer>
  );
};

export default Footer;
