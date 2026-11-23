import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Keyboard } from 'swiper/modules';
import {
  FaArrowLeft,
  FaArrowRight,
  FaBriefcase,
  FaGraduationCap,
  FaLaptopCode,
  FaTrophy,
  FaUniversity,
} from 'react-icons/fa';
import 'swiper/css';
import './Experience.css';

type SliderApi = {
  slideNext: () => void;
  slidePrev: () => void;
  slideTo: (index: number, speed?: number) => void;
};

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [swiperApi, setSwiperApi] = useState<SliderApi | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const entries = [
    {
      type: 'Training',
      icon: <FaLaptopCode />,
      period: '9 Months',
      title: 'Professional Training Program',
      institution: 'Information Technology Institute (ITI)',
      description:
        'Completed an intensive professional training program focused on software development, building practical applications, modern development practices, and working on real-world projects.',
      focus: ['Full Stack Development', 'Web Development', 'Generative AI'],
      achievement: '',
      accent: 'violet',
    },
    {
      type: 'Training',
      icon: <FaTrophy />,
      period: '6 Months',
      title: 'Full Stack Development Program',
      institution: 'Digital Egypt Pioneers Initiative (DEPI)',
      description:
        'Completed an intensive Full Stack Development program involving practical projects and collaborative development.',
      focus: ['Frontend Development', 'Backend Development', 'Database Management', 'Team Projects'],
      achievement: '1st Place with the team',
      accent: 'magenta',
    },
    {
      type: 'Degree',
      icon: <FaUniversity />,
      period: 'Bachelor',
      title: 'Bachelor of Computer Science',
      institution: 'Faculty of Computers & Information · Minia University',
      description:
        "Earned a Bachelor's degree in Computer Science, developing a strong foundation in programming, algorithms, data structures, databases, object-oriented programming, and software engineering.",
      focus: ['Computer Science', 'OOP', 'Data Structures', 'Algorithms', 'Database Systems'],
      achievement: '',
      accent: 'indigo',
    },
  ];

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
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div className="experience container" ref={ref}>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
      >
        <motion.h2 className="section-title" variants={itemVariants}>
          Education &amp; Experience
        </motion.h2>

        <motion.p className="experience-subtitle" variants={itemVariants}>
          Training programs and academic milestones that shaped how I build software.
          Drag the cards, swipe, or use the arrows to explore.
        </motion.p>

        <motion.div className="experience-slider" variants={itemVariants}>
          <Swiper
            modules={[Autoplay, Keyboard]}
            slidesPerView={1}
            spaceBetween={24}
            centeredSlides={true}
            rewind={true}
            grabCursor={true}
            speed={650}
            keyboard={{ enabled: true }}
            autoplay={{ delay: 5000, disableOnInteraction: false, pauseOnMouseEnter: true }}
            onSwiper={(swiper) => setSwiperApi(swiper)}
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
            className="experience-swiper"
          >
            {entries.map((entry, index) => (
              <SwiperSlide key={entry.title}>
                <article className={`edu-card accent-${entry.accent}`}>
                  <div className="edu-card-top">
                    <div className="edu-card-icon">{entry.icon}</div>
                    <span className="edu-card-badge">
                      {entry.type === 'Degree' ? <FaGraduationCap /> : <FaBriefcase />}
                      {entry.type}
                    </span>
                  </div>

                  <span className="edu-card-period">
                    <span className="edu-card-period-index">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    {entry.period}
                  </span>

                  <h3 className="edu-card-title">{entry.title}</h3>
                  <h4 className="edu-card-institution">{entry.institution}</h4>

                  <p className="edu-card-description">{entry.description}</p>

                  {entry.achievement && (
                    <div className="edu-card-achievement">
                      <FaTrophy />
                      <span>{entry.achievement}</span>
                    </div>
                  )}

                  <div className="edu-card-focus">
                    <span className="edu-card-focus-label">Focus</span>
                    <div className="edu-card-tags">
                      {entry.focus.map((item) => (
                        <span key={item} className="edu-tag">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="slider-controls">
            <div className="slider-dots">
              {entries.map((entry, index) => (
                <button
                  key={entry.title}
                  type="button"
                  className={`slider-dot ${index === activeIndex ? 'active' : ''}`}
                  onClick={() => swiperApi?.slideTo(index)}
                  aria-label={`Go to ${entry.title}`}
                  aria-current={index === activeIndex}
                />
              ))}
            </div>

            <div className="slider-arrows">
              <button
                type="button"
                className="slider-arrow"
                onClick={() => swiperApi?.slidePrev()}
                aria-label="Previous education entry"
              >
                <FaArrowLeft />
              </button>
              <button
                type="button"
                className="slider-arrow"
                onClick={() => swiperApi?.slideNext()}
                aria-label="Next education entry"
              >
                <FaArrowRight />
              </button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Experience;
