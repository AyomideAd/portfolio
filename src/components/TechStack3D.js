import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { FaReact, FaNode, FaDatabase, FaCode } from 'react-icons/fa';
import { SiTailwindcss, SiJavascript, SiTypescript, SiMongodb } from 'react-icons/si';

const TechStack3D = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const technologies = [
    { icon: FaReact, name: 'React', color: '#61DAFB' },
    { icon: FaNode, name: 'Node.js', color: '#68A063' },
    { icon: SiJavascript, name: 'JavaScript', color: '#F7DF1E' },
    { icon: SiTypescript, name: 'TypeScript', color: '#3178C6' },
    { icon: SiTailwindcss, name: 'Tailwind', color: '#06B6D4' },
    { icon: SiMongodb, name: 'MongoDB', color: '#47A248' },
    { icon: FaDatabase, name: 'SQL', color: '#00758F' },
    { icon: FaCode, name: 'REST APIs', color: '#FF5733' },
  ];

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX - window.innerWidth / 2) / 25,
        y: (e.clientY - window.innerHeight / 2) / 25,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="py-20 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Tech Stack
          </h2>
          <p className="text-gray-400">Technologies I work with</p>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 perspective-1000"
          style={{
            transform: isHovered
              ? `rotateX(${mousePosition.y}deg) rotateY(${mousePosition.x}deg)`
              : 'none',
            transition: 'transform 0.2s ease-out',
          }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ 
                scale: 1.05, 
                rotateY: 180,
                transition: { duration: 0.4 }
              }}
              className="relative group preserve-3d"
            >
              <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col items-center justify-center min-h-[200px] transform-style-preserve-3d">
                <motion.div
                  className="text-5xl mb-4"
                  style={{ color: tech.color }}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <tech.icon />
                </motion.div>
                <h3 className="text-xl font-semibold text-white">{tech.name}</h3>
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default TechStack3D;
