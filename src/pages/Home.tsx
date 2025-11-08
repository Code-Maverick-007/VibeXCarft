import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import AITools from "../components/AiTools";
import Testimonial from "../components/Testimonial";

import Footer from "../components/Footer";

const Home: React.FC = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <AITools />
      <Testimonial />

      <Footer />
    </>
  );
};

export default Home;
