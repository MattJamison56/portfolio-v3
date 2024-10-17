// src/components/ContactSection/ContactSection.jsx

import './ContactSection.css';
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';

const ContactSection = () => {
  return (
    <section className="contact-section" id="contact">
      <h1 className="section-title-contact">CONTACT ME</h1>
      <div className="all-contact">
        <form
          action="https://api.web3forms.com/submit"
          method="POST"
          className="contact-form"
        >
          <input
            type="hidden"
            name="access_key"
            value="6780df56-253c-4e8e-9b54-36b371fda540"
          />
          <span className="getintouch">Get in touch!</span>
          <div className="input-row">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="contact-inputs"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="contact-inputs"
              required
            />
          </div>
          <textarea
            name="message"
            placeholder="Your Message"
            className="contact-inputs"
            rows={10}
            required
          ></textarea>
          <button className="submit" type="submit">
            Send Message
          </button>
        </form>
        <div className="contact-stuff">
          <div className="contact-info">
            <span className="contact-title">Contact Info</span>
            <span className="contact-thing">matthewjamison56@gmail.com</span>
            <span className="contact-thing">(949) 627-3039</span>
          </div>
          <div className="contact-socials">
            <span className="contact-title">Other Stuff</span>
            <a
              href="https://www.linkedin.com/in/matthew-jamison-dev/"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-thing"
            >
              <FaLinkedin /> LinkedIn
            </a>
            <a
              href="https://github.com/MattJamison56"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-thing"
            >
              <FaGithub /> GitHub
            </a>
            <a
              href="https://www.instagram.com/mattjamison56/"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-thing"
            >
              <FaInstagram /> Instagram
            </a>
          </div>
        </div>
      </div>
      <div className="credit">
        <span>Designed by Matthew Jamison</span>
        <span>COPYRIGHT © 2024 Matthew Jamison</span>
      </div>
    </section>
  );
};

export default ContactSection;
