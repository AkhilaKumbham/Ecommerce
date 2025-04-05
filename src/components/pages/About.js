import React from 'react'
import '../../App.css';
import Footer from '../subcomponents/Footer';
import CustomNavbar from "../subcomponents/Navbar"; 
const About = () => {
  return (
    <div>
  <CustomNavbar name="ecommerce" />
  <div className='about-data'>
    <h1 className="about-heading">ecommerce</h1>
    <p>As a small business owner, you want to make a good first impression. The right eCommerce website template design can help you do just that when it comes to starting your business. The best templates are not only visually appealing, but also provide a positive customer experience that encourages customers to explore your products and make a purchase.

    </p>
    <p>
To help you get off on the right foot, we’ve put together a list of our best eCommerce website templates. Whether you’re a brick-and-mortar business looking to sell online or are a first-time merchant, Wix’s eCommerce website templates can simplify the process of starting an online store and help you harness the power of good eCommerce website design. 
</p>
<p>
Learn more: What is an eCommerce website?
</p>
<p>ecommerce is a site with lots of selling product.
     The transmission from selection to buying is done through online</p>
</div>
<Footer />
    </div>
  )
}

export default About;