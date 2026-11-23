import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaArrowRight } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you! Your message has been sent.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactMethods = [
    {
      icon: <FaEnvelope />,
      title: 'Email',
      value: 'hageressam23720@gmail.com',
      display: 'hageressam23720@gmail.com',
      link: 'mailto:hageressam23720@gmail.com',
    },
    {
      icon: <FaPhone />,
      title: 'Phone',
      value: '+201020847912',
      display: '+20 102 084 7912',
      link: 'tel:+201020847912',
    },
    {
      icon: <FaMapMarkerAlt />,
      title: 'Location',
      value: 'AlGiza, Egypt',
      display: 'AlGiza, Egypt',
      link: '#',
    },
    {
      icon: <FaLinkedin />,
      title: 'LinkedIn',
      value: 'https://www.linkedin.com/in/hager-essam-he/',
      display: 'linkedin.com/in/hager-essam-he',
      link: 'https://www.linkedin.com/in/hager-essam-he/',
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
    <div className="contact container" ref={ref}>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
      >
        <motion.h2 className="section-title" variants={itemVariants}>
          Get In Touch
        </motion.h2>

        <div className="contact-content">
          <motion.div className="contact-intro" variants={itemVariants}>
            <p>
              I'm always interested in hearing about new projects and opportunities.
              Whether you have a question or just want to say hi, feel free to reach out!
            </p>
          </motion.div>

          <div className="contact-methods">
            {contactMethods.map((method, index) => (
              <motion.a
                key={index}
                href={method.link}
                className="contact-method"
                title={method.value}
                variants={itemVariants}
                whileHover={{ y: -4 }}
                target={method.link.startsWith('http') ? '_blank' : undefined}
                rel={method.link.startsWith('http') ? 'noopener noreferrer' : undefined}
              >
                <div className="method-icon">{method.icon}</div>
                <div className="method-body">
                  <h3 className="method-title">{method.title}</h3>
                  <p className="method-value">{method.display}</p>
                </div>
                <span className="method-arrow" aria-hidden="true">
                  <FaArrowRight />
                </span>
              </motion.a>
            ))}
          </div>

          <motion.form
            className="contact-form"
            onSubmit={handleSubmit}
            variants={itemVariants}
          >
            <div className="form-group">
              <label htmlFor="name">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="John Doe"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Your Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="john@example.com"
              />
            </div>

            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                placeholder="Project Inquiry"
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Tell me about your project..."
              ></textarea>
            </div>

            <motion.button
              type="submit"
              className="submit-btn"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Send Message
            </motion.button>
          </motion.form>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;
