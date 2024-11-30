import styles from '../styles.module.scss';

const CustomerOrders = () => {
  const { orderContainer, orderTitle, orderMain, orderTable } = styles;
  return (
    <div className={orderContainer}>
      <div className={orderTitle}>
        <h2>Orders</h2>
      </div>
      <div className={orderMain}>
        <table className={orderTable}>
          <tbody>
            <tr>
              <td>#80294</td>
              <td>Today at 6:10</td>
              <td>Pending</td>
              <td>4 Items</td>
              <td>$320.00</td>
            </tr>
            <tr>
              <td>#80294</td>
              <td>Today at 6:10</td>
              <td>Pending</td>
              <td>4 Items</td>
              <td>$320.00</td>
            </tr>
            <tr>
              <td>#80294</td>
              <td>Today at 6:10</td>
              <td>Pending</td>
              <td>4 Items</td>
              <td>$320.00</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CustomerOrders;
