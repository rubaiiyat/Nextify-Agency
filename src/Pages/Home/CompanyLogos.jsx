import React from "react";
import {
  FaApple,
  FaGoogle,
  FaAmazon,
  FaMicrosoft,
  FaFacebook,
  FaCcVisa,
  FaPaypal,
  FaTiktok,
  FaSnapchat,
} from "react-icons/fa";
import { FaXTwitter, FaSpotify } from "react-icons/fa6";
import { BsNvidia } from "react-icons/bs";
import { SiTesla, SiAdobe, SiUdemy } from "react-icons/si";
import { TbBrandWalmart } from "react-icons/tb";
import { RiNetflixFill } from "react-icons/ri";

const logos = [
  { icons: FaApple, name: "Apple" },
  { icons: FaGoogle, name: "Google" },
  { icons: FaAmazon, name: "Amazon" },
  { icons: FaMicrosoft, name: "Microsoft" },
  { icons: FaFacebook, name: "Facebook" },
  { icons: FaXTwitter, name: "X" },
  { icons: BsNvidia, name: "Nvidia" },
  { icons: SiTesla, name: "Tesla" },
  { icons: TbBrandWalmart, name: "Walmart" },
  { icons: FaCcVisa, name: "Visa" },
  { icons: FaPaypal, name: "Paypal" },
  { icons: FaTiktok, name: "TikTok" },
  { icons: RiNetflixFill, name: "Netflix" },
  { icons: SiAdobe, name: "Adobe" },
  { icons: FaSpotify, name: "Spotify" },
  { icons: FaSnapchat, name: "Snapchat" },
  { icons: SiUdemy, name: "Udemy" },
];

const CompanyLogos = () => {
  return (
    <div className="bg-gray-800 mb-20 overflow-hidden">
      {/* Custom keyframes */}
      <style>
        {`
          @keyframes slide {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
        `}
      </style>

      <div className="text-center py-20 px-4">
        <p className="text-primary mb-4">Our Trusted Partners</p>
        <h1 className="text-2xl font-bold md:text-4xl mb-3 text-white">
          Companies We've Worked With
        </h1>
        <p className="text-gray-400 mb-10 max-w-xl mx-auto">
          We've partnered with some of the most innovative and leading companies
          to bring the best solutions to you.
        </p>

        <div className="relative w-full overflow-hidden">
          <div
            className="flex w-max animate-slide"
            style={{
              animation: "slide 30s linear infinite",
            }}
          >
            {[...logos, ...logos].map((logo, index) => {
              const Icon = logo.icons;
              return (
                <div
                  key={index}
                  className="flex flex-col items-center justify-center mx-3 min-w-[100px]"
                >
                  <div className="bg-gray-900 rounded-full  p-5 flex items-center justify-center mb-2">
                    <Icon className="text-slate-300 text-2xl" />
                  </div>
                  <span className="text-sm text-gray-400 capitalize">
                    {logo.name}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyLogos;
