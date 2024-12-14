import React from 'react'
const Collections = () => {
  return (
    <div className="p-6 mt-5">
    <h2 className="text-2xl font-bold mb-4 container">Collections</h2>
    <p className=" mb-6 container">Explore curated lists of top restaurants, cafes, pubs, and bars in Mumbai, based on trends</p>
  
    <div className=" container gap-4" style={{display: 'flex'}}>
      <div className=""  >
        <img src="https://b.zmtcdn.com/data/collections/b8759c026ce05c35fad72177408e7c16_1734092688.png?output-format=webp" alt="Christmas Special Restaurant" className="w-full h-full object-cover rounded-top " />
        <div className="absolute  rounded-bottom inset-0 bg-black bg-opacity-11 flex items-center justify-center">
          <div className="text-white text-center">
            <h3 className="text-lg text-light font-semibold">Christmas Special Restaurant</h3>
            <p className="text-sm text-light">9 Places</p>
          </div>
        </div>
      </div>
      <div className="relative">
  <img 
    src="https://b.zmtcdn.com/data/collections/6922d49fb675d0490edb652abf5ca45f_1727171294.png?output-format=webp" 
    alt="Newly Opened Places" 
    className="w-full h-full object-cover rounded-top" 
  />
  <div className="absolute inset-0 bg-black bg-opacity-30 flex items-end rounded-bottom">
    <div className="text-white text-left">
      <h3 className="text-lg text-light font-semibold">Newly Opened Places</h3>
      <p className="text-sm text-light">34 Places</p>
    </div>
  </div>
</div>

      <div className="">
        <img src="https://hospitalitysnapshots.com/wp-content/uploads/sites/3/2022/04/7-1-700x650-compact.jpg" alt="Top Trending Spots" className="w-full h-full object-cover rounded-top"/>
        <div className="absolute rounded-bottom  inset-0 bg-black bg-opacity-13 bg-light flex items-center justify-center">
          
          <div className="text-white text-center">
            <h3 className="text-lg text-light  text-center  font-semibold">Top Trending Spots</h3>
            <p className="text-sm text-light">24 Places</p>
          </div>
        </div>
      </div>
      <div className="">
        <img src="https://b.zmtcdn.com/data/collections/5cbe9bc87c9da2c6954772540d2e5db5_1730710015.png?output-format=webp" alt="Best Insta-worthy Places" className="w-full h-full object-cover rounded-top " />
        <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center rounded-bottom">
          <div className="text-white text-center  ">
            <h3 className="text-lg  text-light font-semibold">Best Insta-worthy Places</h3>
            <p className="text-sm text-light">28 Places</p>
          </div>
        </div>
      </div>
    </div>
  
   
    {/* <div className="flex flex-wrap gap-2 mt-4">
      <button className="bg-secondary text-secondary-foreground hover:bg-secondary/80 px-4 py-2 rounded">Lower Parel</button>
      <button className="bg-secondary text-secondary-foreground hover:bg-secondary/80 px-4 py-2 rounded">Powai</button>
      <button className="bg-secondary text-secondary-foreground hover:bg-secondary/80 px-4 py-2 rounded">Malad West</button>
    </div> */}
  </div>
  )
}

export default Collections
