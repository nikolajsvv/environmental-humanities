// useSectionProgress.js

import { useState, useEffect } from 'react';
import { useScroll } from 'framer-motion';

const useSectionProgress = (sectionId) => {
  const [progress, setProgress] = useState(0);
  const { scrollY } = useScroll();

  useEffect(() => {
    const handleScroll = () => {
      const element = document.querySelector(sectionId);
      if (!element) return;

      const rect = element.getBoundingClientRect();
      const scrollTotal = rect.height + window.innerHeight;
      const scrollCurrent = window.scrollY - rect.top;

      setProgress(scrollCurrent / scrollTotal);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sectionId, scrollY]);

  return progress;
};

export default useSectionProgress;
