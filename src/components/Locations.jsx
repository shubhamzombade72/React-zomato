import React from 'react'
import '../style/Location.css'

const Locations = () => {
  return (
    <div>
      <div className="container mx-auto p-6">
  <h2 className="text-2xl  font-semibold pe-5">Popular localities in and around Mumbai</h2>
  <div className="grid  grid-cols-4 gap-4 mt-3 pe-5 " >
    <div className="bg-card p-4 rounded-lg shadow-md">
      <h3 className="text-lg font-medium">Lower Parel</h3>
      <p className="text-muted-foreground">483 places</p>
      <a href="#" className="text-primary hover:underline"></a>
    </div>
    <div className="bg-card p-4 rounded-lg shadow-md" >
      <h3 className="text-lg font-medium">Powai</h3>
      <p className="text-muted-foreground">439 places</p>
      <a href="#" className="text-primary hover:underline"></a>
    </div>
    <div className="bg-card p-4 rounded-lg shadow-md">
      <h3 className="text-lg font-medium">Borivali West</h3>
      <p className="text-muted-foreground">684 places</p>
      <a href="#" className="text-primary hover:underline"></a>
    </div>
    <div className="bg-card p-4 rounded-lg shadow-md">
      <h3 className="text-lg font-medium">Bandra Kurla Complex</h3>
      <p className="text-muted-foreground">158 places</p>
      <a href="#" className="text-primary hover:underline"></a>
    </div>
    <div className="bg-card p-4 rounded-lg shadow-md">
      <h3 className="text-lg font-medium">Fort</h3>
      <p className="text-muted-foreground">289 places</p>
      <a href="#" className="text-primary hover:underline"></a>
    </div>
    <div className="bg-card p-4 rounded-lg shadow-md">
      <h3 className="text-lg font-medium">Juhu</h3>
      <p className="text-muted-foreground">248 places</p>
      <a href="#" className="text-primary hover:underline"></a>
    </div>
    <div className="bg-card p-4 rounded-lg shadow-md">
      <h3 className="text-lg font-medium">Malad West</h3>
      <p className="text-muted-foreground">957 places</p>
      <a href="#" className="text-primary hover:underline"></a>
    </div>
    <div className="bg-card p-4 rounded-lg shadow-md">
      <h3 className="text-lg font-medium">Vashi</h3>
      <p className="text-muted-foreground">664 places</p>
      <a href="#" className="text-primary hover:underline"></a>
    </div>
  </div>
 
</div>
    </div>
  )
}

export default Locations
