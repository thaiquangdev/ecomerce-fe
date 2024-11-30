import styles from '../styles.module.scss';

const Transaction = ({ paymentMethod, paymentDate, amount }) => {
  const { itemContainer, itemHeader, tranTable, saTable } = styles;
  return (
    <div className={itemContainer}>
      <div className={itemHeader}>
        <h2>Transaction</h2>
      </div>
      <div className={tranTable}>
        <table className={saTable}>
          <tbody>
            <tr>
              <td>
                Payment <div>via {paymentMethod}</div>
              </td>
              <td>{paymentDate}</td>
              <td>${amount}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Transaction;
