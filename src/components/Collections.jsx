import React from 'react'
import '../style/Collections.css'
const Collections = () => {
  return (
    <div>
      <div className="p-6 ">
  <h2 className="text-2xl font-bold mb-4 container">Collections</h2>
  <p className="text mb-6 container">Explore curated lists of top restaurants, cafes, pubs, and bars in Mumbai, based on trends</p>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 " style={{display:'flex'}} >
    <div className="bg-card rounded-lg  overflow-hidden shadow-lg " >
      <img src="https://b.zmtcdn.com/data/collections/6922d49fb675d0490edb652abf5ca45f_1727171294.png?output-format=webp" alt="Newly Opened Places" className="w-full h-40 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold">Newly Opened Places</h3>
        <p className="text">34 Places</p>
      </div>
    </div>
    <div className="bg-card  rounded-lg overflow-hidden shadow-lg">
      <img src="https://b.zmtcdn.com/data/collections/edd5abbddd239a8cfb8099c63b1baaf0_1675247359.jpg?output-format=webp" alt="Top Trending Spots" className="w-full h-40 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold">Top Trending Spots</h3>
        <p className="text">24 Places</p>
      </div>
    </div>

    <div className="bg-card rounded-lg overflow-hidden shadow-lg">
      <img src="https://b.zmtcdn.com/data/collections/5cbe9bc87c9da2c6954772540d2e5db5_1730710015.png?output-format=webp" alt="Best Insta-worthy Places" className="w-full h-40 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold">Best Insta-worthy Places</h3>
        <p className="text">28 Places</p>
      </div>
    </div>

    <div className="bg-card rounded-lg overflow-hidden shadow-lg">
      <img src="https://b.zmtcdn.com/data/collections/bb911f91fcd0049494b664752d28b740_1733211787.png?output-format=webp" alt="Strawberry Sweet Treats" className="w-full h-40 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold">Strawberry Sweet Treats</h3>
        <p className="text">9 Places</p>
      </div>
    </div>

 </div>   
 </div>
    </div>
  )
}

export default Collections
