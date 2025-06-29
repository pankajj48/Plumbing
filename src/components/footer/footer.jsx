import React from 'react';
import './Footer.css';
import { FaFacebookF, FaInstagram, FaYoutube, FaLocationDot, FaPhone, FaEnvelope } from 'react-icons/fa6';
import Footlogo from '../../../public/logo-f.png'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-about">
          <img src={Footlogo} className="footer-logo" />
          <p>We are in the business of sanitary<br/> providers and all types of plumbing<br/> products. Check out our<br/> best-selling brands.</p>
          <div className="newsletter">
            <h4>Subscribe to Newsletter</h4>
            <div className="newsletter-input">
              <input type="email" placeholder="Enter email" />
              <button>Send</button>
            </div>
            <small>We’ll never share your email with anyone else.</small>
          </div>
        </div>

        {/* Column 2: Useful Links */}
        <div className="footer-links">
          <h4>Useful Links</h4>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
          </ul>
        </div>

        {/* Column 3: Quick Links */}
        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li>Login</li>
            <li>Register</li>
          </ul>
        </div>

        {/* Column 4: Contact */}
        <div className="footer-contact">
          <h4>Contact</h4>
          <div className="contact-item">
            <FaLocationDot className="icon" />
            <span>BARGARH, odisha</span>
          </div>
          <div className="contact-item">
            <FaPhone className="icon" />
            <span>18002023352</span>
          </div>
          <div className="contact-item">
            <FaEnvelope className="icon" />
            <span>plumbingbazzar@gmail.com</span>
          </div>
        </div>

      </div>

      {/* Bottom Row: Social */}
      <div className="footer-bottom">
        <h4>Follow us</h4>
        <div className="social-icons">
          <FaFacebookF />
          <FaYoutube />
          <FaInstagram />
        </div>
      </div>

      <div className='copyright'>
        <span > ©️Pankajj</span>
      </div>
        

    </footer>
  );
}

export default Footer;