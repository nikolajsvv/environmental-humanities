import PropTypes from 'prop-types';
import ImageFullView from './ImageFullView';
import { useState } from 'react';
import { PhotoIcon } from '@heroicons/react/24/outline';
import { motion, AnimatePresence } from 'framer-motion';

const ImageComponent = ({ content, backgroundImage }) => {

  const { title, author, description } = content;
  const [ showFullView, setShowFullView ] = useState(false);
  const handleViewClick = () => {
    setShowFullView(!showFullView);
  };

  return (
    <>
      <div className="group relative w-full pb-[75%] overflow-hidden cursor-pointer rounded-2xl shadow-md" onClick={handleViewClick}>
        <motion.div style={{ backgroundImage: `url(${backgroundImage})` }} className='absolute inset-0 bg-no-repeat bg-center bg-cover rounded-2xl transform transition-transform duration-500 group-hover:scale-105'/>
        <div className='absolute inset-0 bg-mud opacity-40 rounded-2xl group-hover:opacity-20 transition-opacity duration-500' />
        
        <div className='absolute top-0 left-0 p-4 text-gray-300 flex items-center'>
            <PhotoIcon className='h-6 w-6 md:h-8 md:w-8 group-hover:scale-110 group-hover:text-gray-300' />
        </div>

        <div className='absolute bottom-0 bg-light-beige bg-opacity-80 text-dark-green w-full p-4 rounded-b-2xl flex flex-col space-y-2 overflow-y-auto' >
          <h2 className='text-3xl font-bold  font-source-sans-pro uppercase'>{title}</h2>
          <p className='text-xl font-light font-source-serif-pro '>{author}</p>
          {description ? description : ''}
        </div>
      </div>

      <AnimatePresence>
        {showFullView && (
          <motion.div key='modal' initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 backdrop-blur-sm overlay' onClick={() => setShowFullView(false)}>
            <ImageFullView content={content} image={backgroundImage} onClose={() => setShowFullView(false)}/>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default ImageComponent

ImageComponent.propTypes = {
  content: PropTypes.shape({
    title: PropTypes.string,
    author: PropTypes.string,
    description: PropTypes.string,
    url: PropTypes.string,
  }),
  backgroundImage: PropTypes.string
}