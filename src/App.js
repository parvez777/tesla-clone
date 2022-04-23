import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Model3 from "./Pages/Model3/Model3";
import ModelS from "./Pages/ModelS/ModelS";
import ModelX from "./Pages/ModelX/ModelX";
import ModelY from "./Pages/ModelY/ModelY";
import SolarPanel from "./Pages/SolarPanel/SolarPanel";
import SolarRoof from "./Pages/SolarRoof/SolarRoof";

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/models" element={<ModelS/>}/>
          <Route path="/model3" element={<Model3/>}/>
          <Route path="/modelx" element={<ModelX/>}/>
          <Route path="/modely" element={<ModelY/>}/>
          <Route path="/solarroof" element={<SolarRoof/>}/>
          <Route path="/solarpanels" element={<SolarPanel/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
