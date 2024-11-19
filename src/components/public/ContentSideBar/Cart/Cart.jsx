import Button from '@components/Button/Button';
import HeaderSideBar from '../components/HeaderSideBar/HeaderSideBar';
import ItemProduct from '../components/ItemProduct/ItemProduct';
import styles from './styles.module.scss';
import { BsCart } from 'react-icons/bs';
import { useContext } from 'react';
import { SiderBarContext } from '@/contexts/SideBar';
import classNames from 'classnames';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const navigate = useNavigate();
  const {
    container,
    subTotal,
    btn,
    isEmpty,
    boxEmpty,
    btnEmpty,
    containerListItem,
  } = styles;
  const { listProductCarts, isLoading, setIsOpen } =
    useContext(SiderBarContext);

  const handleNavigateToShop = () => {
    navigate('/shop');
    setIsOpen(false);
  };

  const handleNavigateToCartPage = () => {
    navigate('/cart');
    setIsOpen(false);
  };

  const subTotalPrice = listProductCarts.reduce((sum, item) => {
    return sum + Number(item.totalPrice);
  }, 0);

  return (
    <div
      className={classNames(container, { [isEmpty]: !listProductCarts.length })}
    >
      <HeaderSideBar icon={<BsCart size={20} />} title={'CART'} />
      {listProductCarts.length ? (
        <div className={containerListItem}>
          <div>
            {isLoading
              ? 'Loading...'
              : listProductCarts.map((item) => (
                  <ItemProduct
                    key={item.id}
                    src={item.product.images[0].imageUrl}
                    name={item.product.title}
                    priceProduct={item.price}
                    quantity={item.quantity}
                    sizeProduct={item.size}
                    cartId={item.cartId}
                    productId={item.productId}
                  />
                ))}
          </div>
          <div>
            <div className={subTotal}>
              <p>SUBTOTAL:</p>
              <p>${subTotalPrice}</p>
            </div>

            <div className={btn}>
              <Button
                content={'VIEW CART'}
                onClick={handleNavigateToCartPage}
              />
              <Button content={'CHECKOUT'} isPrimary={false} />
            </div>
          </div>
        </div>
      ) : (
        <div className={boxEmpty}>
          <div>No products in the cart</div>
          <div className={btnEmpty}>
            <Button
              content={'RETURN TO THE SHOP'}
              isPrimary={false}
              onClick={handleNavigateToShop}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
