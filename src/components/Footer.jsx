import { Icon } from "@iconify/react/dist/iconify.js";
import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-footer-grid bg-black bg-cover bg-no-repeat overflow-hidden py-8 px-4 text-white">
      <div className="flex justify-around items-center">
        <div className="flex flex-col gap-3 justify-center items-center">
          <h3>Logo and Brand Name</h3>
          <div className="flex gap-2 justify-center items-center">
            <Icon
              className="hover:text-green-800"
              icon="mdi:instagram"
              width="24"
              height="24"
            />
            <Icon
              className="hover:text-green-800"
              icon="prime:twitter"
              width="24"
              height="24"
            />
            <Icon
              className="hover:text-green-800"
              icon="mdi:linkedin"
              width="24"
              height="24"
            />
            <Icon
              className="hover:text-green-800"
              icon="ic:baseline-facebook"
              width="24"
              height="24"
            />
          </div>
        </div>
        <div className="flex gap-8 justify-center items-center">
          <div className="flex flex-col gap-4">
            <h4>Access Links</h4>
            <ul className="flex flex-col gap-2">
              <li>Terms and Conditions</li>
              <li>Privacy Policy</li>
              <li>About Us</li>
              <li>Pricing</li>
            </ul>
          </div>
          <div className="flex flex-col gap-4">
            <h4>Access Links</h4>
            <ul className="flex flex-col gap-2">
              <li>Terms and Conditions</li>
              <li>Privacy Policy</li>
              <li>About Us</li>
              <li>Pricing</li>
            </ul>
          </div>
          <div className="flex flex-col gap-4">
            <h4>Get Started</h4>
            <ul className="flex flex-col gap-2">
              <Link>Sign Up</Link>
              <Link>Log In</Link>
              <li>Contact Sales</li>
              <li></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
