import PropTypes from 'prop-types'

const EssayPreview2 = ({essay, image}) => {

  const { title, author, content } = essay;
  return (
  <div className='relative flex justify-center items-center'>
    <img src={image} alt='image' className='h-60 w-100 rounded-2xl'/>
    <div className='group absolute bg-primary-bg shadow-sm h-70 w-80 p-2 translate-y-1/2 rounded-2xl text-left hover:scale-105 hover:shadow-lg transition-all duration-300 cursor-pointer'>
      <p className='text-sm text-primary-orange font-light font-source-serif-pro '>{author}</p>
      <h2 className='pt-2 text-left text-2xl uppercase font-souce-sans-pro'>
          <span className='bg-gradient-to-r from-green-300 to-green-200 bg-[length:0px_10px] bg-left-bottom bg-no-repeat duration-500 hover:bg-[length:100%_10px] group-hover:bg-[length:100%_10px]'>
            {title}
          </span>
      </h2>
      <p className='py-2 font-light font-source-serif-pro'>{content.substring(0,150)}...</p>
      <button className=''>Read More</button>
    </div>
  </div>
  )
}
EssayPreview2.propTypes = {
  essay: PropTypes.shape({
    title: PropTypes.string,
    author: PropTypes.string,
    content: PropTypes.string,
  }),
  image: PropTypes.string
}
export default EssayPreview2