import React from "react";
import { FaGoogle, FaGithub } from "react-icons/fa";
import { Link, useNavigate } from "react-router"; // only if using react-router
import { useForm } from "react-hook-form";
import { useAuth } from "../Context/AuthProvider";
import Swal from "sweetalert2";

const Login = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();
  const { signInWithEmail, handleGoogleLogin } = useAuth();
  const onSubmit = async (data) => {
    try {
      await signInWithEmail(data.email, data.password);
      Swal.fire({
        title: "Successfully Login!",
        icon: "success",
        draggable: true,
      });
      navigate("/");
    } catch (error) {
      console.log("Invalid Login", error.message);
    }
  };

  const googelLogin = async () => {
    console.log("working");
    try {
      await handleGoogleLogin();
      Swal.fire({
        title: "Successfully Login!",
        icon: "success",
        draggable: true,
      });
      navigate("/");
    } catch (error) {
      console.log("Invalid Login", error.message);
    }
  };
  return (
    <div className="min-h-screen  flex items-center justify-center px-4 mb-10">
      <div className="w-full max-w-md bg-gray-800 p-8 rounded-xl shadow-xl">
        <h2 className="text-3xl font-bold mb-6 text-center">Login</h2>

        <form onSubmit={handleSubmit(onSubmit)} action="">
          {/* Email */}
          <div className="mb-4">
            <label className="block text-sm mb-1">Email</label>
            <input
              {...register("email", {
                required: true,
                pattern: {
                  value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                  message: "Invalid Email Address",
                },
              })}
              type="email"
              placeholder="Enter your email"
              className="input input-bordered w-full bg-gray-800 text-white"
            />
            <div className="mt-2">
              {errors.email && (
                <span className="text-error">{errors.email.message}</span>
              )}
            </div>
          </div>

          {/* Password */}
          <div className="mb-6">
            <label className="block text-sm mb-1">Password</label>
            <input
              {...register("password", {
                required: true,
              })}
              type="password"
              placeholder="Create a password"
              className="input input-bordered w-full bg-gray-800 text-white"
            />
          </div>

          {/* Register Button */}
          <button className="btn btn-primary w-full mb-4">Login</button>
        </form>

        {/* OR divider */}
        <div className="text-center my-4 text-gray-400">OR</div>

        {/* Social Signups */}
        <div className="flex flex-col gap-3">
          <button
            onClick={googelLogin}
            className="btn w-full bg-white text-black hover:bg-gray-100"
          >
            <FaGoogle className="mr-2" /> Login with Google
          </button>

          <button className="btn w-full bg-black text-white hover:bg-gray-800">
            <FaGithub className="mr-2" /> Login with GitHub
          </button>
        </div>

        {/* Login Redirect */}
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
