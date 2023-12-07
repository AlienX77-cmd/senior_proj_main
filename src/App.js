import "./App.css";

import { Route, Routes } from "react-router-dom";

// import HomeStockCard from "./Components/HomeStockCard/HomeStockCard";

import Home from "./Pages/Home/Home";
import Portfolio from "./Pages/Portfolio/Portfolio";
import Executions from "./Pages/Executions/Executions";
import Analytics from "./Pages/Analytics/Analytics";

function App() {
  return (
    <div className="App">
      {/* <div className="AppGlass"></div> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="portfolio" element={<Portfolio />} />
        <Route path="executions" element={<Executions />} />
        <Route path="analytics" element={<Analytics />} />
      </Routes>
    </div>
  );
}

export default App;
