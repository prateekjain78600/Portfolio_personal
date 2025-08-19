import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";

const Footer = ({ isDarkMode }) => {
  return (
    <div className="mt-20">
      <div className="text-center">
        <Image
          src={isDarkMode ? assets.logo_dark : assets.logo}
          alt="Logo"
          className="w-36 mx-auto mb-2"
        />
        <div className="w-max flex items-center gap-2 mx-auto">
          <Image
            src={isDarkMode ? assets.mail_icon_dark : assets.mail_icon}
            alt="Mail icon"
            className="w-6"
          />
          <span>prateekjain78600@gmail.com</span>
        </div>
      </div>

      <div className="text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6">
        <p>© 2025 Prateek Jain. All rights reserved.</p>
        <ul className="flex items-center gap-10 justify-center mt-4 sm:mt-0">
          <li>
            <a
              href="https://github.com/prateekjain78600"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-600 transition-colors"
            >
              GitHub
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/prateek-jain-5a663a226/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-600 transition-colors"
            >
              LinkedIn
            </a>
          </li>
          {/* <li><a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-gray-600 transition-colors">Twitter</a></li> */}
        </ul>
      </div>
    </div>
  );
};

export default Footer;
