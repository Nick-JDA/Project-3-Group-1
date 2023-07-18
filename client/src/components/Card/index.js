import React from "react";
import { Link } from "react-router-dom"

const Card = ({ wallpaper, title, genre, price }) => {
  return (
    <div>
      <Link to={`/${title.replaceAll(" ", "")}`}>
      {console.log(title.replaceAll(" ", ""))}
        <div className="max-w-[70vw] mx-auto hover:blur">
          <img className="object-cover w-full " src={wallpaper} alt="" />
          <div className="bg-teal-600 h-[8rem]">
            <p className="text-[15px] text-white pl-2 pt-2">🎮{title}</p>
            <p className="text-[15px] text-white pl-2 pt-2">🔥{genre}</p>
            <p className="text-[11px] text-white pl-2 pt-2">💲{price}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Card;