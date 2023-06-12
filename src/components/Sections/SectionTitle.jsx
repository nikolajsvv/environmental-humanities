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
    <div
      className={`sticky top-0 z-40 ${
        isVisible ? "" : "opacity-0 transition-opacity duration-200"
      }`}
      ref={titleRef}
    >
      <div className="w-full bg-primary-bg">
        <div className="max-w-screen-xl mx-auto px-4 py-4">
          <div className="text-center text-xl font-bold sm:text-2xl md:text-2xl lg:text-4xl xl:text-4xl text-primary-orange font-source-sans-pro">
            {title.toUpperCase()}
          </div>
        </div>
      </div>
    </div>
  )
}
SectionTitle.propTypes = {
  title: PropTypes.string.isRequired,
};

export default SectionTitle
