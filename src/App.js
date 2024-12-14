import Locations from "./components/Locations";
import Home from "./components/Home";
import Collections from "./components/Collections";
import Appinfo from "./components/Appinfo";
import Explore from "./components/Explore";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="App">
     <Home/>
     <Collections/>
     <Locations/>
     <Appinfo/>
     <Explore/>  
     <Footer/>  

    </div>
  );
}

export default App;
