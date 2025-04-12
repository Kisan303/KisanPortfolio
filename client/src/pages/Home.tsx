import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ExperienceSection from '@/components/ExperienceSection';
import ProjectsSection from '@/components/ProjectsSection';
import SkillsSection from '@/components/SkillsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import ParticlesBackground from '@/components/ParticlesBackground';
import { useMouseGlow } from '@/hooks/useMouseGlow';

const Home = () => {
  const { glowRef } = useMouseGlow();

  // Initialize intersection observer for revealing sections on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    const sections = document.querySelectorAll('.section-reveal');
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Cursor glow effect */}
      <div 
        ref={glowRef} 
        className="fixed w-[350px] h-[350px] rounded-full pointer-events-none z-0 hidden md:block"
        style={{
          background: 'radial-gradient(circle, rgba(31, 182, 255, 0.15) 0%, rgba(31, 182, 255, 0) 70%)',
          transform: 'translate(-50%, -50%)'
        }}
      />
      
      {/* Background particles */}
      <ParticlesBackground />
      
      {/* Navigation */}
      <Navbar />
      
      <main className="relative">
        {/* Sections */}
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <SkillsSection />
        <ContactSection />
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
