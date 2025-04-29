import React from "react";
import banner from "../../assets/banner.png";
import { FaPlay } from "react-icons/fa";
const Banner = () => {
  return (
    <div className=" bg-gray-800 ">
      <div className="max-w-screen-xl container mx-auto ">
        <div className="flex flex-col md:flex-row justify-between items-center  mx-3 ">
          <div className="space-y-2 py-5">
            <h1 className="text-2xl font-bold md:text-4xl">
              Creative Web Design For Businesses
            </h1>
            <p>
              I help businesses grow by designing creative, user-friendly
              websites that leave a lasting impression.
            </p>

            <div className="space-x-5">
              <button className="btn bg-primary">Get Started</button>
              <button className="btn btn-outline btn-secondary">
                Contact Us
              </button>
            </div>
          </div>
          <div className="relative my-10">
            {/* Image */}
            <img className="rounded-lg shadow-lg" src={banner} alt="Banner" />

            {/* Centered Play Button */}
            <button
              className="border border-white p-3 rounded-full hover:cursor-pointer absolute top-1/2 left-1/2   "
              onClick={() => document.getElementById("my_modal_1").showModal()}
              aria-label="Play Video"
            >
              <FaPlay className="text-xl" />
            </button>

            {/* Modal */}
            <dialog id="my_modal_1" className="modal">
              <div className="modal-box p-0 overflow-hidden ">
                {/* Responsive Video */}
                <div className="aspect-video w-full">
                  <iframe
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/WXgP2itnWss?si=jIzQpFiJYOE_J4rM"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  ></iframe>
                </div>

                {/* Modal Action */}
                <div className="modal-action p-4">
                  <form method="dialog">
                    <button className="btn btn-outline">Close</button>
                  </form>
                </div>
              </div>
            </dialog>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
