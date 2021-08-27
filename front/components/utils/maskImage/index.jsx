import styles from './styles.module.scss'
import propTypes from 'prop-types'

import Image from 'next/image'

import Mask2x1 from 'assets/svg/mask2x1.svg'
import Mask3x1 from 'assets/svg/mask3x1.svg'

const MaskImage = ({ className, mask, src, alt }) => {

	// Set Mask and Placeholder format
	if (mask === '2x1') {
		var mask = <Mask2x1 />
	} else if (mask === '3x1') {
		var mask = <Mask3x1 />
	}
	
	return (
		<div className={styles.MaskImage + ' ' + className}>
			<Image
				src={process.env.api + src}
				layout="fill"
				objectFit="cover"
				objectPosition="center"
				alt={alt}
			/>
			{mask}
		</div>
	);
}

MaskImage.propTypes = {
	mask: propTypes.string,
	src: propTypes.string,
	alt: propTypes.string,
}

MaskImage.defaultProps = {
	mask: '2x1',
  src: '/default/img/adrianna.jpeg',
	alt: 'Тестовая подпись к медиа написанная специально для Melishev ™',
}

export default MaskImage
