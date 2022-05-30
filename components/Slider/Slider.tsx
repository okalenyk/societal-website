/* eslint-disable no-param-reassign */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import React, { useEffect, useRef, useState } from 'react';
import { SwiperSlide, Swiper } from 'swiper/react';
import { EffectCoverflow, Navigation, SwiperOptions } from 'swiper';
import classNames from 'classnames';

import { ReactComponent as ArrowRight } from 'public/images/icons/arrow-next.svg';
import { ReactComponent as ArrowLeft } from 'public/images/icons/arrow-prev.svg';

import styles from './Slider.module.scss';
import { sliderItems } from '../../constants/landing-page';
import { Typography } from '../UI-kit/Typography';

import 'swiper/css';
import 'swiper/css/effect-coverflow';

const Slider = () => {
  const [vertical, setVertical] = useState(false);

  const handleResize = () => {
    setVertical(window.innerWidth > 1024);
  };

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
  });

  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const settings: SwiperOptions = {
    loop: true,
    speed: 1000,
    autoplay: {
      delay: 3000
    },
    effect: 'coverflow',
    grabCursor: true,
    direction: vertical ? 'vertical' : 'horizontal',
    centeredSlides: true,
    slidesPerView: 3,
    modules: [EffectCoverflow, Navigation],
    coverflowEffect: {
      rotate: 0,
      stretch: 60,
      depth: 200,
      modifier: 1,
      slideShadows: false
    },

    // Navigation arrows
    navigation: {
      nextEl: styles.arrowNext,
      prevEl: styles.arrowPrev
    }
  };

  return (
    <div
      className={classNames(styles.swiperWrapper, {
        [styles.vertical]: vertical
      })}
    >
      <Swiper
        className={classNames(styles.slider, {
          [styles.vertical]: vertical
        })}
        onInit={swiper => {
          if (swiper) {
            // @ts-ignore
            if (swiper.params?.navigation?.prevEl) {
              // @ts-ignore
              swiper.params.navigation.prevEl = prevRef.current;
            }
            // @ts-ignore
            if (swiper.params?.navigation?.nextEl) {
              // @ts-ignore
              swiper.params.navigation.nextEl = nextRef.current;
            }
            swiper.navigation.init();
            swiper.navigation.update();
          }
        }}
        {...settings}
      >
        {sliderItems.map((item, index) => (
          <SwiperSlide className={styles.item} key={item}>
            <div className={classNames(styles[`bg-${index + 1}`], styles.bg)} />
            <Typography variant="body1" className={styles.text}>
              {item}
            </Typography>
          </SwiperSlide>
        ))}
      </Swiper>
      <span
        className={classNames(styles.arrow, styles.arrowPrev)}
        ref={prevRef}
      >
        <ArrowLeft />
      </span>
      <span
        className={classNames(styles.arrow, styles.arrowNext)}
        ref={nextRef}
      >
        <ArrowRight />
      </span>
    </div>
  );
};

export default Slider;
