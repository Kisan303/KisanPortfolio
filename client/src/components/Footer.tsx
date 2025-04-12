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
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-4 md:mb-0">
            <a href="#" className="text-2xl font-bold tracking-wider">
              <span className="text-gradient">KR</span>
            </a>
          </div>
          
          <p className="text-tertiary text-center md:text-right">
            © {new Date().getFullYear()} Kisan Rai. All rights reserved. Designed & Built with <span className="text-accent-orange">♥</span>
          </p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
