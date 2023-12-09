import "./Portfolio.css";

import Sidebar from "../../Components/Sidebar/Sidebar";
import PortOptCard from "../../Components/PortfolioOptimizationCard/PortOptCard";

function Portfolio() {
  return (
    <div className="App">
      <div className="AppGlass">
        <Sidebar />
        <PortOptCard />
      </div>
    </div>
  );
}

export default Portfolio;
