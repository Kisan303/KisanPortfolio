import { useRef, useEffect } from 'react';

export const useMouseGlow = () => {
  const elementRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;
    
    const handleMouseMove = (e: MouseEvent) => {
      const rect = element.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      if (x > 0 && x < rect.width && y > 0 && y < rect.height) {
        element.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 20%, transparent 60%)`;
      } else {
        element.style.background = '';
      }
    };
    
    element.addEventListener('mousemove', handleMouseMove);
    element.addEventListener('mouseleave', () => {
      element.style.background = '';
    });
    
    return () => {
      element.removeEventListener('mousemove', handleMouseMove);
      element.removeEventListener('mouseleave', () => {
        element.style.background = '';
      });
    };
  }, []);
  
  return elementRef;
};
