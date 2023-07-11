import React from 'react';
import Image from 'next/image';

import MainLayout from 'components/MainLayout';
import { Typography } from 'components/UI-kit/Typography';
import { CARDS_HOME_PAGE } from 'constants/content-home-page';
import CardHomePage from 'components/CardHomePage';
import { SubscribeSection } from 'components/SubscribeSection';
import GlitchTitle from 'components/GlitchTitle';

import styles from './Home.module.scss';

const Home = () => {
  return (
    <MainLayout className={styles.layout} title="Societal">
      <GlitchTitle className={styles.bannerTitle} />
      <div className={styles.heroImage}>
        <Image
          src="/images/home-page-illustration.png"
          layout="responsive"
          width={2880}
          height={2286}
          quality={90}
          objectFit="contain"
          priority
        />
      </div>
      <div className={styles.contentContainer}>
        <Typography variant="h2" className={styles.title}>
          Societal is the easiest place to organize, govern, and grow on-chain
          communities.
        </Typography>
        <div className={styles.cardsContainer}>
          {CARDS_HOME_PAGE.map(card => (
            <CardHomePage {...card} key={card.href} />
          ))}
        </div>
      </div>
      <SubscribeSection />
    </MainLayout>
  );
};

export default Home;
