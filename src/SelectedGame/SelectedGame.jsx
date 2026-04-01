import React from 'react';

const SelectedGame = ({ library }) => {
  console.log(library);

  return (
    <div className="bg-[#052416] py-20  pb-40 ">
      <div className="container mx-auto bg-[#0b3f28] p-6 rounded-3xl shadow-sm">
        <h2 className="pl-2 text-2xl font-semibold pb-4 "> SelectedPlayer</h2>

        <div className="container mx-auto grid grid-cols-4 items-center gap-4">
          {library.map((item) => (
            <div className="">
              <div className="shadow-sm rounded-3xl py-4 pl-4  bg-linear-to-r from-[#085130] to-cyan-800 hover:scale-102 hover:shadow-lg hover:shadow-cyan-900 animation duration-300">
                <div className="flex">
                  <div className="rounded-2xl overflow-hidden  h-30 w-32 ">
                    <img
                      className=" h-full object-cover"
                      src={item.background_image}
                      alt=""
                    />
                  </div>
                  <div className="space-y-2 pl-5">
                    <h3 className="text-2xl font-semibold text-[#13bc7e] ">
                      {item.name}
                    </h3>
                    <p className="text-gray-300 font-bold">Action</p>
                  </div>
                </div>
                <p className="text-2xl font-bold mt-3">
                  $5{' '}
                  <i className="fa-solid fa-bag-shopping pl-3 text-amber-600"></i>
                </p>
                <div className="flex gap-4 mt-5">
                  <div className="flex gap-3 items-center">
                    <button className="btn px-5 pb-1 border-none rounded-2xl text-2xl font-extrabold bg-[#0b4c30] text-red-300">
                      -
                    </button>
                    <p className="text-xl font-semibold">1</p>
                    <button className="btn px-5 pb-1 border-none rounded-2xl text-2xl font-extrabold bg-[#0c653d] text-center text-gray-300 animate-[pulse_2s_ease-in-out_infinite]">
                      +
                    </button>
                  </div>
                  <p className="btn btn-outline rounded-full border-none text-xl text-gray-300 hover:text-red-400 hover:bg-[#0a4f30] ml-4">
                    <i class="fa-solid fa-trash-can"></i>Remove
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center pt-10">
          <div className=" shadow-lg bg-[#094a2d] border border-green-900 w-100   rounded-2xl p-4">
            <div className="flex justify-between mb-2 text-xl border-b-2 border-b-[#0e5a38] pb-2">
              <p className="">
                Subtotal{' '}
                <i className="fa-solid fa-bag-shopping  text-amber-600"></i>
              </p>
              <p>$40</p>
            </div>
            <div className="flex justify-between text-xl font-bold">
              <p>Total</p>
              <p>$40</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectedGame;
