// Default introduction for each of the 4 sections, not including the welcome section
import PropTypes from 'prop-types';
import TreeBranch from '../../assets/cartoon-branch.png'
function SectionTitle({title}) {

  return (
  <>
    <div className='sticky flex items-center justify-center top-0 z-40'>
      <div className='transform translate-y-1/2 p-3 shadow-lg min-w-fit max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl overflow-auto whitespace-normal z-10 bg-primary-bg'>
        <div className='text-xl font-bold sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-primary-orange font-source-sans-pro text-center'>
          {title.toUpperCase()}
        </div>  
      </div>
    </div>
    <div className='mt-4'>
      <img src={TreeBranch} alt='Tree branch' className='w-auto h-auto opacity-50 transform -translate-y-1/2'/>
    </div>
  </>
  )
}
SectionTitle.propTypes = {
  title: PropTypes.string.isRequired,
};

export default SectionTitle 