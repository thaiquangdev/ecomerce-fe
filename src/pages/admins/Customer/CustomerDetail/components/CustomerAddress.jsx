import styles from '../styles.module.scss';

const CustomerAddress = () => {
  const { orderContainer, orderTitle, orderMain, orderTable } = styles;
  return (
    <div className={orderContainer}>
      <div className={orderTitle}>
        <h2>Address</h2>
      </div>
      <div className={orderMain}>
        <table className={orderTable}>
          <tbody>
            <tr>
              <td>
                <div>Thái Mai Quang</div>
                <div>435 abc - adfasdf - VietNam</div>
              </td>
            </tr>
            <tr>
              <td>
                <div>Thái Mai Quang</div>
                <div>435 abc - adfasdf - VietNam</div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CustomerAddress;
