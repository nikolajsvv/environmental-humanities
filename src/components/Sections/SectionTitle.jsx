import PropTypes from 'prop-types'
import image from '../../assets/Images/sectionTitleImage.webp'
import '../../styles/SectionTitle.css'
import { motion } from 'framer-motion';

const SectionTitle = ({ sectionContent }) => {

  const { title, content } = sectionContent;

  return (
    <motion.div
      initial={{ opacity: 0 }} 
      whileInView={{ opacity: 1}}
      transition={{ duration: 1}} 
      className='group flex flex-col lg:flex-row justify-between items-start inset-0 bg-no-repeat bg-center bg-cover rounded-2xl overflow-hidden shadow-md shadow-mud'
      style={{backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0)), url(${image})`}}
    >    
      <div className='flex flex-col items-start'>
        <h3 className='text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-light-beige font-bold p-20 pl-10 lg:pl-20 transition duration-300 relative'>{title}
          <span className="line absolute bottom-0 -left-96 border-t-2 border-light-beige w-96 group-hover:w-[calc(140%)] transition-all duration-300"></span>
        </h3>
      </div>

      <div className='w-full h-full bg-dark-green bg-opacity-70 text-white flex flex-col justify-start items-start shadow-md rounded-2xl p-10 transform origin-right lg:group-hover:scale-x-105 transition-transform duration-300'>
        <p className='text-sm lg:text-sm xl:text-lg font-source-serif-pro font-light p-2 sm:p-10'>{content}</p>
      </div>
  </motion.div>
  )
}


export default SectionTitle

SectionTitle.propTypes = {
  sectionContent: PropTypes.shape({
    title: PropTypes.string,
    content: PropTypes.string,
    image: PropTypes.string
  }),
  content: PropTypes.string
}
