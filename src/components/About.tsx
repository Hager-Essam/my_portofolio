import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import './About.css';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div className="about container" ref={ref}>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
      >
        <motion.h2 className="section-title" variants={itemVariants}>
          About Me
        </motion.h2>

        <div className="about-content">
          <motion.div className="about-image" variants={itemVariants}>
            <div className="image-placeholder">
              <span>Your Photo</span>
            </div>
            <div className="image-decoration"></div>
          </motion.div>

          <motion.div className="about-text" variants={itemVariants}>
            <h3>Full-Stack Developer & Creative Problem Solver</h3>
            <p>
              I'm a passionate Full-Stack Developer based in Alexandria, Egypt, specializing 
              in creating modern web and mobile applications. With a focus on delivering 
              high-quality, scalable solutions, I combine aesthetic design with solid architecture.
            </p>
            <p>
              My journey in software development has equipped me with a diverse skill set 
              spanning frontend frameworks, backend technologies, and cloud infrastructure. 
              I thrive on turning complex problems into elegant, user-friendly solutions.
            </p>
            <p>
              When I'm not coding, you'll find me exploring new technologies, contributing 
              to open-source projects, or sharing knowledge with the developer community.
            </p>

            <div className="about-stats">
              <div className="stat">
                <h4>3+</h4>
                <p>Years Experience</p>
              </div>
              <div className="stat">
                <h4>50+</h4>
                <p>Projects Completed</p>
              </div>
              <div className="stat">
                <h4>20+</h4>
                <p>Happy Clients</p>
              </div>
            </div>

            <motion.button
              className="btn btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.open('/resume.pdf', '_blank')}
            >
              Download Resume
            </motion.button>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
