import PropTypes from 'prop-types';
import { useEffect  } from 'react';
import { XMarkIcon, ArrowLeftIcon } from '@heroicons/react/24/solid';
import { motion } from 'framer-motion';

const EssayFullView = ({ content, onClose }) => {
  const { title, author, body, description, url } = content;

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
            <XMarkIcon className='fixed h-10 w-10 bg-gray-100 rounded-full hover:text-primary-orange hover:bg-opacity-50' />
          </button>
          <object data={url} type="application/pdf" className='w-full h-full'>
            <iframe src='https://pdfjs-express.s3-us-west-2.amazonaws.com/docs/choosing-a-pdf-viewer.pdf'>
              <p className='text-white text-lg'>This browser does not support PDF.</p>
            </iframe>
          </object>
        </motion.div>
        <motion.div className='md:hidden'>
          <button className='absolute top-0 left-0 p-5 cursor-pointer' onClick={onClose}>
            <ArrowLeftIcon className='fixed h-8 w-8 text-white hover:text-primary-orange'/>
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
      <motion.div className="hidden md:inline cursor-default w-8/12 bg-primary-bg overflow-auto h-3/4 rounded-2xl relative pt-5 items-center" onClick={e => e.stopPropagation()}>
        <button className="absolute top-0 right-10 m-5 p-2 cursor-pointer" onClick={onClose}>
          <XMarkIcon className='fixed h-10 w-10 hover:text-primary-orange' />
        </button>
        <div className="p-10">
          <p className='text-xl text-primary-orange font-source-sans-pro capitalize cursor-text'>{author}</p>
          <h2 className='text-lg sm:text-4xl font-bold font-source-sans-pro uppercase cursor-text'>{title}</h2>
          <p className='mt-4 text-sm sm:text-lg font-source-serif-pro cursor-text whitespace-pre-line	' dangerouslySetInnerHTML={{ __html: body.replace(/\n/g, '<br/>')}}></p>
          { description !== '' ? (<h2 className='mt-20 text-2xl font-source-sans-pro font-bold'>Process</h2>) : ''}
          { description !== '' ? (<p className='mt-4 text-md sm:text-lg font-source-serif-pro cursor-text' dangerouslySetInnerHTML={{ __html: description.replace(/\n/g, '<br/>')}}></p>) : ''}
        </div>
      </motion.div>
      
      <motion.div className='md:hidden fixed top-0 left-0 w-screen h-screen bg-primary-bg overflow-auto'>
        <button className='absolute top-0 left-0 p-5 cursor-pointer' onClick={onClose}>
          <ArrowLeftIcon className='fixed h-8 w-8'/>
        </button>
        <div className='p-5 mt-12'>
          <p className='text-lg font-source-serif-pro text-primary-orange'>{author}</p>
          <h2 className='text-4xl uppercase font-source-sans-pro font-bold'>{title}</h2>
          <p className='mt-4 text-md sm:text-lg font-source-serif-pro cursor-text whitespace-pre-line' dangerouslySetInnerHTML={{ __html: body.replace(/\n/g, '<br/>')}}></p>
          <h2 className='text-lg font-source-sans-pro text-primary-orange'>Process</h2>
          { description !== '' ? (<p className='mt-4 text-md sm:text-lg font-source-serif-pro cursor-text whitespace-pre-line' dangerouslySetInnerHTML={{ __html: description.replace(/\n/g, '<br/>')}}></p>) : ''}
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
    description: PropTypes.string,
    url: PropTypes.string,
  }).isRequired,
  onClose: PropTypes.func.isRequired,
}

export default EssayFullView;
