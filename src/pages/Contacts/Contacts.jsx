import Footer from '@components/public/Footer/Footer';
import Header from '@components/public/Header/Header';
import MainLayout from '@components/public/Layout/Layout';
import styles from './styles.module.scss';
import { FaHouseChimney } from 'react-icons/fa6';
import { MdOutlinePhoneInTalk } from 'react-icons/md';
import { CiClock2 } from 'react-icons/ci';

const Contacts = () => {
  const {
    container,
    boxForm,
    row,
    boxInfo,
    boxInfoContent,
    title,
    boxInfoBorder,
    boxBorder,
    boxAddress,
    boxIcon,
    icon,
    content,
    boxAddressDes,
    boxAddressTitle,
    boxContent,
    boxContentItem,
    boxContentTitle,
    boxContentSubTitle,
  } = styles;

  return (
    <>
      <Header />
      <MainLayout>
        <div className={container}>
          <div style={{ padding: '15px' }}>
            <div>
              <img
                src='https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Map-new.jpeg'
                alt=''
              />
            </div>
          </div>
          <div className={boxForm}>
            <div className={row}>
              <div className={boxInfo}>
                <div className={boxInfoContent}>
                  <div className={title}>
                    <h2>Infomation</h2>
                  </div>
                  <div className={boxInfoBorder}>
                    <div className={boxBorder}>
                      <span></span>
                    </div>
                  </div>
                  <div className={boxAddress}>
                    <div className={boxIcon}>
                      <div className={icon}>
                        <FaHouseChimney />
                      </div>
                      <div className={content}>Address</div>
                    </div>
                  </div>
                  <div className={boxAddressDes}>
                    <div className={boxAddressTitle}>
                      <p>7895 Piermont Dr NE Albuquerque, NM 198866</p>
                    </div>
                  </div>
                  <div className={boxAddress}>
                    <div className={boxIcon}>
                      <div className={icon}>
                        <MdOutlinePhoneInTalk />
                      </div>
                      <div className={content}>Phones</div>
                    </div>
                  </div>
                  <div className={boxAddressDes}>
                    <div className={boxAddressTitle}>
                      <p>+391 (0)35 2568 4593 hello@domain.com</p>
                    </div>
                  </div>
                  <div className={boxAddress}>
                    <div className={boxIcon}>
                      <div className={icon}>
                        <CiClock2 />
                      </div>
                      <div className={content}>We&apos;re Open</div>
                    </div>
                  </div>
                  <div className={boxAddressDes}>
                    <div className={boxAddressTitle}>
                      <p>Every day 11am to 7pm</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className={boxContent}>
                <div className={boxContentItem}>
                  <div className={boxContentTitle}>
                    <h2>Contact Us</h2>
                  </div>
                  <div style={{ marginBottom: '15px' }}></div>
                  <div className={boxContentSubTitle}>
                    <p>
                      If you’ve got great products your looking to work with us
                      then drop us a line.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </MainLayout>
      <Footer />
    </>
  );
};

export default Contacts;
