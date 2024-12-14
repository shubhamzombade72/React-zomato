import React from 'react'

const com = () => {
  return (
    <div>
      <div className="">
        <h2 className="">Explore options near me</h2>
    
        <select className="block w-full p-4 md:p-6 mb-8 border border-border rounded-lg bg-input text-foreground">
          <option>Popular Cuisines Near Me</option>
        </select>
    
        <select className="block w-full p-4 md:p-6 mb-8 border border-border rounded-lg bg-input text-foreground">
          <option>Popular Restaurant Types Near Me</option>
        </select>
    
        <select className="block w-full p-4 md:p-6 mb-8 border border-border rounded-lg bg-input text-foreground">
          <option>Top Restaurant Chains</option>
        </select>
    
        <select className="block w-full p-4 md:p-6 mb-8 border border-border rounded-lg bg-input text-foreground">
          <option>Cities We Deliver To</option>
        </select>
      </div>
      <footer className="bg-card p-12 md:p-16 lg:p-20">
        <div className="text-center">
          <span className="text-muted-foreground">zomato</span>
        </div>
      </footer>
    </div>
  )
}

export default com
