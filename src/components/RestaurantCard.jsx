import React from 'react';

const RestaurantCard = ({ name, rating, image, deliveryTime }) => {
  return (
    <div className="restaurant-card">
      <img src={image} alt={name} />
      <div className="restaurant-info">
        <h3>{name}</h3>
        <p>⭐ {rating}</p>
        <p>⏱ {deliveryTime} mins</p>
      </div>
    </div>
  );
};

export default RestaurantCard;
