import React from "react";

const Card = ({ wallpaper, title, genre, price }) => {
  return (
    <div>
      <div className="max-w-[70vw] mx-auto">
        <img src={wallpaper} alt="" />
        <div className="bg-teal-600 h-[8rem]">
          <p className="text-[15px] text-white pl-2 pt-2">{title}</p>
          <p className="text-[15px] text-white pl-2 pt-2">{genre}</p>
          <p className="text-[11px] text-white pl-2 pt-2">{price}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;