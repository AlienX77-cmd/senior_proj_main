import React from "react";
import "./PortOptCard.css";

import port1 from "../../imgs/port1.png";

import "chart.js/auto";

const PortfolioOptimizationPage = () => {
  // Create an array of objects for the list
  const portfolioDetails = [
    { name: "GD", value: 0.08118 },
    { name: "JPM", value: 0.42708 },
    { name: "MCD", value: 0.0639 },
    { name: "MRK", value: 0.11276 },
    { name: "MSFT", value: 0.31508 },
  ];

  return (
    <>
      <div className="Card">
        <img className="port" src={port1} alt="Portfolio 1" />
        <div className="Card2">
          <div className="card-header">Portfolio Optimization Details</div>
          <div className="card-body">
            <p>
              Expected annual return: <span>20.0%</span>
            </p>
            <p>
              Annual volatility: <span>25.0%</span>
            </p>
            <p>
              Sharpe Ratio: <span>0.72</span>
            </p>
            {/* Render the list here */}
            <ol>
              {portfolioDetails.map((item) => (
                <li key={item.name}>
                  {item.name}: {item.value}
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </>
  );
};

export default PortfolioOptimizationPage;
