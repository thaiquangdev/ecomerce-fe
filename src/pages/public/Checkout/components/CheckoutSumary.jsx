import styles from '../styles.module.scss';

const CheckoutSumary = ({ data }) => {
  const {
    orderSummary,
    orderHeader,
    orderItem,
    orderDetails,
    orderTotal,
    paymentOptions,
    placeOrderButton,
    productImage,
  } = styles;

  const total = data.reduce((sum, item) => {
    return sum + Number(item.totalPrice);
  }, 0);

  return (
    <div className={orderSummary}>
      <h3 className={orderHeader}>YOUR ORDER</h3>
      {data?.map((item) => (
        <div className={orderItem} key={item.id}>
          <img
            src={item.product.images[0].imageUrl}
            alt='Product'
            className={productImage}
          />
          <div className={orderDetails}>
            <p>{item.product.title}</p>
            <p>
              <select name='quantity' defaultValue='1'>
                {[1, 2, 3, 4, 5, 6, 7].map((item) => (
                  <option value={item} key={item}>
                    {item}
                  </option>
                ))}
              </select>{' '}
              × ${item.price}
            </p>
            <p>Size: {item.size}</p>
            <p>Subtotal: ${item.totalPrice}</p>
            <button className='remove'>Remove</button>
          </div>
        </div>
      ))}
      <hr />
      <div className={orderTotal}>
        <p>Subtotal</p>
        <p>${total}</p>
        <h4>TOTAL</h4>
        <h4>${total}</h4>
      </div>
      <hr />
      <div className={paymentOptions}>
        <label>
          <input type='radio' name='payment' value='check' defaultChecked />{' '}
          Check payments
          <p>
            Please send a check to Store Name, Store Street, Store Town, Store
            State / County, Store Postcode.
          </p>
        </label>
        <label>
          <input type='radio' name='payment' value='cash' /> Cash on delivery
        </label>
      </div>
      <button className={placeOrderButton}>PLACE ORDER</button>
    </div>
  );
};

export default CheckoutSumary;
