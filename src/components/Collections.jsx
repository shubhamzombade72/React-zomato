import React from "react";
import DataCollections from "./DataCollection.json";

const Card = ({ image, details, title }) => {
  return (
    <div className="relative bg-gray-200 rounded overflow-hidden shadow-md">
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover rounded-t-md"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800">{details}</h3>
        <p className="text-sm text-gray-600">{title}</p>
      </div>
    </div>
  );
};

const Collections = () => {
  return (
    <div className="p-6 mt-5">
      <h2 className="text-2xl font-bold mb-4 container">Collections</h2>
      <p className="mb-6 container">
        Explore curated lists of top restaurants, cafes, pubs, and bars in
        Mumbai, based on trends
      </p>

      {/* Grid container */}
      <div className="container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {DataCollections.map((data, index) => (
          <Card
            key={index}
            image={data.image}
            details={data.details}
            title={data.title}
          />
        ))}
      </div>
    </div>
  );
};

export default Collections;
