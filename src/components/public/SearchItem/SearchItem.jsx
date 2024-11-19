import { useContext } from 'react';
import styles from './styles.module.scss';
import { SearchContext } from '@/contexts/SearchProvider';
import classNames from 'classnames';
import { IoMdClose } from 'react-icons/io';
import Button from "@components/Button/Button.jsx";

const SearchItem = () => {
  const {
    container,
    overlay,
    search,
    slideSearch,
    boxModel,
    boxContent,
    boxClose,
      boxTitle,
      title,
      boxSearch,
      boxInput,
      boxBtn,
      boxTrending,
      boxTrendingTitle,
      boxTrendingItem,
      boxPopular,
      boxPopularTitle,
      boxCategories,
      boxCategoryItem,
      boxCategoryItemTitle,
      boxCategoryItemSubTitle,
      boxBtnCategories
  } = styles;
  const { isSearchVisiable, setIsSearchVisiable } =
    useContext(SearchContext);

  const handleToggle = () => {
    setIsSearchVisiable(!isSearchVisiable);
    console.log('Toggled isSearchVisiable:', !isSearchVisiable);
  };

  return (
    <div className={container}>
      <div
        className={classNames({
          [overlay]: isSearchVisiable,
        })}
        onClick={handleToggle}
      />
      <div
        className={classNames(search, {
          [slideSearch]: isSearchVisiable,
        })}
      >
        {isSearchVisiable && (
          <div className={boxModel}>
            <span
              className={boxClose}
              onClick={() => setIsSearchVisiable(false)}
            >
              <IoMdClose size={30} />
            </span>
            <div className={boxContent}>
                <form action=''>
                    <div className={boxTitle}>
                        <div className={title}>What Are You Looking For?</div>
                    </div>
                    <div className={boxSearch}>
                        <select>
                            <option value="">All Categories</option>
                        </select>
                        <div className={boxInput}>
                            <input placeholder={"Search for products"}/>
                        </div>
                        <div className={boxBtn}>
                            <Button content={"SEARCH"}/>
                        </div>
                    </div>

                    <div className={boxTrending}>
                        <span className={boxTrendingTitle}>TRENDING SEARCHES:</span>
                        <span className={boxTrendingItem}>Shirt</span>
                        <span className={boxTrendingItem}>Shoes</span>
                        <span className={boxTrendingItem}>Cap</span>
                        <span className={boxTrendingItem}>Skirt</span>
                    </div>

                    <div className={boxPopular}>
                        <div className={boxPopularTitle}>Popular Categories</div>
                        <div className={boxCategories}>
                            <div className={boxCategoryItem}>
                                <img
                                    src="https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image-17.1-min.jpg"
                                    alt=""/>
                                <p className={boxCategoryItemTitle}>All</p>
                                <p className={boxCategoryItemSubTitle}>20 products</p>
                            </div>
                            <div className={boxCategoryItem}>
                                <img
                                    src="https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image-17.1-min.jpg"
                                    alt=""/>
                                <p className={boxCategoryItemTitle}>All</p>
                                <p className={boxCategoryItemSubTitle}>20 products</p>
                            </div>
                            <div className={boxCategoryItem}>
                                <img
                                    src="https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image-17.1-min.jpg"
                                    alt=""/>
                                <p className={boxCategoryItemTitle}>All</p>
                                <p className={boxCategoryItemSubTitle}>20 products</p>
                            </div>
                        </div>
                    </div>

                    <div className={boxBtnCategories}>
                        <Button content={"VIEW ALL CATEGORIES"}/>
                    </div>
                </form>

            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchItem;
