import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, Code, FileCode, Layers, Server, BarChart } from 'lucide-react';
import { useMouseGlow } from '../hooks/useMouseGlow';

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  github: string;
  liveLink: string;
  image: string;
  color: string;
  icon: React.ElementType;
}

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  const [isHovered, setIsHovered] = useState(false);
  const glowRef = useMouseGlow();
  
  return (
    <motion.div 
      ref={glowRef}
      className="group relative rounded-xl overflow-hidden bg-gradient-to-br from-slate-900/90 to-black/80 border border-white/5 h-full flex flex-col"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
    >
      {/* Visual Accent Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-br from-transparent to-blue-500/5 rounded-bl-full opacity-80"></div>
      <div className="absolute -left-20 -top-20 w-40 h-40 rounded-full blur-2xl opacity-60 mix-blend-lighten bg-blue-500/10"></div>
      
      {/* Project Image */}
      <div className="relative h-56 overflow-hidden">
        {/* Dummy image represented by gradient + icon */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-blue-500/5 flex items-center justify-center">
          <project.icon className="w-16 h-16 text-blue-500 opacity-30" />
        </div>
        
        {/* Image overlay with animated gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/90 to-transparent"></div>
        
        {/* Project title positioned at the bottom of image */}
        <div className="absolute bottom-0 left-0 w-full p-6 z-10">
          <h3 className="text-xl md:text-2xl font-bold group-hover:text-white transition-colors duration-300">
            {project.title}
          </h3>
        </div>
        
        {/* Animated overlay on hover */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 mix-blend-overlay"
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        ></motion.div>
      </div>
      
      {/* Content */}
      <div className="p-6 pt-2 flex-grow flex flex-col">
        <p className="text-secondary mb-4 text-sm md:text-base leading-relaxed">{project.description}</p>
        
        {/* Tech Stack */}
        <div className="mb-6 flex-grow">
          <h4 className="text-sm uppercase text-gray-500 mb-2 tracking-wider">Tech Stack</h4>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, idx) => (
              <motion.span 
                key={idx}
                className="px-2 py-1 bg-blue-500/5 border border-blue-500/20 text-blue-500 text-xs rounded-full"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.2 + (idx * 0.05) }}
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </div>
        
        {/* Links */}
        <div className="flex gap-3 mt-auto">
          <motion.a 
            href={project.github}
            className="flex items-center gap-1.5 px-4 py-2 bg-white/5 hover:bg-white/10 rounded-md transition-colors text-sm"
            whileHover={{ 
              scale: 1.05,
              transition: { duration: 0.2 } 
            }}
            target="_blank" 
            rel="noopener noreferrer"
          >
            <Github className="w-4 h-4" />
            GitHub
          </motion.a>
          <motion.a 
            href={project.liveLink}
            className="flex items-center gap-1.5 px-4 py-2 bg-blue-500/10 hover:bg-blue-500/20 text-blue-500 rounded-md transition-colors text-sm"
            whileHover={{ 
              scale: 1.05,
              transition: { duration: 0.2 } 
            }}
            target="_blank"
            rel="noopener noreferrer"
          >
            <ExternalLink className="w-4 h-4" />
            Live Demo
          </motion.a>
        </div>
      </div>
      
      {/* Corner decorator */}
      <div className="absolute top-3 right-3">
        <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center">
          <project.icon className="w-4 h-4 text-blue-500" />
        </div>
      </div>
    </motion.div>
  );
};

const ProjectsSection = () => {
  const projects = [
    {
      id: 1,
      title: "AI-Powered Analytics Dashboard",
      description: "A real-time analytics platform with machine learning that provides actionable insights from user data with customizable widgets and predictive analysis.",
      technologies: ["React", "TensorFlow.js", "Node.js", "D3.js"],
      github: "https://github.com",
      liveLink: "#",
      image: "analytics-dashboard.png",
      color: "blue-500",
      icon: BarChart
    },
    {
      id: 2,
      title: "E-Commerce Microservices Platform",
      description: "A scalable e-commerce solution built with microservices architecture, including inventory management, payment processing, and a responsive storefront.",
      technologies: ["Java Spring", "Vue.js", "MongoDB", "Docker"],
      github: "https://github.com",
      liveLink: "#",
      image: "ecommerce-platform.png",
      color: "emerald-500",
      icon: Layers
    },
    {
      id: 3,
      title: "Collaborative Task Management App",
      description: "A real-time task management application with team collaboration features, custom workflows, and performance analytics for productivity tracking.",
      technologies: ["React", "Firebase", "Redux", "Material UI"],
      github: "https://github.com",
      liveLink: "#",
      image: "task-management.png",
      color: "indigo-500",
      icon: FileCode
    },
    {
      id: 4,
      title: "Blockchain-Based Voting System",
      description: "A secure and transparent voting platform powered by blockchain technology for tamper-proof elections with real-time tallying.",
      technologies: ["Solidity", "Ethereum", "Web3.js", "React"],
      github: "https://github.com",
      liveLink: "#",
      image: "blockchain-voting.png",
      color: "amber-500",
      icon: Server
    },
    {
      id: 5,
      title: "AR Educational Application",
      description: "An augmented reality app that makes learning interactive by bringing 3D models and concepts to life in the real world through a mobile camera.",
      technologies: ["Unity", "AR.js", "C#", "Three.js"],
      github: "https://github.com",
      liveLink: "#",
      image: "ar-education.png",
      color: "rose-500",
      icon: Code
    },
    {
      id: 6,
      title: "IoT Smart Home System",
      description: "A comprehensive smart home solution that connects various IoT devices through a central hub with voice control and automation capabilities.",
      technologies: ["Python", "MQTT", "React Native", "Node.js"],
      github: "https://github.com",
      liveLink: "#",
      image: "iot-home.png",
      color: "cyan-500",
      icon: Layers
    }
  ];

  return (
    <section id="projects" className="py-20 md:py-32 relative section-reveal">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-6 relative"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="bg-[#1FB6FF] w-12 h-1 absolute -top-3 left-0 rounded"></span>
            Featured Projects
          </motion.h2>
          
          <motion.p 
            className="text-secondary text-lg max-w-2xl"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            A collection of my recent projects, showcasing skills in full-stack development, responsive design, and innovative solutions.
          </motion.p>
        </motion.div>
        
        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              index={index} 
            />
          ))}
        </div>
        
        {/* View More Button */}
        <div className="flex justify-center mt-16">
          <motion.a 
            href="https://github.com/Kisan303" 
            className="group relative px-8 py-4 overflow-hidden rounded-md border border-white/10 bg-white/5 backdrop-blur-sm transition-all duration-300 hover:border-white/30 hover:bg-white/10"
            target="_blank" 
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            whileHover={{ scale: 1.05 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#1FB6FF]/20 to-[#FF7E36]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="flex items-center gap-2 relative z-10">
              <Github className="w-5 h-5" />
              <span className="font-medium">View More on GitHub</span>
            </div>
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
