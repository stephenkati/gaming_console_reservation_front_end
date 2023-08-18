import PropTypes from 'prop-types';

function MenuIcon({ onClick }) {
  return (
    <span
      className="inline-block lg:hidden cursor-pointer p-1 hover:bg-gray-200 rounded"
      onClick={onClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-8 h-8"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.75 9h16.5m-16.5 6.75h16.5"
        />
      </svg>
    </span>
  );
}

MenuIcon.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default MenuIcon;
