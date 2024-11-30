import Header from '@components/public/Header/Header';
import styles from './styles.module.scss';
import Steps from '../Cart/components/steps/Steps';
import MainLayout from '@components/public/Layout/Layout';
import CheckoutContent from './components/CheckoutContent';
import Footer from '@components/public/Footer/Footer';

const Checkout = () => {
  const { container } = styles;
  return (
    <>
      <Header />
      <div className={container}>
        <Steps currentStep={2} />
        <MainLayout>
          <CheckoutContent />
        </MainLayout>
      </div>
      <Footer />
    </>
  );
};

export default Checkout;
