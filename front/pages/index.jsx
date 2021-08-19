import styles from './styles.module.scss'

import axios from 'axios'

import { ReactSVG } from 'react-svg'

// Import Swiper React components
import SwiperCore, { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
// install Swiper modules
SwiperCore.use([Autoplay]);

import { Lead } from 'components/typography'

import { MaskImage } from 'components/utils'

function Home(props) {

  const sliderSettings = {
    spaceBetween: 0,
    slidesPerView: 1,
    loop: true,
    allowTouchMove: false,
    autoplay: {
      delay: 6000,
      pauseOnMouseEnter: true,
    },
    speed: 1200,
  }

  return (
    <main className={styles.Home}>
      <Swiper {...sliderSettings} className={styles.Home_banner} >
        {props.banner.map( item => (
          <SwiperSlide key={item.id}>
            <MaskImage
              src={`${process.env.api}${item.media.url}`}
              mime={item.media.mime}
            />
            <div className={styles.Home_banner_slide_info}>
              <Lead>{item.title}</Lead>
              <ReactSVG src="/svg/arrowRight.svg" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </main>
  )
}

export async function getStaticProps() {

  const { data } = await axios.get(`${process.env.api}/main-page`)

  return {
    props: data,
  }
}

export default Home