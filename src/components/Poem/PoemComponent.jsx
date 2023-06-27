import PropTypes from 'prop-types';
import PoemFullView from './PoemFullView';
import { useState } from 'react';
import { PencilIcon } from '@heroicons/react/24/outline';
import { motion, AnimatePresence } from 'framer-motion';

const PoemComponent = ({ content, backgroundImage }) => {

  const { title, author, body } = content;

  const [ showFullView, setShowFullView ] = useState(false);

  const handleViewClick = () => {
    setShowFullView(!showFullView);
  };

  return (
    <>
      <motion.div className="group relative w-full pb-[75%] overflow-hidden rounded-2xl shadow-md shadow-mud"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1}}
        transition={{ duration: 1 }}
        viewport={{ once: true }}>
        <motion.div style={{ backgroundImage: `url(${backgroundImage})` }} className='absolute inset-0 bg-no-repeat bg-center bg-cover rounded-2xl '/>
        <div className='absolute inset-0 bg-black opacity-50 rounded-2xl' />

        <div className='absolute top-0 left-0 p-4 text-gray-400 flex items-center'>
          <PencilIcon className='h-6 w-6 md:h-8 md:w-8 group-hover:scale-110 group-hover:text-gray-300' />
        </div>

        <div className='absolute inset-0 items-center justify-center text-light-beige p-5 flex flex-col'>
          <h2 className='text-2xl font-source-sans-pro font-bold uppercase lg:text-4xl'>{title}</h2>
          <p className='text-md font-source-sans pb-1 lg:text-lg lg:pb-5 text-light-orange'>{author}</p>
          <p className="text-sm font-source-serif-pro font-light text-center overflow-y-scroll md:text-md lg:text-lg w-full" dangerouslySetInnerHTML={{ __html: body.replace(/\n/g, '<br/>')}}></p>
          <p className='text-md font-source-sans-pro pt-5 font-semibold cursor-pointer lg:text-lg hover:text-light-orange hover:font-bold' onClick={handleViewClick}>Description</p>
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
            <PoemFullView content={content} onClose={() => setShowFullView(false)}/>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default PoemComponent

PoemComponent.propTypes = {
  content: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    author: PropTypes.string,
    body: PropTypes.string,
    description: PropTypes.string,
    type: PropTypes.string,
    category: PropTypes.string,
    image: PropTypes.string,
    url: PropTypes.string,
  }),
  backgroundImage: PropTypes.string
}