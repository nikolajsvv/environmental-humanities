import { useEffect, useState } from 'react';

const useCurrentSection = (sections) => {
  const [currentSection, setCurrentSection] = useState(sections[0]);

  useEffect(() => {
    let observers = [];
    
    const callback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setCurrentSection(sections.find(section => `#${section.id}` === entry.target.id));
        }
      });
    };

    const options = {
      rootMargin: '0px',
      threshold: 1.0
    };
    
    sections.forEach((section) => {
      const observer = new IntersectionObserver(callback, options);
      const sectionElement = document.querySelector(`#${section.id}`);
      if (sectionElement) {
        observer.observe(sectionElement);
        observers.push(observer);
      }
    });
    
    return () => {
      observers.forEach(observer => observer.disconnect());
    };
  }, [sections]);

  return currentSection;
};

export default useCurrentSection;
