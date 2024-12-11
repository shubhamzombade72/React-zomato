import React from 'react';
const Hero = () => {
  return (
    <>
      <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
        {/* Navbar inside the carousel */}
        <nav className="navbar">
          <div className="navbar-logo">Zomato</div>
          <div className="navbar-links">
            <span>Login</span>
            <span>Sign Up</span>
          </div>
        </nav>

        {/* Search bar inside the carousel */}
        <div className="carousel-search">
          <input
            type="text"
            className="search-bar"
            placeholder="Search for restaurants, cuisines..."
          />
        </div>

        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="https://nutritionsource.hsph.harvard.edu/wp-content/uploads/2024/11/AdobeStock_808358973-1024x683.jpeg"
              className="d-block w-100"
              alt="First slide"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://www.clubmahindra.com/blog/media/section_images/vegetarian-194f3130c95fbc6.jpg"
              className="d-block w-100"
              alt="Second slide"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg"
              className="d-block w-100"
              alt="Third slide"
            />
          </div>
        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
};

export default Hero;
