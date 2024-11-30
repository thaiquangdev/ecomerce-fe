import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getInfo } from '@/apis/authService';
import { ToastContext } from '@/contexts/ToastProvider';
import { StoreContext } from '@/contexts/StoreProvider';

const ProtectAdminRouter = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  const { toast } = useContext(ToastContext);
  const { setUserInfo } = useContext(StoreContext);

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (!token) {
      // Nếu không có token, điều hướng đến trang đăng nhập
      navigate('/admin/login');
      return;
    }

    // Kiểm tra thông tin người dùng
    getInfo()
      .then((res) => {
        if (res.data.user?.roleId !== 1) {
          // Nếu không phải admin, điều hướng đến trang không được phép
          toast.warning('You are not admin. Please login by admin');
          navigate('/');
        } else {
          // Nếu là admin, cho phép hiển thị nội dung
          setIsLoading(false);
          setUserInfo(res.data.user);
        }
      })
      .catch(() => {
        // Nếu lỗi xảy ra, điều hướng đến trang đăng nhập
        navigate('/admin/login');
      });
  }, [navigate]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  // Render nội dung con nếu người dùng là admin
  return <>{children}</>;
};

export default ProtectAdminRouter;
