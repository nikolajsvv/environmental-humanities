import PropTypes from 'prop-types'

const SectionIntro = ({intro}) => {
  const { content } = intro;

  return (
    <div className='m-10 p-10 shadow-md'>
      <p>{content}</p>
    </div>
  )
}

SectionIntro.propTypes = {
  intro: PropTypes.shape({
    content: PropTypes.string
  })
}

export default SectionIntro