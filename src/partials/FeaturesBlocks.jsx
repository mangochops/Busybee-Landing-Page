import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import { faClock } from '@fortawesome/free-solid-svg-icons';
import { faShareSquare } from '@fortawesome/free-solid-svg-icons';
import { faChartBar } from '@fortawesome/free-solid-svg-icons';


function FeaturesBlocks() {
  return (
    <section className="relative">
      {/* Section background (needs .relative class on parent and next sibling elements) */}
      <div
        className="absolute inset-0 top-1/2 md:mt-24 lg:mt-0 bg-gray-900 pointer-events-none"
        aria-hidden="true"
      ></div>
      <div className="absolute left-0 right-0 bottom-0 m-auto w-px p-px h-20 bg-gray-200 transform translate-y-1/2"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4">How Busybeee works</h2>
          </div>

          {/* Items */}
          <div className="max-w-sm mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-start md:max-w-2xl lg:max-w-none">
            {/* 1st item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
              <div className="flex items-center justify-center w-16 h-16 bg-blue-600 text-white rounded-full mb-2">
                <FontAwesomeIcon icon={faUserPlus} className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-medium leading-snug tracking-tight mb-1  text-gray-900">
                Create an account
              </h4>
              <p className="text-gray-600 text-center">
                Fill in your details (email address, password, etc.) and create
                your account
              </p>
            </div>

            {/* 2nd item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
              <div className="flex items-center justify-center w-16 h-16 bg-blue-600 text-white rounded-full mb-2">
                <FontAwesomeIcon icon={faShoppingCart} className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-medium leading-snug tracking-tight mb-1  text-gray-900">
                Package subscription
              </h4>
              <p className="text-gray-600 text-center">
                Select the package that best fits your needs.
              </p>
            </div>

            {/* 3rd item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
              <div className="flex items-center justify-center w-16 h-16 bg-blue-600 text-white rounded-full mb-2">
                <FontAwesomeIcon icon={faLink} className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-medium leading-snug tracking-tight mb-1 text-gray-900">
                Connect Your Accounts
              </h4>
              <p className="text-gray-600 text-center">
                Connect your social media accounts to BusyBeeee dashboard.
              </p>
            </div>

            {/* 4th item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
              <div className="flex items-center justify-center w-16 h-16 bg-blue-600 text-white rounded-full mb-2">
                <FontAwesomeIcon icon={faClock} className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-medium leading-snug tracking-tight mb-1 text-gray-900">
                Schedule your first post
              </h4>
              <p className="text-gray-600 text-center">
                Create and schedule your first social media post
              </p>
            </div>

            {/* 5th item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
              <div className="flex items-center justify-center w-16 h-16 bg-blue-600 text-white rounded-full mb-2">
                <FontAwesomeIcon icon={faShareSquare} className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-medium leading-snug tracking-tight mb-1 text-gray-900">
                Post
              </h4>
              <p className="text-gray-600 text-center">
                Publish your social media post to all your accounts
              </p>
            </div>

            {/* 6th item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
              <div className="flex items-center justify-center w-16 h-16 bg-blue-600 text-white rounded-full mb-2">
                <FontAwesomeIcon icon={faChartBar} className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-medium leading-snug tracking-tight mb-1 text-gray-950">
                Analyse
              </h4>
              <p className="text-gray-600 text-center">
                Gain valuable insights into your audience demographics
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturesBlocks;
