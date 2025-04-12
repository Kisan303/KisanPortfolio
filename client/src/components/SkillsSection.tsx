import { motion } from 'framer-motion';
import { Code2, Grid, Layout, Palette, Server, Coffee, Database, Webhook, Container, GitBranch, Cloud, RefreshCw } from 'lucide-react';

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Front-End Development",
      color: "blue",
      skills: [
        { name: "JavaScript", icon: <Code2 className="w-8 h-8 text-accent-blue" /> },
        { name: "React.js", icon: <Grid className="w-8 h-8 text-accent-blue" /> },
        { name: "Vue.js", icon: <Layout className="w-8 h-8 text-accent-blue" /> },
        { name: "CSS/SASS", icon: <Palette className="w-8 h-8 text-accent-blue" /> }
      ]
    },
    {
      title: "Back-End Development",
      color: "orange",
      skills: [
        { name: "Node.js", icon: <Server className="w-8 h-8 text-accent-orange" /> },
        { name: "Java", icon: <Coffee className="w-8 h-8 text-accent-orange" /> },
        { name: "SQL/NoSQL", icon: <Database className="w-8 h-8 text-accent-orange" /> },
        { name: "GraphQL", icon: <Webhook className="w-8 h-8 text-accent-orange" /> }
      ]
    },
    {
      title: "DevOps & Tools",
      color: "blue",
      skills: [
        { name: "Container", icon: <Container className="w-8 h-8 text-accent-blue" /> },
        { name: "Git/GitHub", icon: <GitBranch className="w-8 h-8 text-accent-blue" /> },
        { name: "AWS", icon: <Cloud className="w-8 h-8 text-accent-blue" /> },
        { name: "CI/CD", icon: <RefreshCw className="w-8 h-8 text-accent-blue" /> }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 md:py-32 relative section-reveal">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 relative">
          <span className="bg-accent-blue w-12 h-1 absolute -top-3 left-0 rounded"></span>
          Technical Skills
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-10">
          {skillCategories.map((category, catIndex) => (
            <motion.div 
              key={catIndex}
              className="col-span-2 md:col-span-3 lg:col-span-4 mt-6 first:mt-0"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className={`text-xl font-medium mb-6 text-accent-${category.color}`}>{category.title}</h3>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div 
                    key={skillIndex}
                    className="flex flex-col items-center opacity-80 hover:opacity-100 transition-all group"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 0.8, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: skillIndex * 0.1 }}
                    whileHover={{ y: -5 }}
                  >
                    <div className={`w-16 h-16 flex items-center justify-center mb-3 bg-accent-${category.color}-10 rounded-lg`}>
                      {skill.icon}
                    </div>
                    <span className="text-center">{skill.name}</span>
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
