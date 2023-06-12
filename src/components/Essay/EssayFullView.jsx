import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { XMarkIcon, ArrowLeftIcon } from '@heroicons/react/24/solid';

const EssayFullView = ({ content, onClose }) => {

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    }
  }, []);

  return (
    <>
      <motion.div className="hidden sm:inline cursor-default w-8/12 bg-primary-bg overflow-auto h-3/4 rounded-2xl relative pt-5 items-center" onClick={e => e.stopPropagation()}>
        <button className="absolute top-0 right-10 m-5 p-2 cursor-pointer" onClick={onClose}>
          <XMarkIcon className='fixed h-10 w-10 text-primary-green' />
        </button>
        <div className="p-10">
          <p className='text-xl text-primary-orange font-source-sans-pro capitalize cursor-text'>{content.author}</p>
          <h2 className='text-lg sm:text-4xl font-bold font-source-sans-pro uppercase cursor-text'>{content.title}</h2>
          <p className='mt-4 text-sm sm:text-lg font-source-serif-pro cursor-text' dangerouslySetInnerHTML={{ __html: content.body.replace(/\n/g, '<br/>')}}></p>
        </div>
      </motion.div>
      
      <motion.div className='sm:hidden fixed top-0 left-0 w-screen h-screen bg-primary-bg overflow-auto'>
        <button className='absolute top-0 left-0 p-5 cursor-pointer' onClick={onClose}>
          <ArrowLeftIcon className='fixed h-8 w-8'/>
        </button>
        <div className='p-5 mt-12'>
          <p className='text-lg font-source-serif-pro text-primary-orange'>{content.author}</p>
          <h2 className='text-4xl uppercase font-source-sans-pro font-bold'>{content.title}</h2>
          <p className='mt-4 text-md sm:text-lg font-source-serif-pro cursor-text' dangerouslySetInnerHTML={{ __html: content.body.replace(/\n/g, '<br/>')}}></p>
        </div>
      </motion.div>  
    </>
  );
}

EssayFullView.propTypes = {
  content: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    author: PropTypes.string,
    body: PropTypes.string,
  }).isRequired,
  onClose: PropTypes.func.isRequired,
}

export default EssayFullView;
