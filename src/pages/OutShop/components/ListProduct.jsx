import { useContext } from 'react';
import { OurShopContext } from '@/contexts/OurShopProvider';
import MainLayout from '@components/public/Layout/Layout';
import ProductItem from '@components/public/ProductItem/ProductItem';
import styles from '../style.module.scss';
import Button from '@components/Button/Button';

const ListProduct = () => {
  const { products, isShowGrid, isLoading, handleLoadmore, total, isLoadMore } =
    useContext(OurShopContext);
  const { containerListProduct, col, row, btn, sectionListProduct } = styles;
  return (
    <div className={sectionListProduct}>
      <MainLayout>
        {isLoading ? (
          <>Loading...</>
        ) : (
          <>
            <div className={containerListProduct}>
              <div className={isShowGrid ? row : ''}>
                {products.map((item) => (
                  <div className={isShowGrid ? col : ''} key={item._id}>
                    <ProductItem
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
                  </div>
                ))}
              </div>
            </div>
            {products.length < total && (
              <div className={btn}>
                <Button
                  content={isLoadMore ? 'Loading...' : 'LOAD MORE PRODUCTS'}
                  isPrimary={false}
                  onClick={handleLoadmore}
                />
              </div>
            )}
          </>
        )}
      </MainLayout>
    </div>
  );
};

export default ListProduct;
