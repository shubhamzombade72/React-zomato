import React from "react";
import "../style/Home.css";
import Data from './Data.json'
// Card component with hover effects
const Card = ({ image, title, details }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-xl transition-shadow duration-300">
      <img
        src={image}
        alt={title}
        className="h-40 object-cover rounded-lg mb-4"
        style={{ width: "100%" }}
      />
      <h2 className="text-xl font-bold text-gray fs-4 mb-2">{title}</h2>
      <p className="text-gray-600">{details}</p>
    </div>
  );
};

const Home = () => {
  return (
    <>
      <div className="bg-background p-6 ps-5">
        <header className="flex justify-between items-center">
          <div className="pe-5">
            <a href="#" className="text-light text-2xl font-bold mb-5 nav-link">
              Get the App
            </a>
          </div>
          <div className="font-bold text-light ps-5 fs-1  mt-5">zomato</div>
          <nav className="space-x-4 flex">
            <a href="#" className="text-light nav-link mb-5">
              Investor Relations
            </a>
            <a href="#" className="text-light nav-link mb-5">
              Add restaurant
            </a>
            <a href="#" className="text-light nav-link mb-5">
              Log in
            </a>
            <a href="#" className="text-light nav-link mb-5">
              Sign up
            </a>
          </nav>
        </header>

        <div className="mt-10 text-center">
          <h1 className="text-4xl font-bold text-light">
            Discover the best food & drinks in Mumbai
          </h1>
          <div className="mt-4">
  <input
    type="text"
    placeholder="Malad, Mindspace, Malad | Search for restaurant, cuisine or a dish"
    className="border border-gray-400 rounded-lg p-3 w-3/4 mt-5 mb-4 mx-auto block search-box" 
  />
</div>
        </div>
      </div>

      <div className="mt-10 container fs-6  mx-auto px-4">
        {/* Responsive Grid Layout */}
        <div className="grid ">
  {Data.map((item, index) => (
    <Card
      key={index}
      image={item.image}
      title={item.title}
      details={item.details}
    />
  ))}
</div>

      </div>
    </>
  );
};

export default Home;
