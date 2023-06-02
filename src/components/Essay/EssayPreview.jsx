import EssayFullView from './EssayFullView';
import PropTypes from 'prop-types';
import image1 from '../../assets/philip-jahn-r_rnWGV64Ac-unsplash.jpg'
import { useState } from 'react'


const EssayPreview = ({essay}) => {
  const [showFullView, setShowFullView] = useState(false);

  // const handleViewClick = () => {
  //   setShowFullView(true);
  // }

  return (
    <>
    <div className='group cursor-pointer bg-primary-bg p-5 mx-auto w-full flex flex-col'>
      <img src={image1} className='h-60 bg-gray-100 rounded-md aspect-square transition-all ease-in-out delay-100 object-cover hover:scale-105'/>
        <h2 className='pt-2 text-left text-2xl uppercase font-souce-sans-pro text-primary-green'>
          <span className='bg-gradient-to-r from-green-300 to-green-200 bg-[length:0px_10px] bg-left-bottom bg-no-repeat duration-500 hover:bg-[length:100%_10px] group-hover:bg-[length:100%_10px]'>
            {essay.title}
          </span>
        </h2>
        <p className='text-left font-extralight font-souce-sans-pro text-sm'>{essay.author}</p>
        <p className='py-2 font-light font-source-serif-pro'>{essay.content.substring(0,200)}...</p>

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
    content: PropTypes.string,
    type: PropTypes.string,
  }).isRequired,
}
export default EssayPreview