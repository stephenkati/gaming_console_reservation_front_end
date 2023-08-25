import PropTypes from 'prop-types';

import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import SliderNextButton from './SliderNextButton';
import SliderPrevButton from './SliderPrevButton';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Slider = ({ Component, storedData }) => {
  const [slidesPerView, setSlidesPerView] = useState(3);

  const handleResize = () => {
    if (window.innerWidth < 640) {
      setSlidesPerView(1);
    } else if (window.innerWidth >= 640 && window.innerWidth < 768) {
      setSlidesPerView(2);
    } else if (window.innerWidth >= 768) {
      setSlidesPerView(3);
    }
  };

  useEffect(() => {
    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <Swiper
      spaceBetween={10}
      slidesPerView={slidesPerView}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      className="static w-full py-4"
    >
      {storedData.map((data) => (
        <SwiperSlide key={data.id}>
          <Component data={data} />
        </SwiperSlide>
      ))}

      <SliderPrevButton />
      <SliderNextButton />
    </Swiper>
  );
};

Slider.propTypes = {
  storedData: PropTypes.array.isRequired,
  Component: PropTypes.elementType.isRequired,
};

export default Slider;
