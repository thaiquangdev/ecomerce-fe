import { useState, useEffect } from 'react';
import styles from '../styles.module.scss';
import Button from '@components/Button/Button';
import { createAddress } from '@/apis/userService';

const CheckoutForm = ({ address, onSubmit }) => {
  const { checkoutForm, formGroup, formRow, input, select, label, title } =
    styles;

  const [formData, setFormData] = useState({
    street: '',
    city: '',
    state: '',
    zipCode: '',
    type: '',
    phoneNumber: '',
    addressId: '',
    country: '',
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (address && address.length === 1) {
      setFormData((prevData) => ({
        ...prevData,
        addressId: address[0].id,
      }));
    }
  }, [address]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(''); // Reset error message
    setLoading(true); // Start loading state

    if (formData.addressId) {
      onSubmit({ addressId: formData.addressId });
    } else {
      const { addressId, ...data } = formData;
      createAddress(data)
        .then((res) => {
          setLoading(false);
          // Nếu cần, có thể reset form hoặc hiển thị thông báo thành công ở đây
          console.log(res);
        })
        .catch((err) => {
          setLoading(false);
          setError('Không thể tạo địa chỉ mới. Vui lòng thử lại!');
          console.log(err);
        });
    }
  };

  return (
    <div className={checkoutForm}>
      <h3 className={title}>Billing Details</h3>

      {address && address.length > 0 && (
        <div className={formGroup}>
          <label htmlFor='address' className={label}>
            Chọn Địa Chỉ
          </label>
          <select
            id='address'
            name='addressId'
            className={select}
            value={formData.addressId}
            onChange={handleChange}
          >
            <option value=''>Chọn Địa Chỉ</option>
            {address.map((item) => (
              <option value={item.id} key={item.id}>
                {item.street}
              </option>
            ))}
          </select>
        </div>
      )}

      {!formData.addressId && (
        <form onSubmit={handleSubmit}>
          <div className={formRow}>
            <label htmlFor='street' className={label}>
              Địa chỉ
            </label>
            <input
              type='text'
              id='street'
              name='street'
              value={formData.street}
              onChange={handleChange}
              className={input}
            />
          </div>
          <div className={formRow}>
            <label htmlFor='city' className={label}>
              Thành phố
            </label>
            <input
              type='text'
              id='city'
              name='city'
              value={formData.city}
              onChange={handleChange}
              className={input}
            />
          </div>
          <div className={formRow}>
            <label htmlFor='state' className={label}>
              Tỉnh/Thành Phố
            </label>
            <input
              type='text'
              id='state'
              name='state'
              value={formData.state}
              onChange={handleChange}
              className={input}
            />
          </div>
          <div className={formRow}>
            <label htmlFor='country' className={label}>
              Quốc gia
            </label>
            <input
              type='text'
              id='country'
              name='country'
              value={formData.country}
              onChange={handleChange}
              className={input}
            />
          </div>
          <div className={formRow}>
            <label htmlFor='zipCode' className={label}>
              Mã bưu điện
            </label>
            <input
              type='text'
              id='zipCode'
              name='zipCode'
              value={formData.zipCode}
              onChange={handleChange}
              className={input}
            />
          </div>
          <div className={formRow}>
            <label htmlFor='type' className={label}>
              Loại địa chỉ
            </label>
            <input
              type='text'
              id='type'
              name='type'
              value={formData.type}
              onChange={handleChange}
              className={input}
            />
          </div>
          <div className={formRow}>
            <label htmlFor='phoneNumber' className={label}>
              Số điện thoại
            </label>
            <input
              type='text'
              id='phoneNumber'
              name='phoneNumber'
              value={formData.phoneNumber}
              onChange={handleChange}
              className={input}
            />
          </div>
          {error && <div className='error-message'>{error}</div>}{' '}
          {/* Thông báo lỗi */}
          <div className={formGroup}>
            <Button type='submit' content={loading ? 'Đang Tạo...' : 'Gửi'} />
          </div>
        </form>
      )}
    </div>
  );
};

export default CheckoutForm;
