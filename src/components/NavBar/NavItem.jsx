import PropTypes from 'prop-types';

const NavItem = ({ section }) => {
  const { title, id } = section;

  return (
    <>
    <div className={`border-r border-black border-opacity-75 md:flex-1 text-center`}>
      <a href={id} >{title}</a>
    </div>
    </>
  );
};

NavItem.propTypes = {
  section: PropTypes.shape({
    title: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  }).isRequired,
};

export default NavItem;
