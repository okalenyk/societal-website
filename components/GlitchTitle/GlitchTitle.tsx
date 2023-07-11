import React from 'react';
import classNames from 'classnames';
import { Typography } from '../UI-kit/Typography';

import styles from './GlitchTitle.module.scss';

interface GlitchTitleProps {
  className?: string;
}

const GlitchTitle = ({ className }: GlitchTitleProps) => {
  return (
    <div className={classNames(styles.root, className)}>
      <div className={styles.shadow} />
      <div className={styles.titles}>
        <Typography variant="headingXxl" glitch>
          HOMEBASE FOR
        </Typography>
        <Typography variant="headingXxl" glitch>
          EVERY WEB3 COMMUNITY
        </Typography>
      </div>
    </div>
  );
};

export default GlitchTitle;
