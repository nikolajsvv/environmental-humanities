// import NavItem from './NavItem'
import useMenuAnimation from './useMenuAnimation'
import MenuToggle from './MenuToggle'
import Menu from './Menu'
import { useState } from 'react'

const NavBar = () => {

  const sections = [
    { title: 'where are we', id: '#where-are-we' },
    { title: 'how did we get here', id: '#how-did-we-get-here' },
    { title: 'how do we make sense of it all', id: '#how-do-we-make-sense-of-it-all' },
    { title: 'where do we go from here', id: '#where-do-we-go-from-here' },
  ];

  // const { scrollYProgress } = useScroll();
  const [isOpen, setIsOpen] = useState(false);
  const scope = useMenuAnimation(isOpen);

  return (
    <>
      {/* <motion.div style={{ scaleX: scrollYProgress }} className='absolute top-0 left-0 right-0 h-10 z-10 bg-primary-green transform origin-left'/> */}
      <div ref={scope} className=''>
        <Menu setIsOpen={setIsOpen} sections={sections}/>
        <MenuToggle toggle={() => setIsOpen(!isOpen)}/>
      </div>
 
    </>
  );
};

export default NavBar;