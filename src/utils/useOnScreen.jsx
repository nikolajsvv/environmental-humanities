import { useState, useEffect } from 'react';

function useOnScreen(ref, rootMargin = '0px') {
    const [isIntersecting, setIntersecting] = useState(false)
  
    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          setIntersecting(entry.isIntersecting)
        },
        {
          rootMargin,
        }
      )
      if (ref.current) {
        observer.observe(ref.current)
      }
  
      return () => {
        if (ref.current) { // add this check
          observer.unobserve(ref.current)
        }
      }
    }, [ref, rootMargin])
  
    return isIntersecting
  }
export default useOnScreen;
