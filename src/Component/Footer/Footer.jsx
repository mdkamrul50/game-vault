import React from 'react';
import Nav_Logo from '../../assets/logo.jpg';
import Gan from '../../assets/gan.png';

const Footer = () => {
  return (
    <div className="bg-[#052416] relative">
      <footer className="bg-[#041a10] text-gray-400 pt-16 relative">
        <div className="container mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="flex gap-2 items-center">
              <img className="h-12 w-12 rounded-xl" src={Nav_Logo} alt="" />
              <h1 className="text-3xl font-bold italic text-[#25E791]">
                Game <span className="text-cyan-500">Vault</span>
              </h1>
            </div>
            <p className="text-sm leading-6">
              Discover top-rated games, explore genres, and track your
              favorites. Game Vault brings all gaming info in one place with a
              clean and modern experience.
            </p>
          </div>

          <div>
            <h6 className="text-white font-semibold mb-4">Quick Links</h6>
            <ul className="space-y-2">
              <li>
                <a className="hover:text-[#25E791] transition hover:cursor-pointer">
                  Home
                </a>
              </li>
              <li>
                <a className="hover:text-[#25E791] transition hover:cursor-pointer">
                  Games
                </a>
              </li>
              <li>
                <a className="hover:text-[#25E791] transition hover:cursor-pointer">
                  Categories
                </a>
              </li>
              <li>
                <a className="hover:text-[#25E791] transition hover:cursor-pointer">
                  About Us
                </a>
              </li>
            </ul>
          </div>
          <div className="absolute inset-0 h-50 left-0 top-0 w-70  bg-green-900 opacity-30 blur-3xl"></div>
          <div>
            <h6 className="text-white font-semibold mb-4">Categories</h6>
            <ul className="space-y-2">
              <li>
                <a className="hover:text-[#25E791] transition hover:cursor-pointer">
                  Action
                </a>
              </li>
              <li>
                <a className="hover:text-[#25E791] transition hover:cursor-pointer">
                  Adventure
                </a>
              </li>
              <li>
                <a className="hover:text-[#25E791] transition hover:cursor-pointer ">
                  RPG
                </a>
              </li>
              <li>
                <a className="hover:text-[#25E791] transition hover:cursor-pointer">
                  Shooter
                </a>
              </li>
            </ul>
          </div>

          <div className="z-60">
            <h6 className="text-white font-semibold mb-4">Follow Us</h6>
            <div className="flex gap-4">
              <a className="p-2 rounded-full bg-[#0f0f0f] hover:bg-[#25E791] hover:text-black transition">
                <svg
                  className="hover:cursor-pointer"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                </svg>
              </a>

              <a className="p-2 rounded-full bg-[#0f0f0f] hover:bg-[#25E791] hover:text-black transition">
                <svg
                  className="hover:cursor-pointer"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
              </a>

              <a className="p-2 rounded-full bg-[#0f0f0f] hover:bg-[#25E791] hover:text-black transition">
                <svg
                  className="hover:cursor-pointer"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 text-center py-4 text-sm">
          © 2026 Game Vault. All rights reserved.
        </div>
        <img className="absolute top-20 left-180 opacity-60" src={Gan} alt="" />
      </footer>
    </div>
  );
};

export default Footer;
