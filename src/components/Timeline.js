import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaStar, FaLaptopCode, FaBriefcase, FaTrophy, FaCode } from 'react-icons/fa';

const Timeline = () => {
  const achievements = [
    {
      year: '2024-Present',
      title: 'Full Stack Developer at Brainy Code Inc.',
      description: 'Gained in-depth knowledge of software development, focusing on programming fundamentals, modern development practices, and creating efficient, scalable solutions.',
      icon: FaLaptopCode,
      color: '#ec4899'
    },
    {
      year: '2020 - 2023',
      title: 'Technical Support Specialist at Nerve Mobile',
      description: 'Provide technical support for Office 365 administration, Active Directory, and web technologies. Expertise in HTML, CSS, JavaScript, and cloud-based systems.',
      icon: FaCode,
      color: '#0ea5e9'
    },
    {
      year: '2019 - 2020',
      title: 'Customer Support Specialist at Multichoice Nigeria Limited',
      description: 'Achieved 97% customer satisfaction rating. Managed customer interactions, resolved technical issues, and maintained detailed documentation of customer accounts.',
      icon: FaBriefcase,
      color: '#8b5cf6'
    }
  ];

  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  return (
    <section id="timeline" className="py-20 bg-secondary overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My Journey
          </h2>
          <p className="text-gray-400">Milestones and achievements</p>
        </motion.div>

        <div ref={ref} className="relative">
          <motion.div
            initial={{ height: 0 }}
            animate={inView ? { height: '100%' } : { height: 0 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="absolute left-[50%] top-0 w-0.5 h-full bg-gradient-to-b from-primary via-purple-500 to-pink-500"
          />

          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.year}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className={`relative flex items-center mb-12 ${
                index % 2 === 0 ? 'justify-start' : 'justify-end'
              } md:justify-between`}
            >
              {/* Content */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className={`w-full md:w-[45%] ${
                  index % 2 === 0 ? 'md:text-right' : 'md:text-left'
                }`}
              >
                <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={inView ? { scale: 1 } : {}}
                    transition={{ delay: index * 0.2 + 0.3 }}
                    className="inline-block p-3 rounded-full mb-4"
                    style={{ backgroundColor: `${achievement.color}20` }}
                  >
                    <achievement.icon 
                      className="w-6 h-6"
                      style={{ color: achievement.color }}
                    />
                  </motion.div>
                  <h3 className="text-xl font-bold mb-2 text-white">
                    {achievement.title}
                  </h3>
                  <p className="text-gray-400 mb-3">
                    {achievement.description}
                  </p>
                  <span 
                    className="inline-block px-4 py-1 rounded-full text-sm font-semibold"
                    style={{ 
                      backgroundColor: `${achievement.color}20`,
                      color: achievement.color 
                    }}
                  >
                    {achievement.year}
                  </span>
                </div>
              </motion.div>

              {/* Timeline dot */}
              <motion.div
                initial={{ scale: 0 }}
                animate={inView ? { scale: 1 } : {}}
                transition={{ delay: index * 0.2 + 0.2 }}
                className="absolute left-[50%] transform -translate-x-1/2"
              >
                <div 
                  className="w-4 h-4 rounded-full border-2 border-white"
                  style={{ backgroundColor: achievement.color }}
                />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
