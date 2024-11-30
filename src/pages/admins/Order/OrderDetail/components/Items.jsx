import { Link } from 'react-router-dom';
import styles from '../styles.module.scss';

const Items = ({ cart }) => {
  const { itemContainer, itemHeader, itemTable, saTable, itemTitle } = styles;

  // tính total cart
  const handleTotalCart = () => {
    if (!cart?.details?.length) return 0; // Nếu không có sản phẩm trong giỏ, trả về 0

    const total = cart.details.reduce((sum, item) => {
      const itemTotal = parseFloat(item?.totalPrice) || 0; // Xử lý null/undefined và đảm bảo giá trị là số
      return sum + itemTotal;
    }, 0);

    return parseFloat(total.toFixed(2)); // Giới hạn 2 chữ số thập phân (nếu cần)
  };
  return (
    <div className={itemContainer}>
      <div className={itemHeader}>
        <h2>Items</h2>
      </div>
      <div className={itemTable}>
        <table className={saTable}>
          <tbody>
            {cart?.details.map((item) => (
              <tr key={item?.id}>
                <td>
                  <div className={itemTitle}>
                    <img
                      src={item.product.images[0].imageUrl}
                      alt=''
                      width={40}
                      height={40}
                    />
                    <Link to='#'>{item.product.title}</Link>
                  </div>
                </td>
                <td style={{ textAlign: 'end' }}>size:{item.size}</td>
                <td style={{ textAlign: 'end' }}>${item.price}</td>
                <td style={{ textAlign: 'end' }}>q:{item.quantity}</td>
                <td style={{ textAlign: 'end' }}>${item.totalPrice}</td>
              </tr>
            ))}
          </tbody>
          <tbody>
            <tr>
              <td colSpan={4}>Subtotal</td>
              <td style={{ textAlign: 'end' }}>${handleTotalCart()}</td>
            </tr>
            <tr>
              <td colSpan={4}>Total</td>
              <td style={{ textAlign: 'end' }}>${handleTotalCart()}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Items;
