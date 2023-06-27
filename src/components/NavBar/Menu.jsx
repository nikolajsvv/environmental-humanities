import PropTypes from 'prop-types';
import { Link } from "react-scroll";
import { motion } from 'framer-motion';
const Menu = ({setIsOpen, sections}) => {
  return (
    <motion.nav className="fixed top-0 left-0 bottom-0 w-[400px] z-50 bg-dark-green pt-[100px] will-change-transform duration-300" initial={{ x: "-100%" }}>
      <ul className="flex flex-col gap-10 p-[15px] text-light-beige font-bold text-[30px] uppercase font-source-sans-pro cursor-pointer">
        {sections.map((section) => {
          if (section.title !== '') {
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
          }
        })}
      </ul>
    </motion.nav>
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