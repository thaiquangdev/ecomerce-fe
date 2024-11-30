import { useEffect, useState } from 'react';
import { getUsers } from '@/apis/userService';
import styles from './styles.module.scss';
import SidebarDashboard from '@components/admin/SidebarDashboard/SidebarDashboard';
import TopHeader from '@components/admin/TopHeader/TopHeader';
import DashboardLayout from '@components/admin/Layout/Layout';
import Button from '@components/Button/Button';
import DataTable from '@components/admin/DataTable/DataTable';
import { useNavigate } from 'react-router-dom';

const CustomerList = () => {
  const {
    container,
    content,
    layout,
    titleSection,
    tableContainer,
    searchBar,
  } = styles;

  const columns = [
    { header: 'ID', field: 'id' },
    { header: 'Name', field: 'fullName' },
    { header: 'Email', field: 'email' },
    { header: 'Registered', field: 'createdAt' },
    { header: 'Active', field: 'isActive' },
  ];

  const navigate = useNavigate();

  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    getUsers()
      .then((res) => {
        setCustomers(res.users);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleEdit = (row) => {
    navigate(`/dashboard/customers/${row.id}`);
  };

  return (
    <div className={container}>
      <SidebarDashboard />
      <div className={content}>
        <TopHeader />
        <DashboardLayout>
          <div className={layout}>
            <div className={titleSection}>
              <h1>Brands</h1>
              <Button content={'New Customer'} />
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
                data={customers}
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

export default CustomerList;
