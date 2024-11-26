import { useNavigate, useParams } from 'react-router-dom';
import styles from './styles.module.scss';
import { useEffect, useState } from 'react';
import { getCategory, updateCategory } from '@/apis/categoryService';
import { createCategory } from '@/apis/categoryService';
import TopHeader from '@components/admin/TopHeader/TopHeader';
import SidebarDashboard from '@components/admin/SidebarDashboard/SidebarDashboard';
import Button from '@components/Button/Button';

const Category = () => {
  const { slug } = useParams(); // Lấy slug từ URL
  const navigate = useNavigate();
  const { container, content, boxHeader } = styles;

  const [categoryName, setCategoryName] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Nếu có slug => Chế độ sửa
    if (slug) {
      setLoading(true);
      getCategory(slug) // API lấy thông tin brand theo slug
        .then((response) => {
          setCategoryName(response.category.categoryName);
        })
        .catch((error) => {
          console.error('Error fetching category:', error);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, [slug]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const payload = { categoryName: categoryName };
    setLoading(true);

    if (slug) {
      // Chế độ sửa
      updateCategory(payload, slug) // Cập nhật thông qua slug
        .then(() => {
          alert('Category updated successfully!');
          navigate('/dashboard/categories'); // Quay lại danh sách
        })
        .catch((error) => {
          console.error('Error updating category:', error);
        })
        .finally(() => {
          setLoading(false);
        });
    } else {
      // Chế độ thêm mới
      createCategory(payload)
        .then(() => {
          alert('Category added successfully!');
          navigate('/dashboard/categories'); // Quay lại danh sách
        })
        .catch((error) => {
          console.error('Error adding category:', error);
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
          <h1>{slug ? 'Edit Category' : 'Add Category'}</h1>
        </div>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor='categoryName'>Category Name:</label>
            <input
              type='text'
              id='categoryName'
              value={categoryName}
              onChange={(e) => setCategoryName(e.target.value)}
              placeholder='Enter category'
              disabled={loading}
              required
            />
          </div>
          <Button
            content={slug ? 'UPDATE CATEGORY' : 'ADD CATEGORY'}
            isDisabled={loading}
          />
        </form>
      </div>
    </div>
  );
};

export default Category;
