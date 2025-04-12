import { motion } from 'framer-motion';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 md:py-32 relative section-reveal">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 relative">
            <span className="bg-accent-blue w-12 h-1 absolute -top-3 left-0 rounded"></span>
            About Me
          </h2>
          
          <motion.div 
            className="space-y-6 text-lg text-secondary"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="leading-relaxed">
              I'm a dedicated Full Stack Developer with a passion for creating elegant, efficient solutions to complex problems. With several years of experience in both front-end and back-end development, I approach each project with a holistic perspective that balances technical performance with exceptional user experience.
            </p>
            <p className="leading-relaxed">
              My journey began with a deep curiosity about how technology could improve people's lives. This curiosity evolved into expertise across multiple programming languages, frameworks, and design principles. I believe in writing clean, maintainable code that stands the test of time.
            </p>
            <p className="leading-relaxed">
              When I'm not coding, I'm constantly learning new technologies, contributing to open-source projects, and finding ways to mentor upcoming developers. I thrive in collaborative environments where innovation is valued and technical excellence is the standard.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
