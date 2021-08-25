import styles from './styles.module.scss'

import Image from 'next/image'

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
				<video src={props.src} controls autoPlay></video>
			}
		</div>
	);
}

export default MaskImage
