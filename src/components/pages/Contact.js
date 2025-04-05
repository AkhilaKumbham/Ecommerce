import React from 'react';
import Footer from '../subcomponents/Footer';
import CustomNavbar from "../subcomponents/Navbar"; 
import '../../App.css';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Contact = () => {
  return (
    <div>
  <CustomNavbar name="ecommerce" />
      <div className='contact-data' style={{ padding: '20px' }}>
        <p>Feel free to contact us to know more about</p>
        <ol>
          <li>Products</li>
          <li>Enquiry about past customers who brought the product</li>
          <li>Damages happened</li>
        </ol>
        <p>Email: kumbhamakhilaa@gmail.com</p>
        <p>Contact Number: 9030048307</p>

        <div style={{ marginTop: '20px' }}>
          <p>Follow us on:</p>
          <div style={{ fontSize: '24px', display: 'flex', gap: '15px' }}>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" style={{ color: 'hotpink' }}>
              <FaFacebook />
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" style={{ color: 'hotpink' }}>
              <FaTwitter />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" style={{ color: 'hotpink' }}>
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
