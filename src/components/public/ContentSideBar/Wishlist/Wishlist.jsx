import Button from '@components/Button/Button';
import HeaderSideBar from '../components/HeaderSideBar/HeaderSideBar';
import ItemProduct from '../components/ItemProduct/ItemProduct';
import styles from './styles.module.scss';
import { IoMdHeartEmpty } from 'react-icons/io';
import { useContext } from 'react';
import { SiderBarContext } from '@/contexts/SideBar';

const Wishlist = () => {
  const { container, boxContent, btn } = styles;
  const { listProductWishlists, isLoading } = useContext(SiderBarContext);
  return (
    <div className={container}>
      <div className={boxContent}>
        <HeaderSideBar
          icon={<IoMdHeartEmpty size={20} />}
          title={'WISHLIST'}
          type={'/wishlist'}
        />
        {isLoading
          ? 'Loading...'
          : listProductWishlists.map((item) => (
              <ItemProduct
                key={item.id}
                src={item.product.images[0].imageUrl}
                name={item.product.title}
                priceProduct={item.product.price}
                productId={item.ProductId}
              />
            ))}
      </div>
      <div className={btn}>
        <Button content={'VIEW WISHLIST'} />
        <Button content={'ADD ALL TO CART'} isPrimary={false} />
      </div>
    </div>
  );
};

export default Wishlist;
