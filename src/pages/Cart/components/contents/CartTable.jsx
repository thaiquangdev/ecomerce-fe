import Button from '@components/Button/Button';
import { VscTrash } from 'react-icons/vsc';
import styles from '../../styles.module.scss';
import SelectBox from '@pages/OutShop/components/SelectBox';

const CartTable = () => {
  const { carttable, product } = styles;
  const cartItems = [
    {
      id: 1,
      name: 'adsfasdfasdf',
      price: 123,
      size: 'M',
      quantity: 1,
      image:
        'https://xstore.8theme.com/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image-1.1-min.jpg',
    },
    {
      id: 1,
      name: 'adsfasdfasdf',
      price: 123,
      size: 'M',
      quantity: 1,
      image:
        'https://xstore.8theme.com/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image-1.1-min.jpg',
    },
    {
      id: 1,
      name: 'adsfasdfasdf',
      price: 123,
      size: 'M',
      quantity: 1,
      image:
        'https://xstore.8theme.com/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image-1.1-min.jpg',
    },
  ];

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

  const getValueSelect = (value, type) => {
    console.log({ value, type });
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
          {cartItems.map((item) => (
            <tr key={item.id}>
              <td className={product}>
                <img src={item.img} alt='' />
                <div>
                  <p>{item.name}</p>
                  <p>Size: {item.size}</p>
                </div>
                <Button content={<VscTrash />} />
              </td>
              <td>${item.price}</td>
              <td>${item.sku}</td>
              <td>
                <SelectBox
                  options={showOption}
                  getValue={getValueSelect}
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
