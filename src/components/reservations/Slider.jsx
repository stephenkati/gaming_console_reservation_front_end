import PropTypes from 'prop-types';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y } from 'swiper/modules';

import ReservationItem from './ReservationItem';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

function Slider({ reservations }) {
  return (
    <Swiper
      modules={[Navigation, Pagination, A11y]}
      spaceBetween={10}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
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
