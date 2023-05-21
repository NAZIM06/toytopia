import React from 'react';

const Subscribe = () => {
    return (
        <div className="hero py-10 bg-base-200 mb-5">
        <div className="hero-content flex flex-col-reverse md:flex-row w-4/5 justify-between mx-auto">
          <div className="w-full md:w-1/2 flex items-center justify-center md:justify-start md:ml-4 mb-8 md:mb-0">
            <div className="text-center">
              <h1 className="text-5xl font-extrabold mb-5 text-blue-900">Subscribe Us</h1>
              <p className="text-lg">Want to get special offers before they run out? Subscribe to our email to get exclusive discounts and offers.</p>
            </div>
          </div>
          <div className="w-full md:w-1/2 flex items-center justify-center md:justify-end">
            <div className="flex items-center">
              <input type="text" placeholder="Give Your Email" className="border border-gray-300 px-4 py-2 rounded-md mr-2 focus:outline-none focus:border-blue-500" />
              <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
      
      
    );
};

export default Subscribe;