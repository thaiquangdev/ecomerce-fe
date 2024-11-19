import { RiMenu2Fill } from 'react-icons/ri';
import styles from './styles.module.scss';
import { FaCircleUser } from 'react-icons/fa6';

const TopHeader = () => {
  const { container, boxUser, boxUserContent, boxUserTitle } = styles;
  return (
    <div className={container}>
      <div>
        <RiMenu2Fill size={20} />
      </div>
      <div className={boxUser}>
        <div className={boxUserContent}>
          <div>
            <FaCircleUser size={25} />
          </div>
          <div className={boxUserTitle}>
            <p>Mai Tài Phến</p>
            <p>thaiquangqt2003@gmail.com</p>
          </div>
        </div>
        <ul></ul>
      </div>
    </div>
  );
};

export default TopHeader;
