import React from 'react'

const Home = () => {
  return (
    <>
    <div className="bg-background p-6 ">
    <header className="flex justify-between items-center">
      <div>
        <a href="#" className="text-primary text-2xl font-bold">Get the App</a>
      </div>
      <div className="text-3xl font-bold text-light">zomato</div>
      <nav className="space-x-4">
        <a href="#" className="text-muted">Investor Relations</a>
        <a href="#" className="text-muted">Add restaurant</a>
        <a href="#" className="text-muted">Log in</a>
        <a href="#" className="text-muted">Sign up</a>
      </nav>
    </header>
  
    <div className="mt-10 text-center">
      <h1 className="text-4xl font-bold text-light">Discover the best food & drinks in Mumbai</h1>
      <div className="mt-4">

        <input type="text" placeholder="Malad, Mindspace, Malad | Search for restaurant, cuisine or a dish" className="border border-border rounded-lg p-2 w-1/2" />
      </div>
    </div>
      
  </div>
  <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4"  >
      <div className="bg-card p-4 rounded-lg shadow-md">
        <img src="https://b.zmtcdn.com/webFrontend/e5b8785c257af2a7f354f1addaf37e4e1647364814.jpeg?output-format=webp&fit=around|402:360&crop=402:360;*,*" alt="Order Online" className="w-full h-32 object-cover rounded-lg" />
        <h2 className="text-lg font-semibold mt-2">Order Online</h2>
        <p className="text">Stay home and order to your doorstep</p>
      </div>
      <div className="bg-card p-4 rounded-lg shadow-md">
        <img src="https://b.zmtcdn.com/webFrontend/d026b357feb0d63c997549f6398da8cc1647364915.jpeg?output-format=webp&fit=around|402:360&crop=402:360;*,*" alt="Dining" className="w-full h-32 object-cover rounded-lg" />
        <h2 className="text-lg font-semibold mt-2">Dining</h2>
        <p className="text">View the city's favorite dining venues</p>
      </div>
      <div className="bg-card p-4 rounded-lg shadow-md">
        <img src="https://b.zmtcdn.com/data/o2_assets/371de657644f1b5818fcb5d83387c8c91722851940.png?output-format=webp&fit=around|402:360&crop=402:360;*,*" alt="Live Events" className="w-full h-32 object-cover rounded-lg" />
        <h2 className="text-lg font-semibold mt-2">Live Events</h2>
        <p className="text">Discover India's best events & concerts</p>
      </div>
    </div>
</>
  )
}

export default Home
