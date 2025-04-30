import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
const Teams = ({ team }) => {
  const { image, name, role, linkedIn, twitter, instagram, facebook } = team;
  return (
    <div>
      <div className="card bg-base-100 shadow-sm text-start hover:bg-gray-800 hover:cursor-pointer transition duration-300 ease-in-out w-full max-w-xs md:max-w-none mx-auto min-h-full">
        <figure>
          <img className="w-full h-48 object-cover" src={image} alt={image} />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-base md:text-lg">{name}</h2>
          <p className="text-sm md:text-base">{role}</p>

          <div className=" flex items-center gap-2 text-md">
            <a href={linkedIn}>
              <FaLinkedin></FaLinkedin>
            </a>
            <a href={twitter}>
              <FaTwitter />
            </a>
            <a href={instagram}>
              <FaInstagram />
            </a>
            <a href={facebook}>
              <FaFacebook />
            </a>
          </div>
          <button className="btn bg-primary mt-2 w-32 rounded-l-full rounded-r-full">
            Contact {name.split(" ")[0]}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Teams;
