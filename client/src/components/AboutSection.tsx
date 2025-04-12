import { motion } from 'framer-motion';
import { Code, GraduationCap, Briefcase, Coffee, Heart, Lightbulb, Globe, Book, Github, Codepen, Linkedin } from 'lucide-react';
import { useMouseGlow } from '../hooks/useMouseGlow';

const BentoBox = ({ 
  children, 
  className = '', 
  delay = 0,
  icon: Icon,
  title,
  color = 'from-blue-600/20 to-blue-600/5',
  onClick,
  href
}: { 
  children: React.ReactNode, 
  className?: string,
  delay?: number,
  icon?: any,
  title?: string,
  color?: string,
  onClick?: () => void,
  href?: string
}) => {
  const glowRef = useMouseGlow();
  
  const content = (
    <motion.div 
      ref={glowRef}
      className={`relative rounded-xl p-5 overflow-hidden bg-gradient-to-br ${color} border border-white/5 group cursor-pointer transition-all duration-300 hover:scale-[1.02] hover:shadow-lg ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.2 + delay * 0.1 }}
      onClick={onClick}
    >
      <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
      
      {/* Corner decoration */}
      <div className="absolute -top-12 -right-12 w-24 h-24 bg-gradient-to-br from-white/5 to-white/0 rounded-full blur-xl group-hover:from-white/10 transition-all duration-500"></div>
      
      {Icon && (
        <div className="mb-4 flex items-center">
          <Icon className="h-5 w-5 mr-2 text-[#1FB6FF]" />
          {title && <h3 className="text-lg font-medium">{title}</h3>}
        </div>
      )}
      
      {!Icon && title && <h3 className="text-lg font-medium mb-3">{title}</h3>}
      
      <div className="text-secondary text-sm md:text-base">
        {children}
      </div>
    </motion.div>
  );
  
  if (href) {
    return <a href={href} target="_blank" rel="noopener noreferrer" className="block">{content}</a>;
  }
  
  return content;
};

const AboutSection = () => {
  return (
    <section id="about" className="py-20 md:py-32 relative section-reveal">
      <div className="container mx-auto px-6">
        <motion.h2 
          className="text-4xl md:text-5xl font-bold mb-12 relative"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="bg-[#1FB6FF] w-12 h-1 absolute -top-3 left-0 rounded"></span>
          About Me
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {/* Main about me cell - spans 2 columns */}
          <BentoBox 
            className="md:col-span-2 md:row-span-2" 
            icon={Code} 
            title="Full Stack Developer"
            delay={0}
          >
            <p className="leading-relaxed mb-4">
              I'm a dedicated Full Stack Developer with a passion for creating elegant, efficient solutions to complex problems. With several years of experience in both front-end and back-end development, I approach each project with a holistic perspective.
            </p>
            <p className="leading-relaxed">
              My journey began with a deep curiosity about how technology could improve people's lives. This curiosity evolved into expertise across multiple programming languages, frameworks, and design principles.
            </p>
          </BentoBox>
          
          {/* Education cell */}
          <BentoBox 
            icon={GraduationCap} 
            title="Education"
            delay={1}
            color="from-purple-600/20 to-purple-600/5"
          >
            <div className="space-y-2">
              <div>
                <div className="font-medium">Post-Grad in Full-stack Software Development</div>
                <div className="text-xs text-gray-400">Lambton College | 2025 Grad</div>
              </div>
              <div>
                <div className="font-medium">BSc.Hons in Computer Science</div>
                <div className="text-xs text-gray-400">University of Wolverhampton-Uk | 2021 Grad</div>
              </div>
            </div>
          </BentoBox>
          
          {/* Work experience preview */}
          <BentoBox 
            icon={Briefcase} 
            title="Experience Highlights"
            delay={2}
            color="from-orange-500/20 to-orange-500/5"
          >
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>Python Backend-developer | FuseMachine AI</li>
              <li>Android | Frontend developer at Ek-Bana Solutions inch</li>
              <li>Freelance Developer</li>
            </ul>
            <div className="mt-2 text-xs text-[#1FB6FF]">See full experience section ↓</div>
          </BentoBox>
          
          {/* Interests cell */}
          <BentoBox 
            icon={Heart} 
            title="When Not Coding"
            delay={3}
            color="from-pink-500/20 to-pink-500/5"
          >
            <div className="flex flex-wrap gap-2">
              <span className="px-2 py-1 bg-white/5 rounded-full text-xs">Photography</span>
              <span className="px-2 py-1 bg-white/5 rounded-full text-xs">Hiking</span>
              <span className="px-2 py-1 bg-white/5 rounded-full text-xs">Movies</span>
              <span className="px-2 py-1 bg-white/5 rounded-full text-xs">Unity-UnReal Game Engine</span>
            </div>
          </BentoBox>
          
          {/* Github link */}
          <BentoBox 
            icon={Github} 
            title="Github"
            delay={4}
            color="from-gray-700/40 to-gray-700/20"
            href="https://github.com/Kisan303"
          >
            <div className="flex items-center justify-between">
              <span>Follow my open source work</span>
              <span className="text-xl">→</span>
            </div>
          </BentoBox>
          
          {/* CodePen/Codepen link */}
          <BentoBox 
            icon={Linkedin} 
            title="Linkedin"
            delay={5}
            color="from-gray-700/40 to-gray-700/20"
            href="https://www.linkedin.com/in/kisanrai/"
          >
            <div className="flex items-center justify-between">
              <span>Check out my Linkedln Profile</span>
              <span className="text-xl">→</span>
            </div>
          </BentoBox>
          
          {/* Quote */}
          <BentoBox 
            delay={6}
            color="from-emerald-600/20 to-emerald-600/5"
            className="md:col-span-3"
          >
            <div className="flex gap-4 items-center">
              <Lightbulb className="h-10 w-10 text-[#1FB6FF] shrink-0" />
              <blockquote className="text-lg">
                "I believe in writing clean, maintainable code that stands the test of time and creates meaningful experiences for users."
              </blockquote>
            </div>
          </BentoBox>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
