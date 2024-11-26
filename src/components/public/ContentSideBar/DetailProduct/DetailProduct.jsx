import { useContext, useEffect, useState } from 'react';
import styles from './styles.module.scss';
import { SiderBarContext } from '@/contexts/SideBar';
import { getProduct } from '@/apis/productService';
import SliderCommon from '@components/public/SliderCommon/SliderCommon';

const DetailProduct = () => {
  const { container } = styles;

  const [detailProduct, setDetailProduct] = useState(null);
  const { detailProductSlug } = useContext(SiderBarContext);

  useEffect(() => {
    getProduct(detailProductSlug)
      .then((res) => {
        setDetailProduct(res.product);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [detailProductSlug]);

  return (
    <div className={container}>
      <SliderCommon data={detailProduct?.images} />
    </div>
  );
};

export default DetailProduct;
