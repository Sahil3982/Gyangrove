/* eslint-disable react/prop-types */
import React from "react";

const UpcomingCard = ({ updata }) => {
    console.log(updata?.events[0]?.imgUrl)

  return (
    <>
      <div className="p-1 font-bold">UpcomingCard</div>
      <div className="ml-40 absolute gap-10 flex flex-row flex-wrap">
        {updata?.events?.map((event, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <div className="p-4">
              <img src={event.imgUrl}  className="bg-red rounded-lg shadow-md "/>
              <div>
                <h2 className="text- font-bold mb-2">{event.eventName}</h2>
                <p className="text-gray-600">{event.cityName}</p>
                <p className="text-gray-600">
                  {new Date(event.date).toLocaleDateString()}
                </p>
                <p className="text-gray-600">{event.weather}</p>
                <p className="text-gray-600">{event.distanceKm} km away</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default UpcomingCard;
