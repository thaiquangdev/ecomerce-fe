import BoxIcon from './BoxIcon/BoxIcon';
import { dataBoxIcon, dataMenu } from './constant';
import Menu from './Menu/Menu';
import styles from './styles.module.scss';
import logo from '@icons/images/logo-retina.png';
import useScrollHandling from '@hooks/useScrollHandling';
import { useContext, useEffect, useState } from 'react';
import classNames from 'classnames';
import { SiderBarContext } from '@/contexts/SideBar';
import { TfiReload } from 'react-icons/tfi';
import { IoMdHeartEmpty } from 'react-icons/io';
import { BsCart } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const Header = () => {
  const {
    container,
    containerHeader,
    containerBoxIcon,
    containerMenu,
    containerBox,
    fixedHeader,
    topHeader,
    boxCart,
    quantity,
  } = styles;
  const { scrollPosition } = useScrollHandling();
  const [fixedHeaderPosition, setFixedHeaderPosition] = useState(false);

  const { setIsOpen, setType, listProductCarts, listProductWishlists } =
    useContext(SiderBarContext);

  const handleOpenSideBar = (type) => {
    setIsOpen(true);
    setType(type);
  };

  useEffect(() => {
    setFixedHeaderPosition(scrollPosition > 80);
  }, [scrollPosition]);
  return (
    <div
      className={classNames(container, topHeader, {
        [fixedHeader]: fixedHeaderPosition,
      })}
    >
      <div className={containerHeader}>
        <div className={containerBox}>
          <div className={containerBoxIcon}>
            {dataBoxIcon.map((item, index) => (
              <BoxIcon type={item.type} href={item.href} key={index} />
            ))}
          </div>
          <div className={containerMenu}>
            {dataMenu.slice(0, 3).map((item, index) => (
              <Menu key={index} content={item.content} href={item.href} />
            ))}
          </div>
        </div>
        <div>
          <Link to='/'>
            <img
              src={logo}
              alt='Logo'
              style={{ width: '153px', height: '53px' }}
            />
          </Link>
        </div>
        <div className={containerBox}>
          <div className={containerMenu}>
            {dataMenu.slice(3, dataMenu.length).map((item, index) => (
              <Menu key={index} content={item.content} href={item.href} />
            ))}
          </div>
          <div className={containerBoxIcon}>
            <TfiReload size={24} onClick={() => handleOpenSideBar('compare')} />
            <div className={boxCart}>
              <IoMdHeartEmpty
                size={24}
                onClick={() => handleOpenSideBar('wishlist')}
              />
              <div className={quantity}>{listProductWishlists.length}</div>
            </div>
            <div className={boxCart}>
              <BsCart size={24} onClick={() => handleOpenSideBar('cart')} />
              <div className={quantity}>{listProductCarts.length}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
