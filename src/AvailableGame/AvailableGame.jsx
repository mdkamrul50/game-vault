import React, { useState } from 'react';
import CardBg from "../assets/banner.jpg";

const AvailableGame = ({ Games }) => {
  const [selectedGames, setSelectedGames] = useState([]);

  const handleSelect = (id) => {
    setSelectedGames((prev) => [...prev, id]);
  };

  return (
    <div className="bg-[#052416] pb-15">
      <div className="grid grid-cols-4 container mx-auto gap-5">
        {Games.map((game) => {
          const isSelected = selectedGames.includes(game.id);

          return (
            <div
              key={game.id}
              className="card group relative overflow-hidden shadow-lg hover:bg-[#073620]  rounded-3xl :"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500 z-0">
                <img
                  src={CardBg}
                  alt=""
                  className="w-full h-full object-cover  blur-2xl"
                />
              </div>
              <figure className="overflow-hidden">
                <img
                  className="h-80 object-cover group-hover:scale-105 transition-all duration-500"
                  src={game.background_image}
                  alt="game background"
                />
              </figure>

              <div className="card-body py-5 z-10">
                <h2 className="card-title text-2xl text-gray-300">
                  {game.name}
                </h2>

                <p className="font-semibold text-gray-400 italic">{game.released}</p>

               

                <div className="flex justify-between items-center text-xl p-2 text-yellow-600 rounded-xl bg-[#073c24]">
                  <p className='text-green-600'>Rating:</p> <i className="fa-regular fa-star"></i>{' '}
                  {game.rating.toFixed(1)}
                </div>

                <div className="card-actions flex items-center justify-between">
                  <div className="text-xl flex gap-4 ">
                    <i className="fa-brands fa-windows shadow-lg shadow-[#11a864]"></i>
                    <i className="fa-brands fa-playstation shadow-lg shadow-[#11a864]"></i>
                    <i className="fa-brands fa-xbox shadow-lg shadow-[#11a864]"></i>
                  </div>

                  <button
                    onClick={() => handleSelect(game.id)}
                    className="btn bg-linear-to-r from-[#108450] to-cyan-700 border-none rounded-2xl"
                  >
                    {isSelected ? 'Added' : 'Add To Library'}
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AvailableGame;
