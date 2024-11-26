import styles from './styles.module.scss';
import compareIcon from '@icons/svgs/compareIcon.svg';
import heartIcon from '@icons/svgs/heartIcon.svg';
import cartIcon from '@icons/svgs/cartIcon.svg';
import eyeIcon from '@icons/svgs/eyeIcon.svg';
import Button from '@components/Button/Button';
import classNames from 'classnames';
import { useContext, useEffect, useState } from 'react';
import { OurShopContext } from '@/contexts/OurShopProvider';
import { SiderBarContext } from '@/contexts/SideBar';
import { ToastContext } from '@/contexts/ToastProvider';
import { addToCart } from '@/apis/cartService';
import { addToWishlist } from '@/apis/wishlistService';
import { deleteWishlist } from '@/apis/wishlistService';
import { Link } from 'react-router-dom';

const ProductItem = ({
  src,
  prevSrc,
  brand,
  name,
  price,
  details,
  isHomePage = true,
  productId,
  slug,
}) => {
  const {
    boxImg,
    showImgWhenHover,
    showFunctionWhenHover,
    boxIcon,
    title,
    priceCl,
    boxSize,
    size,
    brandCl,
    btn,
    textCenter,
    content,
    containerItem,
    isActiveSize,
    btnClear,
    boxNoWishlist,
    boxWishlist,
  } = styles;
  // const { isShowGrid } = useContext(OurShopContext);
  const [sizeChoose, setSizeChoose] = useState('');
  const ourShopStore = useContext(OurShopContext);
  const [isShowGrid, setIsShowGrid] = useState(ourShopStore?.isShowGrid);
  const [isSetWishlist, setIsSetWishlist] = useState(false);
  const token = localStorage.getItem('token');
  const {
    setIsOpen,
    setType,
    handleGetListProductCarts,
    handleGetListProductWishlists,
    listProductWishlists,
    setDetailProductSlug,
  } = useContext(SiderBarContext);
  const { toast } = useContext(ToastContext);

  const handleChooseSize = (size) => {
    setSizeChoose(size);
  };

  const handleClearChooseSize = () => {
    setSizeChoose('');
  };

  const handleAddToCart = () => {
    if (!token) {
      setIsOpen(true);
      setType('login');
      toast.warning('please login to add product to cart');
      return;
    }

    if (!sizeChoose) {
      toast.warning('please choose size');
      return;
    }

    const data = {
      productId: productId,
      quantity: 1,
      size: sizeChoose,
      price,
    };

    addToCart(data).then(
      (res) => {
        toast.success(res.message);
        setIsOpen(true);
        setType('cart');
        handleGetListProductCarts('cart');
      },
      (err) => {
        console.log(err);
        toast.error('Add to cart is error');
      }
    );
  };

  const handleAddToWishlist = () => {
    if (!token) {
      setIsOpen(true);
      setType('wishlist');
      toast.warning('please login to add product to wishlist');
      return;
    }

    if (!isSetWishlist) {
      console.log(productId);
      addToWishlist(productId).then(
        (res) => {
          console.log(res);
          setIsSetWishlist(true);
          setIsOpen(true);
          setType('wishlist');
          handleGetListProductWishlists('wishlist');
        },
        (err) => {
          console.log(err);
          toast.error('Add to wishlist is error');
        }
      );
    } else {
      deleteWishlist(productId).then(
        (res) => {
          console.log(res);
          setIsSetWishlist(false);
          handleGetListProductWishlists('wishlist');
        },
        (err) => {
          console.log(err);
          toast.error('Remove wishlist is error');
        }
      );
    }
  };

  const handleShowDetailProductSideBar = () => {
    setIsOpen(true);
    setType('detail');
    setDetailProductSlug(slug);
  };

  useEffect(() => {
    const handleChangeWishlist = () => {
      const wishlists = listProductWishlists.map((item) => item.productId);
      if (wishlists.includes(productId)) {
        setIsSetWishlist(true);
      }
    };
    handleChangeWishlist();
  }, [productId]);

  useEffect(() => {
    if (isHomePage) {
      setIsShowGrid(true);
    } else {
      setIsShowGrid(ourShopStore?.isShowGrid);
    }
  }, [isHomePage, ourShopStore?.isShowGrid]);

  return (
    <div className={isShowGrid ? '' : containerItem}>
      <div>
        <div className={boxImg}>
          <Link to={`/product/${slug}`} style={{ display: 'block' }}>
            <img src={src} alt='' />
            <img src={prevSrc} alt='' className={showImgWhenHover} />
          </Link>
          <div className={showFunctionWhenHover}>
            <div className={boxIcon}>
              <img src={cartIcon} alt='' />
            </div>
            <div
              className={classNames(boxIcon, {
                [boxNoWishlist]: !isSetWishlist,
                [boxWishlist]: isSetWishlist,
              })}
              onClick={() => handleAddToWishlist()}
            >
              <img src={heartIcon} alt='' />
            </div>
            <div className={boxIcon}>
              <img src={compareIcon} alt='' />
            </div>
            <div className={boxIcon} onClick={handleShowDetailProductSideBar}>
              <img src={eyeIcon} alt='' />
            </div>
          </div>
        </div>
        <div className={isShowGrid ? '' : content}>
          {!isHomePage && (
            <div className={boxSize}>
              {details.map((item) => (
                <div
                  key={item.sku}
                  className={classNames(size, {
                    [isActiveSize]: sizeChoose === item.size,
                  })}
                  onClick={() => handleChooseSize(item.size)}
                >
                  {item.size}
                </div>
              ))}
            </div>
          )}
          {sizeChoose && (
            <div className={btnClear} onClick={() => handleClearChooseSize()}>
              Clear
            </div>
          )}
          <Link
            to={`/product/${slug}`}
            style={{ display: 'block', textDecoration: 'none' }}
            className={classNames(title, { [textCenter]: !isHomePage })}
          >
            {name}
          </Link>
          {!isHomePage && <div className={brandCl}>{brand}</div>}
          <div className={classNames(priceCl, { [textCenter]: !isHomePage })}>
            ${price}
          </div>
          {!isHomePage && (
            <div className={btn}>
              <Button
                content={'ADD TO CART'}
                onClick={() => handleAddToCart()}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
