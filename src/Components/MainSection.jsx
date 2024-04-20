/* eslint-disable react/no-unescaped-entities */
import React, { useEffect, useState } from "react";
import Banner from "../assets/Banner.svg";
import RecomondedCard from "./RecomondedCard";
const MainSection = () => {
  const [apidata, setApidata] = useState("");

  useEffect(() => {
    fetch(
      "https://gg-backend-assignment.azurewebsites.net/api/Events?code=FOX643kbHEAkyPbdd8nwNLkekHcL4z0hzWBGCd64Ur7mAzFuRCHeyQ==&type=reco"
    )
      .then((response) => response.json())
      .then((data) => setApidata(data));
  }, []);

  //  console.log(apidata.events);

  return (
    <>
      <div
        className="relative bg-cover h-screen"
        style={{ backgroundImage: `url(${Banner})` }}
      >
        <span className="absolute top-32 left-2/4 transform -translate-x-1/2 -translate-y-1/2 text-5xl font-bold text-white">
          Discover Exciting Events Happening Near You - Stay Tuned For Updates
        </span>
        <p className="absolute bottom-48 left-2/4 transform -translate-x-1/2 -translate-y-1/2  text-white">
          It seems like you've entered "random text." Was there anything
          specific you wanted to discuss or ask about related to this text? Feel
          free to provide more context or ask any questions you have!
        </p>

        <p className="absolute bottom-20 left-1/2 transform flex gap-96 -translate-x-1/2 -translate-y-1/2  ">
          <div className="text-white">Recomonded Show  --  </div>
          <div className="text-white">More</div>
        </p>
        <p className="absolute bottom-16 left-2 transform -translate-x-1/2 -translate-y-1/2  ">
          <RecomondedCard apidata={apidata} />
        </p>
      </div>
    </>
  );
};

export default MainSection;
