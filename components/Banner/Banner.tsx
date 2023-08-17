import { JSX, PropsWithChildren } from 'react';
import cn from 'classnames';
import styles from './Banner.module.css';

export enum BannerTypes {
  error = 'error',
  info = 'info',
  success = 'success',
  warning = 'warning',
}

type BannerProps = {
  type: BannerTypes;
};

function ErrorIcon(): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className={styles.erroricon} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}

function InformationIcon(): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" className={styles.infoicon} viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}

function SuccessIcon(): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className={styles.successicon} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}

function WarningIcon(): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className={styles.warningicon} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
    </svg>
  );
}

function Banner(props: PropsWithChildren<BannerProps>): JSX.Element {
  const { type, children } = props;

  return (
    <div
      className={cn({
        [styles.success]: type === BannerTypes.success,
        [styles.error]: type === BannerTypes.error,
        [styles.info]: type === BannerTypes.info,
        [styles.warning]: type === BannerTypes.warning,
      })}
      role="alert"
    >
      <div className="flex items-center justify-between flex-wrap">
        <div className="w-0 flex-1 flex items-center">
          <span className="flex p-2">
            {type === BannerTypes.error && <ErrorIcon />}
            {type === BannerTypes.info && <InformationIcon />}
            {type === BannerTypes.success && <SuccessIcon />}
            {type === BannerTypes.warning && <WarningIcon />}
          </span>
          <p className="ml-3">{children}</p>
        </div>
      </div>
    </div>
  );
}
export default Banner;
