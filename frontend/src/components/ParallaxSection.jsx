import React, { useEffect, useRef } from 'react';

const ParallaxSection = ({ children, speed = 0.5 }) => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const scrolled = window.scrollY;
      const element = sectionRef.current;
      const elementTop = element.offsetTop;
      const elementHeight = element.offsetHeight;
      const windowHeight = window.innerHeight;

      if (scrolled + windowHeight > elementTop && scrolled < elementTop + elementHeight) {
        const yPos = -(scrolled - elementTop) * speed;
        element.style.transform = `translateY(${yPos}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed]);

  return (
    <div ref={sectionRef} className="transition-transform duration-100">
      {children}
    </div>
  );
};

export default ParallaxSection;