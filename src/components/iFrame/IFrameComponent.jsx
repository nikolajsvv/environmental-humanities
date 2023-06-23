import PropTypes from 'prop-types'
import IFrameFullView from './IFrameFullView'
import { useState } from 'react'
import { GlobeAltIcon } from '@heroicons/react/24/outline'
import { motion, AnimatePresence } from 'framer-motion'

const IFrameComponent = ({content}) => {

  const { title, image, author, description, url } = content;
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

        <div className='absolute inset-0 items-left justify-end text-white p-5 flex flex-col pt-20'>
          <h2 className='pt-2 text-lg sm:text-xl xl:text-2xl uppercase font-souce-sans-pro font-bold'>
            <span className='bg-gradient-to-r from-green-300 to-green-200 bg-[length:0px_5px] bg-left-bottom bg-no-repeat duration-500 hover:bg-[length:100%_10px] group-hover:bg-[length:100%_8px]'>
              {title}
            </span>
          </h2>          
          <p className='font-source-sans-pro font-normal text-primary-orange'>{author}</p>
          <p style={{lineHeight: '1.2', marginBottom: '1em'}}  className='text-sm font-source-serif-pro font-light overflow-y-scroll w-full text-left lg:text-md' dangerouslySetInnerHTML={{ __html: description.replace(/\n/g, '<br/>')}}></p>
          <div className='flex justify-between pt-3'>
            <a href={url} target='_blank' rel="noreferrer" >
              <p className='text-base text-right cursor-pointer font-semibold hover:font-bold hover:text-primary-orange sm:text-md md:text-lg'>Open in Browser</p>
            </a>
            <p className='text-base text-right cursor-pointer font-semibold hover:font-bold hover:text-primary-orange sm:text-md md:text-lg' onClick={handleViewClick}>View</p>
          </div>
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
    description: PropTypes.string,
    url: PropTypes.string,
    image: PropTypes.string,
  }),
  backgroundImage: PropTypes.string,
}