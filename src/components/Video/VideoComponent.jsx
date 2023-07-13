import PropTypes from 'prop-types';
import { VideoCameraIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';

const VideoComponent = ({content, backgroundImage}) => {

  const url = new URL(content.url);
  const video_id = url.searchParams.get('v');
  const embedUrl = `https://www.youtube.com/embed/${video_id}`;

  return (
    <motion.div className="group relative w-full pb-[75%] overflow-hidden rounded-2xl shadow-md shadow-mud" 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1}}
      transition={{ duration: 1 }}
      viewport={{ once: true }}>
      <motion.div style={{ backgroundImage: `url(${backgroundImage})` }} className='absolute inset-0 bg-no-repeat bg-center bg-cover rounded-2xl '/>
      <div className='absolute inset-0 bg-black opacity-50 rounded-2xl' />

      <div className='absolute top-0 left-0 p-4 text-gray-400 flex items-center'>
        <VideoCameraIcon className='h-6 w-6 md:h-8 md:w-8 group-hover:scale-110 group-hover:text-gray-300' />
      </div>
      <iframe width="100%" height="100%" src={embedUrl} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen className='absolute inset-0'></iframe>
    </motion.div>

  )
}

export default VideoComponent

VideoComponent.propTypes = {
  content: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    author: PropTypes.string,
    body: PropTypes.string,
    description: PropTypes.string,
    type: PropTypes.string,
    category: PropTypes.string,
    image: PropTypes.string,
    url: PropTypes.string,
  }),
  backgroundImage: PropTypes.string
}