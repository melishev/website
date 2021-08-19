import styles from './styles.module.scss'

import Image from 'next/image'

import Mask3x1 from 'assets/svg/mask/3x1.svg'

const MaskImage = (props) => {

	return (
		<div className={styles.MaskImage}>
			{props.mime == 'image/jpeg' ?
				<Image
					src={props.src}
					layout="fill"
					objectFit="cover"
					objectPosition="center"
				/>
			:
				<video src={props.src} autoPlay></video>
			}
			<Mask3x1 className={styles.MaskImage} />
		</div>
	);
}

export default MaskImage
