import { useEffect, useState } from "react";

const useSectionTracker = (sectionIds) => {
  const [currentSection, setCurrentSection] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setCurrentSection(entry.target.id);
          }
        });
      },
      { threshold: 0.7 } // Adjust this value for when to trigger the change
    );

    sectionIds.forEach((id) => {
      const element = document.querySelector(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      sectionIds.forEach((id) => {
        const element = document.querySelector(id);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, [sectionIds]);
  return currentSection;
};

export default useSectionTracker;
