import PropTypes from "prop-types";
import { motion } from "framer-motion";

const AnimateTitle = ({ title, delay, style }) => {
  const words = title.split('');

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: delay * i}
    })
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 50,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: -20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      }
    }
  }

  return (
      <motion.div variants={container} initial='hidden' animate='visible' style={style}>
        {words.map((word, index) => (
          <motion.span variants={child} key={index} className="">
            {word}
          </motion.span>
        ))}
      </motion.div>
  );
};

export default AnimateTitle;

AnimateTitle.propTypes = {
  title: PropTypes.string,
  delay: PropTypes.number,
  style: PropTypes.object
};
