import React from 'react'
import NavLogo from "../../assets/logo.jpg";
import AvaTer3 from '../../assets/avater-3.jpg';



const Navber = () => {
  return (
    <>
      <div className=" bg-linear-to-r from-[#0a5f39] to-cyan-800 sticky top-1 z-90">
        <div className="navbar shadow-sm container mx-auto mt-3 flex justify-between ">
          <div className="flex gap-2 items-center">
            <img className="h-12 w-12 rounded-xl" src={NavLogo} alt="" />
            <h1 className="text-3xl font-bold italic text-[#25E791]">
              Game <span className="text-cyan-500">Vault</span>
            </h1>
          </div>
          <div>
            <ul className="flex gap-5 text-gray-200 font-semibold">
              <li className='relative  after:content-[""] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-0.5 after:bg-[#25E791] after:transition-all after:duration-300 hover:after:w-full hover:cursor-pointer hover:text-emerald-500'>
                Home
              </li>
              |
              <li className='relative  after:content-[""] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-0.5 after:bg-[#25E791] after:transition-all after:duration-300 hover:after:w-full hover:cursor-pointer hover:text-emerald-500'>
                About
              </li>
              |
              <li className='relative  after:content-[""] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-0.5 after:bg-[#25E791] after:transition-all after:duration-300 hover:after:w-full hover:cursor-pointer hover:text-emerald-500'>
                Top Up
              </li>
              |
              <li className='relative  after:content-[""] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-0.5 after:bg-[#25E791] after:transition-all after:duration-300 hover:after:w-full hover:cursor-pointer hover:text-emerald-500'>
                Gift Card
              </li>
              |
              <li className='relative  after:content-[""] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-0.5 after:bg-[#25E791] after:transition-all after:duration-300 hover:after:w-full hover:cursor-pointer hover:text-emerald-500'>
                Contact
              </li>
            </ul>
          </div>

          <div className="flex-none">
            <button className="btn bg-[#1fc178] border-none rounded-full text-black px-4 mr-3 hover:bg-[#0c5b37] hover:text-white">
              {' '}
              <i class="fa-solid fa-arrow-right-from-bracket"></i> Log In
            </button>
            <div className="dropdown dropdown-end"></div>
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <img
                    className="object-cover "
                    alt="Tailwind CSS Navbar component"
                    src={AvaTer3}
                  />
                </div>
              </div>
              <ul
                tabIndex="-1"
                className="menu menu-sm dropdown-content bg-linear-to-r from-[#0c7546] to-cyan-600 rounded-box z-1 mt-3 w-52 p-2 shadow "
              >
                <li>
                  <a className="justify-between">
                    Profile
                    <span className="badge bg-[#052416]">New</span>
                  </a>
                </li>
                <li>
                  <a>Settings</a>
                </li>
                <li>
                  <a>Info</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navber