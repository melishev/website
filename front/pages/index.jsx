import styles from './styles.module.scss';
import propTypes from 'prop-types';

import Layout from 'layouts/default';

import Link from 'next/link';

import { ReactSVG } from 'react-svg';

import { Lead, Text } from 'components/typography';

import { MaskImage } from 'components/utils';

import { fetchPageData } from 'utils/fetchPageData';

// Import Swiper React components
import SwiperCore, { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
// install Swiper modules
SwiperCore.use([Autoplay]);

function Home({ banner }) {
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
  };

  return (
    <>
      <Swiper {...sliderSettings} className={styles.Home_banner}>
        {banner.map((item) => (
          <SwiperSlide className={styles.Home_banner_slide} key={item.id}>
            <Link href={item.link}>
              <a>
                <MaskImage
                  mask="3x1"
                  src={item.media.url}
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
      <main className={styles.Home}>
        <Text>Привет</Text>
      </main>
    </>
  );
}

Home.propTypes = {
  banner: propTypes.arrayOf(propTypes.object).isRequired,
};

Home.getLayout = function getLayout(page) {
  return (
    <Layout>
      {page}
    </Layout>
  );
};

export async function getStaticProps() {
  const dataPage = await fetchPageData('main');

  const notFound = !dataPage;

  return {
    props: {
      ...dataPage,
    },
    notFound,
  };
}

export default Home;
