import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <motion.footer 
      className="py-8 border-t border-[rgba(160,160,160,0.2)]"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center justify-center space-y-4">
          <div>
            <a href="#" className="text-3xl font-bold tracking-wider text-center">
              <span className="text-gradient">KR</span>
            </a>
          </div>
          
          <p className="text-tertiary text-center text-lg">
            © {new Date().getFullYear()} Kisan Rai. All rights reserved. Designed & Built with <span className="text-accent-orange">&#9742;</span>
          </p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
