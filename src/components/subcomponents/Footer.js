import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={{ backgroundColor: 'hotpink', padding: '30px 20px', color: 'white' }}>
      <div style={{ maxWidth: '700px', margin: '0 auto', textAlign: 'center' }}>
        <h5>About Our eCommerce Site  &copy;All rights reserved</h5>
        <p style={{ maxWidth: '600px', margin: '10px auto' }}>
          We offer high-quality fashion, electronics, and essentials at unbeatable prices.
        </p>

        <div style={{ marginTop: '20px', fontSize: '24px', display: 'flex', justifyContent: 'center', gap: '20px' }}>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" style={{ color: 'black' }}>
            <FaFacebook />
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" style={{ color: 'black' }}>
            <FaTwitter />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" style={{ color: 'black' }}>
            <FaInstagram />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
