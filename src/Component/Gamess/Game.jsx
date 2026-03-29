import React, { use, useState } from 'react';
import AvailableGame from '../../AvailableGame/AvailableGame';
import SelectedGame from '../../SelectedGame/SelectedGame';


const Game = ({ gamePromise }) => {
  const data = use(gamePromise);

  const Games = data.results;
  const [selectedBtn, setSelectedBtn] = useState('Available');

  return (
    <>
      <div className="bg-[#054125] rounded-2xl">
        <div className="flex justify-between container mx-auto my-4  ">
          <h2 className="text-3xl font-semibold">
            {' '}
            {selectedBtn === 'Available' ? 'Available Games' : 'Selected Game'}
          </h2>
          <div className="">
            <button
              onClick={() => setSelectedBtn('Available')}
              className={`btn btn-outline ${selectedBtn === 'Available' ? 'bg-white text-black' : ''} px-6 mr-1 rounded-l-full border-none`}
            >
              Available
            </button>
            <button
              onClick={() => setSelectedBtn('Selected')}
              className={`btn btn-outline px-6 ${selectedBtn === 'Selected' ? 'bg-white text-black' : ''} rounded-r-full border-none`}
            >
              Selected
            </button>
          </div>
        </div>
      </div>
      {selectedBtn === 'Available' ? (
        <AvailableGame Games={Games}></AvailableGame>
      ) : (
        <SelectedGame></SelectedGame>
      )}
    </>
  );
};

export default Game;
