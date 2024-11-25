import Button from '@components/Button/Button';
import styles from '../../styles.module.scss';
import classNames from 'classnames';
import { useContext } from 'react';
import { SiderBarProvider } from 'src/contexts/SideBar';

const CartSumary = () => {
  const {
    containerSumary,
    title,
    boxTotal,
    buttons,
    price,
    subTotal,
    totals,
    containerMethods,
    titleMethods,
    containerRight,
    boxImgMethods,
    imgMethods,
    textSecure,
  } = styles;

  const srcMethods = [
    'https://xstore.8theme.com/elementor2/marseille04/wp-content/themes/xstore/images/woocommerce/payment-icons/visa.jpeg',
    'https://xstore.8theme.com/elementor2/marseille04/wp-content/themes/xstore/images/woocommerce/payment-icons/master-card.jpeg',
    'https://xstore.8theme.com/elementor2/marseille04/wp-content/themes/xstore/images/woocommerce/payment-icons/paypal.jpeg',
    'https://xstore.8theme.com/elementor2/marseille04/wp-content/themes/xstore/images/woocommerce/payment-icons/american-express.jpeg',
    'https://xstore.8theme.com/elementor2/marseille04/wp-content/themes/xstore/images/woocommerce/payment-icons/maestro.jpeg',
    'https://xstore.8theme.com/elementor2/marseille04/wp-content/themes/xstore/images/woocommerce/payment-icons/bitcoin.jpeg',
  ];

  const { listProductCarts } = useContext(SiderBarProvider);

  const total = listProductCarts.reduce((sum, item) => {
    return sum + Number(item.totalPrice);
  }, 0);

  return (
    <div className={containerRight}>
      <div className={containerSumary}>
        <div className={title}>CART TOTALS</div>
        <div className={classNames(boxTotal, subTotal)}>
          <div>Subtotal</div>
          <div className={price}>${total}</div>
        </div>
        <div className={classNames(boxTotal, totals)}>
          <div>Total</div>
          <div>${total}</div>
        </div>

        <div className={buttons}>
          <Button content={'PROCESS TO CHECKOUT'} />
          <Button content={'CONTINUTE SHOPPING'} isPrimary={false} />
        </div>
      </div>

      <div className={containerMethods}>
        <div className={titleMethods}>
          Guaranteed <span>safe</span> checkout
        </div>
        <div className={boxImgMethods}>
          {srcMethods.map((item, key) => (
            <img src={item} key={key} alt='' className={imgMethods} />
          ))}
        </div>
      </div>
      <div className={textSecure}>Your Payment is 100% Secure</div>
    </div>
  );
};

export default CartSumary;
