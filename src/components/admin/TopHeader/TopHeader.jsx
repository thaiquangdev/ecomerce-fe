import { RiMenu2Fill } from 'react-icons/ri';
import styles from './styles.module.scss';
import { FaCircleUser } from 'react-icons/fa6';
import { useContext } from 'react';
import { StoreContext } from '@/contexts/StoreProvider';
import Button from '@components/Button/Button';
import { logout } from '@/apis/authService';
import { useNavigate } from 'react-router-dom';

const TopHeader = () => {
  const { container, boxUser, boxUserContent, boxUserTitle } = styles;

  const { userInfo } = useContext(StoreContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout()
      .then((res) => {
        if (res.data.success) {
          navigate('/admin/login');
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

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
            <p>{userInfo.fullName}</p>
            <p>{userInfo.email}</p>
          </div>
        </div>
        {userInfo && (
          <div className={styles.logoutButton}>
            <Button content={'LOG OUT'} onClick={handleLogout} />
          </div>
        )}
      </div>
    </div>
  );
};

export default TopHeader;
