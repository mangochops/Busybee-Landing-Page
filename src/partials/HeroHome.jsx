import React, { useState, useRef, useEffect } from 'react';
import Modal from '../utils/Modal';


import HeroImage from '../images/Screenshot from 2024-07-10 14-51-37 1.png';

function HeroHome() {
  const [videoModalOpen, setVideoModalOpen] = useState(false);
  const video = useRef(null);

  useEffect(() => {
    videoModalOpen ? video.current.play() : video.current.pause();
  }, [videoModalOpen]);    

  return (
    <section className="relative">
      {/* Illustration behind hero content */}
      <div
        className="absolute left-1/2 transform -translate-x-1/2 bottom-0 pointer-events-none"
        aria-hidden="true"
      >
        <svg
          width="1360"
          height="578"
          viewBox="0 0 1360 578"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient
              x1="50%"
              y1="0%"
              x2="50%"
              y2="100%"
              id="illustration-01"
            >
              <stop stopColor="#FFF" offset="0%" />
              <stop stopColor="#EAEAEA" offset="77.402%" />
              <stop stopColor="#DFDFDF" offset="100%" />
            </linearGradient>
          </defs>
          <g fill="url(#illustration-01)" fillRule="evenodd">
            <circle cx="1232" cy="128" r="128" />
            <circle cx="155" cy="443" r="64" />
          </g>
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Hero content */}
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
          {/* Section header */}
          <div className="text-center pb-12 md:pb-16">
            <h1
              className="text-5xl md:text-6xl font-extrabold leading-tighter tracking-tighter mb-4"
              data-aos="zoom-y-out"
            >
              Manage everything in
              <br className="md:hidden" />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-orange-500 block md:inline">
                one hive.
              </span>
            </h1>

            <div className="max-w-3xl mx-auto">
              <p
                className="text-xl text-gray-600 mb-8"
                data-aos="zoom-y-out"
                data-aos-delay="150"
              >
                Say goodbye to constantly logging in and out of different apps.
                BusyBeeee lets you connect all your major social media accounts
                (Facebook, Instagram, Twitter, etc.) in one central location.
                Schedule posts, track analytics, and engage with your audience -
                all from a single, user-friendly dashboard.
              </p>
              <div
                className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center"
                data-aos="zoom-y-out"
                data-aos-delay="300"
              >
                <div>
                  <a
                    className="btn text-gray-900 bg-yellow-400 hover:bg-yellow-500 bg-opacity-90 hover:bg-opacity-100 w-full mb-4 sm:w-auto sm:mb-0"
                    href="#0"
                  >
                    Get started
                  </a>
                </div>
                <div>
                  <a
                    className="btn text-white bg-gray-900 border border-yellow-400 hover:border-yellow-500 hover:bg-gray-800 w-full sm:w-auto sm:ml-4"
                    href="#0"
                  >
                    Learn more
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Hero image */}
          <div>
            <div
              className="relative flex justify-center mb-8"
              data-aos="zoom-y-out"
              data-aos-delay="450"
              data-aos-duration="1000"
            >
              <div className="flex flex-col justify-center">
                <img
                  className="mx-auto shadow-yellow"
                  src={HeroImage}
                  width="768"
                  height="432"
                  alt="Hero"
                />
              </div>
            </div>

            {/* Modal */}
            <Modal
              id="modal"
              ariaLabel="modal-headline"
              show={videoModalOpen}
              handleClose={() => setVideoModalOpen(false)}
            >
              <div className="relative pb-9/16">
                <video
                  ref={video}
                  className="absolute w-full h-full"
                  width="1920"
                  height="1080"
                  loop
                  autoPlay
                  controls
                >
                  <source src="/videos/video.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </Modal>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroHome;