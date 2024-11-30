import { useEffect, useState } from 'react';
import styles from './styles.module.scss';
import Button from '@components/Button/Button';
import { getBrands } from '@/apis/brandService';
import { getCategories } from '@/apis/categoryService';
import { useNavigate } from 'react-router-dom';

const ProductForm = ({ product }) => {
  const {
    containerForm,
    containerFormBody,
    boxForm,
    boxFormHeader,
    boxFormItem,
    boxVariants,
    boxImage,
    selectInput,
    boxMain,
    boxLayout,
    boxSidebar,
    boxBtn,
  } = styles;

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [variants, setVariants] = useState([{ size: 28, stock: '', sku: '' }]);
  const [images, setImages] = useState([]);
  const [brand, setBrand] = useState('');
  const [category, setCategory] = useState('');

  const [brands, setBrands] = useState([]);
  const [categories, setCategories] = useState([]);

  const [brandPage, setBrandPage] = useState(1);
  const [categoryPage, setCategoryPage] = useState(1);
  const [hasMoreBrands, setHasMoreBrands] = useState(true);
  const [hasMoreCategories, setHasMoreCategories] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    if (product) {
      setTitle(product.title || '');
      setDescription(product.description || '');
      setPrice(product.price || '');
      setBrand(product.brandId);
      setCategory(product.categoryId);
      setImages(product.images);
      setVariants(product.variants);
    }
  }, [product]);

  // Fetch Brands
  useEffect(() => {
    const loadBrands = async () => {
      const query = { page: brandPage, limit: 8 };
      const res = await getBrands(query);
      if (res.brands.length < 8) setHasMoreBrands(false);
      setBrands((prev) => [...prev, ...res.brands]);
    };
    loadBrands();
  }, [brandPage]);

  // Fetch Categories
  useEffect(() => {
    const loadCategories = async () => {
      const query = { page: categoryPage, limit: 8 };
      const res = await getCategories(query);
      if (res.categories.length < 8) setHasMoreCategories(false);
      setCategories((prev) => [...prev, ...res.categories]);
    };
    loadCategories();
  }, [categoryPage]);

  const handleAddVariant = () => {
    const newSize =
      variants.length > 0 ? variants[variants.length - 1].size + 1 : 28; // Tăng size
    setVariants([...variants, { size: newSize, stock: '', sku: '' }]);
  };

  const handleRemoveVariant = (index) => {
    const updatedVariants = variants.filter((_, i) => i !== index);
    setVariants(updatedVariants);
  };

  const handleVariantChange = (index, e) => {
    const updatedVariants = [...variants];
    updatedVariants[index][e.target.name] = e.target.value;
    setVariants(updatedVariants);
  };

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    const newImages = files.map((file) => URL.createObjectURL(file));
    setImages((prevImages) => [...prevImages, ...newImages]);
  };

  const handleRemoveImage = (index) => {
    setImages((prevImages) => prevImages.filter((_, i) => i !== index));
  };

  const handleAddProduct = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('title', title);
    formData.append('description', description);
    formData.append('price', price);
    formData.append('images', images);
    formData.append('brand', brand);
    formData.append('category', category);
    formData.append('variants', variants);
    for (let [key, value] of formData.entries()) {
      console.log(`${key}: ${value}`);
    }
  };

  return (
    <div className={containerForm}>
      <div className={containerFormBody}>
        <div className={boxForm}>
          <div className={boxFormHeader}>
            <h2>Basic Information</h2>
          </div>
          <form>
            <div className={boxMain}>
              <div className={boxLayout}>
                {/* Title Input */}
                <div className={boxFormItem}>
                  <label htmlFor='title'>Title</label>
                  <input
                    type='text'
                    id='title'
                    placeholder='Enter title'
                    onChange={(e) => setTitle(e.target.value)}
                    value={title}
                  />
                </div>

                {/* Description Input */}
                <div className={boxFormItem}>
                  <label htmlFor='description'>Description</label>
                  <textarea
                    id='description'
                    rows={5}
                    placeholder='Enter description'
                    onChange={(e) => setDescription(e.target.value)}
                    value={description}
                  ></textarea>
                </div>

                {/* Price Input */}
                <div className={boxFormItem}>
                  <label htmlFor='price'>Price</label>
                  <input
                    type='number'
                    id='price'
                    placeholder='Enter price'
                    onChange={(e) => setPrice(e.target.value)}
                    value={price}
                  />
                </div>

                {/* Image Upload */}
                <div className={boxImage}>
                  <label htmlFor='imageUpload'>Upload Images</label>
                  <input
                    type='file'
                    id='imageUpload'
                    accept='image/*'
                    multiple
                    onChange={handleImageUpload}
                  />
                  <div
                    style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}
                  >
                    {images.map((img, index) => (
                      <div key={index} style={{ position: 'relative' }}>
                        <img
                          src={img.imageUrl || img}
                          alt='Uploaded'
                          width='100'
                        />
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
              </div>

              <div className={boxSidebar}>
                {/* Category Selection */}
                <div className={boxFormItem}>
                  <label htmlFor='category'>Category</label>
                  <select
                    id='category'
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className={selectInput}
                  >
                    <option value=''>Select Category</option>
                    {categories.map((item, index) => (
                      <option key={`${item.id}-${index}`} value={item.id}>
                        {item.categoryName}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Brand Selection */}
                <div className={boxFormItem}>
                  <label htmlFor='brand'>Brand</label>
                  <select
                    id='brand'
                    value={brand}
                    onChange={(e) => setBrand(e.target.value)}
                    className={selectInput}
                  >
                    <option value=''>Select Brand</option>
                    {brands.map((item, index) => (
                      <option key={`${item.id}-${index}`} value={item.id}>
                        {item.brandName}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* Variants */}
            <div className={boxVariants}>
              {variants.map((variant, index) => (
                <div
                  key={index}
                  style={{ display: 'flex', gap: '10px', alignItems: 'center' }}
                >
                  <input
                    type='number'
                    name='size'
                    value={variant.size}
                    readOnly
                  />
                  <input
                    type='number'
                    name='stock'
                    placeholder='Stock'
                    value={variant.stock}
                    onChange={(e) => handleVariantChange(index, e)}
                  />
                  <input
                    type='text'
                    name='sku'
                    placeholder='SKU'
                    value={variant.sku}
                    onChange={(e) => handleVariantChange(index, e)}
                  />
                  <Button
                    type='button'
                    onClick={() => handleRemoveVariant(index)}
                    content={'Remove'}
                  />
                </div>
              ))}
              <Button
                type='button'
                onClick={handleAddVariant}
                content={'Add Variant'}
              />
            </div>

            <div className={boxBtn}>
              <Button
                content={'ADD PRODUCT'}
                onClick={handleAddProduct}
                type='submit'
              />
              <Button
                content={'BACK TO LIST PRODUCT'}
                onClick={() => navigate('/dashboard/products')}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProductForm;
