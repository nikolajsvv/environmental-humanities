import PropTypes from 'prop-types'
import IFrameFullView from './IFrameFullView'
import { useState } from 'react'
import { GlobeAltIcon } from '@heroicons/react/24/outline'
import { motion, AnimatePresence } from 'framer-motion'

const IFrameComponent = ({content}) => {

  const { title, image, author, url } = content;
  const [ showFullView, setShowFullView ] = useState(false);

  const handleViewClick = () => {
    setShowFullView(!showFullView);
  };

  return (
    <>
      <div className='group relative w-full pb-[75%] overflow-hidden'> 
        <motion.div style={{backgroundImage: `url(${image})`}} className='absolute inset-0 bg-no-repeat bg-center bg-cover rounded-2xl'/>
        <div className='absolute inset-0 bg-black opacity-50 rounded-2xl'/>

        <div className='absolute top-0 left-0 p-4 text-gray-400 flex items-center'>
          <GlobeAltIcon className='h-6 w-6 md:h-8 md:w-8 group-hover:scale-110 group-hover:text-gray-300' />
        </div>

        <div className='absolute inset-0 items-center justify-center text-white p-5 flex flex-col'>
          <h2 className='text-2xl font-source-sans-pro font-bold uppercase lg:text-4xl cursor-pointer group-hover:scale-105 duration-300' onClick={handleViewClick}>{title}</h2>
          <p className='font-source-sans-pro font-normal text-primary-orange text-center group-hover:scale-105 duration-300 cursor-pointer'>{author}</p>
          <iframe src={url} className='hidden sm:inline w-3/4 h-3/4'/>
        </div>


      </div>

      <AnimatePresence>
        {showFullView && (
          <motion.div
            key='modal'
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
            className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 pt-10 backdrop-blur-sm overlay' onClick={() => setShowFullView}>
            <IFrameFullView content={content} onClose={() => setShowFullView(false)}/>
          </motion.div>
        )}
      </AnimatePresence>
    </>

  )
}

export default IFrameComponent

IFrameComponent.propTypes = {
  content: PropTypes.shape({
    title: PropTypes.string,
    author: PropTypes.string,
    body: PropTypes.string,
    url: PropTypes.string,
    image: PropTypes.string,
  }),
  backgroundImage: PropTypes.string,
}