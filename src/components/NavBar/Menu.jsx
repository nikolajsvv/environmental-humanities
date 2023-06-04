import PropTypes from 'prop-types';
import { Link } from "react-scroll";

// ToDo:
// Look at Variatns in Examples page - https://www.framer.com/motion/examples/
// Implement framer motion for the hover
const Menu = ({setIsOpen, sections}) => {
  return (
    <nav className="fixed top-0 left-0 bottom-0 w-[400px] z-50 bg-primary-green pt-[100px] will-change-transform duration-300">
      <ul className="flex flex-col gap-10 p-[15px] text-white font-bold text-[30px] uppercase font-source-sans-pro cursor-pointer">
        {sections.map((section) => {
          return (
            <li key={section.id} className="block transition ease-in-out hover:text-[31px] duration-300 hover:text-primary-orange">
              <Link
                activeClass='active'
                to={section.id.replace('#', '')}
                spy={true}
                smooth={true}
                duration={300}
                onClick={() => setIsOpen(false)}
              >
                {section.title}
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
Menu.propTypes = {
  setIsOpen: PropTypes.func.isRequired,
  sections: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    id: PropTypes.string,
  }))
}
export default Menu;