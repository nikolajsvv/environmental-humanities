// Default introduction for each of the 4 sections, not including the welcome section
import PropTypes from 'prop-types';
import TreeBranch from '../../assets/cartoon-branch.png'

function SectionTitle({title}) {

  return (
  <div className='relative flex flex-col items-center'>
    <div className='absolute top-1/2 transform -translate-y-1/2 p-3 shadow-md bg-primary-bg min-w-fit max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl overflow-auto whitespace-normal z-10'>
      <div className='text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-primary-orange font-source-sans-pro text-center'>
        {title.toUpperCase()}
      </div>  
    </div>
    <div className='mt-4'>
      <img src={TreeBranch} alt='Tree branch' className='w-auto h-auto'/>
    </div>
  </div>
  )
}

SectionTitle.propTypes = {
  title: PropTypes.string.isRequired,
};

export default SectionTitle