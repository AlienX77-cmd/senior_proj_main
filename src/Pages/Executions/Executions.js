import React, { useState } from "react";
import "./Executions.css";
import Sidebar from "../../Components/Sidebar/Sidebar";
import OrderBookCard from "../../Components/ExecutionsCard/OrderBookCard";

function Executions() {
  const [selectedStocks] = useState(() => {
    const savedData = localStorage.getItem("portfolioData");
    const portfolioData = savedData ? JSON.parse(savedData) : null;

    if (portfolioData && portfolioData["volume for each stock"]) {
      // Assuming that 'volume for each stock' contains the ticker and the volume
      return Object.entries(portfolioData["volume for each stock"]).map(
        ([ticker, volume]) => ({
          ticker: ticker.replace(".BK", ""), // ticker from the key
          side: "Long", // assuming side is Long, you can adjust this based on your data
          order_volume: volume, // volume from the value
          no_order: "50", // hardcoded for now, adjust if you have this data
          avg: "100", // hardcoded for now, adjust if you have this data
          vwap: "105", // hardcoded for now, adjust if you have this data
          diff: "-0.05", // hardcoded for now, adjust if you have this data
          csv_format: [
            ["Time", "Volume", "Price (THB)", "Order type"], // if you have CSV data, place it here
            ["14:36", "19,000", "84.5", "MO"],
            // ... more rows
          ],
          result: [
            { time: "14:36", volume: "19,000", price: "84.5", otype: "MO" },
            { time: "14:37", volume: "100", price: "84.5", otype: "MO" },
            { time: "14:45", volume: "100", price: "83.0", otype: "MO" },
            { time: "14:48", volume: "100", price: "83.0", otype: "LO" },
          ], // if you have result data, place it here
        })
      );
    }

    return []; // default to an empty array if no data
  });

  console.log(selectedStocks);

  // If there's no data, show a message or loading state
  if (selectedStocks.length === 0) {
    return (
      <div>No stocks have been selected or portfolio data is unavailable.</div>
    );
  }

  return (
    <div className="App">
      <div className="AppGlass">
        <Sidebar />
        <OrderBookCard listOutput={selectedStocks} />
      </div>
    </div>
  );
}

export default Executions;
