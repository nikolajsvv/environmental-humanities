import PropTypes from 'prop-types'
import image from '../../assets/raphael-giesbrecht-_7UbqOUgBzo-unsplash.jpg'
import '../../styles/SectionTitle.css'

const SectionTitle = ({ sectionContent }) => {
  const { title, content } = sectionContent;

  return (
    <div className='group flex lg:flex-row justify-between items-start inset-0 bg-no-repeat bg-center bg-cover rounded-2xl overflow-hidden' 
    style={{backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0)), url(${image})`}}
  >
    <div className='flex flex-col items-start'>
      <h3 className='text-9xl text-white p-4 pl-10 group-hover:opacity-60 transition duration-300 relative'>{title}
        <span className="line absolute bottom-0 -left-10 border-t-2 border-white w-96 group-hover:w-[calc(100%)] transition-all duration-300"></span>
      </h3>
    </div>

    <div className='w-full h-full bg-gray-600 bg-opacity-70 text-white flex flex-col justify-start items-start shadow-md rounded-2xl p-10 transform origin-right group-hover:scale-x-105 transition-transform duration-300'>
      <p className='text-md font-source-serif-pro font-light p-10'>{content}</p>
    </div>
  </div>
  )
}


export default SectionTitle

SectionTitle.propTypes = {
  sectionContent: PropTypes.string,
  content: PropTypes.string
}
