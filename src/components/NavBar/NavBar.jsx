import useMenuAnimation from './useMenuAnimation'
import MenuToggle from './MenuToggle'
import Menu from './Menu'
import { useState, useEffect } from 'react'
import { motion, useScroll } from 'framer-motion'

const NavBar = () => {

  const sections = [
    { title: 'where are we', id: 'where-are-we' },
    { title: 'how did we get here', id: 'how-did-we-get-here' },
    { title: 'how do we make sense of it all', id: 'how-do-we-make-sense-of-it-all' },
    { title: 'where do we go from here', id: 'where-do-we-go-from-here' },
  ];

  const { scrollYProgress } = useScroll();
  const [isOpen, setIsOpen] = useState(false);
  const scope = useMenuAnimation(isOpen);

  const [currentSection, setCurrentSection] = useState(sections[0].id);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setCurrentSection(entry.target.id);
        }
      });
    });
  
    sections.forEach(section => {
      const element = document.getElementById(section.id);
      if (element) observer.observe(element);
    });
  
    return () => {
      sections.forEach(section => {
        const element = document.getElementById(section.id);
        if (element) observer.unobserve(element);
      });
    }
  }, []);

  const currentSectionTitle = sections.find(section => section.id === currentSection)?.title || "";

  return (
    <>
      <div ref={scope} className='flex fixed z-50 w-full bg-primary-bg h-16 justify-center items-center'>
        <Menu setIsOpen={setIsOpen} sections={sections}/>
        <MenuToggle toggle={() => setIsOpen(!isOpen)}/>
        <div className='text-center text-xl font-bold uppercase sm:text-2xl md:text-3xl lg:text-4xl'>
          {currentSectionTitle}
        </div>
      </div>
      <motion.div style={{ scaleX: scrollYProgress }} className='fixed bottom-0 left-0 right-0 h-1 z-10 bg-primary-green transform origin-left'/>

    </>
  );
};

export default NavBar;
