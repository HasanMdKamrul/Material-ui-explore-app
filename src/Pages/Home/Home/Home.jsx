import React from "react";
import Footer from "../../Footer/Footer";
import Branding from "../Branding/Branding";
import Brands from "../Brands/Brands";
import Faq from "../FAQ/FAQ";
import OurWorks from "../OurWorks/OurWorks";
import Services from "../Services/Services";

const Home = () => {
  return (
    <div>
      <Branding />
      <Brands />
      <Services />
      <OurWorks />
      <Faq />
      <Footer />
    </div>
  );
};

export default Home;
