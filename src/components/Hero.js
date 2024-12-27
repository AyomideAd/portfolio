import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';
import { TypeAnimation } from 'react-type-animation';

const Hero = () => {
  const [showSocial, setShowSocial] = useState(false);

  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: <FaLinkedin className="w-5 h-5" />,
      url: 'https://www.linkedin.com/in/ayomide-adegbe-9169571a9/',
      color: 'hover:text-blue-500'
    },
    {
      name: 'GitHub',
      icon: <FaGithub className="w-5 h-5" />,
      url: 'https://github.com/AyomideAd',
      color: 'hover:text-gray-400'
    },
    {
      name: 'Twitter',
      icon: <FaTwitter className="w-5 h-5" />,
      url: 'https://x.com/adegbe_ayomide',
      color: 'hover:text-blue-400'
    },
    {
      name: 'Email',
      icon: <FaEnvelope className="w-5 h-5" />,
      url: 'mailto:ayomideadegbe77@gmail.com',
      color: 'hover:text-red-400'
    }
  ];

  return (
    <section id="home" className="min-h-screen pt-20 flex items-center bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <motion.div 
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex-1"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              Ayomide <span className="text-primary">Adegbe</span>
            </h1>
            <div className="text-xl text-gray-400 mb-6 h-8">
              <TypeAnimation
                sequence={[
                  'Software Engineer',
                  2000,
                  'Full-Stack Developer',
                  2000,
                ]}
                speed={50}
                repeat={Infinity}
                style={{ fontSize: '1.25rem' }}
              />
            </div>
            <div className="relative">
              <motion.button
                onClick={() => setShowSocial(!showSocial)}
                className="bg-primary text-white px-8 py-3 rounded-full hover:bg-blue-500 transition-colors flex items-center space-x-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Get Connected</span>
                <svg
                  className={`w-4 h-4 transition-transform duration-200 ${showSocial ? 'rotate-180' : ''}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </motion.button>

              {showSocial && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="absolute left-0 mt-2 w-48 rounded-xl bg-gray-800 shadow-lg ring-1 ring-black ring-opacity-5 z-10"
                >
                  <div className="py-2">
                    {socialLinks.map((link) => (
                      <a
                        key={link.name}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center space-x-3 px-4 py-3 text-sm text-gray-300 hover:bg-gray-700 ${link.color} transition-colors`}
                      >
                        {link.icon}
                        <span>{link.name}</span>
                      </a>
                    ))}
                  </div>
                </motion.div>
              )}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="flex-1 mt-8 md:mt-0"
          >
            <div className="relative w-80 h-80 mx-auto">
              <img 
                src="/cover_img.JPG" 
                alt="Profile Cover"
                className="w-full h-full object-cover rounded-full shadow-2xl"
              />
            </div>
          </motion.div>
        </div>

        {/* Three Cards Section */}
        <motion.div 
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16"
        >
          {[
            {
              title: 'Full-Stack Development',
              icon: (
                <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              ),
              description: 'Proficient in both frontend and backend technologies, creating seamless web applications.'
            },
            {
              title: 'Modern Tech Stack',
              icon: (
                <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              ),
              description: 'Expertise in React, Node.js, and other cutting-edge technologies.'
            },
            {
              title: 'Problem Solver',
              icon: (
                <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              ),
              description: 'Turning complex challenges into elegant solutions through creative thinking.'
            }
          ].map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
              }}
              className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700/50 hover:border-primary/50 transition-all duration-300"
            >
              <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-lg bg-primary/10">
                {card.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">{card.title}</h3>
              <p className="text-gray-400 leading-relaxed">{card.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;