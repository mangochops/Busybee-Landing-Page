// Header.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
import Logo from '../images/Group 1.png';

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

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

  return (
    <header className={`fixed w-full z-30 ${isScrolled ? 'bg-opacity-60 bg-white backdrop-blur-sm shadow-lg' : 'md:bg-opacity-60' } transition duration-300 ease-in-out`}>
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Site branding */}
          <div className="flex-shrink-0 mr-4">
            {/* Logo */}
            <Link to="/https://github.com/mangochops/Busybeee.git" className="block" aria-label="Cruip">
              <img className="h-8 w-auto" src={Logo} alt="Logo" />
            </Link>
          </div>

          {/* Site navigation */}
          <nav className="flex flex-grow">
            <ul className="flex flex-grow justify-end flex-wrap items-center">
              <li>
                <ScrollLink to="features" spy={true} smooth={true} duration={500} className="text-black hover:text-yellow-400 ml-3 cursor-pointer">
                  Features
                </ScrollLink>
              </li>
              <li>
                <ScrollLink to="process" spy={true} smooth={true} duration={500} className="text-black hover:text-yellow-400 ml-3 cursor-pointer">
                  Process
                </ScrollLink>
              </li>
              <li>
                <ScrollLink to="about" spy={true} smooth={true} duration={500} className="text-black hover:text-yellow-400 ml-3 cursor-pointer">
                  About Me
                </ScrollLink>
              </li>
              <li>
                <Link to="/view-project" className="btn-sm text-gray-200 bg-gray-900 hover:bg-gray-800 ml-3">
                  <span>View Project</span>
                  <svg className="w-3 h-3 fill-current text-gray-400 flex-shrink-0 ml-2 -mr-1" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z" fillRule="nonzero" />
                  </svg>                  
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;


