/* eslint-disable react/no-danger */
import React, { useState } from 'react';
import classNames from 'classnames';
import jsonp from 'jsonp';

import { Typography } from 'components/UI-kit/Typography';
import Button from 'components/UI-kit/Button';
import { Input } from 'components/UI-kit/Input';
import { POST_URL, STATUS_COLORS } from './constants';

import styles from './SubscribeSection.module.scss';

type SubscriptionStatus = 'sending' | 'error' | 'success' | null;
type ResponseData = { msg: string; result?: 'success' };

const SubscribeSection: React.FC = () => {
  const [status, setStatus] = useState<SubscriptionStatus>(null);
  const [message, setMessage] = useState<string>('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setStatus('sending');
    setMessage('...sending');

    const form = e.currentTarget;
    const target = e.target as typeof e.target & {
      email: { value: string };
    };

    const url = POST_URL.replace('/post?', '/post-json?');
    const params = new URLSearchParams({
      MERGE0: target.email.value
    }).toString();

    const handleResponse = (err: Error, data: ResponseData) => {
      if (err) {
        setStatus('error');
        setMessage(err.toString());
      } else if (data.result !== 'success') {
        setStatus('error');
        setMessage(data.msg);
      } else {
        setStatus('success');
        setMessage(data.msg);

        setTimeout(() => {
          setStatus(null);
          setMessage('');
          form.reset();
        }, 2000);
      }
    };

    jsonp(`${url}&${params}`, { param: 'c' }, (err: unknown, data: unknown) =>
      handleResponse(err as Error, data as ResponseData)
    );
  };

  return (
    <section className={styles.root}>
      <Typography variant="h2" glitch>
        Ready to join Society 3.0?
      </Typography>
      <Typography variant="body1" className={styles.description}>
        Connect with Societal
      </Typography>
      <form onSubmit={handleSubmit}>
        <div className={styles.row}>
          <Input
            className={classNames(styles.input, styles.emailInput)}
            type="email"
            name="email"
            required
            placeholder="Enter your email address"
            helperText={message}
            helperTextColor={status ? STATUS_COLORS[status] : undefined}
          />
          <Button
            type="submit"
            variant="primary"
            className={styles.ctaBtn}
            disabled={status === 'sending'}
          >
            Join the list
          </Button>
        </div>
      </form>
    </section>
  );
};

export default SubscribeSection;
