import React from 'react';
import Banner1 from "../../assets/banner_img_1.png";
// import Banner2 from "../../assets/banner_img_2.png";
import Banner3 from "../../assets/banner_img_3.png";

import AvaTer3 from "../../assets/avater-3.jpg";
import AvaTer2 from "../../assets/avater-2.jpg";


const Banner = () => {
  return (
    <div className="bg-[#052416] ">
      <div className="container mx-auto pt-18 pb-12 px-2 ">
        <div className="flex justify-between items-center">
          <div className="flex gap-8 items-center">
            <p className="text-xl font-semibold">Play | Earn | Enjoy</p>
            <div className="border border-[#1baf6c] pl-20 pr-1 rounded-full flex justify-end overflow-hidden">
              <div
                className="h-12 px-4 flex items-center rounded-full bg-linear-to-r from-[#0b7545] to-cyan-700 text-2xl 
  animate-[pulse_2s_ease-in-out_infinite]"
              >
                <i className="fa-solid fa-arrow-right pt-px"></i>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3 opacity-85">
            <i class="fa-solid fa-arrow-right pt-px text-5xl"></i>
            <p className="text-6xl font-bold border-r-4 pr-2 ">4.5</p>
            <div className="text-2xl text-green-500">
              <i class="fa-regular fa-star"></i>
              <i class="fa-regular fa-star"></i>
              <i class="fa-regular fa-star"></i>
              <i class="fa-regular fa-star"></i>
              <i class="fa-solid fa-star-half-stroke"></i>
              <p className="font-semibold text-[#25E791]">19K Reviews</p>
            </div>
          </div>
          <div className="border border-[#15a664] p-20  rounded-full  relative flex justify-center items-center opacity-75">
            <span className="p-4 py-5 bg-linear-to-r from-[#0e7d4b] to-cyan-600 rounded-full absolute z-10">
              <i className="fa-solid fa-arrow-right pt-px -rotate-28 text-2xl"></i>
            </span>

            <svg className="w-full h-full absolute" viewBox="0 0 300 300">
              <defs>
                <path
                  id="circlePath"
                  d="M150,150 m-100,0 a100,100 0 1,1 200,0 a100,100 0 1,1 -200,0"
                />
              </defs>
              <text fontSize="35" fill="#ffff">
                <textPath
                  href="#circlePath"
                  startOffset="60%"
                  textAnchor="middle"
                >
                  EXPERIENCE EXPLORE EXCITING
                </textPath>
              </text>
            </svg>
          </div>
        </div>

        <div className="flex">
          <div className="absolute inset-0 h-100 left-60 top-28 w-90  bg-green-700 opacity-30 blur-3xl"></div>

          <div>
            <h2 className="text-6xl font-bold py-3">
              Build Your <span className="text-[#1dd576]">Ultimate Game</span>{' '}
              Library
            </h2>{' '}
            <br />{' '}
            <div className="text-6xl font-bold py-3 opacity-75">
              With
              <span className="text-[#25E791]">
                {' '}
                Game <span className="text-cyan-500">Vault</span>
              </span>
            </div>
            <p className="text-gray-400 mt-8 font-semibold">
              Discover, save and organize your favorite games Create your own
              gaming collection <br /> in seconds Add games, track favorites,
              and manage your library A modern React app <br /> for game
              lovers,All Your Games in One Place
            </p>
          </div>
          <div className="flex mr-20 absolute right-50 ">
            <div className=" h-110 w-100 mt-26 bg-[#12291e] overflow-hidden rounded-l-2xl">
              <img className="pt-4" src={Banner1} alt="" />
            </div>
            <div className="absolute inset-0 h-120 w-100 top-10 left-40 bg-green-600 opacity-30 blur-3xl"></div>

            <div className=" h-110 w-100 mt-7 bg-[#0c5c39] relative bottom-0  rounded-r-2xl rounded-t-2xl">
              <img
                className=" absolute -top-60 left-0 h-170 w-auto object-cover "
                src={Banner3}
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="mt-10 flex gap-2">
          <button className="btn bg-linear-to-r from-[#0c7546] to-cyan-600 px-6 text-black rounded-full font-semibold border-none  animate-bounce">
            Explore More
          </button>
          <button className="btn btn-outline rounded-xl border-none underline font-semibold text-xl">
            How It's Work?
          </button>
        </div>
        <div className="flex mt-10 pl-35 relative mb-8">
          <div className="  rounded-full overflow-hidden">
            <img
              className="object-cover h-12 rounded-full w-12 "
              src={AvaTer3}
              alt=""
            />
          </div>
          <div className="  rounded-full overflow-hidden absolute left-43">
            <i class="fa-solid fa-circle-user text-5xl"></i>
          </div>
          <div className=" border rounded-full overflow-hidden absolute left-51">
            <img
              className="object-cover h-11 rounded-full w-12 "
              src={AvaTer2}
              alt=""
            />
          </div>
          <div className=" border rounded-full overflow-hidden absolute left-61">
            <img
              className="object-cover h-11 rounded-full w-12 "
              src={AvaTer3}
              alt=""
            />
          </div>
          <div className="absolute inset-0 h-100 bottom-40 top-0  w-90  bg-green-700 opacity-30 blur-3xl"></div>
          <div className="ml-30 border-l-3 border-l-[#25e79095] pl-4">
            <p className="text-xl font-semibold text-gray-300">12K Active</p>
            <p className="font-bold  text-gray-300">Client</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
