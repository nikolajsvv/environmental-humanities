import PropTypes from 'prop-types';
import { Link } from "react-scroll";

const NavItem = ({ section }) => {
  const { title, id } = section;

  return (
    <>
    <div className={`border-r border-black border-opacity-75 md:flex-1 text-center`}>
      <Link
        activeClass='active'
        to={id.replace('#', '')}
        spy={true}
        smooth={true}
        duration={300}
        className='cursor-pointer'>
      {title}
      </Link>
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