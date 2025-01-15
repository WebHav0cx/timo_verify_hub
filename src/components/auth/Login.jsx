import { Icon } from "@iconify/react/dist/iconify.js";
import React from "react";
import { Link } from "react-router-dom";

function Login() {
  const handleLogin = (e) => {
    e.preventDefault();
    alert("Login successful!"); // Display success alert after login.
  };
  return (
    <div className="bg-login-bg bg-cover bg-no-repeat overflow-hidden h-screen w-full">
      <div className="flex flex-col md:flex-row h-screen">
        {/* Left Side */}
        <div className="flex flex-col justify-center items-center w-full md:w-1/2 h-full">
          <div className="flex flex-col gap-4 bg-white bg-opacity-50 p-6 rounded-md w-4/5 sm:w-3/5">
            <div className="flex flex-col justify-center items-center gap-2">
              <h1 className="text-2xl mb-4 text-center font-bold">
                Sign in to VerifyHub
              </h1>
            </div>
            <form onSubmit={handleLogin} className="flex flex-col gap-4">
              <input
                className="border border-gray-500 p-2 rounded-md"
                type="email"
                placeholder="Email"
              />
              <input
                className="border border-gray-500 p-2 rounded-md"
                type="password"
                placeholder="Password"
              />
              <div className="flex justify-end">
                <a href="#" className="text-sm text-blue-500 hover:underline">
                  Forgot Password?
                </a>
              </div>
              <button
                typeof="submit"
                type="submit"
                className="bg-button-green p-2 rounded-md text-white"
              >
                Login
              </button>
            </form>

            {/* Horizontal Rule */}
            <div className="mt-6">
              <div className="flex items-center">
                <hr className="flex-grow border-gray-300" />
                <span className="mx-2 text-gray-600">Or continue with</span>
                <hr className="flex-grow border-gray-300" />
              </div>
              <button className="mt-4 border-2 p-2 rounded-md flex mx-auto">
                <span>
                  <Icon icon="flat-color-icons:google" width="24" height="24" />
                </span>
                Google
              </button>
            </div>

            {/* "Don't have an account?" on Mobile */}
            <div className="mt-6 text-center md:hidden">
              <p className="text-gray-600">
                Don't have an account?{" "}
                <Link to="/signup" className="text-blue-500 hover:underline">
                  Sign up
                </Link>
              </p>
            </div>
          </div>
        </div>

        {/* Right Side (Hidden on Mobile) */}
        <div className="hidden md:flex flex-col justify-center items-center gap-4 bg-default-green bg-opacity-70 w-1/2">
          <h1 className="text-white text-4xl font-bold ">Hello, Friend!</h1>
          <p className="text-white  text-lg text-center max-w-xs mx-auto">
            Enter your personal details and start your journey with us.
          </p>

          <Link
            to="/signup"
            className=" border-2 border-white text-white py-2 px-8 rounded-md hover:bg-gray-200"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
