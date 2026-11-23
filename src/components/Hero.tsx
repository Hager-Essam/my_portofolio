import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaWhatsapp } from 'react-icons/fa';
import profileImage from '../assets/me.jpeg';
import './Hero.css';

const Hero = () => {
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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  

  const badges = [
    '• Full-Stack Development',
    '• Backend Engineering',
    '• Real-World Projects',
    '• Clean Architecture',
  ];

  const socialLinks = [
    { icon: <FaGithub />, url: 'https://github.com/Hager-Essam', label: 'GitHub' },
    { icon: <FaLinkedin />, url: 'https://www.linkedin.com/in/hager-essam-he/', label: 'LinkedIn' },
    { icon: <FaEnvelope />, url: 'https://mail.google.com/mail/?view=cm&fs=1&to=hageressam23720@gmail.com&su=Portfolio%20Inquiry', label: 'Email' },
    { icon: <FaWhatsapp />, url: 'https://wa.me/201020847912', label: 'WhatsApp' }
  ];

  return (
    <div className="hero">
      <motion.div
        className="hero-content"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="profile-image-container" variants={itemVariants}>
          <div className="profile-image">
            <div className="profile-placeholder">
              <img src={profileImage} alt="Hager Essam" />
            </div>
          </div>
        </motion.div>

        <motion.h1 className="hero-title" variants={itemVariants}>
          <span className="name-highlight">Hager Esssam</span> – Software Engineer & Full-Stack Developer
        </motion.h1>

        <motion.p className="hero-description" variants={itemVariants}>
          I build scalable and impactful web applications that solve real-world problems.
           With experience in React, Angular, Node.js, and modern backend technologies,
            I focus on clean architecture, efficient APIs, database design, and creating reliable user experiences.
        </motion.p>

        <motion.div className="hero-buttons" variants={itemVariants}>
          <motion.button
            className="btn btn-primary"
            whileHover={{ scale: 1.05, boxShadow: '0 10px 40px rgba(6, 182, 212, 0.4)' }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.open('/resume.pdf', '_blank')}
          >
            <span>DOWNLOAD CV</span>
            <span className="btn-icon">↓</span>
          </motion.button>

          <motion.button
            className="btn btn-secondary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <span>CONTACT ME</span>
            <span className="btn-icon">→</span>
          </motion.button>
        </motion.div>

        <motion.div className="hero-badges" variants={itemVariants}>
          {badges.map((badge, index) => (
            <span key={index} className="badge">
              {badge}
            </span>
          ))}
        </motion.div>

        <motion.div className="hero-socials" variants={itemVariants}>
          {socialLinks.map((social, index) => (
            <motion.a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
              whileHover={{ scale: 1.1, y: -3 }}
              whileTap={{ scale: 0.9 }}
              aria-label={social.label}
            >
              {social.icon}
            </motion.a>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;
