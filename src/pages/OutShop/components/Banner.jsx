import CountdownTimer from '@components/public/CountdownTimer/CountdownTimer';
import styles from '../style.module.scss';
import Button from '@components/Button/Button';

const Banner = () => {
  const { containerBanner, contentBox, title, countdownBox } = styles;
  const targetDate = '2025-12-31T00:00:00';

  return (
    <div className={containerBanner}>
      <div className={contentBox}>
        <div className={countdownBox}>
          <CountdownTimer targetDate={targetDate} />
        </div>
        <div className={title}>The Classic Make A Comback</div>
        <Button content={'Buy Now'} />
      </div>
    </div>
  );
};

export default Banner;
