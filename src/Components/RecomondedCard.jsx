import React from "react";

const RecomondedCard = ({event}) => {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {events.map((event, index) => (
        <div
          key={index}
          className="bg-white rounded-lg shadow-md overflow-hidden"
        >
          <img
            src={event.imgUrl}
            alt={event.eventName}
            className="h-48 w-full object-cover"
          />
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

export default RecomondedCard;
