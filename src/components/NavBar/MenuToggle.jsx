import { motion } from 'framer-motion';
import Path from './Path'
import PropTypes from 'prop-types';

const MenuToggle = ({ toggle }) => {

  return (
    <div className='fixed flex items-center justify-start gap-4 top-3 left-3 z-50'>
      <motion.button
        onClick={toggle}
        className='p-3 bg-dark-green cursor-pointer rounded-2xl'
        whileHover={{ scale: 1.2 }}
      >
        <svg width="23" height="18" viewBox="0 0 23 18">
          <Path
            d="M 2 2.5 L 20 2.5"
            stroke='#fefae7'
            className="top"
            variants={{
              closed: { d: "M 2 2.5 L 20 2.5" },
              open: { d: "M 3 16.5 L 17 2.5" }
            }}
          />
          <Path d="M 2 9.423 L 20 9.423" stroke='#fefae7' opacity="1" className="middle" />
          <Path
            d="M 2 16.346 L 20 16.346"
            stroke='#fefae7'
            className="bottom"
            variants={{
              closed: { d: "M 2 16.346 L 20 16.346" },
              open: { d: "M 3 2.5 L 17 16.346" }
            }}
          />
        </svg>
      </motion.button>
      <span className='hidden xl:inline text-dark-green uppercase font-source-sans-pro font-bold text-3xl transition-opacity duration-500'>
        changing planet
      </span>
    </div>
  );
}

MenuToggle.propTypes = {
  toggle: PropTypes.any
}

export default MenuToggle;
