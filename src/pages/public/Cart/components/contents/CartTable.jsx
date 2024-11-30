import Button from '@components/Button/Button';
import { VscTrash } from 'react-icons/vsc';
import styles from '../../styles.module.scss';
import SelectBox from '@pages/public/OutShop/components/SelectBox';

const CartTable = ({ listProductCarts, getData, getDataDelete }) => {
  const { carttable, product } = styles;

  const showOption = [
    {
      label: '1',
      value: 1,
    },
    {
      label: '2',
      value: 2,
    },
    {
      label: '3',
      value: 3,
    },
    {
      label: '4',
      value: 4,
    },
    {
      label: '5',
      value: 5,
    },
    {
      label: '6',
      value: 6,
    },
  ];

  const getValueSelect = (cdid, quantity) => {
    const data = { cdid, quantity };
    getData(data);
  };

  return (
    <div className={carttable}>
      <table>
        <thead>
          <tr>
            <th>PRODUCT</th>
            <th>PRICE</th>
            <th>SKU</th>
            <th>QUANTITY</th>
            <th>SUBTOTAL</th>
          </tr>
        </thead>
        <tbody>
          {listProductCarts.map((item) => (
            <tr key={item.id}>
              <td className={product}>
                <img src={item.product.images[0].imageUrl} alt='' />
                <div>
                  <p>{item.product.title}</p>
                  <p>Size: {item.size}</p>
                </div>
                <Button
                  content={<VscTrash />}
                  onClick={() => getDataDelete(item.id, item.productId)}
                />
              </td>
              <td>${item.price}</td>
              <td>${item.sku}</td>
              <td>
                <SelectBox
                  defaultValue={item.quantity}
                  options={showOption}
                  getValue={(e) => getValueSelect(item.id, e)}
                  type='show'
                />
              </td>
              <td>${item.price * item.quantity}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CartTable;
