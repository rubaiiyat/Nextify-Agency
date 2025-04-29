import React from "react";
import { IoSettingsOutline } from "react-icons/io5";
import { IoCodeSharp } from "react-icons/io5";
import { CiMobile1 } from "react-icons/ci";
import { CiCloud } from "react-icons/ci";

const ToolsSections = () => {
  return (
    <div className="max-w-screen-xl container mx-auto mt-10">
      <div className="text-center">
        <p className="text-primary mb-5">The Tools You Need</p>

        <h1 className="text-2xl font-bold md:text-4xl">
          All-in-One Solution For Your Project{" "}
        </h1>
      </div>

      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-screen-xl mx-auto px-4  hover:cursor-pointer">
        {[
          {
            icon: <IoSettingsOutline className="text-5xl" />,
            title: "Customizable Settings",
            description:
              "Easily configure tools to fit your project requirements.",
          },
          {
            icon: <IoCodeSharp className="text-5xl" />,
            title: "Developer-Friendly",
            description:
              "Optimized for developers with clean and efficient code.",
          },
          {
            icon: <CiMobile1 className="text-5xl" />,
            title: "Responsive Design",
            description:
              "Build tools that look great on any device and screen size.",
          },
          {
            icon: <CiCloud className="text-5xl" />,
            title: "Cloud Integration",
            description:
              "Seamlessly connect with cloud services for better productivity.",
          },
        ].map((item, i) => (
          <div
            key={i}
            className="text-center bg-gray-800 p-6 rounded-xl shadow-lg shadow-gray-900/40 hover:shadow-xl hover:scale-105 transition duration-300 border-t-4 border-transparent"
          >
            <div className="flex justify-center mb-4 text-primary">
              {item.icon}
            </div>
            <h2 className="text-white font-semibold text-xl mb-2">
              {item.title}
            </h2>
            <p className="text-gray-300">{item.description}</p>
          </div>
        ))}
      </div>

      <div className="mt-10 mb-10 flex justify-center">
        <button className="btn bg-primary">Explore More</button>
      </div>
    </div>
  );
};

export default ToolsSections;
