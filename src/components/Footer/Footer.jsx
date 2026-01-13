import React from "react";
import { BsTelephoneFill } from "react-icons/bs";
import { FaGithub, FaHeart, FaLinkedin, FaLocationArrow } from "react-icons/fa";
import { FaLocationPin, FaTwitter } from "react-icons/fa6";
import { MdEmail, MdLocationOn } from "react-icons/md";

const Footer = ({ darkMode }) => {
  const currentYear = new Date().getFullYear();

  return (
  <footer
  style={{
    background: darkMode
      ? "linear-gradient(to bottom, #000000, #111827)"
      : "linear-gradient(to bottom, #f3f4f6, #e5e7eb)",
    borderColor: darkMode ? "#374151" : "#d1d5db",
  }}
  className="border-t"
>
  <div className="container mx-auto px-4 py-8">
    <div className="flex flex-col md:flex-row items-center justify-between gap-8">

      {/* Left */}
      <div className="text-center md:text-left">
        <h3 className="text-2xl font-bold mb-2 text-orange-500 dark:text-white">
          Portfolio
        </h3>
        <p className="text-sm text-[#6b7280] dark:text-[#9ca3af]">
          Full-Stack MERN Developer focused on <br />performance & user experience.

        </p>
      </div>

      {/* Center Social Icons */}
      <div className="flex gap-4">
        <a
          href="https://github.com/muhitjoy"
          target="_blank"
          className="w-10 h-10 rounded-full flex items-center justify-center
          bg-[#374151] dark:bg-[#f3f4f6]
          text-white dark:text-[#374151]
          hover:bg-linear-to-r hover:from-orange-500 hover:to-amber-500
          hover:text-white transition-all hover:scale-110"
        >
          <FaGithub />
        </a>

        <a
          href="https://www.linkedin.com/in/m-a-muhit-joy/"
          target="_blank"
          className="w-10 h-10 rounded-full flex items-center justify-center
          bg-[#374151] dark:bg-[#f3f4f6]
          text-white dark:text-[#374151]
          hover:bg-linear-to-r hover:from-orange-500 hover:to-amber-500
          hover:text-white transition-all hover:scale-110"
        >
          <FaLinkedin />
        </a>

        <a
          href="https://x.com/muhit_official"
          target="_blank"
          className="w-10 h-10 rounded-full flex items-center justify-center
          bg-[#374151] dark:bg-[#f3f4f6]
          text-white dark:text-[#374151]
          hover:bg-linear-to-r hover:from-orange-500 hover:to-amber-500
          hover:text-white transition-all hover:scale-110"
        >
          <FaTwitter />
        </a>
      </div>

      {/* Right Contact Info */}
      <div className="text-sm space-y-3 text-center md:text-right text-[#6b7280] dark:text-[#9ca3af]">

        <div className="flex items-center justify-center md:justify-end gap-2">
          <span className="text-orange-500"><MdEmail></MdEmail></span>
          <a className="hover:text-orange-500">
            muhitjoy2004@gmail.com
          </a>
        </div>

        <div className="flex items-center justify-center md:justify-end gap-2">
          <span className="text-orange-500"></span>
          <a className="hover:text-orange-500 flex gap-2 items-center"> <BsTelephoneFill className="text-orange-500" size={12}></BsTelephoneFill>
            +880 1839164476
          </a>
        </div>

        <div className="flex items-center justify-center md:justify-end gap-2">
          <span className="text-orange-500"><MdLocationOn></MdLocationOn></span>
          <span> Dhaka, Bangladesh</span>
        </div>

        <p className="pt-3 flex items-center justify-center md:justify-end gap-1">
          © {currentYear} Made with <FaHeart className="text-red-500" />
          <span className="text-orange-500 font-medium">M A Muhit Joy</span>
        </p>
      </div>

    </div>
  </div>
</footer>


  );
};

export default Footer;
