import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaDocker,
  FaGitAlt,
  FaAngular,
  FaEnvelope,
} from 'react-icons/fa';
import {
  SiTypescript,
  SiJavascript,
  SiNextdotjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiTailwindcss,
  SiGraphql,
  SiAxios,
  SiSocketdotio,
  SiJsonwebtokens,
} from 'react-icons/si';
import './Skills.css';

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const skillCategories = [
    {
      title: 'Frontend',
      skills: [
        { name: 'React', icon: <FaReact />, color: '#61DAFB' },
        { name: 'Angular', icon: <FaAngular />, color: '#DD0031' },
        { name: 'Next.js', icon: <SiNextdotjs />, color: '#000000' },
        { name: 'TypeScript', icon: <SiTypescript />, color: '#3178C6' },
        { name: 'JavaScript', icon: <SiJavascript />, color: '#F7DF1E' },
        { name: 'Tailwind CSS', icon: <SiTailwindcss />, color: '#06B6D4' },
      ],
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Node.js', icon: <FaNodeJs />, color: '#339933' },
        { name: 'Express', icon: <SiExpress />, color: '#000000' },
        { name: 'Python', icon: <FaPython />, color: '#3776AB' },
        { name: 'GraphQL', icon: <SiGraphql />, color: '#E10098' },
        { name: 'Axios', icon: <SiAxios />, color: '#5A29E4' },
        { name: 'Nodemailer', icon: <FaEnvelope />, color: '#00ADEF' },
        { name: 'Socket.io', icon: <SiSocketdotio />, color: '#ffffffff' },
        { name: 'JWT', icon: <SiJsonwebtokens />, color: '#000000' },
      ],
    },
    {
      title: 'Database & Tools',
      skills: [
        { name: 'MongoDB', icon: <SiMongodb />, color: '#47A248' },
        { name: 'PostgreSQL', icon: <SiPostgresql />, color: '#4169E1' },
        { name: 'Docker', icon: <FaDocker />, color: '#2496ED' },
        { name: 'Git', icon: <FaGitAlt />, color: '#F05032' },
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
    <div className="skills container" ref={ref}>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
      >
        <motion.h2 className="section-title" variants={itemVariants}>
          Skills & Technologies
        </motion.h2>

        <div className="skills-grid">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              className="skill-category"
              variants={itemVariants}
            >
              <h3 className="category-title">{category.title}</h3>
              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    className="skill-item"
                    whileHover={{
                      scale: 1.05,
                      boxShadow: `0 10px 30px ${skill.color}40`,
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <div
                      className="skill-icon"
                      style={{ color: skill.color }}
                    >
                      {skill.icon}
                    </div>
                    <span className="skill-name">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Skills;
