import { useState } from 'react';
import { motion, useScroll } from 'framer-motion'
import { FaBars, FaTimes } from 'react-icons/fa';

const NavBar = () => {

  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const { scrollYProgress } = useScroll();

  return (
    <>
      <nav className='bg-primary-bg w-screen fixed top-0 z-50 hidden md:block'>
      <motion.div style={{ scaleX: scrollYProgress }} className='absolute top-0 left-0 right-0 h-10 z-10 bg-primary-green transform origin-left'/>
        <div className="relative h-10 md:flex justify-around items-center text-sm lg:text-md xl:text-lg font-source-sans-pro font-light uppercase border-2 border-white border-opacity-75 z-20">
          <div className="border-r border-white border-opacity-75 md:flex-1 text-center">
            <a href="#where-are-we">Where Are We</a>
          </div>
          <div className="border-r border-white border-opacity-75 md:flex-1 text-center">
            <a href="#how-did-we-get-here">How Did We Get Here</a>
          </div>
          <div className="border-r border-white border-opacity-75 md:flex-1 text-center">
            <a href="#how-do-we-make-sense">How Do We Make Sense Of It All </a>
          </div>
          <div className="md:flex-1 text-center">
            <a href="#where-do-we-go-from-here">Where Do We Go From Here</a>
          </div>
        </div>
      </nav>
      <div className='md:hidden fixed top-0 z-50 w-screen flex justify-end'>
    <button onClick={toggleMenu} className='pl-5 p-1 pb-2 bg-primary-green rounded-bl-3xl'>
      {isOpen ? <FaTimes className='h-6 w-6 text-white'/> : <FaBars className='text-white h-6 w-6'/>}
    </button>
</div>
{isOpen && (
    <div className='md:hidden fixed top-0 z-40 right-0 w-5/6 h-1/2 bg-primary-green font-source-sans-pro text-white font-light text-left uppercase rounded-bl-3xl flex flex-col justify-center pl-5'>
       <a href='#where-are-we' onClick={toggleMenu} className='text-sm sm:text-2xl md:text-lg py-2 sm:py-3 md:py-4'>Where Are We</a>
       <a href='#how-did-we-get-here' onClick={toggleMenu} className='text-sm sm:text-2xl md:text-lg py-2 sm:py-3 md:py-4'>How Did We Get Here</a>
       <a href='#how-do-we-make-sense-of-it-all' onClick={toggleMenu} className='text-sm sm:text-2xl md:text-lg py-2 sm:py-3 md:py-4'>How Do We Make Sense Of It All</a>
       <a href='#where-do-we-go-from-here' onClick={toggleMenu} className='text-sm sm:text-2xl md:text-lg py-2 sm:py-3 md:py-4'>Where Do We Go From Here</a>
    </div>
)}
    </>
  );
};

export default NavBar;
