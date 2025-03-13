import React, { useState } from 'react';
import { FaLinkedin, FaGithub, FaFileDownload } from 'react-icons/fa'; 
import emailjs from 'emailjs-com';
import '../styles/Contact.css';

const Contact = () => {
  // State to manage form inputs and submission status
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [statusMessage, setStatusMessage] = useState('');

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
  
    // Send email using EmailJS
    emailjs.sendForm('service_arn5yz6', 'template_hohd8yi', e.target, 'o-ZcneIOHeGSbx3vV')
      .then(
        (result) => {
          setStatusMessage('Message sent successfully!');
          // Clear the form after successful submission
          setFormData({
            name: '',
            email: '',
            subject: '',
            message: ''
          });
        },
        (error) => {
          setStatusMessage('Error sending message. Please try again.');
        }
      );
  };

  return (
    <div className="contact">
      <h1>Contact Me</h1>
      <p>Let's work together! Feel free to reach out for collaborations or opportunities.</p>

      <div className="contact-content">
        {/* Contact Form */}
        <form className="contact-form" onSubmit={handleSubmit}>
          <input 
            type="text" 
            name="name" 
            placeholder="Your Name" 
            value={formData.name} 
            onChange={handleInputChange} 
            required 
          />
          <input 
            type="email" 
            name="email" 
            placeholder="Your Email" 
            value={formData.email} 
            onChange={handleInputChange} 
            required 
          />
          <input 
            type="text" 
            name="subject" 
            placeholder="Subject" 
            value={formData.subject} 
            onChange={handleInputChange} 
            required 
          />
          <textarea 
            name="message" 
            placeholder="Your Message" 
            value={formData.message} 
            onChange={handleInputChange} 
            required
          ></textarea>
          <button type="submit">Send Message</button>
        </form>

        {statusMessage && <p className="status-message">{statusMessage}</p>}

         {/* Resume Download Button */}
         <a
           href="/images/Reyna Pineda's Resume.pdf" 
          download="Reyna Pineda's Resume.pdf "
          className="resume-button"
        >
          <FaFileDownload /> Download My Resume
        </a>

        {/* Social Media Links */}
        <div className="social-links">
          <a
            href="https://linkedin.com/in/reynap221b"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/reyna221b"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
