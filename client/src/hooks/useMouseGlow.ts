import { useRef, useEffect } from 'react';

export const useMouseGlow = () => {
  const glowRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const glow = glowRef.current;
      if (!glow) return;
      
      const { clientX, clientY } = e;
      glow.style.left = `${clientX}px`;
      glow.style.top = `${clientY}px`;
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);
  
  return { glowRef };
};
