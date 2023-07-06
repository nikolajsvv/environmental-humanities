import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { XMarkIcon, ArrowLeftIcon } from '@heroicons/react/24/solid'

const ImageFullView = ({ content, image, onClose}) => {

  const { title } = content;

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    }
  }, []);

  return (
    <>
      <motion.div className='hidden sm:inline cursor-default w-full h-full overflow-auto relative items-center' onClick={e => e.stopPropagation()}>
        <button className='absolute top-0 right-0 p-4 cursor-pointer' onClick={onClose}>
          <XMarkIcon className='h-10 w-10 bg-gray-100 rounded-full hover:text-primary-orange hover:bg-opacity-50 transition-all duration-300'/>
        </button>
        <img src={image} alt={title} className='object-contain w-full h-full'/>
      </motion.div>

      <motion.div className='sm:hidden fixed top-0 left-0 w-screen h-screen bg-primary-bg overflow-auto'>
        <button className='absolute top-0 left-0 p-5 cursor-pointer' onClick={onClose}>
          <ArrowLeftIcon className='fixed h-8 w-8 hover:text-primary-orange transition-all duration-300'/>
        </button>
        <img src={image} alt={title} className='object-contain w-full h-full'/>
      </motion.div>
    </>
  )
}

export default ImageFullView

ImageFullView.propTypes = {
  content: PropTypes.shape({
    title: PropTypes.string,
    author: PropTypes.string,
    description: PropTypes.string,
    url: PropTypes.string,
  }),
  image: PropTypes.string,
  onClose: PropTypes.func.isRequired
}