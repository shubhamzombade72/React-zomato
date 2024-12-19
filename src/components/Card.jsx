import React from "react";

// Card component with hover effects
const Card = ({ image, title, details }) => {
  return (
    <div className="relative bg-white rounded-lg shadow-md overflow-hidden">
      <img
        src={image}
        alt={title}
        className="w-full h-56 object-cover"
      />
      <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center rounded-lg">
        <div className="text-white text-center">
          <h3 className="text-lg font-semibold">{title}</h3>
          <p className="text-sm">{details}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
