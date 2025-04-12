import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code, Layers, Server, Database, Globe, ArrowRight, Terminal, Laptop, Settings, Package, ChevronRight, Award, Users } from 'lucide-react';

interface Responsibility {
  text: string;
}

interface ExperienceItem {
  id: number;
  title: string;
  company: string;
  period: string;
  logoIcon: React.ElementType;
  bgColor: string;
  textColor: string;
  responsibilities: string[];
  technologies: string[];
}

interface ExperienceCardProps {
  experience: ExperienceItem;
  isActive: boolean;
  setActive: (id: number) => void;
  index: number;
}

const ExperienceCard = ({ experience, isActive, setActive, index }: ExperienceCardProps) => {
  const { title, company, period, responsibilities, technologies, logoIcon: LogoIcon, bgColor, textColor } = experience;
  
  return (
    <motion.div 
      layout
      className={`relative w-full overflow-hidden rounded-xl p-1 cursor-pointer transition-all duration-300 ${
        isActive ? 'bg-gradient-to-r from-[#1FB6FF]/30 to-[#FF7E36]/30' : 'bg-slate-800/30 hover:bg-slate-800/50'
      }`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onClick={() => setActive(experience.id)}
    >
      <div className="p-5 md:p-6 backdrop-blur-sm bg-black/30 rounded-lg">
        <div className="flex items-start justify-between">
          <div className="flex gap-4">
            {/* Logo or Icon */}
            <div className={`relative flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-lg ${bgColor}`}>
              <LogoIcon className={`w-5 h-5 ${textColor}`} />
            </div>
            
            {/* Title and company */}
            <div>
              <h3 className="text-xl font-semibold">{title}</h3>
              <h4 className="text-secondary font-medium mt-0.5">{company}</h4>
            </div>
          </div>
          
          {/* Period */}
          <div className="hidden md:flex items-center gap-2 text-sm text-secondary">
            <span className="px-3 py-1 rounded-full border border-white/10 bg-white/5">{period}</span>
          </div>
        </div>
        
        {/* Expanded content */}
        <AnimatePresence>
          {isActive && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }} 
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="pt-6">
                {/* Responsibilities */}
                <div className="space-y-4 text-secondary mb-6">
                  {responsibilities.map((responsibility, idx) => (
                    <motion.div 
                      key={idx}
                      className="flex gap-3 items-start"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.1 + idx * 0.1 }}
                    >
                      <ChevronRight className="w-5 h-5 text-[#1FB6FF] flex-shrink-0 mt-0.5" />
                      <p>{responsibility}</p>
                    </motion.div>
                  ))}
                </div>
                
                {/* Tech stack */}
                <motion.div 
                  className="flex flex-wrap gap-2"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.4 }}
                >
                  {technologies.map((tech, techIndex) => (
                    <motion.span 
                      key={techIndex} 
                      className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-sm text-secondary"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.2, delay: 0.5 + techIndex * 0.05 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        
        {/* Indicator */}
        <div className="absolute bottom-0 left-0 right-0 h-1">
          <motion.div 
            className="h-full bg-gradient-to-r from-[#1FB6FF] to-[#FF7E36]"
            initial={{ width: "0%" }}
            animate={{ width: isActive ? "100%" : "0%" }}
            transition={{ duration: 0.5 }}
          />
        </div>
      </div>
    </motion.div>
  );
};

const ExperienceSection = () => {
  const experienceData = [
    {
      id: 1,
      title: "Backend Software Engineer",
      company: "FusemachinesAI",
      period: "2022 - 2023",
      logoIcon: Code,
      bgColor: "bg-indigo-900/30",
      textColor: "text-indigo-400",
      responsibilities: [
        "Developed backend systems using Python/Django, improving performance by 40% and building RESTful APIs for seamless integration.",
        "Optimized PostgreSQL queries and created dynamic views/templates with Django, boosting system speed by 84% and enhancing user experience.",
        "Integrated Stripe payment gateway and implemented advanced search/filter functionalities, increasing user engagement by 30%."
      ],
      technologies: ["Python", "Restful APIs", "PostgresSQL", "Docker", "Stripe"]
    },
    {
      id: 2,
      title: "Android Developer",
      company: "EKbana Solutions",
      period: "2019 - 2021",
      logoIcon: Layers,
      bgColor: "bg-blue-900/30", 
      textColor: "text-blue-400",
      responsibilities: [
        "Redesigned the frontend of the Hamrobazzar Marketplace using Android Studio IDE (Java), ensuring a consistent and user-friendly interface.",
        "Built dynamic layouts with Material Design and integrated Google Maps API for responsive, location-based user experiences.",
        "Integrated Firebase for real-time data synchronization by leveraging Firestore and Realtime Database, resulting in faster updates for product listings and smoother user interactions."
      ],
      technologies: ["Java | XMl", "AndroidStudio", "Firebase", "Figma"]
    },
    {
      id: 3,
      title: "Frontend Developer",
      company: "Digital Innovation",
      period: "2017 - 2019",
      logoIcon: Globe,
      bgColor: "bg-cyan-900/30",
      textColor: "text-cyan-400",
      responsibilities: [
        "Built interactive user interfaces using modern JavaScript frameworks, improving user engagement by 35%.",
        "Implemented responsive design principles, ensuring consistent experience across different devices and screen sizes.",
        "Integrated third-party APIs and services to extend application functionality and improve user experience."
      ],
      technologies: ["JavaScript", "React", "CSS3", "HTML5", "Webpack"]
    },
    /*
    {
      id: 4,
      title: "Junior Web Developer",
      company: "Tech Startup",
      period: "2016 - 2017",
      logoIcon: Terminal,
      bgColor: "bg-emerald-900/30",
      textColor: "text-emerald-400",
      responsibilities: [
        "Assisted in developing and maintaining company websites and internal tools.",
        "Contributed to implementing new features and fixing bugs in existing web applications.",
        "Collaborated with senior developers to learn best practices and improve coding skills."
      ],
      technologies: ["JavaScript", "PHP", "jQuery", "Bootstrap", "WordPress"]
    }
      */
  ];

  const [activeExperience, setActiveExperience] = useState(experienceData[0].id);

  return (
    <section id="experience" className="py-20 md:py-32 relative section-reveal bg-gradient-to-b from-transparent to-black/20">
      <div className="container mx-auto px-6">
        <motion.h2 
          className="text-4xl md:text-5xl font-bold mb-8 relative"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="bg-[#1FB6FF] w-12 h-1 absolute -top-3 left-0 rounded"></span>
          Experience
        </motion.h2>
        
        <motion.p 
          className="text-secondary text-lg max-w-2xl mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          My professional journey has equipped me with a diverse range of skills across the full development stack.
        </motion.p>
        
        {/* Experience Timeline Visual Element */}
        <div className="mb-16 opacity-10">
          <div className="h-0.5 bg-gradient-to-r from-[#1FB6FF] via-white to-[#FF7E36] w-full"></div>
          <div className="flex justify-between px-1 relative -top-2.5">
            <div className="w-5 h-5 rounded-full bg-[#1FB6FF]"></div>
            <div className="w-5 h-5 rounded-full bg-white"></div>
            <div className="w-5 h-5 rounded-full bg-white"></div>
            <div className="w-5 h-5 rounded-full bg-[#FF7E36]"></div>
          </div>
          <div className="flex justify-between text-xs text-gray-500 pt-1">
            <div>2016</div>
            <div>2018</div>
            <div>2020</div>
            <div>Present</div>
          </div>
        </div>
        
        {/* Experience Cards */}
        <div className="space-y-5">
          {experienceData.map((experience, index) => (
            <ExperienceCard 
              key={experience.id}
              experience={experience}
              isActive={activeExperience === experience.id}
              setActive={setActiveExperience}
              index={index}
            />
          ))}
        </div>
        
        {/* Achievements Section */}
        <motion.div 
          className="mt-16 p-6 rounded-xl bg-gradient-to-r from-slate-900/80 to-slate-800/50 border border-white/5"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="flex gap-4 items-start">
            <Award className="w-8 h-8 text-[#FF7E36] flex-shrink-0" />
            <div>
              <h3 className="text-xl font-semibold mb-4">Key Professional Achievements</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex gap-3">
                  <Users className="w-5 h-5 text-[#1FB6FF] flex-shrink-0" />
                  <p className="text-secondary">Led cross-functional teams of 5-10 developers on multiple projects</p>
                </div>
                <div className="flex gap-3">
                  <Settings className="w-5 h-5 text-[#1FB6FF] flex-shrink-0" />
                  <p className="text-secondary">Implemented system architecture improvements reducing costs by 30%</p>
                </div>
                <div className="flex gap-3">
                  <Package className="w-5 h-5 text-[#1FB6FF] flex-shrink-0" />
                  <p className="text-secondary">Delivered 15+ successful projects on time and within budget</p>
                </div>
                <div className="flex gap-3">
                  <Laptop className="w-5 h-5 text-[#1FB6FF] flex-shrink-0" />
                  <p className="text-secondary">Developed internal tools used by 100+ team members daily</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;
