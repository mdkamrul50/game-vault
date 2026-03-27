import React, { useState } from 'react';

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
              className="card bg-[#073720] shadow-lg hover:bg-[#0a5430] hover:scale-101 transition-all duration-300"
            >
              <figure>
                <img
                  className="h-80 object-cover"
                  src={game.background_image}
                  alt=""
                />
              </figure>

              <div className="card-body py-8">
                <h2 className="card-title text-2xl text-gray-300">
                  {game.name}
                </h2>

                <p>{game.released}</p>

                <span className="font-semibold text-blue-700 text-xl">
                  prices: $20
                </span>

                <div className="flex justify-between items-center text-xl p-2 text-lime-300 rounded-xl bg-[#0a613a]">
                  <p>Rating:</p>⭐ 4.5
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
