import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import TopHeader from '@components/admin/TopHeader/TopHeader';
import SidebarDashboard from '@components/admin/SidebarDashboard/SidebarDashboard';
import Button from '@components/Button/Button';
import styles from './styles.module.scss';
import { getBrand, updateBrand } from '@/apis/brandService';
import { createBrand } from '@/apis/brandService';

const Brand = () => {
  const { slug } = useParams(); // Lấy slug từ URL
  const navigate = useNavigate();
  const { container, content, boxHeader } = styles;

  const [brandName, setBrandName] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Nếu có slug => Chế độ sửa
    if (slug) {
      setLoading(true);
      getBrand(slug) // API lấy thông tin brand theo slug
        .then((response) => {
          setBrandName(response.brand.brandName);
        })
        .catch((error) => {
          console.error('Error fetching brand:', error);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, [slug]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const payload = { brandName: brandName };
    setLoading(true);

    if (slug) {
      // Chế độ sửa
      updateBrand(payload, slug) // Cập nhật thông qua slug
        .then(() => {
          alert('Brand updated successfully!');
          navigate('/dashboard/brands'); // Quay lại danh sách
        })
        .catch((error) => {
          console.error('Error updating brand:', error);
        })
        .finally(() => {
          setLoading(false);
        });
    } else {
      // Chế độ thêm mới
      createBrand(payload)
        .then(() => {
          alert('Brand added successfully!');
          navigate('/dashboard/brands'); // Quay lại danh sách
        })
        .catch((error) => {
          console.error('Error adding brand:', error);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  };

  return (
    <div className={container}>
      <SidebarDashboard />
      <div className={content}>
        <TopHeader />
        <div className={boxHeader}>
          <h1>{slug ? 'Edit Brand' : 'Add Brand'}</h1>
        </div>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor='brandName'>Brand Name:</label>
            <input
              type='text'
              id='brandName'
              value={brandName}
              onChange={(e) => setBrandName(e.target.value)}
              placeholder='Enter brand'
              disabled={loading}
              required
            />
          </div>
          <Button
            content={slug ? 'UPDATE BRAND' : 'ADD BRAND'}
            isDisabled={loading}
          />
        </form>
      </div>
    </div>
  );
};

export default Brand;
