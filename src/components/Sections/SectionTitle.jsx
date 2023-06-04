import { useEffect, useRef, useState } from "react";
import PropTypes from 'prop-types';
import TreeBranch from '../../assets/cartoon-branch.png'

function SectionTitle({title}) {
  const [isVisible, setIsVisible] = useState(true);
  const titleRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 1} // adjust the threshold according to when you want the title to start fading out
    );

    if (titleRef.current) {
      observer.observe(titleRef.current);
    }

    return () => {
      if (titleRef.current) {
        observer.unobserve(titleRef.current);
      }
    };
  }, []);

  return (
    <>
      <div className={`hidden md:flex sticky items-center justify-center top-0 z-40 ${isVisible ? '' : 'opacity-0 transition-opacity duration-200'}`} ref={titleRef}>
        <div className='transform translate-y-1/2 p-3 shadow-lg min-w-fit max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl overflow-auto whitespace-normal z-10 bg-primary-bg'>
          <div className='text-xl font-bold sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-primary-orange font-source-sans-pro text-center'>
            {title.toUpperCase()}
          </div>  
        </div>
      </div>
      <div className='mt-4'>
        <img src={TreeBranch} alt='Tree branch' className='hidden md:inline w-auto h-auto opacity-50 transform -translate-y-1/2'/>
      </div>
    </>
  )
}
SectionTitle.propTypes = {
  title: PropTypes.string.isRequired,
};

export default SectionTitle
