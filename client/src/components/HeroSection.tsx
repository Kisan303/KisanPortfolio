import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useParallax } from '@/hooks/useParallax';

const HeroSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { registerParallaxElement } = useParallax();

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    // Register elements for parallax effect
    const parallaxBg = section.querySelector('.parallax-bg');
    const profileImage = section.querySelector('.profile-container');
    const heroContent = section.querySelector('.hero-content');

    if (parallaxBg) registerParallaxElement(parallaxBg, { speed: -0.5 });
    if (profileImage) registerParallaxElement(profileImage, { speed: 0.2 });
    if (heroContent) registerParallaxElement(heroContent, { speed: 0.1 });
  }, [registerParallaxElement]);

  return (
    <section 
      ref={sectionRef}
      id="hero" 
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Parallax Background Elements */}
      <div className="parallax-bg absolute inset-0">
        <div className="absolute top-0 right-0 w-2/3 h-3/4 bg-gradient-to-b from-[rgba(31,182,255,0.05)] to-transparent rounded-bl-full opacity-40"></div>
        <div className="absolute bottom-0 left-0 w-2/3 h-3/4 bg-gradient-to-t from-[rgba(255,126,54,0.05)] to-transparent rounded-tr-full opacity-40"></div>
      </div>
      
      {/* Hero Content */}
      <div className="container mx-auto px-6 z-10 flex flex-col md:flex-row items-center justify-between">
        <motion.div 
          className="hero-content md:w-3/5 mb-12 md:mb-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="space-y-4">
            <motion.h2 
              className="text-secondary font-poppins font-light tracking-widest"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              FULL STACK SOFTWARE DEVELOPER
            </motion.h2>
            
            <motion.h1 
              className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              Kisan <span className="text-gradient">Rai</span>
            </motion.h1>
            
            <motion.p 
              className="text-xl text-secondary max-w-lg mt-6 leading-relaxed"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.9 }}
            >
              "I'm passionate about creating seamless user experiences and solving real-world problems through technology."
            </motion.p>
            
            <motion.div 
              className="pt-8 flex space-x-4"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 1.1 }}
            >
              <a 
                href="#projects" 
                className="px-6 py-3 bg-accent-blue text-white font-medium rounded-md hover:bg-opacity-90 transition-colors"
              >
                View Projects
              </a>
              <a 
                href="#contact" 
                className="px-6 py-3 border border-slate-600 text-white font-medium rounded-md hover:border-accent-blue transition-colors"
              >
                Contact Me
              </a>
            </motion.div>
          </div>
        </motion.div>
        
        <motion.div 
          className="profile-container md:w-2/5 flex justify-center md:justify-end profile-animation"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <div className="relative rounded-full w-64 h-64 md:w-80 md:h-80 overflow-hidden border-4 border-transparent"
               style={{
                 background: 'linear-gradient(#121212, #121212) padding-box, linear-gradient(90deg, #1FB6FF, #FF7E36) border-box'
               }}>
            <div 
              className="w-full h-full rounded-full overflow-hidden"
            >
              <div className="w-full h-full bg-gradient-to-tr from-[rgba(31,182,255,0.2)] to-[rgba(255,126,54,0.2)] absolute"></div>
              <svg width="100%" height="100%" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <circle cx="100" cy="75" r="50" fill="#333" />
                <circle cx="100" cy="260" r="140" fill="#333" />
              </svg>
            </div>
          </div>
        </motion.div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-0 right-0 flex justify-center animate-bounce">
        <a href="#about" className="text-tertiary hover:text-white transition-colors">
          <ChevronDown className="w-8 h-8" />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
