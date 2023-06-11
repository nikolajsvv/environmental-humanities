import PropTypes from 'prop-types';
import EssayFullView from './EssayFullView' 
import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect, useRef } from 'react';
import { DocumentTextIcon } from '@heroicons/react/24/outline';

const EssayPreview3 = ({ essay, image }) => {
  const { title, author, content } = essay;

  const divRef = useRef(null);

  const [maxContentLength, setMaxContentLength] = useState(150);
  const [showFullView, setShowFullView] = useState(false);

  const handleViewClick = () => {
    setShowFullView(!showFullView)
  }

  useEffect(() => {
    const handleResize = () => {
      const divWidth = divRef.current.offsetWidth;
      // Adjust the logic below as per your requirement
      if (divWidth > 800) {
        setMaxContentLength(400);
      } else if (divWidth > 600) {
        setMaxContentLength(200);
      } else {
        setMaxContentLength(150);
      }
    };

    handleResize();

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>    
    <div className='group relative max-w-full max-h-full' ref={divRef}>
      <div className='absolute inset-0 bg-black opacity-50 rounded-2xl' />
      <img src={image} alt='image' className='object-contain w-full rounded-2xl' />
      <div className='absolute top-0 left-0 p-4 text-white'>
        <DocumentTextIcon className='h-6 w-6 md:h-8 md:w-8 group-hover:scale-110' />
      </div>
      <div className='absolute inset-0 flex flex-col items-left justify-end text-white p-5'>
        <h2 className='pt-2 text-left text-2xl uppercase font-souce-sans-pro font-bold'>
          <span className='bg-gradient-to-r from-green-300 to-green-200 bg-[length:0px_5px] bg-left-bottom bg-no-repeat duration-500 hover:bg-[length:100%_10px] group-hover:bg-[length:100%_8px]'>
            {title}
          </span>
        </h2>
        <p className='font-source-sans-pro font-light text-primary-orange'>{author}</p>
        <p className='py-2 font-extralight font-source-serif-pro text-sm lg:text-base'>
          {content.length <= maxContentLength ? content : content.substring(0, maxContentLength) + '...'}
        </p>
        <p className='text-right cursor-pointer font-extralight hover:font-normal hover:text-primary-orange' onClick={handleViewClick}>Read More</p>
      </div>
    </div>

    <AnimatePresence>
    {showFullView && (
      <motion.div
        key='modal'
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        exit={{opacity: 0}}
        className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 pt-10 backdrop-blur-sm overlay' >
        <EssayFullView
          essay={essay}
          onClose={() => setShowFullView(false)}
        />
      </motion.div>
    )}
    </AnimatePresence>
    </>
  );
};

export default EssayPreview3;

EssayPreview3.propTypes = {
  essay: PropTypes.shape({
    title: PropTypes.string,
    author: PropTypes.string,
    content: PropTypes.string,
  }),
  image: PropTypes.string,
};
