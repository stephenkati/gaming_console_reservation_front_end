import PropTypes from 'prop-types';

import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import ReservationItem from './ReservationItem';

import SliderNextButton from './SliderNextButton';
import SliderPrevButton from './SliderPrevButton';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

function Slider({ reservations }) {
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
    // Call handleResize when the component mounts
    handleResize();

    // Add resize event listener
    window.addEventListener('resize', handleResize);

    // Clean up the event listener when the component unmounts
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
      className="static"
    >
      {reservations.map((reservation) => (
        <SwiperSlide key={reservation.id}>
          <ReservationItem reservation={reservation} />
        </SwiperSlide>
      ))}

      {/* Custom buttons */}
      <SliderPrevButton />
      <SliderNextButton />
    </Swiper>
  );
}

Slider.propTypes = {
  reservations: PropTypes.array.isRequired,
};

export default Slider;
