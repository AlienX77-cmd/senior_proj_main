import React, { useState, useEffect } from "react";
import "./Executions.css";
import Sidebar from "../../Components/Sidebar/Sidebar";
import OrderBookCard from "../../Components/ExecutionsCard/OrderBookCard";
import axios from "axios";

function Executions() {
  const [selectedStocks, setSelectedStocks] = useState([]);

  // useEffect(() => {
  //   axios
  //     .get("http://localhost:5000/executions")
  //     .then((response) => {
  //       const metadata = response.data;
  //       const transformedData = Object.entries(metadata).map(
  //         ([ticker, data]) => ({
  //           ticker,
  //           side: "Long", // Assuming 'side' is not provided by the backend
  //           order_volume: data.want,
  //           no_order: data.plan.length,
  //           avg: data.my_vwap.toFixed(2),
  //           vwap: data.market_vwap.toFixed(2),
  //           diff:
  //             (
  //               ((data.my_vwap - data.market_vwap) / data.market_vwap) *
  //               100
  //             ).toFixed(2) + "%",
  //           csv_format: [["Time", "Volume", "Price"]], // Add a placeholder for CSV data
  //           result: data.plan.map((order) => ({
  //             time: order.TIME,
  //             volume: order.LO_VOLUME + order.MO_VOLUME,
  //             price: (order.LO_PRICE + order.MO_PRICE) / 2,
  //             otype: order.LO_VOLUME > 0 ? "LO" : "MO",
  //           })),
  //         })
  //       );
  //       setSelectedStocks(transformedData);
  //     })
  //     .catch((error) => {
  //       console.error("Error fetching metadata:", error);
  //     });
  // }, []);

  useEffect(() => {
    const fetchExecutions = async () => {
      try {
        const response = await axios.get("http://localhost:5000/executions");
        const transformedData = Object.entries(response.data).map(
          ([ticker, data]) => ({
            ticker,
            side: "Long", // Assuming 'side' is not provided by the backend
            order_volume: data.want,
            no_order: data.plan.length,
            avg: data.my_vwap.toFixed(2),
            vwap: data.market_vwap.toFixed(2),
            diff:
              (
                ((data.my_vwap - data.market_vwap) / data.market_vwap) *
                100
              ).toFixed(2) + "%",
            csv_format: [["Time", "Volume", "Price"]], // Add a placeholder for CSV data
            result: data.plan.map((order) => ({
              time: order.TIME,
              volume: order.LO_VOLUME + order.MO_VOLUME,
              price: (order.LO_PRICE + order.MO_PRICE) / 2,
              otype: order.LO_VOLUME > 0 ? "LO" : "MO",
            })),
          })
        );
        setSelectedStocks(transformedData);
      } catch (error) {
        console.error("Error fetching metadata:", error);
      }
    };

    fetchExecutions(); // Initial fetch

    const intervalId = setInterval(fetchExecutions, 5000); // Poll every 5 seconds

    return () => clearInterval(intervalId); // Clear interval on unmount
  }, []);

  // ... rest of your component code

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
