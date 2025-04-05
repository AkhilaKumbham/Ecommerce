import React from "react";
import Navv from "./subcomponents/Navbar"; 
import Cards from "./subcomponents/Cards";
import Footer from "./subcomponents/Footer";

const Home = () => {
  return (
    <>
      <Navv name="ecommerce"/>
      <Cards />
      <Footer />
    </>
  );
};

export default Home;
