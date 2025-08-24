import React from 'react';
import { motion } from 'framer-motion';
import { projects, aboutText } from '../constants';

const Section = ({ children, id }) => {
  return (
    <motion.section 
      id={id}
      className="min-h-screen w-full flex justify-center items-center py-24 px-8"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8 }}
    >
      <div className="w-full max-w-5xl">
        {children}
      </div>
    </motion.section>
  );
};

const ProjectCard = ({ project }) => {
  return (
    <motion.div 
      className="bg-slate-800/50 backdrop-blur-sm rounded-lg overflow-hidden border border-slate-700 shadow-lg shadow-cyan-500/10"
      whileHover={{ y: -8, scale: 1.03 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <img src={project.image} alt={project.title} className="w-full h-48 object-cover"/>
      <div className="p-6">
        <h3 className="text-2xl font-bold text-white">{project.title}</h3>
        <p className="mt-2 text-slate-400 h-24">{project.description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span key={tag} className="text-sm font-semibold bg-cyan-900/50 text-cyan-300 px-2 py-1 rounded">
              {tag}
            </span>
          ))}
        </div>
        <a 
          href={project.sourceCodeLink} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="inline-block mt-6 font-semibold text-cyan-400 hover:text-cyan-200 transition-colors"
        >
          View Source Code &rarr;
        </a>
      </div>
    </motion.div>
  );
}

const Portfolio = () => {
  return (
    <div className="font-sans text-slate-300"> 
      <Section id="hero">
        <div className="text-center">
          <motion.h1 
            className="text-6xl md:text-8xl font-black bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-violet-500"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Ohm Patumwan
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl mt-4 text-slate-400"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            Creative Developer & Computer Engineer
          </motion.p>
        </div>
      </Section>

      <Section id="about">
        <h2 className="text-4xl font-bold text-center text-white mb-12">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-violet-500">
            About Me
          </span>
        </h2>
        <p className="max-w-3xl mx-auto text-lg text-center leading-relaxed">
          {aboutText}
        </p>
      </Section>

      <Section id="projects">
        <h2 className="text-4xl font-bold text-center text-white mb-12">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-violet-500">
            Featured Projects
          </span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </Section>

      <Section id="contact">
        <h2 className="text-4xl font-bold text-center text-white mb-12">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-violet-500">
            Get In Touch
          </span>
        </h2>
        <div className="text-center">
            <p className="text-lg">I'm always open to new opportunities and collaborations.</p>
            <a 
              href="mailto:pitakpatumwan14@gmail.com" 
              className="inline-block mt-8 bg-cyan-500 hover:bg-cyan-400 text-white font-bold py-3 px-8 rounded-lg text-lg transition-transform duration-300 hover:scale-105"
            >
              Say Hello
            </a>
        </div>
      </Section>
    </div>
  );
};

export default Portfolio;