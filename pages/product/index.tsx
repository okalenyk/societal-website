import Marquee from 'react-fast-marquee';
import React from 'react';
import Image from 'next/image';
import Lottie from 'react-lottie';
import classNames from 'classnames';

import MainLayout from 'components/MainLayout';
import { Typography } from 'components/UI-kit/Typography';
import appStoreAnimationData from 'animation/app-store.json';
import discoverAnimationData from 'animation/discover-animation.json';

import CardTextMedia from 'components/CardTextMedia';
import {
  LOWER_MARQUEE_DATA,
  UPPER_MARQUEE_DATA,
  TEXT_TILES_PRODUCT_PAGE
} from 'constants/content-product-page';

import styles from './ProductPage.module.scss';

const ProductPage = () => {
  return (
    <MainLayout className={styles.layout} title="Product | Societal">
      <div className={styles.firstSlide}>
        <Typography
          variant="display1"
          className={classNames(styles.heading, styles.main)}
          data-text="The easiest place to organize, govern, and grow on-chain communities."
        >
          The easiest place to organize, govern, and grow on-chain communities.
        </Typography>
        <Image
          src="/images/product-page-hero-image.png"
          width={420}
          height={420}
          objectFit="contain"
        />
      </div>
      <div className={styles.marqueeWrapper}>
        <Marquee
          className={styles.marquee}
          gradient={false}
          direction="right"
          pauseOnHover
        >
          <div className={styles.chipsWrapper}>
            {UPPER_MARQUEE_DATA.map(el => (
              <div key={el} className={styles.chip}>
                <Typography variant="title3">{el}</Typography>
              </div>
            ))}
          </div>
        </Marquee>
        <Marquee
          gradient={false}
          direction="right"
          pauseOnHover
          className={styles.marquee}
        >
          <div className={classNames(styles.chipsWrapper, styles.last)}>
            {LOWER_MARQUEE_DATA.map(el => (
              <div key={el} className={styles.chip}>
                <Typography variant="title3">{el}</Typography>
              </div>
            ))}
          </div>
        </Marquee>
      </div>
      <div className={styles.cardsWrapper}>
        {TEXT_TILES_PRODUCT_PAGE.map(tile => (
          <CardTextMedia
            {...tile}
            isProductPage
            className={styles.card}
            key={tile.title}
          />
        ))}
      </div>
      <div className={styles.slide}>
        <Typography
          variant="h2"
          className={styles.heading}
          data-text='The "Shopify App Store" for Web3'
        >
          The &quot;Shopify App Store&quot; for Web3
        </Typography>
        <Typography variant="body1" className={styles.slideDescription}>
          On-chain management tooling can deploy on Societal’s EVM-compatible
          chain, empowering the creation of tailor-made community management
          systems.
        </Typography>
        <div className={styles.lottieWrapper}>
          <Lottie
            options={{
              autoplay: true,
              loop: true,
              animationData: appStoreAnimationData
            }}
          />
        </div>

        <Typography
          variant="h2"
          className={classNames(styles.heading, styles.futureDao)}
          data-text="Discover"
        >
          Discover
        </Typography>
        <Typography variant="body1" className={styles.slideDescription}>
          Find, follow, and join existing on-chain communities of all shapes and
          sizes. Help build Society 3.0.
        </Typography>
        <div className={styles.lottieWrapper}>
          <Lottie
            options={{
              autoplay: true,
              loop: true,
              animationData: discoverAnimationData
            }}
          />
        </div>
      </div>
    </MainLayout>
  );
};

export default ProductPage;
