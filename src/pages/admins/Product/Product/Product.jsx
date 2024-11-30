import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import SidebarDashboard from '@components/admin/SidebarDashboard/SidebarDashboard';
import TopHeader from '@components/admin/TopHeader/TopHeader';
import ProductForm from './ProductForm';
import { getProduct } from '@/apis/productService';
import styles from './styles.module.scss';

const Product = () => {
  const { container, content, boxHeader } = styles;

  const { slug } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Fetch product with slug
  useEffect(() => {
    if (slug) {
      setLoading(true);
      getProduct(slug)
        .then((res) => {
          setProduct(res.product); // Lưu dữ liệu sản phẩm
          setLoading(false);
        })
        .catch((err) => {
          setError('Failed to fetch product', err); // Xử lý lỗi
          setLoading(false);
        });
    }
  }, [slug]);

  return (
    <div className={container}>
      <SidebarDashboard />
      <div className={content}>
        <TopHeader />
        <div className={boxHeader}>
          <h1>{slug ? 'Edit Product' : 'Add New Product'}</h1>
        </div>
        {loading && <p>Loading...</p>}
        {error && <p className='error'>{error}</p>}
        {!loading && !error && <ProductForm product={product} />}
      </div>
    </div>
  );
};

export default Product;
