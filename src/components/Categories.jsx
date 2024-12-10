import React from 'react';

const categories = [
  { name: 'Delivery', icon: '🚚' },
  { name: 'Dining Out', icon: '🍽️' },
  { name: 'Nightlife', icon: '🌙' },
];

const Categories = () => {
  return (
    <div className="categories">
      {categories.map((category, index) => (
        <div key={index} className="category">
          <span>{category.icon}</span>
          <p>{category.name}</p>
        </div>
      ))}
    </div>
  );
};

export default Categories;
