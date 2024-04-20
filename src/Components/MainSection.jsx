import React, { useEffect, useState } from "react";
import Banner from "../assets/Banner.svg";
import RecomondedCard from "./RecomondedCard";
import UpcomingCard from "./UpcomingCard";

const MainSection = () => {
  const [apidata, setApidata] = useState(null);
  const [updata, setUpdata] = useState(null);

  useEffect(() => {
    fetch(
      "https://gg-backend-assignment.azurewebsites.net/api/Events?code=FOX643kbHEAkyPbdd8nwNLkekHcL4z0hzWBGCd64Ur7mAzFuRCHeyQ==&type=reco"
    )
      .then((response) => response.json())
      .then((data) => setApidata(data))
      .catch((error) =>
        console.error("Error fetching recommended events:", error)
      );
  }, []);

  useEffect(() => {
    fetch(
      "https://gg-backend-assignment.azurewebsites.net/api/Events?code=FOX643kbHEAkyPbdd8nwNLkekHcL4z0hzWBGCd64Ur7mAzFuRCHeyQ==&page=1&type=upcoming"
    )
      .then((response) => response.json())
      .then((data) => setUpdata(data))
      .catch((error) =>
        console.error("Error fetching upcoming events:", error)
      );
  }, []);

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
          It seems like youve entered random text Was there anything
          specific you wanted to discuss or ask about related to this text? Feel
          free to provide more context or ask any questions you have!
        </p>

        <p className="absolute bottom-20 left-1/2 transform flex gap-96 -translate-x-1/2 -translate-y-1/2   ">
          <div className="text-white pl-32">Recomonded Show -- </div>
          <div className="text-white pl-8 ml-96">More</div>
        </p>
        {apidata && (
          <p className="absolute bottom-16  transform -translate-x-1/2 -translate-y-1/2  ">
            <RecomondedCard apidata={apidata} />
          </p>
        )}
      </div>
      <div className="mt-48 m-16 p-8">
        {updata && <UpcomingCard updata={updata} />}
      </div>
    </>
  );
};

export default MainSection;
