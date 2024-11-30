import styles from '../styles.module.scss';
import CheckoutForm from './CheckoutForm';
import CheckoutSumary from './CheckoutSumary';
import { useContext, useEffect, useState } from 'react';
import { SiderBarContext } from '@/contexts/SideBar';
import { getAddress } from '@/apis/userService';

const CheckoutContent = () => {
  const { containerContent } = styles;
  const { listProductCarts } = useContext(SiderBarContext);

  const [addresses, setAddresses] = useState(null);

  const handleFormSubmit = (formData) => {
    console.log('Form data:', formData);
  };

  useEffect(() => {
    getAddress()
      .then((res) => {
        console.log(res);
        setAddresses(res.addresses);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className={containerContent}>
      <CheckoutForm address={addresses} onSubmit={handleFormSubmit} />
      <CheckoutSumary data={listProductCarts} />
    </div>
  );
};

export default CheckoutContent;
