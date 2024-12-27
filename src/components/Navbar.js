import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaGithub } from 'react-icons/fa';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    // { name: 'Skills', href: '#skills' },
    { name: 'Tech Stack', href: '#tech-stack' },
    { name: 'Timeline', href: '#timeline' },
    { name: 'Projects', href: '#projects' },
    // { name: 'Stats', href: '#stats' },
  ];

  const socialIcons = [
    { Icon: FaLinkedin, href: 'https://linkedin.com' },
    { Icon: FaGithub, href: 'https://github.com/AyomideAd' },
    { Icon: FaTwitter, href: 'https://x.com/adegbe_ayomide' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      const scrollPosition = window.scrollY + 100;

      // Update active section
      sections.forEach(section => {
        const top = section.offsetTop;
        const height = section.offsetHeight;
        const id = section.getAttribute('id');

        if (scrollPosition >= top && scrollPosition < top + height) {
          setActiveSection(id);
        }
      });

      // Update scroll state for logo animation
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const offsetTop = element.offsetTop;
      window.scrollTo({
        top: offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full top-0 z-50 bg-secondary/80 backdrop-blur-sm transition-all duration-300 ${
        isScrolled ? 'py-2' : 'py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <motion.span
                className="text-xl sm:text-2xl font-bold text-primary cursor-pointer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                AA
              </motion.span>
            </div>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-center gap-4 lg:gap-6">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href.slice(1)}
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={500}
                  className={`${
                    activeSection === item.href.slice(1)
                      ? 'text-primary'
                      : 'text-gray-300'
                  } hover:text-primary px-2 lg:px-3 py-2 rounded-md text-sm font-medium transition-colors cursor-pointer`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700/50 focus:outline-none"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <div className="h-5 w-5 flex flex-col justify-between">
                <span className={`h-0.5 w-full bg-current transform transition duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
                <span className={`h-0.5 w-full bg-current transition duration-300 ${isOpen ? 'opacity-0' : ''}`} />
                <span className={`h-0.5 w-full bg-current transform transition duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
              </div>
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden bg-secondary/95 backdrop-blur-lg border-t border-gray-700/50"
          >
            <div className="px-4 pt-2 pb-3 space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href.slice(1)}
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={500}
                  className={`${
                    activeSection === item.href.slice(1)
                      ? 'text-primary'
                      : 'text-gray-300'
                  } hover:text-primary block px-3 py-2.5 rounded-md text-base font-medium transition-colors cursor-pointer`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
