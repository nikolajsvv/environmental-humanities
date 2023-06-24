import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { XMarkIcon, ArrowLeftIcon } from '@heroicons/react/24/solid';
import { motion } from 'framer-motion';


const PoemFullView = ({ content, onClose }) => {

  const { title, author, description } = content;

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    }
  }, []);

  return (
    <>
      <motion.div className='hidden md:inline cursor-default w-1/2 bg-light-beige backdrop:overflow-auto h-3/4 rounded-2xl relative pt-5' >
        <button className='absolute top-0 right-10 m-5 p-2 cursor-pointer'>
          <XMarkIcon className='fixed h-10 w-10 hover:text-primary-orange transition-all duration-300' onClick={onClose}/>
        </button>

        <div className='flex flex-col p-10 pt-20'>
          <h2 className='text-2xl font-source-sans-pro uppercase'>{title}</h2>
          <h2 className='text-xl font-light font-source-sans-pro text-primary-orange'>{author}</h2>
          <h2 className='pt-4 text-lg font-light font-source-sans-pro'>Description</h2>
          <p className='text-left font-source-serif-pro pt-4'>{description}</p>
        </div>
      </motion.div>

      <motion.div className='md:hidden fixed top-0 left-0 w-screen h-screen bg-light-beige overflow-auto'>
        <button className='absolute top-0 left-0 p-5 cursor-pointer' onClick={onClose}>
          <ArrowLeftIcon className='fixed h-8 w-8'/>
        </button>
        <div className='p-5 mt-12'>
          <p className='text-lg font-source-sans-pro text-primary-orange'>{author}</p>
          <h2 className='text-4xl uppercase font-source-sans-pro font-bold'>{title}</h2>
          <p className='mt-4 text-md sm:text-lg font-source-serif-pro cursor-text' dangerouslySetInnerHTML={{ __html: content.description.replace(/\n/g, '<br/>')}}></p>
        </div>
      </motion.div>
    </>
  )
}

export default PoemFullView

PoemFullView.propTypes = {
  content: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    author: PropTypes.string,
    body: PropTypes.string,
    description: PropTypes.string,
  }),
  onClose: PropTypes.func,
}