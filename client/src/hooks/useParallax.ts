import { useCallback, useEffect } from 'react';

interface ParallaxOptions {
  speed: number;
}

export const useParallax = () => {
  const handleScroll = useCallback(() => {
    const parallaxElements = document.querySelectorAll('[data-parallax]');
    const scrollY = window.scrollY;
    
    parallaxElements.forEach((element) => {
      const speed = element.getAttribute('data-parallax-speed');
      if (speed) {
        const yPos = -(scrollY * parseFloat(speed));
        const transform = `translate3d(0, ${yPos}px, 0)`;
        (element as HTMLElement).style.transform = transform;
      }
    });
  }, []);
  
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);
  
  const registerParallaxElement = useCallback((element: Element, options: ParallaxOptions) => {
    element.setAttribute('data-parallax', 'true');
    element.setAttribute('data-parallax-speed', options.speed.toString());
  }, []);
  
  return { registerParallaxElement };
};
