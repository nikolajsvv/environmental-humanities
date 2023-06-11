

const ImageView = ({imageUrl}) => {
  return (
    <div className="rounded-2xl overflow-hidden">
      <img src={imageUrl} alt="image" className="rounded-2xl transition-all duration-500 hover:scale-110"/>
    </div>
  )
}

export default ImageView