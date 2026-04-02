import React from 'react';
import SupportImg from '../../assets/support.png';
import Shadow from '../../assets/shadow.png';
import Line from '../../assets/line.png';
import Bluet from '../../assets/bulet.png';

const SupportSection = () => {
  return (
    <div className="bg-[#052416] ">
      <div className=" border border-[#052416] container mx-auto pb-8">
        <div className="mt-20 relative border border-[#06311e] rounded-2xl h-100 bg-[#095633]">
          <div className="absolute inset-0 h-50 left-50 top-35 w-70 bg-green-500 opacity-30 blur-3xl"></div>

          {/* ✅ IMAGE WITH DROP SHADOW (PNG SHAPE BASED) */}
          <div className="absolute left-4 -top-25.5 z-20">
            <img
              className="h-125 transition-all duration-500 
                         hover:drop-shadow-[0_20px_20px_rgba(34,197,94,0.6)]"
              src={SupportImg}
              alt=""
            />
          </div>

          <div className="pl-160 pt-20 ">
            <img
              className="absolute h-50 w-130 right-2 top-0 opacity-20"
              src={Shadow}
              alt=""
            />

            <img
              className="absolute h-40 -top-5 left-140 rotate-10 opacity-80"
              src={Bluet}
              alt=""
            />

            <h3 className="text-center text-4xl font-bold text-amber-600 pb-3">
              Why Use Our Games Library?
            </h3>

            <p className="text-center font-semibold text-gray-400 pb-7">
              Discover a powerful and modern game library designed for true
              gamers. Explore thousands of games with detailed ratings, genres,
              and platform support — all in one place. Our platform helps you
              find the perfect game faster with a clean interface, real user
              reviews, and up-to-date information. Whether you're into action,
              adventure, or strategy, we’ve got something for everyone.
            </p>

            <div className="flex items-center gap-5 text-center justify-center">
              <div className="flex items-center">
                <p className="p-3 rounded-xl bg-gray-700 flex items-center gap-2 font-bold text-gray-300">
                  <i className="fa-solid fa-gamepad rounded-2xl px-3 mr-2 bg-green-200 text-green-600 text-2xl"></i>
                  Easy To Play
                </p>
              </div>

              <div className="p-3 rounded-xl bg-gray-700 flex items-center gap-2 font-bold text-gray-300">
                <i className="fa-solid fa-headset text-2xl text-green-500"></i>
                24H Support
              </div>
            </div>

            <div className="text-center mt-4 pl-45 flex ">
              <img className="h-20 -rotate-35" src={Line} alt="" />

              <button className="btn text-center ml-10 rounded-full px-8 border-none bg-[#169c60] shadow-lg shadow-[#048966]">
                More About <i className="fa-solid fa-location-arrow"></i>
              </button>

              <div className="absolute inset-0 h-70 left-270 -top-10 w-90 bg-green-600 opacity-30 blur-3xl"></div>
              <div className="absolute inset-0 h-70 left-210 top-120 w-50 bg-green-950 opacity-30 blur-3xl z-50"></div>
              <div className="absolute inset-0 h-70 left-360 top-120 w-50 bg-green-950 opacity-30 blur-3xl z-50"></div>
              <div className="absolute inset-0 h-100 left-5 top-100 w-80 bg-green-950 opacity-30 blur-3xl z-50"></div>
            </div>
          </div>

          <div className="h-113 w-10 -bottom-4.5 absolute left-120 -rotate-28 z-10 bg-[#052416]"></div>
          <div className="h-113 w-10 -bottom-9 absolute left-123 -rotate-28 z-10 bg-[#052416]"></div>
        </div>
      </div>
    </div>
  );
};

export default SupportSection;
