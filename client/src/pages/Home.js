import React from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import GameShelf from "../components/GameShelf";

function Home() {
  return (
    <div className=" bg-[#1b2838]">
      {/* Header */}
      <Header />
      {/* Navbar w search bar */}
      <div className=" lg:max-w-[90vw] xl:max-w-[80vw] mx-auto">
        <Navbar />
        {/* (optional) Top picks */}
        {/* game-shelf */}
        < GameShelf />
        {/* specific game
            review list
            review form
            rating form
            rating list*/}
        {/* cart */}
      </div>
    </div>
  );
}

export default Home;