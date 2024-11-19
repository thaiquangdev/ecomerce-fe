import MainLayout from '@components/public/Layout/Layout';
import styles from './styles.module.scss';
import ProductItem from '@components/public/ProductItem/ProductItem';

const PopularProduct = ({ data }) => {
  const { container, row, col } = styles;
  return (
    <MainLayout>
      <div className={container}>
        <div className={row}>
          {data.map((item) => (
            <div className={col} key={item._id}>
              <ProductItem
                src={item.images[0].imageUrl}
                prevSrc={item.images[1].imageUrl}
                name={item.title}
                price={item.price}
              />
            </div>
          ))}
        </div>
      </div>
    </MainLayout>
  );
};

export default PopularProduct;
