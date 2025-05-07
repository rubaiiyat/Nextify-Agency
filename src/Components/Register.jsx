import React, { useState } from "react";
import { FaGoogle, FaGithub } from "react-icons/fa";
import { Link, useNavigate } from "react-router"; // use react-router-dom instead of react-router
import { useForm } from "react-hook-form";
import { useAuth } from "../Context/AuthProvider";
import Swal from "sweetalert2";

const Register = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();
  const { signUpWithEmail } = useAuth();
  const onSubmit = async (data) => {
    try {
      await signUpWithEmail(data.email, data.password);
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to register here!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Register Me!",
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            title: "Registerd!",
            text: "You are successfully registerd. Now provide your email and password to login",
            icon: "success",
          });
        }
      });
      navigate("/login");
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div className="min-h-screen  flex items-center justify-center px-4 mb-10">
      <div className="w-full max-w-md bg-gray-800 mt-5 p-8 rounded-xl shadow-xl">
        <h2 className="text-3xl font-bold mb-6 text-center">Register</h2>

        <form onSubmit={handleSubmit(onSubmit)} action="">
          <div className="mb-4">
            {/* Name */}
            <label className="block text-sm mb-1">Full Name</label>
            <input
              {...register("name", { required: true })}
              type="text"
              placeholder="Enter your name"
              className="input input-bordered w-full bg-gray-800 text-white"
            />
          </div>

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
          <button className="btn btn-primary w-full mb-4">Register</button>
        </form>

        {/* OR divider */}
        <div className="text-center my-4 text-gray-400">OR</div>

        {/* Social Signups */}
        <div className="flex flex-col gap-3">
          <button className="btn w-full bg-white text-black hover:bg-gray-100">
            <FaGoogle className="mr-2" /> Sign up with Google
          </button>

          <button className="btn w-full bg-black text-white hover:bg-gray-800">
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
