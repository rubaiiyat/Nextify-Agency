import React from "react";
import Banner from "./Banner";
import ToolsSections from "./ToolsSections";
import CompanyLogos from "./CompanyLogos";
import Testimonials from "./Testimonials";
import Blogs from "../Blogs/Blogs";

const Home = () => {
  return (
    <div className="">
      <Banner></Banner>
      <ToolsSections></ToolsSections>
      <CompanyLogos></CompanyLogos>
      <Testimonials></Testimonials>
      <Blogs></Blogs>
    </div>
  );
};

export default Home;
