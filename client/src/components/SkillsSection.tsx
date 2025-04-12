import { motion } from 'framer-motion';
import {
  Code2, Braces, Database, FileCode, 
  Server, Globe, Monitor, Component, 
  Layers, ArrowLeftRight, Workflow, Calendar,
  Cloud, Container, GitBranch, Hammer, 
  Flame, Lock, BadgeCheck, Puzzle, 
  Cpu, Lightbulb, RefreshCw, Coffee,
  Grid
} from 'lucide-react';

const SkillsSection = () => {
  const iconSize = "w-8 h-8";
  const iconBlueClass = "text-[#1FB6FF] group-hover:scale-110 transition-transform duration-300";
  const iconOrangeClass = "text-[#FF7E36] group-hover:scale-110 transition-transform duration-300";

  const skillCategories = [
    {
      title: "Languages",
      color: "blue",
      skills: [
        { name: "JavaScript", icon: <Code2 className={`${iconSize} ${iconBlueClass}`} /> },
        { name: "TypeScript", icon: <Braces className={`${iconSize} ${iconBlueClass}`} /> },
        { name: "Python", icon: <FileCode className={`${iconSize} ${iconBlueClass}`} /> },
        { name: "Java", icon: <Coffee className={`${iconSize} ${iconBlueClass}`} /> },
        { name: "C#", icon: <Code2 className={`${iconSize} ${iconBlueClass}`} /> },
        { name: "HTML5", icon: <FileCode className={`${iconSize} ${iconBlueClass}`} /> },
        { name: "CSS3", icon: <Layers className={`${iconSize} ${iconBlueClass}`} /> }
      ]
    },
    {
      title: "Frontend Frameworks",
      color: "orange",
      skills: [
        { name: "React", icon: <Component className={`${iconSize} ${iconOrangeClass}`} /> },
        { name: "Vue.js", icon: <Layers className={`${iconSize} ${iconOrangeClass}`} /> },
        { name: "Angular", icon: <Component className={`${iconSize} ${iconOrangeClass}`} /> },
        { name: "TailwindCSS", icon: <Layers className={`${iconSize} ${iconOrangeClass}`} /> },
        { name: "Bootstrap", icon: <Component className={`${iconSize} ${iconOrangeClass}`} /> },
        { name: "Figma", icon: <Monitor className={`${iconSize} ${iconOrangeClass}`} /> }
      ]
    },
    {
      title: "Backend Frameworks",
      color: "blue",
      skills: [
        { name: "Node.js", icon: <Server className={`${iconSize} ${iconBlueClass}`} /> },
        { name: "Express", icon: <Server className={`${iconSize} ${iconBlueClass}`} /> },
        { name: "Django", icon: <Server className={`${iconSize} ${iconBlueClass}`} /> },
        { name: "Flask", icon: <Server className={`${iconSize} ${iconBlueClass}`} /> },
        { name: "Spring Boot", icon: <Server className={`${iconSize} ${iconBlueClass}`} /> },
        { name: "GraphQL", icon: <ArrowLeftRight className={`${iconSize} ${iconBlueClass}`} /> }
      ]
    },
    {
      title: "Databases",
      color: "orange",
      skills: [
        { name: "MongoDB", icon: <Database className={`${iconSize} ${iconOrangeClass}`} /> },
        { name: "MySQL", icon: <Database className={`${iconSize} ${iconOrangeClass}`} /> },
        { name: "PostgreSQL", icon: <Database className={`${iconSize} ${iconOrangeClass}`} /> },
        { name: "Firebase", icon: <Flame className={`${iconSize} ${iconOrangeClass}`} /> },
        { name: "Redis", icon: <Database className={`${iconSize} ${iconOrangeClass}`} /> }
      ]
    },
    {
      title: "DevOps & Tools",
      color: "blue",
      skills: [
        { name: "Docker", icon: <Container className={`${iconSize} ${iconBlueClass}`} /> },
        { name: "Git", icon: <GitBranch className={`${iconSize} ${iconBlueClass}`} /> },
        { name: "GitHub", icon: <GitBranch className={`${iconSize} ${iconBlueClass}`} /> },
        { name: "AWS", icon: <Cloud className={`${iconSize} ${iconBlueClass}`} /> },
        { name: "Google Cloud", icon: <Globe className={`${iconSize} ${iconBlueClass}`} /> },
        { name: "CI/CD", icon: <RefreshCw className={`${iconSize} ${iconBlueClass}`} /> }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 md:py-32 relative section-reveal">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-6 relative"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="bg-[#1FB6FF] w-12 h-1 absolute -top-3 left-0 rounded"></span>
            Technical Skills
          </motion.h2>
          
          <motion.p 
            className="text-secondary text-lg max-w-2xl"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            A comprehensive collection of languages, frameworks, and tools I work with to build robust applications.
          </motion.p>
        </motion.div>
        
        {/* Skill Categories */}
        <div className="space-y-16">
          {skillCategories.map((category, catIndex) => (
            <motion.div 
              key={catIndex}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: catIndex * 0.1 }}
            >
              <div className="flex items-center mb-8 space-x-3">
                {category.color === "blue" ? (
                  <div className="w-10 h-10 rounded-full bg-[#1FB6FF]/10 flex items-center justify-center">
                    <div className="w-5 h-5 rounded-full bg-[#1FB6FF]"></div>
                  </div>
                ) : (
                  <div className="w-10 h-10 rounded-full bg-[#FF7E36]/10 flex items-center justify-center">
                    <div className="w-5 h-5 rounded-full bg-[#FF7E36]"></div>
                  </div>
                )}
                <h3 className={`text-2xl font-semibold ${
                  category.color === "blue" ? "text-[#1FB6FF]" : "text-[#FF7E36]"
                }`}>
                  {category.title}
                </h3>
              </div>
              
              <div className={`grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-5 px-4 py-8 rounded-xl bg-gradient-to-br ${
                category.color === "blue" 
                  ? "from-[#1FB6FF]/5 to-transparent border border-[#1FB6FF]/10" 
                  : "from-[#FF7E36]/5 to-transparent border border-[#FF7E36]/10"
              }`}>
                {category.skills.map((skill, skillIndex) => (
                  <motion.div 
                    key={skillIndex}
                    className="flex flex-col items-center justify-center group cursor-pointer"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.3 + skillIndex * 0.05 }}
                    whileHover={{ y: -8, transition: { duration: 0.2 } }}
                  >
                    <motion.div 
                      className={`w-16 h-16 rounded-lg flex items-center justify-center mb-3 bg-white/5 backdrop-blur-sm border border-white/10 shadow-lg transform transition-all duration-300 ${
                        category.color === "blue" 
                          ? "group-hover:border-[#1FB6FF]/30 group-hover:bg-[#1FB6FF]/5" 
                          : "group-hover:border-[#FF7E36]/30 group-hover:bg-[#FF7E36]/5"
                      }`}
                      whileHover={{ 
                        scale: 1.05,
                        transition: { duration: 0.2 } 
                      }}
                    >
                      {skill.icon}
                    </motion.div>
                    <span className="font-medium text-sm text-center">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
