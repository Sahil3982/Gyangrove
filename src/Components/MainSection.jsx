/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Banner from "../assets/Banner.svg";
import RecomondedCard from "./RecomondedCard";
const MainSection = () => {
  return (
    <>
      <div
        className="relative bg-cover h-screen"
        style={{ backgroundImage: `url(${Banner})` }}
      >
        <span className="absolute top-1/2 left-2/4 transform -translate-x-1/2 -translate-y-1/2 text-5xl font-bold text-white">
          Discover Exciting Events Happening Near You - Stay Tuned For Updates
        </span>
        <p className="absolute bottom-10 left-2/4 transform -translate-x-1/2 -translate-y-1/2  text-white">
          It seems like you've entered "random text." Was there anything
          specific you wanted to discuss or ask about related to this text? Feel
          free to provide more context or ask any questions you have!
        </p>
        <p className="absolute bottom-1 left-1/4 transform -translate-x-1/2 -translate-y-1/2  text-white">
          <RecomondedCard />
        </p>
      </div>
    </>
  );
};

export default MainSection;
