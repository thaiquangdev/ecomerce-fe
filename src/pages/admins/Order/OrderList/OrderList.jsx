import SidebarDashboard from '@components/admin/SidebarDashboard/SidebarDashboard';
import styles from './styles.module.scss';
import TopHeader from '@components/admin/TopHeader/TopHeader';
import DashboardLayout from '@components/admin/Layout/Layout';
import { useEffect, useState } from 'react';
import { getAllOrdersForAdmin } from '@/apis/orderService';
import DataTable from '@components/admin/DataTable/DataTable';
import { useNavigate } from 'react-router-dom';

const OrderList = () => {
  const {
    container,
    content,
    layout,
    titleSection,
    tableContainer,
    searchBar,
  } = styles;

  const navigate = useNavigate();

  const columns = [
    { header: 'Number', field: 'id' },
    { header: 'Date', field: 'paymentDate' },
    { header: 'Customer', field: 'user' },
    { header: 'Status', field: 'paymentStatus' },
    { header: 'Items', field: 'cart' },
    { header: 'Total', field: 'amount' },
  ];

  const [orders, setOrders] = useState([]);

  useEffect(() => {
    getAllOrdersForAdmin()
      .then((res) => {
        console.log(res);
        setOrders(res.orders);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleEdit = (row) => {
    navigate(`/dashboard/orders/${row.id}`);
  };

  return (
    <div className={container}>
      <SidebarDashboard />
      <div className={content}>
        <TopHeader />
        <DashboardLayout>
          <div className={layout}>
            <div className={titleSection}>
              <h1>Orders</h1>
            </div>
            <div className={tableContainer}>
              <div className={searchBar}>
                <input
                  placeholder='Start typing to search for customer'
                  value={name}
                  //   onChange={(e) => handleSearchTitle(e.target.value)}
                  //   onKeyDown={(e) => {
                  //     if (e.key === 'Enter') {
                  //       handleSearchTitle(e.target.value);
                  //     }
                  //   }}
                />
              </div>
              <DataTable
                columns={columns}
                data={orders}
                onEdit={handleEdit}
                // onDelete={handleDelete}
              />
            </div>
          </div>
        </DashboardLayout>
      </div>
    </div>
  );
};

export default OrderList;
