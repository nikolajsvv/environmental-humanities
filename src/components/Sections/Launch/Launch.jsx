import bgImage from '../../../assets/Images/marita-kavelashvili-ugnrXk1129g-unsplash.jpg';

const Launch = () => {
  return (
    <div id='launch' className="relative w-screen h-screen flex justify-center items-center" >
      <div style={{backgroundImage: `linear-gradient(to bottom, rgba(58, 81, 52, .4), #fefae7), url(${bgImage})` }} className='absolute inset-0 bg-cover bg-no-repeat'/>
      <div className="absolute p-5 text-light-beige flex flex-col text-left">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-9xl uppercase font-source-sans-pro font-black">FINDING OUR PLACE</h1>
        <h1 className='text-3xl sm:text-4xl lg:text-5xl xl:text-9xl uppercase font-source-sans-pro font-black'>ON A CHANGING</h1>
        <h1 className='text-dark-green text-3xl sm:text-4xl lg:text-5xl xl:text-[300px] uppercase font-source-sans-pro font-black xl:-translate-y-12 xl:-translate-x-3'>PLANET</h1>
        <h2 className="text-mud text-xl lg:text-2xl xl:text-3xl font-source-serif-pro xl:-translate-y-12">Stanford students exploring the roots of unsustainability – and imagining a better future</h2>
      </div>
    </div>
  )
}

      {/* <div className="flex justify-end items-end">
        <p>This website showcases student perspectives from Stanford University&apos;s course: &quot;Environmental Humanities&quot;</p>
      </div> */}
export default Launch