import React, { useState } from "react";
import "./HomeStockCard.css";

const StockCard = () => {
  const [selectedStock, setSelectedStock] = useState("");
  const [selectedTechnique, setSelectedTechnique] = useState("");
  const [selectedStocksList, setSelectedStocksList] = useState([]);

  const stockOptions = [
    "Stock1",
    "Stock2",
    "Stock3",
    "Stock4" /* Add SET50 stocks here */,
  ];
  const techniqueOptions = [
    "Minimise risk for a given return",
    "Maximise return for a given risk with L2 regularisation",
  ];

  const handleStockSelection = (e) => {
    const selectedStock = e.target.value;
    setSelectedStock(selectedStock);
  };

  const handleAddStock = () => {
    if (
      selectedStock &&
      selectedStocksList.length < 5 &&
      !selectedStocksList.includes(selectedStock)
    ) {
      setSelectedStocksList([...selectedStocksList, selectedStock]);
      setSelectedStock("");
    }
  };

  const handleTechniqueSelection = (e) => {
    const selectedTechnique = e.target.value;
    setSelectedTechnique(selectedTechnique);
  };

  const handleRemoveStock = (removedStock) => {
    const updatedStocksList = selectedStocksList.filter(
      (stock) => stock !== removedStock
    );
    setSelectedStocksList(updatedStocksList);
  };

  const [userInput, setUserInput] = useState("");

  const handleInputChange = (e) => {
    setUserInput(e.target.value);
  };

  const labelStyle = {
    fontSize: "25px", // Adjust the size as needed
  };

  return (
    <div>
      <div className="container1">
        <div>
          <label style={labelStyle}>
            <b>Select Stock:</b>
          </label>
          <select value={selectedStock} onChange={handleStockSelection}>
            <option value="" disabled>
              Select a stock
            </option>
            {stockOptions.map((stock, index) => (
              <option key={index} value={stock}>
                {stock}
              </option>
            ))}
          </select>
          <button className="Add" onClick={handleAddStock}>
            Add Stock
          </button>
        </div>

        <div className="container2">
          <h3>Selected Stocks:</h3>
          <ul>
            {selectedStocksList.map((stock, index) => (
              <li key={index}>
                {stock}
                <button
                  className="Remove"
                  onClick={() => handleRemoveStock(stock)}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="container3">
        <div>
          <label>
            <b>Select Portfolio Optimization Technique:</b>
          </label>
          <select value={selectedTechnique} onChange={handleTechniqueSelection}>
            <option value="" disabled>
              Select a technique
            </option>
            {techniqueOptions.map((technique, index) => (
              <option key={index} value={technique}>
                {technique}
              </option>
            ))}
          </select>
        </div>

        <div>
          {selectedTechnique && <p>Selected Technique: {selectedTechnique}</p>}
          {selectedTechnique === "Minimise risk for a given return" && (
            <div>
              <label htmlFor="returnInput">Enter Desired Return:</label>
              <input
                type="text"
                id="returnInput"
                value={userInput}
                onChange={handleInputChange}
              />
            </div>
          )}
          {selectedTechnique ===
            "Maximise return for a given risk with L2 regularisation" && (
            <div>
              <label htmlFor="riskInput">Enter Maximum Risk:</label>
              <input
                type="text"
                id="riskInput"
                value={userInput}
                onChange={handleInputChange}
              />
            </div>
          )}
        </div>
      </div>
      <button className="Submit">Submit</button>
    </div>
  );
};

export default StockCard;
