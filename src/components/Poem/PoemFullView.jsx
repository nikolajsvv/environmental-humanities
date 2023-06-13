import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { XMarkIcon, ArrowLeftIcon } from '@heroicons/react/24/solid';
import { motion } from 'framer-motion';


const PoemFullView = ({ content, onClose }) => {

  const { title, author, body, description } = content;

  return (
    <motion.div className='hidden sm:inline cursor-default w-1/2 bg-primary-bg overflow-auto h-3/4 rounded-2xl relative pt-5' >
      <button className='absolute top-0 right-10 m-5 p-2 cursor-pointer'>
        <XMarkIcon className='fixed h-10 w-10' onClick={onClose}/>
      </button>

      <div className='flex flex-col p-10 pt-20'>
        <h2 className='text-2xl font-source-sans-pro uppercase'>{title}</h2>
        <h2 className='text-xl font-light font-source-serif-pro '>{author}</h2>
        <h2 className='pt-4 text-lg font-light font-source-sans-pro'>Description</h2>
        <p className='text-left font-source-serif-pro pt-4'>{description}</p>
      </div>

    </motion.div>
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
  })
}