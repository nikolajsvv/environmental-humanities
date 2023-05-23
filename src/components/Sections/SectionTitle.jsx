// Default introduction for each of the 4 sections, not including the welcome section
import PropTypes from 'prop-types';
import TreeBranch from '../../assets/cartoon-branch.png'
function SectionTitle({title}) {
  return (
  <div className='relative flex flex-col items-center'>
    <div className='absolute top-1/2 transform -translate-y-1/2 p-4 shadow-md bg-primary-bg min-w-fit max-w-xs overflow-auto whitespace-normal'>
      <div className='text-primary-orange font-source-sans-pro text-center text-4xl'>
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