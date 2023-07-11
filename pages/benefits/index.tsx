import React from 'react';
import classNames from 'classnames';
import Image from 'next/image';

import MainLayout from 'components/MainLayout';
import { Typography } from 'components/UI-kit/Typography';
import { BENEFITS_CARDS } from 'constants/content-benefits-page';
import CardTextMedia from 'components/CardTextMedia';

import styles from './BenefitsPage.module.scss';

const BenefitsPage = () => {
  return (
    <MainLayout title="Benefits | Societal">
      <div className={styles.mainSlide}>
        <Typography
          variant="display1"
          className={classNames(styles.heading, styles.main)}
          data-text="Bring on the Appchain Future"
        >
          Bring on the Appchain Future
        </Typography>
        <Image
          src="/images/benefits-page-hero.png"
          width={400}
          height={400}
          objectFit="contain"
        />
        <Typography variant="paragraph1" className={styles.heroDescription}>
          Societal is an application-specific blockchain, designed for the
          creation and management of on-chain communities.
        </Typography>
      </div>
      <div className={styles.cardsWrapper}>
        {BENEFITS_CARDS.map(card => (
          <CardTextMedia {...card} className={styles.card} key={card.title} />
        ))}
      </div>
      <div className={styles.slide}>
        <Typography
          variant="h4"
          className={classNames(styles.heading, styles.bottomTitle)}
          data-text="Societal’s composable and customizable solution is the ideal fit for all on-chain communities: 
          the creator economy, protocols, social clubs, gaming, DAOs, and more."
        >
          Societal’s composable and customizable solution is the ideal fit for
          all on-chain communities: the creator economy, protocols, social
          clubs, gaming, DAOs, and more.
        </Typography>
      </div>
    </MainLayout>
  );
};

export default BenefitsPage;
