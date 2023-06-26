import bgImage from '../../../assets/Images/marita-kavelashvili-ugnrXk1129g-unsplash.jpg';
import AnimateTitle from '../../../utils/AnimateTitle';

const Launch = () => {

  return (
    <section id='launch' className="relative w-screen h-screen flex flex-col justify-center items-center" >
      <div style={{backgroundImage: `linear-gradient(to bottom, rgba(58, 81, 52, .4), #fefae7), url(${bgImage})` }} className='absolute inset-0 bg-cover bg-no-repeat'/>
      <div className="absolute p-10 text-light-beige flex flex-col text-left">
        {/* <AnimateTitle title='FINDING OUR PLACE ON A CHANGING' delay='0.1' style={{ color: 'red', fontWeight: 'bold'}}/>
        <AnimateTitle title='PLANET' delay='3.5'/> */}
        <h1 className="text-6xl lg:text-8xl xl:text-9xl uppercase font-source-sans-pro font-black">FINDING OUR PLACE</h1>
        <h1 className='text-6xl lg:text-8xl xl:text-9xl uppercase font-source-sans-pro font-black'>ON A CHANGING</h1> 
        <h1 className='text-dark-green text-7xl lg:text-9xl xl:text-[300px] uppercase font-source-sans-pro font-black xl:-translate-y-12 xl:-translate-x-3'>PLANET</h1>
        <h2 className="text-mud text-xl lg:text-2xl xl:text-3xl font-source-serif-pro xl:-translate-y-12">Stanford students exploring the roots of unsustainability – and imagining a better future</h2>
      </div>
      <p className='text-dark-green text-xs font-extralight absolute bottom-0 right-0 p-5'>This website showcases student perspectives from Stanford University&apos;s course: &quot;Environmental Humanities&quot;</p>

    </section>
  )
}
export default Launch