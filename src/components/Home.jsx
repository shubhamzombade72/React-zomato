import React from 'react';
import Hero from '../components/Hero';
import Categories from '../components/Categories';

const restaurants = [
  { name: 'Burger Hub', image: 'https://c8.alamy.com/comp/H8HPP0/little-italy-pizza-restaurant-seventh-avenue-new-york-city-united-H8HPP0.jpg' },
  { name: 'Dinning Hall', image: 'https://uthammahalhotel.com/img/dinning/d1.png' },
  { name: 'Concert', image: 'https://as1.ftcdn.net/v2/jpg/05/70/69/50/1000_F_570695098_fip1e9QHqIJZaBtFRehdfK0N0EAAnuoF.jpg' },
  { name: 'MENU', image: 'https://img.freepik.com/free-vector/beautiful-food-menu-design-template_23-2149061881.jpg' },
];

const HomePage = () => {
  return (
    <>
      <Hero />
      <Categories />
      <div className='Collections'>
      <h2>Collections</h2>
      </div>
      <div className="restaurant-list">
        {restaurants.map((restaurant, index) => (
          <div key={index} className="restaurant-card">
            <img src={restaurant.image} alt={restaurant.name} className="restaurant-img" />
            <h3>{restaurant.name}</h3>
          </div>
        ))}
      </div>
    </>
  );
};

export default HomePage;
