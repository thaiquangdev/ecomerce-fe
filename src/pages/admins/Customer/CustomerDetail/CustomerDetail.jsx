import SidebarDashboard from '@components/admin/SidebarDashboard/SidebarDashboard';
import styles from './styles.module.scss';
import TopHeader from '@components/admin/TopHeader/TopHeader';
import DashboardLayout from '@components/admin/Layout/Layout';
import Button from '@components/Button/Button';
import { FaRegUserCircle } from 'react-icons/fa';
import CustomerOrders from './components/CustomerOrders';
import CustomerAddress from './components/CustomerAddress';

const CustomerDetail = () => {
  const {
    container,
    content,
    layout,
    titleSection,
    main,
    boxLeft,
    boxRight,
    icon,
    info,
    infoName,
    infoEmail,
    infoPhone,
  } = styles;
  return (
    <div className={container}>
      <SidebarDashboard />
      <div className={content}>
        <TopHeader />
        <DashboardLayout>
          <div className={layout}>
            <div className={titleSection}>
              <h1>Customer detail</h1>
              <Button content={'DELETE'} />
            </div>
            <div className={main}>
              <div className={boxLeft}>
                <div className={icon}>
                  <FaRegUserCircle size={50} />
                </div>
                <div className={info}>
                  <div className={infoName}>Thái Mai Quang</div>
                  <div className={infoEmail}>thaiquangqt2003@gmail.com</div>
                  <div className={infoPhone}>1237345</div>
                </div>
              </div>
              <div className={boxRight}>
                <CustomerOrders />
                <CustomerAddress />
              </div>
            </div>
          </div>
        </DashboardLayout>
      </div>
    </div>
  );
};

export default CustomerDetail;
