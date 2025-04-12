import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

const ProjectsSection = () => {
  const projects = [
    {
      title: "AI-Powered Analytics Dashboard",
      description: "A real-time analytics platform that uses machine learning to provide actionable insights from user data. Features customizable widgets and predictive analysis.",
      technologies: ["React", "TensorFlow.js", "Node.js"],
      github: "https://github.com",
      liveLink: "#"
    },
    {
      title: "E-Commerce Microservices Platform",
      description: "A scalable e-commerce solution built on microservices architecture. Includes inventory management, payment processing, and a responsive storefront.",
      technologies: ["Java Spring", "Vue.js", "MongoDB"],
      github: "https://github.com",
      liveLink: "#"
    },
    {
      title: "Collaborative Task Management App",
      description: "A real-time task management application with team collaboration features, custom workflows, and performance analytics for productivity tracking.",
      technologies: ["React", "Firebase", "Redux"],
      github: "https://github.com",
      liveLink: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 md:py-32 relative section-reveal">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 relative">
          <span className="bg-accent-blue w-12 h-1 absolute -top-3 left-0 rounded"></span>
          Featured Projects
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              className="bg-background border border-[rgba(160,160,160,0.2)] rounded-lg overflow-hidden hover:border-[rgba(31,182,255,0.3)] transition-all duration-300 group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <div className="h-56 overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent z-10"></div>
                <div className="w-full h-full bg-gradient-to-br from-[rgba(31,182,255,0.1)] to-[rgba(255,126,54,0.1)] group-hover:scale-110 transition-transform duration-500"></div>
              </div>
              
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <p className="text-secondary line-clamp-3">{project.description}</p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="px-2 py-1 bg-accent-blue-10 text-accent-blue text-xs rounded">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="pt-4 flex items-center justify-between">
                  <a 
                    href={project.github} 
                    className="flex items-center gap-2 text-secondary hover:text-accent-blue transition-colors" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <Github className="w-5 h-5" />
                    <span>View Code</span>
                  </a>
                  <a 
                    href={project.liveLink} 
                    className="flex items-center gap-1 text-secondary hover:text-accent-blue transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Live Preview</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="flex justify-center mt-16">
          <motion.a 
            href="https://github.com" 
            className="flex items-center gap-2 px-6 py-3 border border-tertiary text-white font-medium rounded-md hover:border-accent-blue transition-colors" 
            target="_blank" 
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <Github className="w-5 h-5" />
            <span>View More on GitHub</span>
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
