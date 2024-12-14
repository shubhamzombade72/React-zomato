import Locations from "./components/Locations";
import Home from "./components/Home";
import Collections from "./components/Collections";
import Appinfo from "./components/Appinfo";
import Com from "./components/Com"
import "./style/Home.css";
function App() {
  return (
    <div className="App">
     <Home/>
     <Collections/>
     <Locations/>
     <Appinfo/>
     <Com/>
    </div>
  );
}

export default App;
