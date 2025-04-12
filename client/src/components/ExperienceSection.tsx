import { motion } from 'framer-motion';

const ExperienceSection = () => {
  const experienceData = [
    {
      title: "Senior Software Engineer",
      company: "Fusemachines",
      period: "2021 - Present",
      color: "blue",
      responsibilities: [
        "Led the development of microservices architecture for a large-scale enterprise application, resulting in 40% improved system performance.",
        "Implemented CI/CD pipelines and automated testing, reducing deployment time by 60% and catching 95% of bugs before production.",
        "Mentored junior developers and conducted code reviews, maintaining high code quality standards across the team."
      ],
      technologies: ["React", "Node.js", "GraphQL", "Docker", "AWS"]
    },
    {
      title: "Full Stack Developer",
      company: "EKbana Solutions",
      period: "2019 - 2021",
      color: "orange",
      responsibilities: [
        "Developed and maintained multiple client-facing applications using React and Laravel, serving over 50,000 active users.",
        "Optimized database queries and implemented caching strategies, reducing page load times by 65%.",
        "Collaborated closely with UX/UI designers to implement responsive, accessible interfaces across all platforms."
      ],
      technologies: ["Laravel", "Vue.js", "MySQL", "Redis", "REST APIs"]
    }
  ];

  return (
    <section id="experience" className="py-20 md:py-32 relative section-reveal">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 relative max-w-3xl mx-auto">
          <span className="bg-accent-blue w-12 h-1 absolute -top-3 left-0 rounded"></span>
          Experience
        </h2>
        
        <div className="max-w-3xl mx-auto relative pl-10 md:pl-0">
          <div className="hidden md:block absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-[rgba(31,182,255,0.3)] via-[rgba(31,182,255,0.1)] to-transparent"></div>
          
          {experienceData.map((experience, index) => (
            <motion.div 
              key={index}
              className={`mb-16 ${index === experienceData.length - 1 ? '' : 'timeline-dot'} relative`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="space-y-3">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
                  <h3 className="text-xl md:text-2xl font-semibold">{experience.title}</h3>
                  <span className={`inline-block px-3 py-1 rounded-full bg-accent-${experience.color}-10 text-accent-${experience.color} text-sm`}>
                    {experience.period}
                  </span>
                </div>
                <h4 className={`text-lg text-accent-${experience.color}`}>{experience.company}</h4>
                <div className="text-secondary space-y-3">
                  {experience.responsibilities.map((responsibility, respIndex) => (
                    <p key={respIndex}>{responsibility}</p>
                  ))}
                </div>
                <div className="pt-4 flex flex-wrap gap-2">
                  {experience.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="px-3 py-1 bg-background border border-tertiary rounded-full text-sm text-tertiary">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
