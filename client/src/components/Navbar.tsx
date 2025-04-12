import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle navbar background change on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu when clicking on a link
  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 px-6 py-4 transition-all duration-300 ${
        isScrolled ? 'bg-background bg-opacity-80 backdrop-blur-sm shadow-md' : ''
      }`}
    >
      <nav className="flex items-center justify-between max-w-6xl mx-auto">
        <a href="#" className="text-2xl font-bold tracking-wider">
          <span className="text-gradient">KR</span>
        </a>
        
        <div className="hidden md:flex gap-8">
          <a href="#about" className="nav-link text-gray-300 hover:text-white transition-colors relative">
            About
            <span className="absolute left-0 bottom-[-4px] w-0 h-[2px] bg-[#1FB6FF] transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a href="#experience" className="nav-link text-gray-300 hover:text-white transition-colors relative">
            Experience
            <span className="absolute left-0 bottom-[-4px] w-0 h-[2px] bg-[#1FB6FF] transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a href="#projects" className="nav-link text-gray-300 hover:text-white transition-colors relative">
            Projects
            <span className="absolute left-0 bottom-[-4px] w-0 h-[2px] bg-[#1FB6FF] transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a href="#skills" className="nav-link text-gray-300 hover:text-white transition-colors relative">
            Skills
            <span className="absolute left-0 bottom-[-4px] w-0 h-[2px] bg-[#1FB6FF] transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a href="#contact" className="nav-link text-gray-300 hover:text-white transition-colors relative">
            Contact
            <span className="absolute left-0 bottom-[-4px] w-0 h-[2px] bg-[#1FB6FF] transition-all duration-300 group-hover:w-full"></span>
          </a>
        </div>
        
        <button 
          className="md:hidden" 
          onClick={() => setIsMenuOpen(true)}
          aria-label="Open mobile menu"
        >
          <Menu className="w-6 h-6" />
        </button>
      </nav>
      
      {/* Mobile Menu */}
      <div className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-background ${isMenuOpen ? 'flex' : 'hidden'}`}>
        <button 
          className="absolute top-5 right-5" 
          onClick={() => setIsMenuOpen(false)}
          aria-label="Close mobile menu"
        >
          <X className="w-6 h-6" />
        </button>
        <div className="flex flex-col items-center gap-8 text-2xl">
          <a 
            href="#about" 
            className="nav-link text-gray-300 hover:text-white transition-colors"
            onClick={handleLinkClick}
          >
            About
          </a>
          <a 
            href="#experience" 
            className="nav-link text-gray-300 hover:text-white transition-colors"
            onClick={handleLinkClick}
          >
            Experience
          </a>
          <a 
            href="#projects" 
            className="nav-link text-gray-300 hover:text-white transition-colors"
            onClick={handleLinkClick}
          >
            Projects
          </a>
          <a 
            href="#skills" 
            className="nav-link text-gray-300 hover:text-white transition-colors"
            onClick={handleLinkClick}
          >
            Skills
          </a>
          <a 
            href="#contact" 
            className="nav-link text-gray-300 hover:text-white transition-colors"
            onClick={handleLinkClick}
          >
            Contact
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
