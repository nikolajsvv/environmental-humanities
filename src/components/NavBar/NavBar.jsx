import StanfordBanner from '../Banner/StanfordBanner';
import useMenuAnimation from './useMenuAnimation';
import MenuToggle from './MenuToggle';
import Menu from './Menu';
import { useState, useEffect } from 'react';
import { motion, useScroll } from 'framer-motion';

const NavBar = () => {
  const sections = [
    { title: '', id: 'launch' }, // Add this
    { title: 'where are we', id: 'where-are-we' },
    { title: 'how did we get here', id: 'how-did-we-get-here' },
    { title: 'where do we go from here', id: 'where-do-we-go-from-here' },
    { title: 'how do we make sense of it all', id: 'how-do-we-make-sense-of-it-all' },
  ];

  const options = {
    root: null,
    rootMargin: '-50% 0px -50% 0px',
    threshold: 0,
  };

  const { scrollYProgress } = useScroll();
  const [isOpen, setIsOpen] = useState(false);
  const scope = useMenuAnimation(isOpen);
  
  const [currentSection, setCurrentSection] = useState(sections[0].id);
  const [elements, setElements] = useState([]);
  
  useEffect(() => {
      setElements(sections.map(section => document.getElementById(section.id)));
  }, []);

  useEffect(() => {
      const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
              if (entry.isIntersecting) {
                  setCurrentSection(entry.target.id);
              }
          });
      }, options);
      
      elements.forEach((element) => {
          if(element) {
              observer.observe(element);
          }
      });

      return () => {
          elements.forEach((element) => {
              if(element) {
                  observer.unobserve(element);
              }
          });
      };
  }, [elements]);

  const currentSectionTitle = currentSection !== 'launch' ? sections.find(section => section.id === currentSection)?.title : '';

  const isLightBeigeBg = currentSection !== 'launch';

  return (
    <>
      <StanfordBanner />
      <div ref={scope} className={`flex fixed z-50 w-full h-16 justify-center items-center p-4 ${isLightBeigeBg ? 'bg-light-beige' : ''}`}>
        <Menu setIsOpen={setIsOpen} sections={sections}/>
        <MenuToggle toggle={() => setIsOpen(!isOpen)}/>
        <div className='text-center text-lg pl-12 sm:pl-0 text-dark-green font-bold uppercase sm:text-2xl md:text-3xl lg:text-4xl'>
          {currentSectionTitle}
        </div>
      </div>
      <motion.div style={{ scaleX: scrollYProgress }} className='fixed bottom-0 left-0 right-0 h-1 z-10 bg-dark-green transform origin-left'/>
    </>
  );
};

export default NavBar;
