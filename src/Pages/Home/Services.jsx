import React from "react";
import {
  FaCode,
  FaPaintBrush,
  FaMobileAlt,
  FaCloud,
  FaSearch,
  FaRocket,
} from "react-icons/fa";

const services = [
  {
    title: "Web Development",
    icon: <FaCode className="text-primary text-4xl" />,
    description:
      "Modern, fast, and secure websites tailored to your business needs using the latest technologies.",
  },
  {
    title: "UI/UX Design",
    icon: <FaPaintBrush className="text-primary text-4xl" />,
    description:
      "User-centered design that ensures your website or app looks great and is easy to use.",
  },
  {
    title: "Mobile App Development",
    icon: <FaMobileAlt className="text-primary text-4xl" />,
    description:
      "High-performance Android and iOS apps that keep your users connected on the go.",
  },
  {
    title: "Cloud Solutions",
    icon: <FaCloud className="text-primary text-4xl" />,
    description:
      "Scalable and secure cloud infrastructure to power your applications and data.",
  },
  {
    title: "SEO Optimization",
    icon: <FaSearch className="text-primary text-4xl" />,
    description:
      "Improve your search engine visibility and get discovered by the right audience.",
  },
  {
    title: "Startup Launch Package",
    icon: <FaRocket className="text-primary text-4xl" />,
    description:
      "Everything you need to launch your online presence—from logo to full website setup.",
  },
];

const Services = () => {
  return (
    <div className="max-w-screen-xl mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">Our Services</h2>
        <p className="text-gray-400 max-w-xl mx-auto">
          We offer a range of services to help businesses thrive in the digital
          world. From development to design—our team is here for you.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-base-100 p-6 rounded-xl shadow-md hover:shadow-lg transition-all border border-gray-800 hover:bg-gray-800"
          >
            <div className="mb-4">{service.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
            <p className="text-gray-400">{service.description}</p>
          </div>
        ))}
      </div>

      <div className="mt-16 text-center">
        <h3 className="text-2xl font-bold mb-4">Need a Custom Solution?</h3>
        <p className="text-gray-400 mb-6">
          We can craft tailored solutions based on your unique requirements.
          Let’s talk and bring your ideas to life.
        </p>
        <button className="btn btn-primary px-6">Contact Us</button>
      </div>
    </div>
  );
};

export default Services;
