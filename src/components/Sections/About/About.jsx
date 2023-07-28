import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

const About = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0.2, 0.4, 0.8], [0, 1, 0]);

  return (
    <section className="">
      <div ref={targetRef} className="h-[300vh] w-full mb-22 pl-10 pr-10">
        <div className='sticky top-52'>
          <div className="flex justify-center">
            <motion.div style={{opacity}} className="origin-top absolute mt-22">
              <h2 className="text-3xl font-source-sans-pro">Imagine you woke up tomorrow in a perfectly sustainable society. What would this look like, and what would it have taken to get here? Would our work be complete – or is there a chance we could have missed the point? What does sustainability even mean?</h2>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
