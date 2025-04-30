import React from "react";
import { FaGoogle, FaGithub } from "react-icons/fa";
import { Link } from "react-router"; // only if using react-router

const Login = () => {
  const handleGoogleLogin = () => {
    // handle Google login logic here
    alert("Google login clicked");
  };

  const handleGithubLogin = () => {
    // handle GitHub login logic here
    alert("GitHub login clicked");
  };

  return (
    <div className=" text-white flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-gray-800 mt-10 p-8 rounded-xl shadow-xl">
        <h2 className="text-3xl font-bold mb-6 text-center">Login</h2>

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
            placeholder="Enter your password"
            className="input input-bordered w-full bg-gray-800 text-white"
          />
        </div>

        {/* Login Button */}
        <button className="btn btn-primary w-full mb-4">Login</button>

        {/* OR divider */}
        <div className="text-center my-4 text-gray-400">OR</div>

        {/* Social Logins */}
        <div className="flex flex-col gap-3">
          <button
            onClick={handleGoogleLogin}
            className="btn w-full bg-white text-black hover:bg-gray-100"
          >
            <FaGoogle className="mr-2" /> Continue with Google
          </button>

          <button
            onClick={handleGithubLogin}
            className="btn w-full bg-black text-white hover:bg-gray-800"
          >
            <FaGithub className="mr-2" /> Continue with GitHub
          </button>
        </div>

        {/* Register Redirect */}
        <p className="mt-6 text-center text-sm text-gray-400">
          Don't have an account?{" "}
          <Link to="/register" className="text-primary hover:underline">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
