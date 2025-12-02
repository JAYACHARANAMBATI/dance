"use client";

import React from "react";

const BenefitsStats = () => {
  return (
    <section className="bg-background py-[120px]">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-[55px] flex flex-col lg:flex-row items-center lg:items-start text-center lg:text-left gap-16 lg:gap-[60px]">
        {/* Left Side: Title and Buttons */}
        <div className="flex-1 flex flex-col gap-10 items-center lg:items-start">
          <h2 className="font-display font-bold text-white text-4xl sm:text-5xl lg:text-[64px] lg:leading-[1.1] max-w-[570px]">
            Creating Content Excellence: Anand's Benefits
          </h2>
          <div className="flex flex-col sm:flex-row items-center gap-5">
            <a
              href="/about-us"
              className="inline-flex items-center justify-center bg-white text-black rounded-full py-4 px-6 font-body font-medium text-sm whitespace-nowrap transition-colors duration-300 hover:bg-gray-200"
            >
              VIEW SERVICES
            </a>
            <a
              href="/events"
              className="inline-flex items-center justify-center bg-transparent text-white border border-white rounded-full py-4 px-6 font-body font-medium text-sm whitespace-nowrap transition-colors duration-300 hover:bg-white hover:text-black"
            >
              OUR STUDIOS
            </a>
          </div>
        </div>

        {/* Right Side: Description */}
        <div className="flex-1 flex flex-col gap-10 items-center lg:items-start">
          <p className="max-w-[570px] text-text-secondary font-body text-base leading-[1.6]">
            At Anand Media, we take pride in offering a world of creative excellence and exclusive advantages to our clients. Our studio is a place where innovation, creativity, and quality come together. From our highly skilled creative team to state-of-the-art production facilities, we provide an environment that delivers exceptional results.
          </p>
        </div>
      </div>
    </section>
  );
};

export default BenefitsStats;