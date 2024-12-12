import React, { useState } from "react";
import bgImage from "../assets/bg.jpg";
import loginImage from "../assets/login.png";
import { Link } from "react-router-dom";

const LoginInPage = () => {
  // State for form fields
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  // State for validation errors
  const [errors, setErrors] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  // Handle input change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Form validation
  const validateForm = () => {
    let formErrors = {};
    if (!formData.fullName) formErrors.fullName = "Full name is required!";
    if (!formData.email) formErrors.email = "Email is required!";
    if (!formData.password) formErrors.password = "Password is required!";
    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Form is valid, you can now process the form
      console.log("Form submitted", formData);
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: `url(${bgImage})`, // Background image for the entire page
      }}
    >
      {/* Container */}
      <div className="bg-white bg-opacity-90 shadow-lg rounded-xl max-w-4xl w-full flex flex-col md:flex-row overflow-hidden">
        {/* Left Section: Image */}
        <div className="md:w-1/2 bg-white flex items-center justify-center">
          <img
            src={loginImage}
            alt="Sign Up Illustration"
            className="w-3/4 max-h-full object-contain"
          />
        </div>

        {/* Right Section: Form */}
        <div className="md:w-1/2 py-10 px-10 bg-white">
          <h3 className="text-3xl font-bold text-pink-500 mb-4 text-center">
            Save Your Account Now
          </h3>
          <p className="text-gray-600 mb-6 text-center">
            Get unlimited types of forms, questions, and responses. Free
            forever.
          </p>
          <form onSubmit={handleSubmit} className="space-y-6">
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

            {/* Submit Button */}
            <div className="flex justify-center">
              <button
                type="submit"
                className="w-48 bg-pink-500 text-white py-3 rounded-full hover:bg-pink-600 transition duration-300"
              >
                Log In
              </button>
            </div>
          </form>

          {/* Footer Text */}
          <p className="text-sm text-gray-500 mt-4 text-center">
            Don't have an account?{" "}
            <Link to="/" className="text-pink-500 hover:underline">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginInPage;
