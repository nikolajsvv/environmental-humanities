import bgImage from '../../../assets/Images/marita-kavelashvili-ugnrXk1129g-unsplash.jpg';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Launch = () => {
  
  const { ref, inView } = useInView({
    threshold: 0.1
  });

  return (
    <motion.section ref={ref} id='launch' className="relative w-screen h-screen flex flex-col justify-center items-center" >
      <div style={{backgroundImage: `linear-gradient(to bottom, rgba(58, 81, 52, .4), #fefae7), url(${bgImage})` }} className='absolute inset-0 bg-cover bg-no-repeat'/>
      <motion.div className="absolute p-10 text-light-beige flex flex-col text-left">
        <motion.h1 className="text-6xl lg:text-8xl xl:text-9xl uppercase font-source-sans-pro font-black"
          initial={{ opacity: 0, x:-100}}
          whileInView={{ opacity: inView ? 1 : 0, x: inView ? 0 : -100 }}
          transition={{ duration: 1 }}>FINDING OUR PLACE</motion.h1>
        <motion.h1 className='text-6xl lg:text-8xl xl:text-9xl uppercase font-source-sans-pro font-black'
          initial={{ opacity: 0, x:-100 }}
          whileInView={{ opacity: inView ? 1 : 0, x: inView ? 0 : -100 }} 
          transition={{ duration: 1 }}>ON A CHANGING</motion.h1> 
        <motion.h1 className='text-dark-green text-7xl lg:text-9xl xl:text-[300px] uppercase font-source-sans-pro font-black xl:-translate-y-12 xl:-translate-x-3'
          initial={{ opacity: 0}}
          whileInView={{ opacity: inView ? 1 : 0 }} 
          transition={{ duration: 1, delay: 0.5 }}>PLANET</motion.h1>
        <motion.h2 className="text-mud text-xl lg:text-2xl xl:text-3xl font-source-serif-pro xl:-translate-y-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}>Stanford students exploring the roots of unsustainability – and imagining a better future</motion.h2>
      </motion.div>
      <p className='text-dark-green text-xs font-extralight absolute bottom-0 right-0 p-5'>
        {`This website showcases student perspectives from Stanford University's Fall 2022 course: "Environmental Humanities: Finding Our Place on a Changing Planet” [SUSTAIN 140 | BIO 184 | ENGLISH 140D]`}
      </p>    
</motion.section>
  )
}
export default Launch