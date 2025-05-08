import React, { useEffect, useState } from "react";
import Blog from "./Blog";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("blogs.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  return (
    <div className="max-w-screen-xl container mx-auto">
      <div className="text-center mt-10 mb-10">
        <p className="text-primary mb-5">OUR BLOGS</p>

        <h1 className="text-2xl font-bold md:text-4xl mb-10">
          Latest Articles And Insights
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 w-full">
        {blogs.map((blog) => (
          <Blog key={blog.id} blog={blog} />
        ))}
      </div>
    </div>
  );
};

export default Blogs;
