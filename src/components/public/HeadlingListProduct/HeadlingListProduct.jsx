import MainLayout from '@components/public/Layout/Layout';
import styles from './styles.module.scss';
import CountdownBanner from '@components/public/CountdownBanner/CountdownBanner';
import ProductItem from '@components/public/ProductItem/ProductItem';

const HeadlingListProduct = ({ data }) => {
  const { container, containerItem } = styles;
  console.log(data);
  return (
    <MainLayout>
      <div className={container}>
        <CountdownBanner />
        <div className={containerItem}>
          {data.map((item) => (
            <ProductItem
              key={item._id}
              src={item.images[0].imageUrl}
              prevSrc={item.images[1].imageUrl}
              name={item.title}
              price={item.price}
            />
          ))}
        </div>
      </div>
    </MainLayout>
  );
};

export default HeadlingListProduct;
