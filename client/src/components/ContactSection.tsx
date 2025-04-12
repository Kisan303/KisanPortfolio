import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, MessageSquare } from 'lucide-react';

const ContactSection = () => {
  const contactItems = [
    {
      title: "Email",
      value: "kisanrai939@gmail.com",
      icon: <Mail className="w-8 h-8 text-accent-blue" />,
      link: "mailto:kisanrai939@gmail.com"
    },
    {
      title: "GitHub",
      value: "github.com/kisanrai",
      icon: <Github className="w-8 h-8 text-accent-blue" />,
      link: "https://github.com/Kisan303"
    },
    {
      title: "LinkedIn",
      value: "linkedin.com/in/kisanrai",
      icon: <Linkedin className="w-8 h-8 text-accent-blue" />,
      link: "https://www.linkedin.com/in/kisanrai/"
    }
  ];

  return (
    <section id="contact" className="py-20 md:py-32 relative section-reveal">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 relative">
              <span className="bg-accent-blue w-12 h-1 absolute -top-3 left-0 rounded"></span>
              Get In Touch
            </h2>
            <p className="text-secondary text-xl max-w-2xl mb-12">
              I'm always open to discussing new projects, opportunities, and collaborations. Feel free to reach out through any of the channels below.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactItems.map((item, index) => (
              <motion.a 
                key={index}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-background border border-[rgba(160,160,160,0.2)] rounded-lg p-8 flex flex-col items-center justify-center text-center hover:border-accent-blue hover:bg-[rgba(31,182,255,0.05)] transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="w-16 h-16 rounded-full bg-[rgba(31,182,255,0.1)] flex items-center justify-center mb-4 group-hover:bg-[rgba(31,182,255,0.2)] transition-colors">
                  {item.icon}
                </div>
                <h3 className="text-xl font-medium mb-2">{item.title}</h3>
                <p className="text-secondary group-hover:text-white transition-colors">{item.value}</p>
              </motion.a>
            ))}
          </div>
          
          <motion.div 
            className="mt-16 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <p className="text-secondary mb-4">Want to work together? Let's discuss your project.</p>
            <a 
              href="mailto:contact@kisanrai.com" 
              className="px-8 py-4 bg-accent-blue text-white font-medium rounded-md hover:bg-opacity-90 transition-colors inline-flex items-center gap-2"
            >
              <MessageSquare className="w-5 h-5" />
              <span>Start a Conversation</span>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
