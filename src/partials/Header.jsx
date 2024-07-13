// Header.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import Logo from '../images/Group 1.png';

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for toggling menu

  // Detect whether user has scrolled the page down by 10px
  useEffect(() => {
    const scrollHandler = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', scrollHandler);
    return () => {
      window.removeEventListener('scroll', scrollHandler);
    };
  }, []);

  // Function to toggle menu state
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header
      className={`fixed w-full z-30 ${
        isScrolled
          ? "bg-opacity-60 bg-white backdrop-blur-sm shadow-lg"
          : "md:bg-opacity-60"
      } transition duration-300 ease-in-out`}
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Site branding */}
          <div className="flex-shrink-0 mr-4">
            {/* Logo */}
            <Link to="/" className="block" aria-label="Busybee">
              <img className="h-8 w-auto" src={Logo} alt="Logo" />
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="text-gray-500 hover:text-gray-900 focus:outline-none focus:text-gray-900 md:hidden"
            aria-label="Toggle menu"
            onClick={toggleMenu}
          >
            <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M3 5h18v2H3V5zm0 6h18v2H3v-2zm0 6h18v2H3v-2z"
              />
            </svg>
          </button>

          {/* Desktop navigation links */}
          <nav className="hidden md:flex flex-grow items-center justify-end space-x-4">
            <ul className="flex flex-grow justify-end items-center">
              <li>
                <ScrollLink
                  to="features"
                  spy={true}
                  smooth={true}
                  duration={500}
                  className="text-black hover:text-yellow-400 cursor-pointer ml-3"
                >
                  Features
                </ScrollLink>
              </li>
              <li>
                <ScrollLink
                  to="process"
                  spy={true}
                  smooth={true}
                  duration={500}
                  className="text-black hover:text-yellow-400 cursor-pointer ml-3"
                >
                  Process
                </ScrollLink>
              </li>
              <li>
                <ScrollLink
                  to="about"
                  spy={true}
                  smooth={true}
                  duration={500}
                  className="text-black hover:text-yellow-400 cursor-pointer ml-3 mr-3"
                >
                  About Me
                </ScrollLink>
              </li>
              <li>
                <Link
                  to="/view-project"
                  className="btn-sm text-gray-200 bg-gray-900 hover:bg-gray-800"
                >
                  <span>View Project</span>
                  <svg
                    className="w-3 h-3 fill-current text-gray-400 flex-shrink-0 ml-2 -mr-1"
                    viewBox="0 0 12 12"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z"
                      fillRule="nonzero"
                    />
                  </svg>
                </Link>
              </li>
            </ul>
          </nav>

          {/* Mobile menu */}
          <div
            className={`md:hidden absolute top-16 left-0 right-0 bg-white shadow-lg transition duration-300 ease-in-out ${
              isMenuOpen ? "flex" : "hidden"
            }`}
          >
            <ul className="flex flex-col items-center pt-4 w-full">
              {" "}
              {/* Added w-full to ensure full width */}
              <li className="text-center w-full">
                {" "}
                {/* Center align each list item */}
                <ScrollLink
                  to="features"
                  spy={true}
                  smooth={true}
                  duration={500}
                  className="text-black hover:text-yellow-400 cursor-pointer block py-2"
                >
                  Features
                </ScrollLink>
              </li>
              <li className="text-center w-full">
                {" "}
                {/* Center align each list item */}
                <ScrollLink
                  to="process"
                  spy={true}
                  smooth={true}
                  duration={500}
                  className="text-black hover:text-yellow-400 cursor-pointer block py-2"
                >
                  Process
                </ScrollLink>
              </li>
              <li className="text-center w-full">
                {" "}
                {/* Center align each list item */}
                <ScrollLink
                  to="about"
                  spy={true}
                  smooth={true}
                  duration={500}
                  className="text-black hover:text-yellow-400 cursor-pointer block py-2"
                >
                  About Me
                </ScrollLink>
              </li>
              <li className="text-center w-full">
                {" "}
                {/* Center align each list item */}
                <Link
                  to="/view-project"
                  className="btn-sm text-gray-200 bg-gray-900 hover:bg-gray-800 block w-60 ml-auto mr-auto mt-4 mb-4 py-2 px-4"
                >
                  <span>View Project</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;




