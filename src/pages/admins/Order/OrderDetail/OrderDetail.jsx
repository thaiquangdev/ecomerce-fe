import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getDetailOrder } from '@/apis/orderService';
import styles from './styles.module.scss';
import SidebarDashboard from '@components/admin/SidebarDashboard/SidebarDashboard';
import TopHeader from '@components/admin/TopHeader/TopHeader';
import DashboardLayout from '@components/admin/Layout/Layout';
import Button from '@components/Button/Button';
import Items from './components/Items';
import Transaction from './components/Transaction';
import Customer from './components/Customer';
import ShippingAddress from './components/ShippingAddress';

const OrderDetail = () => {
  const {
    container,
    content,
    titleSection,
    boxBtn,
    subHeader,
    layoutBody,
    layoutMain,
    layoutSidebar,
  } = styles;
  const { id } = useParams();

  const [order, setOrder] = useState(null);

  useEffect(() => {
    getDetailOrder(id)
      .then((res) => {
        console.log(res);
        setOrder(res.order);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  return (
    <div className={container}>
      <SidebarDashboard />
      <div className={content}>
        <TopHeader />
        <DashboardLayout>
          <div className={titleSection}>
            <h1>Order #{id}</h1>
            <div className={boxBtn}>
              <Button content={'DELETE'} isPrimary={false} />
            </div>
          </div>
          <div className={subHeader}>
            <div>October 7, 2020 at 9:08 pm</div>
            <div>6 items</div>
            <div>Total $5,882.00</div>
            <div>
              <span>Shipping</span>
            </div>
          </div>
          <div className={layoutBody}>
            <div className={layoutMain}>
              <Items cart={order?.cart} />
              <Transaction
                paymentDate={order?.paymentDate}
                amount={order?.amount}
                paymentMethod={order?.paymentMethod}
              />
            </div>
            <div className={layoutSidebar}>
              <Customer
                fullName={order?.user?.fullName}
                email={order?.user?.email}
              />
              <ShippingAddress
                city={order?.address?.city}
                street={order?.address?.street}
                zipCode={order?.address?.zipCode}
                phoneNumber={order?.address?.phoneNumber}
                country={order?.address?.country}
              />
              <div>
                <h2>Status payment</h2>
                <select name='' id=''>
                  <option value='Pending'>Pending</option>
                  <option value='Processing'>Processing</option>
                  <option value='Shipping'>Shipping</option>
                  <option value='Completed'>Completed</option>
                  <option value='cancelled'>Cancelled</option>
                </select>
              </div>
            </div>
          </div>
        </DashboardLayout>
      </div>
    </div>
  );
};

export default OrderDetail;
