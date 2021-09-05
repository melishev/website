import styles from './styles.module.scss';
import propTypes from 'prop-types';

import Image from 'next/image';

import Mask2x1 from 'assets/svg/mask2x1.svg';
import Mask3x1 from 'assets/svg/mask3x1.svg';

import { useEffect, useState } from 'react';

const MaskImage = ({ className, mask, src, alt }) => {
  const [selectMask, setSelectMask] = useState(<Mask2x1 />);
  const [selectSrc, setSelectSrc] = useState('/default/image.jpeg');

  useEffect(() => {
    // Set Mask and Placeholder format
    if (mask === '3x1') {
      setSelectMask(<Mask3x1 />);
    }
    if (src) {
      setSelectSrc(process.env.api + src);
    }
  }, []);

  return (
    <div className={`${styles.MaskImage} ${className}`}>
      <Image
        src={selectSrc}
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        alt={alt}
      />
      {selectMask}
    </div>
  );
};

MaskImage.propTypes = {
  className: propTypes.string,
  mask: propTypes.string,
  src: propTypes.string,
  alt: propTypes.string,
};

MaskImage.defaultProps = {
  className: 'none',
  mask: '2x1',
  src: '/default/image.jpeg',
  alt: 'Тестовая подпись к медиа написанная специально для Melishev ™',
};

export default MaskImage;
