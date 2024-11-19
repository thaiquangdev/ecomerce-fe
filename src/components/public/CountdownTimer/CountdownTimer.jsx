import { useEffect, useState } from 'react';
import styles from './styles.module.scss';

const CountdownTimer = ({ targetDate }) => {
  const { box, title } = styles;
  // Hàm tính toán thời gian còn lại
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        Days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        Hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        Mins: Math.floor((difference / (1000 * 60)) % 60),
        Secs: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft);

  // Cập nhật thời gian còn lại mỗi giây
  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft]);

  // Hàm định dạng số thành 2 chữ số
  const formatNumber = (number) => {
    return String(number).padStart(2, '0');
  };

  // Tạo các phần tử hiển thị thời gian
  const timeComponents = [];
  Object.keys(timeLeft).forEach((interval) => {
    if (timeLeft[interval] !== undefined) {
      timeComponents.push(
        <span key={interval} className={box}>
          {formatNumber(timeLeft[interval])}{' '}
          <span className={title}>{interval}</span>{' '}
        </span>
      );
    }
  });

  return timeComponents;
};

export default CountdownTimer;
