import Button from '@components/Button/Button';
import styles from '../../styles.module.scss';
import CartSumary from './CartSumary';
import CartTable from './CartTable';
import { VscTrash } from 'react-icons/vsc';
import { useContext } from 'react';
import { SiderBarContext } from '@/contexts/SideBar';
import { updateQuantityCartItem } from '@/apis/cartService';
import { toast } from 'react-toastify';
import { deleteCartItem } from '@/apis/cartService';
import { deleteAllCart } from '@/apis/cartService';

const Content = () => {
  const { containerContent, boxFooter, boxCoupon, boxBtnDelete } = styles;
  const { listProductCarts, handleGetListProductCarts } =
    useContext(SiderBarContext);

  const handleReplaceQuantity = (data) => {
    updateQuantityCartItem(data.cdid, data.quantity)
      .then((res) => {
        if (res.success) {
          toast.success('update quatity success');
          handleGetListProductCarts('cart');
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleDeleteItemCart = (cartId, productId) => {
    deleteCartItem(cartId, productId)
      .then((res) => {
        if (res.success) {
          toast.success('delete item is success');
          handleGetListProductCarts('cart');
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleDeleteCart = () => {
    console.log();
    deleteAllCart(listProductCarts[0].cart.id)
      .then((res) => {
        console.log(res);
        if (res.success) {
          toast.success('delete all item is success');
          handleGetListProductCarts('cart');
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className={containerContent}>
      <div>
        <CartTable
          listProductCarts={listProductCarts}
          getData={handleReplaceQuantity}
          getDataDelete={handleDeleteItemCart}
        />
        <div className={boxFooter}>
          <div className={boxCoupon}>
            <input type='text' placeholder='Coupon code' />
            <Button content={'OK'} isPrimary={false} />
          </div>
          <div className={boxBtnDelete}>
            <Button
              content={
                <div>
                  {' '}
                  <VscTrash /> CLEAR SHOPPING CART
                </div>
              }
              isPrimary={false}
              onClick={handleDeleteCart}
            />
          </div>
        </div>
      </div>
      <div style={{ flexGrow: 1 }}>
        <CartSumary />
      </div>
    </div>
  );
};

export default Content;
