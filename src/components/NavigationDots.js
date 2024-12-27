import { useState, useEffect } from 'react';
import { FaHome, FaUser, FaCode, FaCog, FaHistory, FaProjectDiagram, FaChartBar } from 'react-icons/fa';
import { Link } from 'react-scroll';

const NavigationDots = () => {
  const [activeSection, setActiveSection] = useState('home');

  const sections = [
    { id: 'home', icon: FaHome },
    { id: 'about', icon: FaUser },
    // { id: 'skills', icon: FaCode },
    { id: 'tech-stack', icon: FaCog },
    { id: 'timeline', icon: FaHistory },
    { id: 'projects', icon: FaProjectDiagram },
    // { id: 'stats', icon: FaChartBar },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      
      // Find the current section
      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const { top, bottom } = element.getBoundingClientRect();
          const elementCenter = (top + bottom) / 2;
          
          if (elementCenter > 0 && elementCenter < window.innerHeight) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sections]);

  return (
    <div className="fixed right-4 lg:right-8 top-1/2 transform -translate-y-1/2 z-50 hidden sm:block">
      <div className="flex flex-col gap-4">
        {sections.map((section) => (
          <Link
            key={section.id}
            to={section.id}
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
            className="group relative"
          >
            <div
              className={`p-2.5 lg:p-3 rounded-full cursor-pointer transition-all duration-300 ${
                activeSection === section.id
                  ? 'bg-primary text-white'
                  : 'bg-white/10 text-gray-400 hover:bg-white/20'
              }`}
            >
              <section.icon className="w-3 h-3 lg:w-4 lg:h-4" />
            </div>
            <span className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-full mr-2 px-2 py-1 bg-primary text-white text-xs rounded opacity-0 pointer-events-none transition-opacity group-hover:opacity-100 whitespace-nowrap">
              {section.id.charAt(0).toUpperCase() + section.id.slice(1)}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default NavigationDots;
