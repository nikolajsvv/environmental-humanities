import PropTypes from 'prop-types';
import { XMarkIcon } from '@heroicons/react/24/outline'
import { motion } from 'framer-motion'

const IFrameFullView = ({content, onClose}) => {
  const { url } = content;

  return (
    <>
      <motion.div className='hidden sm:inline cursor-default w-full h-full overflow-auto relative items-center' onClick={e => e.stopPropagation()}>
        <button className='absolute top-0 right-0 p-4 cursor-pointer' onClick={onClose}>
          <XMarkIcon className='h-10 w-10 bg-gray-100 rounded-full hover:text-primary-orange transition-all duration-300'/>
        </button>
        <iframe src={url} className='w-full h-full'/>
      </motion.div>

      <motion.div className='sm:hidden fixed top-0 left-0 w-screen h-screen bg-primary-bg overflow-auto'>
        <button className='absolute top-0 left-0 p-5 cursor-pointer' onClick={onClose}>
          <XMarkIcon className='h-10 w-10 bg-gray-100 rounded-full hover:text-primary-orange transition-all duration-300'/>
        </button>
        <iframe src={url} className='w-full h-full'/>
      </motion.div>
    </>
  )
}

export default IFrameFullView

IFrameFullView.propTypes = {
  content: PropTypes.shape({
    url: PropTypes.string,
  }),
  onClose: PropTypes.func,
}