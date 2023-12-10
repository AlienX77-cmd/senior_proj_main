import "./App.css";

import { Route, Routes } from "react-router-dom";

// import HomeStockCard from "./Components/HomeStockCard/HomeStockCard";

import Home from "./Pages/Home/Home";
import Portfolio from "./Pages/Portfolio/Portfolio";
import Executions from "./Pages/Executions/Executions";

function App() {
  return (
    <div className="App">
      {/* <div className="AppGlass"></div> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="portfolio" element={<Portfolio />} />
        <Route path="executions" element={<Executions />} />
      </Routes>
    </div>
  );
}

export default App;
