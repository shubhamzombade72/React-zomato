import React from 'react'

const Home = () => {
  return (
    <>
    <div className="bg-background  p-6 ps-5">
    <header className="flex justify-between items-center ">
      <div className='pe-5'>
        <a href="#" className="text-light text-2xl font-bold mb-5 nav-link">Get the App</a>
      </div>
      <div className=" font-bold tols text-light justify-between ps-5 font-weight-bold mt-5">zomato</div>
      <nav className="space-x-4 flex ggg">
        <a href="#" className="text-light nav-link  mb-5  ">Investor Relations</a>
        <a href="#" className="text-light nav-link mb-5  ">Add restaurant</a>
        <a href="#" className="text-light nav-link mb-5  ">Log in</a>
        <a href="#" className="text-light nav-link mb-5  ">Sign up</a>
      </nav>
    </header>
  
    <div className="mt-10 text-center">
      <h1 className="text-4xl font-bold text-light">Discover the best food & drinks in Mumbai</h1>
      <div className="mt-4 ">

        <input type="text" placeholder="Malad, Mindspace, Malad | Search for restaurant, cuisine or a dish" className="border border-border rounded-lg p-3 w-1/2 mt-5 mb-4" />
      </div>
    </div>
      
  </div>
  <div className="mt-5 container   gap-4" style={{display: 'flex'}} >
      <div className="bg-card w-full ">
        <img src="https://b.zmtcdn.com/webFrontend/e5b8785c257af2a7f354f1addaf37e4e1647364814.jpeg?output-format=webp" alt="Order Online" className=" h-32 object-cover rounded-lg " style={{width: "100%"}}/>
        <h2 className="text-lg font-semibold mt-2 ps-4">Order Online</h2>
        <p className="text ps-4">Stay home and order to your doorstep</p>
      </div>
      <div className="bg-card w-full rounded-lg shadow-md">
        <img src="https://b.zmtcdn.com/webFrontend/d026b357feb0d63c997549f6398da8cc1647364915.jpeg?output-format=webp&fit=around|402:360&crop=402:360;*,*" alt="Dining" className=" h-32 object-cover rounded-lg" style={{width: "100%"}} />
        <h2 className="text-lg font-semibold mt-2 ps-4">Dining</h2>
        <p className="text ps-4">View the city's favorite dining venues</p>
      </div>
      <div className="bg-card  w-full rounded-lg shadow-md">
        <img src="https://b.zmtcdn.com/data/o2_assets/371de657644f1b5818fcb5d83387c8c91722851940.png?output-format=webp&fit=around|402:360&crop=402:360;*,*" alt="Live Events" className=" h-32 object-cover rounded-lg" style={{width: "100%"}} />
        <h2 className="text-lg font-semibold mt-2 ps-4">Live Events</h2>
        <p className="text ps-4">Discover India's best events & concerts</p>
      </div>
    </div>
</>
  )
}

export default Home
