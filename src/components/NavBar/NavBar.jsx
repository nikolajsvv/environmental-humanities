import NavItem from './NavItem'
import { motion, useScroll } from 'framer-motion'
import { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'

const NavBar = () => {

  const sections = [
    { title: 'where are we', id: '#where-are-we' },
    { title: 'how did we get here', id: '#how-did-we-get-here' },
    { title: 'how do we make sense of it all', id: '#how-do-we-make-sense-of-it-all' },
    { title: 'where do we go from here', id: '#where-do-we-go-from-here' },
  ];

  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const { scrollYProgress } = useScroll();

  return (
    <>
      <nav className="bg-primary-bg w-screen fixed top-0 z-50 hidden lg:block">
        <motion.div style={{ scaleX: scrollYProgress }} className='absolute top-0 left-0 right-0 h-10 z-10 bg-primary-green transform origin-left'/>
        <div className="relative h-10 md:flex justify-around items-center text-sm lg:text-md xl:text-lg font-source-sans-pro font-light uppercase border-2 border-black border-opacity-75 z-20">
          {sections.map(section => (
              <NavItem
              key={section.id}
              section={section}
            />
            ))}
        </div>
      </nav>

      <div className='lg:hidden fixed top-0 z-50 w-screen flex justify-end'>
        <button onClick={toggleMenu} className='pl-5 p-1 pb-2 bg-primary-green rounded-bl-3xl'>
            {isOpen ? <FaTimes className='h-6 w-6 text-white'/> : <FaBars className='text-white h-6 w-6'/>}
        </button>
      </div>
      {isOpen && (
        <div className='lg:hidden fixed top-0 z-40 right-0 w-5/6 h-1/2 bg-primary-green font-source-sans-pro text-white font-light text-left uppercase rounded-bl-3xl flex flex-col justify-center pl-5'>
          <a href='#where-are-we' onClick={toggleMenu} className='text-sm sm:text-lg md:text-2xl lg:text-lg py-2 sm:py-3 md:py-4'>Where Are We</a>
          <a href='#how-did-we-get-here' onClick={toggleMenu} className='text-sm sm:text-lg md:text-2xl lg:text-lg py-2 sm:py-3 md:py-4'>How Did We Get Here</a>
          <a href='#how-do-we-make-sense' onClick={toggleMenu} className='text-sm sm:text-lg md:text-2xl lg:text-lg py-2 sm:py-3 md:py-4'>How Do We Make Sense Of It All</a>
          <a href='#where-do-we-go-from-here' onClick={toggleMenu} className='text-sm sm:text-lg md:text-2xl lg:text-lg py-2 sm:py-3 md:py-4'>Where Do We Go From Here</a>
        </div>
      )}
    </>
  );
};

export default NavBar;
