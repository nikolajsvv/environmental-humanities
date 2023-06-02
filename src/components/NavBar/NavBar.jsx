import NavItem from './NavItem'
import useMenuAnimation from './useMenuAnimation'
import MenuToggle from './MenuToggle'
import Menu from './Menu'
import { motion, useScroll } from 'framer-motion'
import { useState } from 'react'

const NavBar = () => {

  const sections = [
    { title: 'where are we', id: '#where-are-we' },
    { title: 'how did we get here', id: '#how-did-we-get-here' },
    { title: 'how do we make sense of it all', id: '#how-do-we-make-sense-of-it-all' },
    { title: 'where do we go from here', id: '#where-do-we-go-from-here' },
  ];

  const { scrollYProgress } = useScroll();
  const [isOpen, setIsOpen] = useState(false);
  const scope = useMenuAnimation(isOpen);

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

      <div ref={scope} className='lg:hidden'>
        <Menu/>
        <MenuToggle toggle={() => setIsOpen(!isOpen)}/>
      </div>
 
    </>
  );
};

export default NavBar;