import { useState } from 'react';
import styles from './styles.module.scss';
import Button from '@components/Button/Button';

const ProductForm = () => {
  const {
    containerForm,
    containerFormBody,
    boxForm,
    boxFormHeader,
    boxFormItem,
    boxVariants,
    boxSize,
    boxStock,
    boxAddSize,
    boxImage,
    selectInput,
  } = styles;

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [sizes, setSizes] = useState([{ size: 31, stock: '' }]);
  const [images, setImages] = useState([]);
  const [brand, setBrand] = useState('');
  const [category, setCategory] = useState('');

  const handleAddSize = () => {
    const newSize = sizes.length > 0 ? sizes[sizes.length - 1].size + 1 : 31; // Tăng size lên 1
    setSizes([...sizes, { size: newSize, stock: '' }]);
  };

  const handleRemoveSize = (index) => {
    const updatedSizes = sizes.filter((_, i) => i !== index);
    setSizes(updatedSizes);
  };

  const handleSizeChange = (index, e) => {
    const updatedSizes = [...sizes];
    updatedSizes[index][e.target.name] = e.target.value;
    setSizes(updatedSizes);
  };

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files); // Lấy danh sách các file
    const newImages = files.map((file) => URL.createObjectURL(file)); // Tạo URL cho mỗi file
    setImages((prevImages) => [...prevImages, ...newImages]); // Thêm vào danh sách ảnh
  };

  const handleRemoveImage = (index) => {
    setImages((prevImages) => prevImages.filter((_, i) => i !== index));
  };
  const handleAddProduct = (e) => {
    e.preventDefault();
    console.log({ title, description, price, images, brand, category, sizes });
  };

  return (
    <div className={containerForm}>
      <div className={containerFormBody}>
        <div className={boxForm}>
          <div className={boxFormHeader}>
            <h2>Basic Information</h2>
          </div>
          <form action=''>
            <div className={boxFormItem}>
              <label htmlFor=''>Title</label>
              <input
                type='text'
                placeholder='Enter title'
                onChange={(e) => setTitle(e.target.value)}
                value={title}
              />
            </div>
            <div className={boxFormItem}>
              <label htmlFor=''>Description</label>
              <textarea
                rows={5}
                cols={10}
                onChange={(e) => setDescription(e.target.value)}
                value={description}
              ></textarea>
            </div>
            <div className={boxFormItem}>
              <label htmlFor=''>Price</label>
              <input
                type='text'
                placeholder='Enter price'
                onChange={(e) => setPrice(e.target.value)}
                value={price}
              />
            </div>

            {/* Upload Image Section */}
            <div className={boxImage}>
              <label htmlFor='imageUpload'>Upload Images</label>
              <input
                type='file'
                id='imageUpload'
                accept='image/*'
                multiple // Cho phép tải lên nhiều ảnh
                onChange={handleImageUpload}
              />
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                {images?.map((img, index) => (
                  <div key={index} style={{ position: 'relative' }}>
                    <img src={img} alt='Uploaded' width='100' />
                    <button
                      type='button'
                      style={{
                        position: 'absolute',
                        top: '5px',
                        right: '5px',
                        background: 'red',
                        color: 'white',
                        border: 'none',
                        borderRadius: '50%',
                        cursor: 'pointer',
                      }}
                      onClick={() => handleRemoveImage(index)}
                    >
                      X
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Select Category */}
            <div className={boxFormItem}>
              <label htmlFor='category'>Category</label>
              <select
                id='category'
                name='category'
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className={selectInput}
              >
                <option value=''>Select Category</option>
                <option value='electronics'>Electronics</option>
                <option value='fashion'>Fashion</option>
                <option value='home-appliance'>Home Appliance</option>
                {/* Thêm các category khác nếu cần */}
              </select>
            </div>

            {/* Select Brand */}
            <div className={boxFormItem}>
              <label htmlFor='brand'>Brand</label>
              <select
                id='brand'
                name='brand'
                value={brand}
                onChange={(e) => setBrand(e.target.value)}
                className={selectInput}
              >
                <option value=''>Select Brand</option>
                <option value='apple'>Apple</option>
                <option value='samsung'>Samsung</option>
                <option value='nike'>Nike</option>
                {/* Thêm các brand khác nếu cần */}
              </select>
            </div>

            <div className={boxVariants}>
              <div className={boxSize}>
                {sizes.map((size, index) => (
                  <div key={index} className={boxStock}>
                    <span>Size {size.size}</span>
                    <input
                      type='number'
                      name='stock'
                      value={size.stock}
                      onChange={(e) => handleSizeChange(index, e)}
                      placeholder='Enter stock'
                    />
                    <button
                      type='button'
                      onClick={() => handleRemoveSize(index)}
                    >
                      X
                    </button>
                  </div>
                ))}
              </div>
              <div className={boxAddSize}>
                <button type='button' onClick={handleAddSize}>
                  Add Size
                </button>
              </div>
            </div>
            <Button
              content={'ADD PRODUCT'}
              onClick={handleAddProduct}
              type='submit'
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProductForm;
