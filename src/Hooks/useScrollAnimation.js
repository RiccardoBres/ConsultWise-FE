/* // useScrollAnimation.js
import { useEffect } from 'react';

const useScrollAnimation = (ref, animationClass) => {
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add(animationClass, 'animation-active');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref, animationClass]);
};

export default useScrollAnimation; */
