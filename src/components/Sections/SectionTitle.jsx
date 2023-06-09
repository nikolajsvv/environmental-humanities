import { useEffect, useRef, useState } from "react";
import PropTypes from 'prop-types';

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
        <div className='transform mt-5 p-5 shadow-lg rounded-2xl min-w-fit max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl overflow-auto whitespace-normal z-10 bg-primary-bg'>
          <div className='text-xl font-bold sm:text-2xl md:text-2xl lg:text-4xl xl:text-4xl text-[#005051] font-source-sans-pro text-center'>
            {title.toUpperCase()}
          </div>  
        </div>
      </div>
    </>
  )
}
SectionTitle.propTypes = {
  title: PropTypes.string.isRequired,
};

export default SectionTitle
