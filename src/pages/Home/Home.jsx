import Banner from '@components/public/Banner/Banner';
import Header from '@components/public/Header/Header';
import AddvanceHeadling from '@components/public/AddvanceHeadling/AddvanceHeadling';
import Info from '@components/public/Info/Info';
import HeadlingListProduct from '@components/public/HeadlingListProduct/HeadlingListProduct';
import { useEffect, useState } from 'react';
import { getProducts } from '@/apis/productService';
import PopularProduct from '@components/public/PopularProduct/PopularProduct';
import SaleHomePage from '@components/public/SaleHomePage/SaleHomePage';
import Footer from '@components/public/Footer/Footer';

const Home = () => {
  const [listProducts, setListProducts] = useState([]);
  useEffect(() => {
    getProducts({ sort: '4' }).then((res) => {
      setListProducts(res.products);
    });
  }, []);
  return (
    <>
      <Header />
      <Banner />
      <Info />
      <AddvanceHeadling />
      <HeadlingListProduct data={listProducts.slice(0, 2)} />
      <PopularProduct data={listProducts.slice(2, listProducts.length)} />
      <SaleHomePage />
      <Footer />
    </>
  );
};

export default Home;
