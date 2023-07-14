import React from "react";

const Game = ({ wallpaper, title }) => {
  return (
    <div>
      <div className="max-w-[70vw] mx-auto">
        <img src={wallpaper} alt="" />
        <div className="bg-teal-600 h-[8rem]">
          <p className="text-[15px] text-white pl-2 pt-2">WEEKEND DEAL</p>
          <p className="text-[11px] text-white pl-2 pt-2">
            Offer ends 26 July @ 12:00pm.
          </p>
          <div className="max-w-[5.4rem]">
            <p className="ml-4 text-[28px] text-white bg-[#5c7e10] pl-1 mt-2">-25%</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Game;