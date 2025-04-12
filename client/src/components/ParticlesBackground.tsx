import { useEffect, useRef } from 'react';

const ParticlesBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    
    // Clear any existing particles
    container.innerHTML = '';
    
    // Create particles
    const particleCount = 50;
    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement('div');
      particle.classList.add('particle');
      
      // Random position
      particle.style.left = `${Math.random() * 100}vw`;
      particle.style.top = `${Math.random() * 100}vh`;
      
      // Random size
      const size = Math.random() * 3 + 1;
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      
      // Random opacity
      particle.style.opacity = String(Math.random() * 0.5 + 0.1);
      
      // Add to container
      container.appendChild(particle);
    }
  }, []);
  
  return (
    <div 
      ref={containerRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-0"
    >
      {/* Particles will be generated here */}
    </div>
  );
};

export default ParticlesBackground;
