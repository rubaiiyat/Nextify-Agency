import React from "react";

const NewsLetters = () => {
  return (
    <div className="max-w-screen-xl container mx-auto px-4 mt-10 mb-20">
      <div className="hero bg-base-200 p-10">
        <div className="hero-content text-center">
          <div className="mx-30">
            <h1 className="text-4xl font-bold">
              Stay Updated With Our Newsletter
            </h1>
            <p className="py-6">
              Stay ahead of the curve with our newsletter. Subscribe now to
              receive the latest news, expert tips, exclusive deals, and
              insights on industry trends—directly in your inbox. Whether you're
              a professional or just getting started, our updates will keep you
              informed and inspired.
            </p>
            <div className="flex gap-5 justify-center">
              <button className="btn btn-primary">Subscribe Now</button>
              <button className="btn btn-outline btn-secondary">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsLetters;
