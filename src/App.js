import Locations from "./components/Locations";
import Home from "./components/Home";
import Collections from "./components/Collections";
import "./style/Home.css";
function App() {
  return (
    <div className="App">
     <Home/>
     <Collections/>
     <Locations/>
    </div>
  );
}

export default App;
