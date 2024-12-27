import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaDownload } from 'react-icons/fa';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="about-section" className="py-20 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-block"
            >
              A Passionate Developer
            </motion.span>
            <br />
            <motion.span
              initial={{ opacity: 0, x: 20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="inline-block text-primary"
            >
              Who Loves to Code
            </motion.span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50, rotateY: 30 }}
            animate={inView ? { opacity: 1, x: 0, rotateY: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative group"
          >
            <motion.div 
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="relative w-full h-[500px] md:h-[600px] rounded-2xl overflow-hidden shadow-xl"
            >
              <motion.div 
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ delay: 0.5 }}
                className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10"
              ></motion.div>
              <motion.img
                src="/cover_img.JPG"
                alt="About Me"
                className="w-full h-full object-cover object-center"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.4 }}
              />
            </motion.div>
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={inView ? { y: 0, opacity: 1 } : {}}
              transition={{ delay: 0.6, duration: 0.5 }}
              whileHover={{ y: -4, scale: 1.02 }}
              className="absolute bottom-6 left-6 bg-primary/90 backdrop-blur-sm text-white px-6 py-4 rounded-xl shadow-lg z-20"
            >
              <span className="text-2xl font-bold">100%</span>
              <span className="ml-2">Dedication</span>
            </motion.div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="space-y-6"
          >
            <motion.div variants={itemVariants} className="space-y-4">
              <p className="text-gray-300 text-lg leading-relaxed">
                A passionate developer with expertise in web technologies and technical support. 
                Experienced in HTML, CSS, JavaScript, and modern development practices. 
                Committed to delivering high-quality solutions and maintaining excellent customer satisfaction.
              </p>
              
              <motion.a
                href="/ayomide-cv.pdf"
                download
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-full hover:bg-primary/90 transition-colors mt-6"
              >
                <FaDownload className="mr-2" />
                Download CV
              </motion.a>
            </motion.div>

            <motion.div 
              variants={containerVariants}
              className="grid grid-cols-2 gap-4"
            >
              {[
                { label: "Name", value: "Ayomide Adegbe" },
                { label: "Address", value: "11, Akanbi street, Abule-egba Lagos" },
                { label: "Email", value: "ayomideadegbe77@gmail.com" },
                { label: "Phone", value: "+234 9066 541 394" }
              ].map((item, index) => (
                <motion.div
                  key={item.label}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                  className="transform transition-all duration-300 hover:shadow-lg hover:bg-gray-800/50 p-4 rounded-lg"
                >
                  <h4 className="text-lg font-semibold mb-2">{item.label}</h4>
                  <p className="text-gray-400">{item.value}</p>
                </motion.div>
              ))}
            </motion.div>

            
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
