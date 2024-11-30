import Header from '@components/public/Header/Header';
import styles from './styles.module.scss';
import Footer from '@components/public/Footer/Footer';
import MainLayout from '@components/public/Layout/Layout';
import Button from '@components/Button/Button';
import { IoEyeOutline } from 'react-icons/io5';
import { VscTrash } from 'react-icons/vsc';

const Wishlist = () => {
  const { container, title, content, btn, btnEye, btnTrash } = styles;
  return (
    <>
      <Header />
      <MainLayout>
        <div className={container}>
          <div className={title}>WISHLIST</div>
          <div className={content}>
            <table>
              <thead>
                <tr>
                  <th>
                    <input type='checkbox' />
                  </th>
                  <th>PRODUCT</th>
                  <th>QUANTITY</th>
                  <th>PRICE</th>
                  <th>STOCK STATUS</th>
                  <th>ACTION</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <input type='checkbox' />
                  </td>
                  <td>
                    <div>
                      <div>
                        <img src='' alt='' />
                      </div>
                      <div>
                        <span>Consectectur nibh at</span>
                        <span>SKU: 12234</span>
                      </div>
                    </div>
                  </td>
                  <td></td>
                  <td>$119.19</td>
                  <td>IN STOCK</td>
                  <td className={btn}>
                    <div className={btnEye}>
                      <Button isPrimary={false} content={<IoEyeOutline />} />
                    </div>
                    <div>
                      <Button content={'SELECT OPTIONS'} />
                    </div>
                    <div className={btnTrash}>
                      <Button isPrimary={false} content={<VscTrash />} />
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </MainLayout>
      <Footer />
    </>
  );
};

export default Wishlist;
