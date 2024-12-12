import React, { useState } from "react";
import { Link } from "react-router-dom";
import bgImage from "../assets/bg.jpg";
import loginImage from "../assets/login.png";

const SignUpPage = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validateForm = () => {
    let formErrors = {};
    if (!formData.fullName.trim()) formErrors.fullName = "Full name is required!";
    if (!formData.email.trim()) formErrors.email = "Email is required!";
    if (!formData.password.trim()) formErrors.password = "Password is required!";
    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form submitted", formData);
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      <div className="bg-white bg-opacity-90 shadow-lg rounded-xl max-w-4xl w-full flex flex-col md:flex-row overflow-hidden">
        <div className="md:w-1/2 bg-white flex items-center justify-center">
          <img
            src={loginImage}
            alt="Sign Up Illustration"
            className="w-3/4 max-h-full object-contain"
          />
        </div>

        <div className="md:w-1/2 py-10 px-10 bg-white">
          <h3 className="text-3xl font-bold text-pink-500 mb-4 text-center">
            Save Your Account Now
          </h3>
          <p className="text-gray-600 mb-6 text-center">
            Get unlimited types of forms, questions, and responses. Free forever.
          </p>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Full Name Field */}
            <div className="relative">
              <i className="absolute left-3 top-3 text-gray-500 fas fa-user"></i>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Enter your full name"
                className="w-full pl-10 pr-4 py-2 border-b-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-400"
              />
              {errors.fullName && (
                <p className="text-red-500 text-xs mt-1">{errors.fullName}</p>
              )}
            </div>

            {/* Email Field */}
            <div className="relative">
              <i className="absolute left-3 top-3 text-gray-500 fas fa-envelope"></i>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="w-full pl-10 pr-4 py-2 border-b-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-400"
              />
              {errors.email && (
                <p className="text-red-500 text-xs mt-1">{errors.email}</p>
              )}
            </div>

            {/* Password Field */}
            <div className="relative">
              <i className="absolute left-3 top-3 text-gray-500 fas fa-lock"></i>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter your password"
                className="w-full pl-10 pr-4 py-2 border-b-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-400"
              />
              {errors.password && (
                <p className="text-red-500 text-xs mt-1">{errors.password}</p>
              )}
            </div>

            <div className="flex justify-center">
              <button
                type="submit"
                className="w-48 bg-pink-500 text-white py-3 rounded-full hover:bg-pink-600 transition duration-300"
              >
                Sign Up 
              </button>
            </div>
          </form>
          <p className="text-sm text-gray-500 mt-4 text-center">
            Already have an account?{" "}
            <Link to="/login" className="text-pink-500 hover:underline">
              Log In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
