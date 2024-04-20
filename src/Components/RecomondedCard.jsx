/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const RecommendedCard = ({ apidata }) => {
  return (
    <div className="ml-40 absolute gap-10 flex flex-row">
      {apidata?.events?.map((event, index) => (
        <div
          key={index}
          className="bg-white rounded-lg shadow-md overflow-hidden"
          style={{
            backgroundImage: `${event.imgUrl}`,
            backgroundSize: "cover", // Ensure the background image covers the entire container
            backgroundPosition: "center", // Center the background image
            
          }}
        >
          <div className="p-4">
            <h2 className="text-xl font-bold mb-2">{event.eventName}</h2>
            <p className="text-gray-600">{event.cityName}</p>
            <p className="text-gray-600">
              {new Date(event.date).toLocaleDateString()}
            </p>
            <p className="text-gray-600">{event.weather}</p>
            <p className="text-gray-600">{event.distanceKm} km away</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RecommendedCard;
