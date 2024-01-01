import React, { useState } from "react";
import "./HomeStockCard.css";

const StockCard = ({
  selectedStocksList,
  selectedTechnique,
  userInput,
  onPortfolioChange,
}) => {
  const [selectedStock, setSelectedStock] = useState("");

  // Add state to capture the desired return or risk based on the selected technique
  const [formInput, setFormInput] = useState({
    technique: "",
    value: "",
  });

  const stockOptions = [
    "AAV",
    "ACE",
    "ADVANC",
    "AMATA",
    "AOT",
    "AP",
    "AURA",
    "AWC",
    "BAM",
    "BANPU",
    "BBL",
    "BCH",
    "BCP",
    "BCPG",
    "BDMS",
    "BEM",
    "BGRIM",
    "BH",
    "BLA",
    "BSRC",
    "BTG",
    "BTS",
    "BYD",
    "CBG",
    "CENTEL",
    "CHG",
    "CK",
    "CKP",
    "COM7",
    "CPALL",
    "CPF",
    "CPN",
    "CRC",
    "DELTA",
    "DOHOME",
    "EA",
    "EGCO",
    "ERW",
    "FORTH",
    "GLOBAL",
    "GPSC",
    "GULF",
    "GUNKUL",
    "HANA",
    "HMPRO",
    "INTUCH",
    "IRPC",
    "IVL",
    "JMART",
    "JMT",
    "KBANK",
    "KCE",
    "KKP",
    "KTB",
    "KTC",
    "LH",
    "MBK",
    "MEGA",
    "MINT",
    "MTC",
    "NEX",
    "OR",
    "ORI",
    "OSP",
    "PLANB",
    "PSL",
    "PTG",
    "PTT",
    "PTTEP",
    "PTTGC",
    "RATCH",
    "RCL",
    "SABUY",
    "SAWAD",
    "SCB",
    "SCC",
    "SCGP",
    "SIRI",
    "SJWD",
    "SNNP",
    "SPALI",
    "SPRC",
    "STA",
    "STEC",
    "STGT",
    "TASCO",
    "TCAP",
    "THANI",
    "THG",
    "TIDLOR",
    "TIPH",
    "TISCO",
    "TLI",
    "TOP",
    "TQM",
    "TRUE",
    "TTB",
    "TU",
    "VGI",
    "WHA",
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
    // Check if the user is trying to add more than 4 stocks
    if (selectedStocksList.length >= 5) {
      // Alert the user that they can only add up to 4 stocks
      alert("You can only add up to 5 stocks.");
      return; // Exit the function to prevent more stocks from being added
    }

    // Your existing logic to add a stock
    if (selectedStock && !selectedStocksList.includes(selectedStock)) {
      onPortfolioChange("selectedStocksList", [
        ...selectedStocksList,
        selectedStock,
      ]);
      // onPortfolioChange("selectedStock", ""); // Clear the selection
    }
  };

  const handleRemoveStock = (stockToRemove) => {
    const updatedStocksList = selectedStocksList.filter(
      (stock) => stock !== stockToRemove
    );
    onPortfolioChange("selectedStocksList", updatedStocksList);
  };

  // Update the technique selection handler to also handle input changes
  const handleTechniqueSelection = (e) => {
    onPortfolioChange("selectedTechnique", e.target.value);
    setFormInput({ ...formInput, technique: e.target.value });
  };

  // Update the input change handler to update the formInput state
  const handleInputChange = (e) => {
    onPortfolioChange("userInput", e.target.value);
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
          <button type="button" className="Add" onClick={handleAddStock}>
            Add Stock
          </button>
        </div>

        <div className="container2">
          <h3>Selected Stocks:</h3>
          <ul>
            {selectedStocksList.map((stock, index) => (
              <li key={index}>
                {index + 1}. {stock}
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
              <label htmlFor="returnInput">Enter Desired Return (in %):</label>
              <input
                type="number"
                id="returnInput"
                min="0.01" // to allow only positive numbers greater than zero
                max="100"
                step="any" // to allow decimal numbers
                value={userInput}
                onChange={handleInputChange}
                onKeyPress={(event) => {
                  // Prevent non-numeric characters
                  if (!/[0-9]/.test(event.key) && event.key !== ".") {
                    event.preventDefault();
                  }
                }}
              />
            </div>
          )}
          {selectedTechnique ===
            "Maximise return for a given risk with L2 regularisation" && (
            <div>
              <label htmlFor="riskInput">Enter Maximum Risk (in %):</label>
              <input
                type="number"
                id="riskInput"
                min="0.01" // to allow only positive numbers greater than zero
                max="100"
                step="any" // to allow decimal numbers
                value={userInput}
                onChange={handleInputChange}
                onKeyPress={(event) => {
                  // Prevent non-numeric characters
                  if (!/[0-9]/.test(event.key) && event.key !== ".") {
                    event.preventDefault();
                  }
                }}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default StockCard;
