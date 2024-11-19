import { useContext, useState } from 'react';
import styles from '../styles.module.scss';
import { SiderBarContext } from '@/contexts/SideBar';
import { StoreContext } from '@/contexts/StoreProvider';
import { logout } from '@/apis/authService';
import { Link, useNavigate } from 'react-router-dom';
import { SearchContext } from '@/contexts/SearchProvider';

const Menu = ({ content, href }) => {
  const { menu, subMenu } = styles;
  const { setIsOpen, setType } = useContext(SiderBarContext);
  const { setIsSearchVisiable, isSearchVisiable } = useContext(SearchContext);
  const { userInfo, setUserInfo } = useContext(StoreContext);
  const [isShowSubMenu, setIsShowSubMenu] = useState(false);
  const navigate = useNavigate();

  const handleClickShowLogin = () => {
    if (content === 'Sign in' && !userInfo) {
      setIsOpen(true);
      setType('login');
    }

    if (content === 'Our Shop') {
      navigate('/shop');
    }

    if (content === 'Search') {
      setIsSearchVisiable(true);
      console.log(isSearchVisiable);
    }
  };

  const handleRenderText = () => {
    return content === 'Sign in' && userInfo
      ? `Hello ${userInfo.fullName}`
      : content;
  };

  const handleHover = () => {
    if (content === 'Sign in' && userInfo) {
      setIsShowSubMenu(true);
    }
  };

  const handleLogout = () => {
    logout()
      .then(() => {
        localStorage.removeItem('token');
        setUserInfo(null);
        setIsShowSubMenu(false);
      })
      .catch((error) => {
        console.log('Logout failed: ', error);
      });
  };

  return (
    <Link
      to={href}
      className={menu}
      onMouseEnter={handleHover}
      onClick={handleClickShowLogin}
    >
      {handleRenderText()}
      {isShowSubMenu && (
        <div
          className={subMenu}
          onMouseLeave={() => setIsShowSubMenu(false)}
          onClick={handleLogout}
        >
          LOG OUT
        </div>
      )}
    </Link>
  );
};

export default Menu;
