import PropTypes from 'prop-types';
import EssayFullView from './EssayFullView';
import { useState, useEffect, useRef } from 'react';
import { DocumentTextIcon } from '@heroicons/react/24/outline';
import { motion, AnimatePresence } from 'framer-motion';

const EssayComponent = ({ content, backgroundImage }) => {
  const { title, author, body } = content;

  const divRef = useRef(null);

  const [ maxBodyLength, setMaxBodyLength ] = useState(150);
  const [ showFullView, setShowFullView ] = useState(false);

  const handleViewClick = () => {
    setShowFullView(!showFullView);
  };

  let truncatedBody = body.length <= maxBodyLength 
                    ? body 
                    : body.substring(0, maxBodyLength) + '...';

  const formattedBody = truncatedBody.replace(/\n/g, "<br/>").replace(/<strike>/g, "<strike><br/>");

  useEffect(() => {
    const handleResize = () => {
      const divWidth = divRef.current.offsetWidth;
      // Adjust the logic below as per your requirement
      if (divWidth > 800) {
        setMaxBodyLength(400);
      } else if (divWidth > 600) {
        setMaxBodyLength(200);
      } else if (divWidth > 400) {
        setMaxBodyLength(150)
      } else {
        setMaxBodyLength(100);
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
      <motion.div className='group relative w-full pb-[75%] overflow-hidden rounded-2xl shadow-md shadow-mud' ref={divRef}
        initial={{ opacity: 0}}
        whileInView={{ opacity: 1}}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        >
        <motion.img
            src={backgroundImage} 
            alt={title} 
            loading="lazy" 
            className='absolute inset-0 object-cover w-full h-full rounded-2xl transform transition-transform duration-500 group-hover:scale-105'
        />        
        <div className='absolute inset-0 bg-black opacity-50 rounded-2xl'/>
        <div className='absolute top-0 left-0 p-4 text-gray-400 flex items-center'>
          <DocumentTextIcon className='h-6 w-6 md:h-8 md:w-8 group-hover:scale-110 group-hover:text-gray-300' />
        </div>
        <div className='absolute inset-0 items-left justify-end text-light-beige p-2 flex flex-col'>
          <h2 className='pt-2 text-left text-md sm:text-xl xl:text-2xl uppercase font-souce-sans-pro font-bold'>
            <span className='bg-gradient-to-r from-green-300 to-green-200 bg-[length:0px_5px] bg-left-bottom bg-no-repeat duration-500 hover:bg-[length:100%_10px] group-hover:bg-[length:100%_8px]'>
              {title}
            </span>
          </h2>
          <p className='font-source-sans-pro font-normal text-light-orange'>{author}</p>
          <p className='py-2 font-extralight font-source-serif-pro text-sm lg:text-base'
            dangerouslySetInnerHTML={{ __html: formattedBody }}>
          </p>
          <p className='text-base sm:text-md text-right cursor-pointer font-semibold hover:font-bold hover:text-light-orange ' onClick={handleViewClick}>Read More</p>
        </div>
      </motion.div>

      <AnimatePresence>
        {showFullView && (
          <motion.div
            key='modal'
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
            className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 pt-10 backdrop-blur-sm overlay' onClick={() => setShowFullView}>
            <EssayFullView
              content={content}
              onClose={() => setShowFullView(false)}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default EssayComponent

EssayComponent.propTypes = {
  content: PropTypes.shape({
    title: PropTypes.string,
    author: PropTypes.string,
    body: PropTypes.string,
  }),
  backgroundImage: PropTypes.string,
};