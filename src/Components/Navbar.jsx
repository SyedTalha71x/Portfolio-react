/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import React, { useState, useEffect } from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import Typed from './Typed'; // Assuming Typed.js is in the same directory

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false); // New state for tracking scroll

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const toggleDarkMode = () => {
    setIsDarkMode((prev) => !prev);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true); // When scrolled more than 50px
      } else {
        setIsScrolled(false); // When scrolled back to top
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navLinks = [
    { name: "Home", href: "javascript:void(0)", active: true },
    { name: "Team", href: "javascript:void(0)" },
    { name: "Feature", href: "javascript:void(0)" },
    { name: "Blog", href: "javascript:void(0)" },
    { name: "About", href: "javascript:void(0)" },
    { name: "Contact", href: "javascript:void(0)" },
  ];

  return (
    <header className="relative w-full h-screen nav_home">
      {/* Navbar */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-500 ${
          isScrolled ? "bg-gray-900" : "bg-transparent"
        }`}
      >
        <div className="px-4 py-4 flex items-center justify-between">
          <div className="flex gap-2 items-center">
            <img
              className="rounded-full h-12 w-12 object-center"
              src="https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png"
              alt=""
            />
            <div className="font-extrabold text-2xl mt-0.5 text-white">Syed</div>
          </div>

          {/* Nav links for larger screens */}
          <div className="hidden lg:flex items-center">
            <ul className="flex gap-4 mr-8">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className={`hover:text-red-600 ${
                      link.active ? "text-red-600" : "text-white"
                    } font-semibold block text-[15px] transition-colors duration-300`}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
            <button
              className="p-2 rounded-full bg-gray-200 cursor-pointer hover:bg-gray-300"
              aria-label="Toggle dark mode"
              onClick={toggleDarkMode}
            >
              {isDarkMode ? (
                <FaSun className="text-blue-600" />
              ) : (
                <FaMoon className="text-blue-600" />
              )}
            </button>
          </div>

          {/* Hamburger Button and Night mode toggle button for small screens */}
          <div className="lg:hidden flex items-center">
            <button id="toggleOpen" className="mr-2 text-white" onClick={toggleMenu}>
              <svg
                className="w-7 h-7"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            <button
              className="p-2 rounded-full bg-gray-200 cursor-pointer hover:bg-gray-300"
              aria-label="Toggle dark mode"
              onClick={toggleDarkMode}
            >
              {isDarkMode ? (
                <FaSun className="text-blue-600" />
              ) : (
                <FaMoon className="text-blue-600" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Sidebar for small screens */}
      <div
        className={`fixed inset-0 z-50 bg-gray-800 w-72 transition-all duration-500 text-white  transform ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        } lg:hidden`}
      >
        <button
          className="absolute top-4 right-4 z-[100] rounded-full bg-white p-3"
          onClick={toggleMenu}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 fill-black"
            viewBox="0 0 320.591 320.591"
          >
            <path d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z" />
            <path d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z" />
          </svg>
        </button>

        <ul className="flex flex-col p-6 space-y-3">
          {navLinks.map((link, index) => (
            <li key={index}>
              <a
                href={link.href}
                className={`hover:text-red-600 ${
                  link.active ? "text-red-600" : "text-white"
                } font-semibold text-[15px] transition-colors duration-300 `}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Full-width background image with content */}
      <div
        className="w-full h-full bg-cover  bg-center flex items-center justify-center"
        style={{
          backgroundImage: "url('https://trydo.rainbowit.net/assets/images/bg/bg-image-33.jpg')",
        }}
      >
        <div className="absolute   inset-0 bg-black opacity-70"></div>
        <div className="relative z-10 lg:pt-10 md:pt-8 sm:pt-5 pt-3 flex justify-start items-start flex-col px-4 md:px-6">
          <h1 className="lg:text-7xl  md:text-6xl sm:text-4xl text-4xl uppercase font-extrabold text-white">Hey, my name is syed talha</h1>
          <h1 className="lg:text-7xl  md:text-6xl mt-1 sm:text-4xl text-4xl uppercase font-extrabold text-white mb-3">welcome to my website</h1>
         <span className="font-extrabold text-xl text-gray-400 uppercase">I write code 😊</span>
          <h2 className="lg:text-4xl md:text-4xl mt-3 sm:text-2xl text-2xl font-extrabold text-yellow-400"> <Typed strings={['MERN Stack Developer','DevOps Certified','Infrastructure Specialist','Automation Expert']}/> </h2>
          <button className="bg-red-600 mt-4 font-semibold text-white py-3 px-6 lg:text-xl md:text-xl sm:text-md text-md rounded-md transition-all duration-500 ease-in-out hover:-translate-y-2 hover:bg-red-700">
            Get Started
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
