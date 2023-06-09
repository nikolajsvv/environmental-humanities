import PropTypes from 'prop-types'
import EssayFullView from './EssayFullView'
import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'

const EssayPreview2 = ({essay, image}) => {
  const { title, author, content } = essay;
  const [showFullView, setShowFullView] = useState(false);

  const handleViewClick = () => {
    setShowFullView(true)
  }

  return (
    <>
      <div className='relative flex justify-center items-center mb-20'>
        <img src={image} alt='image' className='h-60 w-100 rounded-2xl'/>
        <div className='group absolute bg-primary-bg  h-70 w-80 p-2 translate-y-1/2 rounded-2xl text-left hover:scale-105 hover:shadow-lg transition-all duration-300 cursor-pointer' onClick={handleViewClick}>
          <p className='text-sm text-primary-orange font-light font-source-serif-pro '>{author}</p>
          <h2 className='pt-2 text-left text-2xl uppercase font-souce-sans-pro'>
              <span className='bg-gradient-to-r from-green-300 to-green-200 bg-[length:0px_10px] bg-left-bottom bg-no-repeat duration-500 hover:bg-[length:100%_10px] group-hover:bg-[length:100%_10px]'>
                {title}
              </span>
          </h2>
          <p className='py-2 font-light font-source-serif-pro'>{content.substring(0,150)}...</p>
          <button onClick={handleViewClick}>Read More</button>
        </div>
      </div>

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
EssayPreview2.propTypes = {
  essay: PropTypes.shape({
    title: PropTypes.string,
    author: PropTypes.string,
    content: PropTypes.string,
  }),
  image: PropTypes.string
}
export default EssayPreview2