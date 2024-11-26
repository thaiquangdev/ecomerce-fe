import SidebarDashboard from '@components/admin/SidebarDashboard/SidebarDashboard';
import styles from './styles.module.scss';
import TopHeader from '@components/admin/TopHeader/TopHeader';
import ProductForm from './ProductForm';

const Product = () => {
  const { container, content, boxHeader } = styles;

  return (
    <div className={container}>
      <SidebarDashboard />
      <div className={content}>
        <TopHeader />
        <div className={boxHeader}>
          <h1>Edit product</h1>
        </div>
        <ProductForm />
      </div>
    </div>
  );
};

export default Product;
