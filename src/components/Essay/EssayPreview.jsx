import EssayFullView from './EssayFullView';
import PropTypes from 'prop-types';
import { useState } from 'react'


const EssayPreview = ({essay}) => {
  const [showFullView, setShowFullView] = useState(false);

  const handleViewClick = () => {
    setShowFullView(true);
  }

  return (
    <>
    <div className='bg-white flex flex-col rounded shadow-md mx-auto w-full font-source-serif-pro sm:w-1/2' onClick={handleViewClick}>
      <h2 className='px-4 pt-2 text-center text-2xl uppercase'>{essay.title}</h2>
      <p className='px-4 text-center font-light '>{essay.author}</p>
      
      <p className='px-4 py-2 font-light '>{essay.content.substring(0,100)}...</p>
    </div>

    {showFullView && (
      <EssayFullView
        essay={essay}
        onClose={() => setShowFullView(false)}
      />
    )}
    </>
  )
}

EssayPreview.propTypes = {
  essay: PropTypes.shape({
    title: PropTypes.string,
    author: PropTypes.string,
    content: PropTypes.string
  }).isRequired,
}
export default EssayPreview