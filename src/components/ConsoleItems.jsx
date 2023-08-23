import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getConsoles } from '../redux/consoleSlice';
import { CiFacebook, CiTwitter, CiInstagram } from 'react-icons/ci';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import SliderNextButton from './SliderNextButton';
import SliderPrevButton from './SliderPrevButton';

const ConsoleItems = () => {
  const dispatch = useDispatch();
  const consoles = useSelector((state) => state.consoles.consoles);

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

  useEffect(() => {
    dispatch(getConsoles())
  }, [dispatch]);

  return (
    <div className="flex flex-col w-full justify-around h-screen relative ">
      <div className="w-full flex flex-col items-center">
        <h1 className="text-xl font-extrabold">LATEST CONSOLES</h1>
        <p className="text-xs">Please select a Console</p>
      </div>

      <Swiper
        spaceBetween={10}
        slidesPerView={slidesPerView}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        className="static w-full flex justify-around px-9"
      >
        {consoles.map((console) => (
          <SwiperSlide key={console.id} className="flex flex-col gap-1 w-60 h-72 items-center justify-between p-2">
            <img src={console.photo} alt={console.name} className="w-4/6 h-2/5" />
            <Link to={`/console/${console.id}`}>

              <p className="text-lg font-bold">{console.name}</p>
            </Link>
            <div className="flex flex-col gap-1 items-center">
              <p className="text-center text-xs px-3">{console.description.slice(0, 60)}...</p>
              <div className="flex gap-3 text-lg">
                <CiFacebook />
                <CiTwitter />
                <CiInstagram />
              </div>
            </div>
          </SwiperSlide>
        ))}

        <SliderPrevButton />
        <SliderNextButton />

      </Swiper>
    </div>
  )
}
export default ConsoleItems;
