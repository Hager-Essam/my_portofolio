import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, EffectCoverflow, Autoplay } from 'swiper/modules';
import { FaGithub, FaExternalLinkAlt, FaTimes } from 'react-icons/fa';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import './Projects.css';

interface Project {
  title: string;
  description: string;
  fullDescription: string;
  image: string;
  tags: string[];
  field: string;
  sourceCode?: string;
  liveDemo?: string;
}

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useEffect(() => {
    if (!selectedProject) return;
    const previousOverflow = document.body.style.overflow;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedProject(null);
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKey);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKey);
    };
  }, [selectedProject]);

  const projects: Project[] = [
    {
      title: 'LegalMind - AI Legal Platform',
      description: 'AI-powered legal assistance platform',
      fullDescription: 'An end-to-end B2B LegalTech platform automating document audit and contract review using RAG and LLMs. Provides intelligent legal assistance and document analysis.',
      image: 'image.png',
      tags: ['React', 'Next.js', 'Node.js', 'AI', 'Fullstack'],
      field: 'Fullstack',
      sourceCode: 'https://github.com/Hager-Essam/legal_mind_auth_part.git',
      liveDemo: 'https://legal-mind-front.vercel.app/',
    },
    {
      title: 'E-Commerce Platform',
      description: 'Full-featured online shopping platform',
      fullDescription: 'Complete e-commerce solution with payment integration product management',
      image: 'ecommerce.png',
      tags: ['Angular', 'Bootstrap'],
      field: 'Fullstack',
      sourceCode: 'https://github.com/Hager-Essam/ECommerce_using_Angular.git',
      liveDemo: 'https://e-commerce-hnt8.vercel.app/home',
    },
    {
      title: 'Task Management App',
      description: 'Collaborative task management application',
      fullDescription: 'Real-time collaborative task management tool with team features, notifications, and progress tracking.',
      image: 'taskManagementSystem.png',
      tags: ['Next.js', 'MongoDB', 'Javascript', 'NodeJS'],
      field: 'Fullstack',
      sourceCode: 'https://github.com/Hager-Essam/Task_Management_system.git',
      liveDemo: 'https://task-management-sys-one.vercel.app/',
    },
    {
      title: 'Gym management system',
      description: 'IronForge ',
      fullDescription: 'A full-stack Gym Management System designed to streamline gym operations, manage memberships, track subscriptions, and organize trainers and members through a centralized platform. Built with a focus on secure authentication, efficient database management, and scalable backend architecture.',
      image: 'gym.png',
      tags: ['React', 'NodeJs', 'Zod', 'Postgres','Jest'],
      field: 'Frontend',
      sourceCode: 'https://github.com/Hager-Essam/Gym_management_system-ClientSide-.git',
      liveDemo: 'https://gym-management-system-one-lilac.vercel.app/',
    },
    {
      title: 'Bonify',
      description: 'Medical App ',
      fullDescription: 'An intelligent medical web application that connects patients with bone specialists and assists in early fracture detection using AI.',
      image: 'bones.png',
      tags: ['Angular', 'Bootstrap'],
      field: 'Frontend',
      sourceCode: 'https://github.com/Hager-Essam/GraduationProject.git',
      liveDemo: 'https://https-graduationproject.vercel.app/',
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
    <div className="projects container" ref={ref}>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
      >
        <motion.h2 className="section-title" variants={itemVariants}>
          Featured Projects
        </motion.h2>

        <motion.p className="projects-subtitle" variants={itemVariants}>
          Swipe, use the arrows, or click a project to explore the full details.
        </motion.p>

        <motion.div className="projects-carousel" variants={itemVariants}>
          <Swiper
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={'auto'}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 2,
              slideShadows: false,
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
              el: '.swiper-pagination-custom',
            }}
            navigation={{
              nextEl: '.swiper-button-next-custom',
              prevEl: '.swiper-button-prev-custom',
            }}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            speed={800}
            loop={true}
            modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
            className="projects-swiper"
          >
            {projects.map((project, index) => (
              <SwiperSlide key={index}>
                <motion.div
                  className="project-card-simple"
                  onClick={() => setSelectedProject(project)}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02, y: -8 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div 
                    className="project-image-simple"
                    style={{
                      backgroundImage: project.image 
                        ? `linear-gradient(135deg, rgba(6, 182, 212, 0.3) 0%, rgba(139, 92, 246, 0.3) 100%), url(${project.image})`
                        : 'linear-gradient(135deg, rgba(6, 182, 212, 0.2) 0%, rgba(139, 92, 246, 0.2) 100%)',
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                    }}
                  >
                    <div className="project-number-display">{index + 1}</div>
                    <div className="project-overlay">
                      <h3 className="project-title-overlay">{project.title}</h3>
                      <button className="view-details-btn">
                        Click to view full project details →
                      </button>
                    </div>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation Below */}
          <div className="swiper-navigation-wrapper">
            <button className="swiper-button-prev swiper-button-prev-custom"></button>
            <div className="swiper-pagination swiper-pagination-custom"></div>
            <button className="swiper-button-next swiper-button-next-custom"></button>
          </div>
        </motion.div>
      </motion.div>

      {/* Project Detail Modal */}
      {createPortal(
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              className="project-modal-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
            >
            <motion.div
              className="project-modal"
              initial={{ scale: 0.94, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0, transition: { duration: 0.18 } }}
              transition={{ type: 'spring', damping: 26, stiffness: 320 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="modal-close-btn"
                onClick={() => setSelectedProject(null)}
              >
                <FaTimes />
              </button>

              <div className="modal-content">
                <div
                  className="modal-banner"
                  style={{
                    backgroundImage: selectedProject.image
                      ? `url(${selectedProject.image})`
                      : 'linear-gradient(135deg, rgba(6, 182, 212, 0.3) 0%, rgba(139, 92, 246, 0.3) 100%)',
                  }}
                />

                <div className="modal-heading">
                  <span className="modal-field-chip">{selectedProject.field}</span>
                  <h2 className="modal-title">{selectedProject.title}</h2>
                </div>

                <div className="modal-body">
                  <div className="modal-section">
                    <h3 className="modal-section-title">TECHNOLOGIES</h3>
                    <div className="modal-tags">
                      {selectedProject.tags.map((tag, index) => (
                        <span key={index} className="modal-tag">
                          {tag.toUpperCase()}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="modal-buttons">
                    {selectedProject.sourceCode && (
                      <motion.a
                        href={selectedProject.sourceCode}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="modal-btn modal-btn-secondary"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <FaGithub /> Source Code
                      </motion.a>
                    )}
                    {selectedProject.liveDemo && (
                      <motion.a
                        href={selectedProject.liveDemo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="modal-btn modal-btn-primary"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <FaExternalLinkAlt /> Live Demo
                      </motion.a>
                    )}
                  </div>

                  <div className="modal-section">
                    <h3 className="modal-section-title">About the Project</h3>
                    <p className="modal-about">{selectedProject.fullDescription}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
        </AnimatePresence>,
        document.body
      )}
    </div>
  );
};

export default Projects;
