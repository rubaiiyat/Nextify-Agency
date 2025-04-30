import React from "react";
import Banner from "./Banner";
import ToolsSections from "./ToolsSections";
import CompanyLogos from "./CompanyLogos";
import Testimonials from "./Testimonials";
import Blogs from "../Blogs/Blogs";
import OurTeams from "../OurTeams/OurTeams";
import Pricing from "./Pricing";
import FAQs from "./FAQs";
import NewsLetters from "./NewsLetters";

const Home = () => {
  return (
    <div className="">
      <Banner></Banner>
      <ToolsSections></ToolsSections>
      <CompanyLogos></CompanyLogos>
      <Testimonials></Testimonials>
      <Blogs></Blogs>
      <OurTeams></OurTeams>
      <Pricing></Pricing>
      <FAQs></FAQs>
      <NewsLetters></NewsLetters>
    </div>
  );
};

export default Home;
