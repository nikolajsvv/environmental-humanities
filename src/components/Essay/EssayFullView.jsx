import PropTypes from 'prop-types';

const EssayFullView = ({essay, onClose}) => {
  return (
    <div>
      <h2>{essay.title}</h2>
      <p>{essay.author}</p>
      <p>{essay.content}</p>
      <button onClick={onClose}>Close</button>
    </div>
  )
}

EssayFullView.propTypes = {
  essay: PropTypes.shape({
    title: PropTypes.string,
    author: PropTypes.string,
    content: PropTypes.string,
  }).isRequired,
  onClose: PropTypes.func.isRequired,
}
export default EssayFullView