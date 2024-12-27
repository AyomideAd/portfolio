import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
  const projects = [
    {
      title: "Modern One-Page Website",
      description: "A sleek and modern one-page website built with React, featuring smooth animations, responsive design, and interactive elements. Showcases creative UI/UX design principles.",
      tags: ["React", "Framer Motion", "Responsive Design", "Modern UI"],
      // github: "https://github.com/AyomideAd",
      live: "https://react-onepage-sn4x.vercel.app/#",
      image: "/port-img.PNG"
    },
    {
      title: "To-Do List Landing Page",
      description: "A modern and responsive To-Do List landing page with a clean user interface and interactive features.",
      tags: ["HTML", "CSS", "JavaScript", "Responsive Design"],
      // github: "#",
      live: "https://to-do-list-landing-page.vercel.app/",
      image: "/todo-list-image.PNG"
    },
    {
      title: "Music Player",
      description: "A real-time chat application with features like group messaging and file sharing.",
      tags: ["HTML", "CSS", "JavaScript"],
      // github: "#",
      live: "https://music-player-iota-seven.vercel.app/",
      image: "/music.PNG"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Here are some of my recent works that showcase my skills and experience in building modern web applications.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-800 rounded-xl overflow-hidden hover:transform hover:scale-105 transition-transform duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-primary opacity-30"></div>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-primary transition-colors"
                  >
                    <FaGithub size={20} />
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-primary transition-colors"
                  >
                    <FaExternalLinkAlt size={20} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
