import styles from './styles.module.scss'

import axios from 'axios'

import Link from 'next/link'

import { ReactSVG } from 'react-svg'

// Import Swiper React components
import SwiperCore, { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
// install Swiper modules
SwiperCore.use([Autoplay]);

import { Lead } from 'components/typography'

import { MaskImage } from 'components/utils'

import { fetchPageData } from 'utils/fetchPageData'

function Home(props) {

  const sliderSettings = {
    spaceBetween: 0,
    slidesPerView: 1,
    loop: true,
    allowTouchMove: false,
    autoplay: {
      delay: 6000,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    },
    speed: 1200,
  }

  return (
    <main className={styles.Home}>
      <Swiper {...sliderSettings} className={styles.Home_banner} >
        {props.banner.map(item => (
          <SwiperSlide className={styles.Home_banner_slide} key={item.id}>
            <Link href={item.link}>
              <a>
                <MaskImage
                  src={`${process.env.api}${item.media.url}`}
                  mime={item.media.mime}
                />
                <div className={styles.Home_banner_slide_info}>
                  <Lead>{item.title}</Lead>
                  <ReactSVG src="/svg/arrowRight.svg" className={styles.Home_banner_slide_info_icon} />
                </div>
              </a>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
      <section>
          
      </section>
    </main>
  )
}

export async function getStaticProps() {

  const dataPage = await fetchPageData('main')
  
  const notFound = dataPage ? false : true

  return {
    props: {
      ...dataPage
    },
    notFound
  }
}

export default Home