import React from "react";
import { FaGoogle, FaGithub } from "react-icons/fa";
import { Link } from "react-router"; // use react-router-dom instead of react-router

const Register = () => {
  const handleGoogleSignup = () => {
    alert("Google signup clicked");
  };

  const handleGithubSignup = () => {
    alert("GitHub signup clicked");
  };

  return (
    <div className="min-h-screen   flex items-center justify-center px-4 mb-10">
      <div className="w-full max-w-md bg-gray-800 mt-10 p-8 rounded-xl shadow-xl">
        <h2 className="text-3xl font-bold mb-6 text-center">Register</h2>

        {/* Name */}
        <div className="mb-4">
          <label className="block text-sm mb-1">Full Name</label>
          <input
            type="text"
            placeholder="Enter your name"
            className="input input-bordered w-full bg-gray-800 text-white"
          />
        </div>

        {/* Email */}
        <div className="mb-4">
          <label className="block text-sm mb-1">Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            className="input input-bordered w-full bg-gray-800 text-white"
          />
        </div>

        {/* Password */}
        <div className="mb-6">
          <label className="block text-sm mb-1">Password</label>
          <input
            type="password"
            placeholder="Create a password"
            className="input input-bordered w-full bg-gray-800 text-white"
          />
        </div>

        {/* Register Button */}
        <button className="btn btn-primary w-full mb-4">Register</button>

        {/* OR divider */}
        <div className="text-center my-4 text-gray-400">OR</div>

        {/* Social Signups */}
        <div className="flex flex-col gap-3">
          <button
            onClick={handleGoogleSignup}
            className="btn w-full bg-white text-black hover:bg-gray-100"
          >
            <FaGoogle className="mr-2" /> Sign up with Google
          </button>

          <button
            onClick={handleGithubSignup}
            className="btn w-full bg-black text-white hover:bg-gray-800"
          >
            <FaGithub className="mr-2" /> Sign up with GitHub
          </button>
        </div>

        {/* Login Redirect */}
        <p className="mt-6 text-center text-sm text-gray-400">
          Already have an account?{" "}
          <Link to="/login" className="text-primary hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
