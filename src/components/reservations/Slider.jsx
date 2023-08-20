import PropTypes from 'prop-types';
import { Swiper, SwiperSlide } from 'swiper/react';

import ReservationItem from './ReservationItem';

import 'swiper/css';

function Slider({ reservations }) {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {reservations.map((reservation) => (
        <SwiperSlide key={reservation.id}>
          <ReservationItem reservation={reservation} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

Slider.propTypes = {
  reservations: PropTypes.array.isRequired,
};

export default Slider;
