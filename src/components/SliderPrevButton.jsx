import { useSwiper } from 'swiper/react';

function SliderPrevButton() {
  const swiper = useSwiper();

  return (
    <button
      onClick={() => swiper.slidePrev()}
      className="absolute top-1/2 left-0 transform -translate-y-1/2 z-10 bg-gray-200 text-white flex justify-end items-center md:w-12 lg:w-20 py-3 pr-4 rounded-r-full hover:bg-lime-400"
    >
      <span className="transform rotate-180">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z"
          />
        </svg>
      </span>
    </button>
  );
}

export default SliderPrevButton;
