import PropTypes from 'prop-types';

import { Swiper, SwiperSlide } from 'swiper/react';
import SliderNextButton from './SliderNextButton';
import SliderPrevButton from './SliderPrevButton';

import ReservationItem from './ReservationItem';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

function Slider({ reservations }) {
  return (
    <Swiper
      spaceBetween={10}
      slidesPerView={3}
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
