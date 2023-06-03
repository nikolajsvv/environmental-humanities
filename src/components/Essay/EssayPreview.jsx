import EssayFullView from './EssayFullView'
import PropTypes from 'prop-types'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const EssayPreview = ({essay, image}) => {

  const { title, author, content } = essay;

  const [showFullView, setShowFullView] = useState(false);

  const handleViewClick = () => {
    setShowFullView(true)
  }

  return (
    <>
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 75},
        visible: { opacity: 1, y: 0}
      }}
      initial='hidden'
      whileInView='visible'
      viewport={{once: true}}>
      <div className='group cursor-pointer bg-primary-bg p-5 mx-auto w-full flex flex-col rounded-2xl' onClick={handleViewClick}>
        <img src={image} className='h-60 bg-gray-100 rounded-md transition-all ease-in-out delay-100 object-cover hover:scale-105'/>
        <h2 className='pt-2 text-left text-2xl uppercase font-souce-sans-pro text-primary-green'>
          <span className='bg-gradient-to-r from-green-300 to-green-200 bg-[length:0px_10px] bg-left-bottom bg-no-repeat duration-500 hover:bg-[length:100%_10px] group-hover:bg-[length:100%_10px]'>
            {title}
          </span>
        </h2>
        <p className='text-left font-light font-souce-sans-pro text-sm text-primary-orange'>{author}</p>
        <p className='py-2 font-light font-source-serif-pro'>{content.substring(0,200)}...</p>
      </div>
    </motion.div>
    
    <AnimatePresence>
    {showFullView && (
      <motion.div
        key='modal'
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        exit={{opacity: 0}}
        className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 pt-10 backdrop-blur-sm overlay'>
        <EssayFullView
          essay={essay}
          onClose={() => setShowFullView(false)}
        />
      </motion.div>
    )}
    </AnimatePresence>
    </>
  )
}

EssayPreview.propTypes = {
  essay: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    author: PropTypes.string,
    content: PropTypes.string,
    type: PropTypes.string,
  }).isRequired, 
  image: PropTypes.string
}
export default EssayPreview