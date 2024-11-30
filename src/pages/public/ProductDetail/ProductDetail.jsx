import Header from '@components/public/Header/Header';
import styles from './styles.module.scss';
import Footer from '@components/public/Footer/Footer';
import MainLayout from '@components/public/Layout/Layout';
import { useNavigate, useParams } from 'react-router-dom';
import Button from '@components/Button/Button';
import { IoMdHeartEmpty } from 'react-icons/io';
import { TfiReload } from 'react-icons/tfi';
import { useEffect, useState } from 'react';
import { getProduct } from '@/apis/productService';
import classNames from 'classnames';
import ProductItem from '@components/public/ProductItem/ProductItem';
import Review from './components/Review';
const ProductDetail = () => {
  const {
    container,
    funcBox,
    specialText,
    btnBack,
    boxContent,
    boxImg,
    boxData,
    boxImgItem,
    itemImage,
    boxPrice,
    boxDes,
    boxSizeSelect,
    boxSizeList,
    boxSizeItem,
    clear,
    boxCart,
    boxQuantity,
    boxBtnCart,
    boxBtnWidget,
    boxBtnWidgetItem,
    boxInfo,
    disabled,
    selected,
    boxRelated,
    boxRelatedList,
  } = styles;
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [chooseSize, setChooseSize] = useState(null);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [stock, setStock] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const handleBackPreviousPage = () => {
    navigate(-1);
  };

  console.log(stock);

  const handlePlusQuantity = (e) => {
    e.preventDefault();
    if (quantity < stock) {
      setQuantity(quantity + 1);
    }
  };

  const handleMinusQuantity = (e) => {
    e.preventDefault();
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  const { slug } = useParams();

  useEffect(() => {
    getProduct(slug).then(
      (res) => {
        console.log(res);
        setProduct(res.product);
        setRelatedProducts(res.relatedProducts);
        if (res.product?.variants?.length > 0) {
          const firstVariant = res.product.variants[0];
          setChooseSize(firstVariant.size); // Set size mặc định
          setStock(firstVariant.stock); // Set stock mặc định
        }
      },
      (err) => {
        console.log(err);
      }
    );
  }, [slug]);

  return (
    <>
      <Header />
      <MainLayout>
        <div className={container}>
          <div className={funcBox}>
            <div>
              Home {'>'} <span className={specialText}>Shop</span>
            </div>
            <div className={btnBack} onClick={() => handleBackPreviousPage()}>
              Return to previous page
            </div>
          </div>
          <div className={boxContent}>
            <div className={boxImg}>
              {product?.images?.map((item) => (
                <div className={boxImgItem} key={item.id}>
                  <div className={itemImage}>
                    <img src={item.imageUrl} alt='' />
                  </div>
                </div>
              ))}
            </div>
            <div className={boxData}>
              <h1>{product?.title}</h1>
              <span className={boxPrice}>${product?.price}</span>
              <p className={boxDes}>{product?.description}</p>
              <form action=''>
                <div className={boxSizeSelect}>
                  <span>Size:</span>
                  <span>{chooseSize}</span>
                </div>
                <div className={boxSizeList}>
                  {product?.variants?.map((item) => (
                    <div
                      className={classNames(
                        boxSizeItem, // Lớp mặc định
                        {
                          [disabled]: item.stock === 0, // Nếu hết hàng thì thêm lớp 'disabled'
                          [selected]: chooseSize === item.size, // Nếu size đã được chọn thì thêm lớp 'selected'
                        }
                      )}
                      key={item.id}
                      onClick={() => {
                        setChooseSize(item.size); // Chọn size khi người dùng click
                        setStock(item.stock); // Cập nhật số lượng còn lại
                      }}
                    >
                      {item.size}
                    </div>
                  ))}
                  <div className={clear} onClick={() => setChooseSize('')}>
                    Clear
                  </div>
                </div>

                <div className={boxCart}>
                  <div className={boxQuantity}>
                    <Button content={'-'} onClick={handleMinusQuantity} />
                    <input type='number' value={quantity} />
                    <Button content={'+'} onClick={handlePlusQuantity} />
                  </div>
                  <div className={boxBtnCart}>
                    <Button content={'ADD TO CART'} />
                  </div>
                </div>
              </form>
              <div className={boxBtnWidget}>
                <div className={boxBtnWidgetItem}>
                  <IoMdHeartEmpty />
                </div>
                <div className={boxBtnWidgetItem}>
                  <TfiReload />
                </div>
              </div>
              <div className={boxInfo}>
                <div>
                  <span>Brand:</span>
                  <span>{product?.brand?.brandName}</span>
                </div>
                <div>
                  <span>SKU:</span>
                  <span>12345</span>
                </div>
                <div>
                  <span>Category:</span>
                  <span>{product?.category?.categoryName}</span>
                </div>
              </div>
            </div>
          </div>
          {/* review */}
          <Review />
          <div className={boxRelated}>
            <h2>Related products</h2>
            <div className={boxRelatedList}>
              {relatedProducts?.map((item) => (
                <ProductItem
                  key={item.id}
                  src={item.images[0].imageUrl}
                  prevSrc={item.images[1].imageUrl}
                  name={item.title}
                  price={item.price}
                  brand={item.brand.brandName}
                  details={item.variants}
                  isHomePage={false}
                  productId={item.id}
                  slug={item.slug}
                />
              ))}
            </div>
          </div>
        </div>
      </MainLayout>
      <Footer />
    </>
  );
};

export default ProductDetail;
