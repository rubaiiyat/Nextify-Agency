import React from "react";

const Testimonials = () => {
  return (
    <div className="max-w-screen-xl container mx-auto mt-10">
      <div className="text-center">
        <p className="text-primary mb-5">TESTIMONIALS</p>

        <h1 className="text-2xl font-bold md:text-4xl mb-10">
          What Our Clients Says
        </h1>
      </div>

      <div>
        <div className="carousel w-full text-center">
          <div id="slide1" className="carousel-item relative w-full ">
            <div className="flex flex-col md:flex-row">
              <div className="bg-gray-800 p-10 ml-0 md:ml-10 rounded-l-lg space-y-2 ">
                <img
                  className="w-18 rounded-full mx-auto border-4 border-primary"
                  src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1760&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt=""
                />
                <h1 className="text-xl font-bold md:text-2xl text-primary">
                  Sarah Johnson{" "}
                </h1>
                <p>
                  Working with this team was a game-changer for our online
                  presence. They listened to our needs and delivered exactly
                  what we envisioned—on time and beyond expectations.
                </p>
              </div>
              <div className="bg-gray-800 p-10 mr-0 md:mr-10 rounded-r-lg space-y-2">
                <img
                  className="w-18 rounded-full mx-auto border-4 border-primary"
                  src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1760&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt=""
                />
                <h1 className="text-xl font-bold md:text-2xl text-primary">
                  David Lee{" "}
                </h1>
                <p>
                  Their attention to detail and creative approach gave our brand
                  a fresh new look. I’ve already recommended them to two other
                  startups!
                </p>
              </div>
            </div>

            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a href="#slide4" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide2" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide2" className="carousel-item relative w-full">
            <div className="flex flex-col md:flex-row">
              <div className="bg-gray-800 p-10 ml-0 md:ml-10 rounded-l-lg space-y-2">
                <img
                  className="w-18 rounded-full mx-auto border-4 border-primary"
                  src="https://images.unsplash.com/photo-1628157588553-5eeea00af15c?q=80&w=1760&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt=""
                />
                <h1 className="text-xl font-bold md:text-2xl text-primary">
                  Emily Rodriguez{" "}
                </h1>
                <p>
                  Professional, responsive, and talented. From start to finish,
                  it was clear we were working with experts who genuinely care
                  about our goals.
                </p>
              </div>
              <div className="bg-gray-800 p-10 mr-0 md:mr-10 rounded-r-lg space-y-2">
                <img
                  className="w-18 rounded-full mx-auto border-4 border-primary"
                  src="https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?q=80&w=1760&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt=""
                />
                <h1 className="text-xl font-bold md:text-2xl text-primary">
                  Michael Chen{" "}
                </h1>
                <p>
                  Their development skills are top-notch. The project ran
                  smoothly, and the final product was even better than what we
                  expected.”
                </p>
              </div>
            </div>
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a href="#slide1" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide3" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide3" className="carousel-item relative w-full">
            <div className="flex flex-col md:flex-row">
              <div className="bg-gray-800 p-10 ml-0 md:ml-10 rounded-l-lg space-y-2">
                <img
                  className="w-18 rounded-full mx-auto border-4 border-primary"
                  src="https://images.unsplash.com/photo-1605032396296-6320b29a439b?q=80&w=1600&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt=""
                />
                <h1 className="text-xl font-bold md:text-2xl text-primary">
                  Linda Patel{" "}
                </h1>
                <p>
                  Absolutely loved the design work! Their team made our ideas
                  come to life in a modern and engaging way
                </p>
              </div>
              <div className="bg-gray-800 p-10 mr-0 md:mr-10 rounded-r-lg space-y-2">
                <img
                  className="w-18 rounded-full mx-auto border-4 border-primary"
                  src="https://images.unsplash.com/photo-1715206101663-07034e40117a?q=80&w=1698&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt=""
                />
                <h1 className="text-xl font-bold md:text-2xl text-primary">
                  James Walker{" "}
                </h1>
                <p>
                  If you’re looking for a partner who delivers quality,
                  creativity, and professionalism, look no further. We couldn’t
                  be happier.
                </p>
              </div>
            </div>
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a href="#slide2" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide4" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide4" className="carousel-item relative w-full">
            <div className="flex flex-col md:flex-row">
              <div className="bg-gray-800 p-10 ml-0 md:ml-10 rounded-l-lg space-y-2">
                <img
                  className="w-18 rounded-full mx-auto border-4 border-primary"
                  src="https://images.unsplash.com/photo-1701615004837-40d8573b6652?q=80&w=1760&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt=""
                />
                <h1 className="text-xl font-bold md:text-2xl text-primary">
                  Mohammed Karim{" "}
                </h1>
                <p>
                  Exceptional attention to detail and top-notch communication.
                  The final product exceeded our expectations in every way
                </p>
              </div>
              <div className="bg-gray-800 p-10 mr-0 md:mr-10 rounded-r-lg space-y-2">
                <img
                  className="w-18 rounded-full mx-auto border-4 border-primary"
                  src="https://images.unsplash.com/photo-1640951613773-54706e06851d?q=80&w=1760&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt=""
                />
                <h1 className="text-xl font-bold md:text-2xl text-primary">
                  Rachel Adams{" "}
                </h1>
                <p>
                  Working with this team was a game-changer. They understood our
                  brand and delivered a website that truly reflects our values.
                </p>
              </div>
            </div>
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a href="#slide3" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide1" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
