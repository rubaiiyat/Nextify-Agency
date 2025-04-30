import React from "react";

const Blog = ({ blog }) => {
  const {
    image,
    category,
    title,
    description,
    authorImage,
    authorName,
    authorRole,
  } = blog;
  return (
    <div>
      <div className="card bg-base-100 shadow-sm text-start hover:bg-gray-800 hover:cursor-pointer transition duration-300 ease-in-out w-full max-w-xs md:max-w-none mx-auto min-h-full">
        <figure>
          <img className="w-full h-48 object-cover" src={image} alt={title} />
        </figure>
        <div className="card-body">
          <p className="text-lg text-primary">{category}</p>
          <h2 className="card-title text-base md:text-lg">{title}</h2>
          <p className="text-sm md:text-base">{description}</p>

          <div className="mt-5 flex items-center gap-3">
            <img
              className="w-10 h-10 rounded-full border-4 border-primary"
              src={authorImage}
              alt={authorName}
            />
            <div>
              <h1 className="font-bold text-md">{authorName}</h1>
              <p className="text-sm">{authorRole}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
