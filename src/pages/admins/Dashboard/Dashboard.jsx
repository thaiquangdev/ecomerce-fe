import DashboardLayout from '@components/admin/Layout/Layout';
import SidebarDashboard from '@components/admin/SidebarDashboard/SidebarDashboard';
import TopHeader from '@components/admin/TopHeader/TopHeader';
import styles from './styles.module.scss';

const Dashboard = () => {
  const { container, boxContent, boxLayout } = styles;
  return (
    <div className={container}>
      <SidebarDashboard />
      <div className={boxContent}>
        <TopHeader />
        <DashboardLayout>
          <div className={boxLayout}></div>
        </DashboardLayout>
      </div>
    </div>
  );
};

export default Dashboard;
