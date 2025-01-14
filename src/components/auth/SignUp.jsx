import { Icon } from "@iconify/react/dist/iconify.js";
import React from "react";
import { Link } from "react-router-dom";

function SignUp() {
  return (
    <div className="bg-login-bg bg-cover bg-no-repeat overflow-hidden h-screen w-full">
      <div className="flex flex-col md:flex-row-reverse h-screen">
        {/* Left Side */}
        <div className="flex flex-col justify-center items-center w-full md:w-1/2 h-full">
          <div className="flex flex-col gap-4 bg-white bg-opacity-50 p-6 rounded-md w-4/5 sm:w-3/5">
            <div className="flex flex-col justify-center items-center gap-2">
              <h1 className="text-2xl mb-4 text-center font-bold">
                Create Account
              </h1>
            </div>
            <form className="flex flex-col gap-4">
              <input
                className="border border-gray-500 p-2 rounded-md"
                type="text"
                placeholder="Name"
              />
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
              <button className="bg-green-500 p-2 rounded-md text-white">
                Sign Up
              </button>
            </form>

            {/* Horizontal Rule and Additional Options */}
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
                <a href="#" className="text-blue-500 hover:underline">
                  Sign up
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Right Side (Hidden on Mobile) */}
        <div className="hidden md:flex flex-col justify-center items-center gap-4 bg-default-green bg-opacity-70 w-1/2">
          <h1 className="text-white text-4xl font-bold ">Welcome Back!</h1>
          <p className="text-white  text-lg text-center max-w-72 mx-auto">
            To keep connected with us please login with your personal info.
          </p>

          <Link
            to="/signin"
            className=" border-2 border-white text-white py-2 px-8 rounded-md hover:bg-hover-green"
          >
            Sign In
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
