import Footer from '@components/public/Footer/Footer';
import Header from '@components/public/Header/Header';
import MainLayout from '@components/public/Layout/Layout';
import styles from './styles.module.scss';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Accordition from '@components/public/Accordition/Accordition';
import { dataAccorditions } from './constant';

const AboutUs = () => {
  const {
    container,
    funcBox,
    specialText,
    btnBack,
    boxContent,
    boxBorder,
    boxTitle,
    boxTitleItem,
    row,
    boxListItem,
    boxListItemImg,
    boxListItemDes,
  } = styles;
  const navigate = useNavigate();
  const handleBackPreviousPage = () => {
    navigate(-1);
  };

  const [openSection, setOpenSection] = useState(null);

  const toggleAccordion = (section) => {
    setOpenSection(openSection === section ? null : section);
  };
  return (
    <>
      <Header />
      <MainLayout>
        <div className={container}>
          <div className={funcBox}>
            <div>
              Home {'>'} <span className={specialText}>About us</span>
            </div>
            <div className={btnBack} onClick={() => handleBackPreviousPage()}>
              Return to previous page
            </div>
          </div>
          <div className={boxContent}>
            <div className={boxBorder}>
              <div className={boxTitle}>
                <div className={boxTitleItem}>
                  <span>we try our best for you</span>
                  <h2>Welcome to the Marseille04 Shop</h2>
                </div>
              </div>
            </div>
          </div>
          <div className={row}>
            <div className={boxListItem}>
              <div className={boxListItemImg}>
                <img
                  src='https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image-min.jpg'
                  alt=''
                />
              </div>
              <div className={boxListItemDes}>
                Ac eget cras augue nisi neque lacinia in aliquam. Odio
                pellentesque sed ultrices dolor amet nunc habitasse proin
                consec. tur feugiat egestas eget.
              </div>
            </div>
            <div className={boxListItem}>
              <div className={boxListItemImg}>
                <img
                  src='https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image-copy-2-min.jpg'
                  alt=''
                />
              </div>
              <div className={boxListItemDes}>
                Arcu volutpat sollicitudin sapien sit justo tellus eu fames
                aenean. Faucibus at eu nulla adipiscing. Ipsum a morbi tortor
                ullamcorper sit semper.
              </div>
            </div>
            <div className={boxListItem}>
              <div className={boxListItemImg}>
                <img
                  src='https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image-copy-min.jpg'
                  alt=''
                />
              </div>
              <div className={boxListItemDes}>
                Nibh luctus eu dignissim sit. Lorem netus ultrices neque
                elementum. Et convallis consectetur lacus luctus iaculis quisque
                sed.
              </div>
            </div>
          </div>
          <div className={boxContent}>
            <div className={boxBorder}>
              <div className={boxTitle}>
                <div className={boxTitleItem}>
                  <span>we are happy to help you</span>
                  <h2>Have Any Questions?</h2>
                </div>
              </div>
            </div>
          </div>
          <div className='accordion'>
            {dataAccorditions.map((item) => (
              <Accordition
                key={item.id}
                title={item.title}
                isOpen={openSection === item.id}
                toggleAccordion={() => toggleAccordion(item.id)}
              >
                <p>{item.des}</p>
              </Accordition>
            ))}
          </div>
        </div>
      </MainLayout>
      <Footer />
    </>
  );
};

export default AboutUs;
