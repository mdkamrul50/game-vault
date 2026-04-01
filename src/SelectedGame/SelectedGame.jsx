import React from 'react';

const SelectedGame = ({ library }) => {
  console.log(library);

  return (
    <div className="bg-[#052416] py-20">
      <div className="container mx-auto">
        <h2> SelectedPlayer</h2>
        {library.map((item) => (
          <div>
            <img src={item.background_image} alt="" />
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default SelectedGame;
