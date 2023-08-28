import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import PropTypes from 'prop-types'

const About = ({content, id}) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0.3, 0.5, 0.9], [0, 1, 0]);

  return (
    <section id={id} className="flex items-center">
      <div ref={targetRef} className="h-[300vh] w-full mb-22 px-28">
        <div className='sticky top-1/2 transform -translate-y-1/2'>
          <div className="flex justify-center">
            <motion.div style={{opacity}} className="origin-top">
              <h2 className="text-3xl font-source-sans-pro">{content.content}</h2>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

About.propTypes = {
  content: PropTypes.string,
  id: PropTypes.string,
}
