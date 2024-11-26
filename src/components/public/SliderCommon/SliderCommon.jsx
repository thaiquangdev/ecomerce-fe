import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { IoIosArrowForward } from 'react-icons/io';
import { IoIosArrowBack } from 'react-icons/io';

import './styles.css';

const SliderCommon = ({ data }) => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <IoIosArrowForward />,
    prevArrow: <IoIosArrowBack />,
  };
  return (
    <Slider {...settings}>
      {data?.map((src) => (
        <img src={src.imageUrl} key={src.id} />
      ))}
    </Slider>
  );
};

export default SliderCommon;
