import "./Portfolio.css";

import Sidebar from "../../Components/Sidebar/Sidebar";
import PortOptCard from "../../Components/PortfolioOptimizationCard/PortOptCard";
import EffCard from "../../Components/PortfolioOptimizationCard/Effcard";

function Portfolio() {
  return (
    <div className="App">
      <div className="AppGlass">
        <Sidebar />
        <PortOptCard />
        <EffCard />
      </div>
    </div>
  );
}

export default Portfolio;
