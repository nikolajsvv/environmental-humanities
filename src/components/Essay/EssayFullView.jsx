import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { XCircleIcon } from '@heroicons/react/24/solid'

const EssayFullView = ({essay, onClose}) => {

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    }
  }, []);

  const handleOverlayClick = (event) => {
    if (event.target.classList.contains('overlay')) {
      onClose();
    }
  };

  return (
    <div className='cursor-pointer fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 pt-10 backdrop-blur-sm overlay' onClick={handleOverlayClick}>
      <div className="cursor-default w-11/12 bg-primary-bg overflow-auto max-h-screen rounded-2xl relative pt-5">
        <button className="absolute top-0 right-0 m-5 p-2 cursor-pointer" onClick={onClose}><XCircleIcon className='h-10 w-10 text-primary-orange'/></button>
        <div className="p-10">
          <h2 className='text-lg sm:text-2xl pt-2 font-bold font-source-sans-pro uppercase'>{essay.title}</h2>
          <p className='pb-2 font-source-sans-pro capitalize'>{essay.author}</p>
          <p className='text-sm sm:text-lg font-source-serif-pro' dangerouslySetInnerHTML={{ __html: essay.content.replace(/\n/g, '<br/>')}}></p>
        </div>
      </div>
    </div>
  );
}

EssayFullView.propTypes = {
  essay: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    author: PropTypes.string,
    content: PropTypes.string,
  }).isRequired,
  onClose: PropTypes.func.isRequired,
}
export default EssayFullView