import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useRef } from 'react';
import image1 from '../../../assets/Images/About/sustainable_planet.webp';

const Description = () => {

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3    // This ensures at least 30% of the item is in view before triggering
  });

  return (
    <motion.section className="p-5 md:p-10" ref={ref}>
      <motion.div id='first-section' className="mb-20 pt-40 font-source-sans-pro flex flex-col md:flex-row items-center justify-center relative"
        initial={{opacity: 0}}
        animate={{opacity: inView ? 1 : 0}}
        transition={{duration: 1}}
        >
        <motion.div className='w-full md:w-1/2 p-3 sm:p-10 relative'
          initial={{ opacity: 0, x: -100}}
          whileInView={{ opacity: inView ? 1 : 0, x: inView ? 0 : -100}}
          transition={{ duration: 1 }}>
          <h2 className="relative z-10 text-xl sm:text-xl md:text-2xl lg:text-3xl text-center font-bold">Imagine you woke up tomorrow in a perfectly sustainable society</h2>
        </motion.div>
        <motion.div className='w-full md:w-1/2 text-md sm:text-lg md:text-xl lg:text-2xl text-center md:text-left space-y-2 md:space-y-6'
          initial={{ opacity: 0, x: 100}}
          whileInView={{ opacity: inView ? 1 : 0, x: inView ? 0 : 100}}
          transition={{ duration: 1 }}>
            <p className='font-semibold'>What would this look like, and what would it have taken to get here?</p>
            <p className='font-semibold'>Would our work be complete – or is there a chance we could have missed the point?</p>
            <p className='font-semibold'>What does sustainability even mean?</p>
        </motion.div>
      </motion.div>
      <motion.div id='second-section' className="w-full pt-40 flex flex-col md:flex-row justify-center items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: inView ? 1 : 0 }}
        transition={{duration: 1}}>
        <motion.div id='image' className="w-full md:w-1/2 mb-5 md:mb-0"
          initial={{opacity: 0, x:-100}}
          whileInView={{ opacity: inView ? 1 : 0, x: inView ? 0 : -100}}
          transition={{ duration: 1 }}>
          <motion.img src={image1} alt='sustainable planet image' loading='lazy' className="w-full object-cover"/>
        </motion.div>
        <motion.div className="w-full md:w-1/2 font-source-sans-pro text-left p-12 md:p-10"
          initial={{opacity: 0, x:100}}
          whileInView={{ opacity: inView ? 1 : 0, x: inView ? 0 : 100}}
          transition={{ duration: 1 }}>
          <h2 className='text-lg sm:text-xl md:text-2xl lg:text-3xl'><b>Expansive thinking and deep questioning are hallmarks of the environmental humanities –</b> an interdisciplinary field that brings together the sciences and humanities to probe at the cultural, ethical, and philosophical roots of environmental challenges.</h2>
        </motion.div>
      </motion.div>
      <motion.div id='third-section' className='p-10 md:p-20 lg:p-40 font-source-sans-pro flex flex-col items-center justify-center text-left'
        initial={{ opacity: 0, x:-100}}
        whileInView={{ opacity: inView ? 1 : 0, x: inView ? 0 : -100}}
        transition={{ duration: 1 }}>
        <p className='text-md sm:text-lg md:text-xl lg:text-xl xl:text-2xl'>In the first quarter of Stanford’s new Doerr School of Sustainability, students in “Environmental Humanities: Finding Our Place on a Changing Planet” [SUSTAIN 140 | BIO 184 | ENGLISH 140D] explored a range of questions around today’s accelerating environmental challenges – engaging interdisciplinary lenses and creativity. Students thought critically about narratives of human progress, explored contrasting cultural paradigms around human-nature relationships, and leveraged humility and curiosity to make sense of the ways culture and environmental change are entwined.</p>
      </motion.div>
      <motion.div id='fourth-section' className='w-full flex flex-col md:flex-row justify-center items-center'
        initial={{ opacity: 0 }}
        animate={{ opacity: inView ? 1 : 0 }}
        transition={{duration: 1}}>
        <motion.div className='w-full md:w-1/2 font-source-sans-pro text-left p-12 md:p-10'
          initial={{ opacity: 0, x:-100}}
          whileInView={{ opacity: inView ? 1 : 0, x: inView ? 0 : -100}}
          transition={{ duration: 1 }}>
          <p className='text-md sm:text-lg md:text-xl lg:text-2xl'><b>This website comprises a selection of students’ work:</b> frank depictions of grief and overwhelm, glimpses into personal relationships with the more-than-human world, illustrative imaginings of futures both dark and hopeful, insightful visions for solutions, and attempts to hold a set of challenges that can sometimes feel beyond grasp.</p>
        </motion.div>
        <motion.div id='image' className='w-full md:w-1/2 mb-5 md:mb-0'
          initial={{ opacity: 0, x:100}}
          whileInView={{ opacity: inView ? 1 : 0, x: inView ? 0 : 100}}
          transition={{ duration: 1 }}>
          <img src={image1} alt="image description" loading='lazy' className='w-full object-cover'/>
        </motion.div>
      </motion.div>
    </motion.section>
  )
}

export default Description;
