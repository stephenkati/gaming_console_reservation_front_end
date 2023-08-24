import PropTypes from 'prop-types';

const MenuButton = ({ onClick, icon }) => {
  return (
    <span
      className="inline-block lg:hidden cursor-pointer p-1 hover:bg-gray-200 rounded active:bg-gray-300"
      onClick={onClick}
    >
      {icon}
    </span>
  );
};

MenuButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  icon: PropTypes.element.isRequired,
};

export default MenuButton;
