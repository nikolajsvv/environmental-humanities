import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { XMarkIcon, ArrowLeftIcon } from '@heroicons/react/24/solid';
import { motion } from 'framer-motion';

const AudioFullView = ({content, onClose}) => {
  const { title, author, body, url } = content;

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    }
  }, []);

  if (url.endsWith('.pdf')) {
    return (
      <>
        <motion.div className='w-10/12 h-screen hidden md:inline cursor-default pt-20 overflow-auto relative  items-center'>
          <button className="absolute top-0 right-0 p-2 cursor-pointer" onClick={onClose}>
            <XMarkIcon className='fixed h-10 w-10 bg-gray-100 rounded-full hover:text-primary-orange hover:bg-opacity-50 transition-all duration-300' />
          </button>
          <object data={url} type="application/pdf" className='w-full h-full'>
            <iframe src='https://pdfjs-express.s3-us-west-2.amazonaws.com/docs/choosing-a-pdf-viewer.pdf'>
              <p className='text-white text-lg'>This browser does not support PDF.</p>
            </iframe>
          </object>
        </motion.div>
        <motion.div className='md:hidden'>
          <button className='absolute top-0 left-0 p-5 cursor-pointer' onClick={onClose}>
            <ArrowLeftIcon className='fixed h-8 w-8 hover:text-primary-orange transition-all duration-300'/>
          </button>
          <a href={url} target="_blank" rel="noopener noreferrer">
            <button className=''>
              <p className='text-white font-bold text-3xl hover:text-primary-orange hover:font-extrabold'>Open PDF in browser</p>
            </button>
          </a>
        </motion.div>
      </>
    )
  }
  return (
    <>
      <motion.div className='hidden md:inline cursor-default w-1/2 overflow-auto bg-light-beige backdrop:overflow-auto h-3/4 rounded-2xl relative pt-5' >
        <button className='absolute top-0 right-10 m-5 p-2 cursor-pointer'>
          <XMarkIcon className='fixed h-10 w-10 hover:text-primary-orange transition-all duration-300' onClick={onClose}/>
        </button>
        <div className='flex flex-col p-10 pt-20'>
          <h2 className='text-2xl font-source-sans-pro uppercase'>{title}</h2>
          <h2 className='text-xl font-light font-source-sans-pro text-primary-orange'>{author}</h2>
          <p className='text-left font-source-serif-pro pt-4' dangerouslySetInnerHTML={{ __html: body.replace(/\n/g, '<br/>')}}></p>
        </div>
      </motion.div>
      <motion.div className='md:hidden fixed top-0 left-0 w-screen h-screen bg-light-beige overflow-auto'>
        <button className='absolute top-0 left-0 p-5 cursor-pointer' onClick={onClose}>
          <ArrowLeftIcon className='fixed h-8 w-8 hover:text-primary-orange transition-all duration-300'/>
        </button>
        <div className='p-5 mt-12'>
          <p className='text-lg font-source-sans-pro text-primary-orange'>{author}</p>
          <h2 className='text-4xl uppercase font-source-sans-pro font-bold'>{title}</h2>
          <p className='mt-4 text-md sm:text-lg font-source-serif-pro cursor-text' dangerouslySetInnerHTML={{ __html: body.replace(/\n/g, '<br/>')}}></p>
        </div>
      </motion.div>
    </>
  )
}

export default AudioFullView

AudioFullView.propTypes = {
  content: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    author: PropTypes.string,
    body: PropTypes.string,
    description: PropTypes.string,
    url: PropTypes.string,
  }).isRequired,
  onClose: PropTypes.func.isRequired,
}