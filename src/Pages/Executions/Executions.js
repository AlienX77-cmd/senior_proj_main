import "./Executions.css";

import Sidebar from "../../Components/Sidebar/Sidebar";
import OrderBookCard from "../../Components/ExecutionsCard/OrderBookCard";
import exampleData from "../../Components/ExecutionsCard/exampledata";

function Executions() {
  return (
    <div className="App">
      <div className="AppGlass">
        <Sidebar />
        <OrderBookCard listOutput={exampleData} />
      </div>
    </div>
  );
}

export default Executions;
