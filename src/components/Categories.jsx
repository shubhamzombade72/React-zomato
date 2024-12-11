import React from 'react';

const categories = [
  { 
    name: 'Delivery', 
    icon: '🚚', 
    img: 'https://img.freepik.com/premium-photo/large-bowl-food-with-fish-vegetables_197463-2405.jpg', // Placeholder image, replace with actual image URLs
    title: 'Fast & Reliable Delivery', 
    description: 'Get your food delivered right to your doorstep.' 
  },
  { 
    name: 'Dining Out', 
    icon: '🍽️', 
    img: 'https://www.mahattahomestay.com/gallery-img/dinning-hall/dinning_hall4.jpg', // Placeholder image, replace with actual image URLs
    title: 'Enjoy Dining Out', 
    description: 'Explore the best places to eat in town.' 
  },
  { 
    name: 'Nightlife', 
    icon: '🌙', 
    img: 'https://cdn.pixabay.com/photo/2016/11/23/15/48/audience-1853662_640.jpg', // Placeholder image, replace with actual image URLs
    title: 'Live Event', 
    description: 'Discover exciting nightlife spots near you.' 
  },
  
  { 
    name: 'Nightlife', 
    icon: '🌙', 
    img: 'https://cdn.pixabay.com/photo/2016/11/23/15/48/audience-1853662_640.jpg', // Placeholder image, replace with actual image URLs
    title: 'Live Event', 
    description: 'Discover exciting nightlife spots near you.' 
  },
  { 
    name: 'Nightlife', 
    icon: '🌙', 
    img: 'https://cdn.pixabay.com/photo/2016/11/23/15/48/audience-1853662_640.jpg', // Placeholder image, replace with actual image URLs
    title: 'Live Event', 
    description: 'Discover exciting nightlife spots near you.' 
  },
];

const Categories = () => {
  return (
    <div className="categories">
      {categories.map((category, index) => (
        <div key={index} className="category-card">
          <img src={category.img} alt={category.name} className="category-img"  />
          <div className="category-content">
            <h3>{category.title}</h3>
            <p>{category.description}</p>
          </div>
        </div>
      ))}

     
    </div>

    
  );
};

export default Categories;
