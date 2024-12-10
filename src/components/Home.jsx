import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Categories from '../components/Categories';
import RestaurantCard from '../components/RestaurantCard';

const restaurants = [
  { name: 'Pizza Palace', rating: 4.5, image: 'pizza.jpg', deliveryTime: 30 },
  { name: 'Burger Hub', rating: 4.3, image: 'burger.jpg', deliveryTime: 25 },
];

const HomePage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Categories />
      <div className="restaurant-list">
        {restaurants.map((restaurant, index) => (
          <RestaurantCard key={index} {...restaurant} />
        ))}
      </div>
    </>
  );
};

export default HomePage;
