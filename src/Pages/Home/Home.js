import React, { useState } from "react";
import "./Home.css";
import Sidebar from "../../Components/Sidebar/Sidebar";
import HomeStockCard from "../../Components/HomeStockCard/HomeStockCard";
import HomeRightSide from "../../Components/HomeStockCard/HomeRightSide";

function Home() {
  const [portfolioData, setPortfolioData] = useState({
    selectedStocksList: [],
    selectedTechnique: "",
    userInput: "",
    totalVolume: "",
    duration: "",
  });

  const handlePortfolioChange = (name, value) => {
    setPortfolioData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async () => {
    // Ensure that all numerical inputs are parsed as floats and are numbers
    const inputValueFloat = parseFloat(portfolioData.userInput);
    const totalVolumeFloat = parseFloat(portfolioData.totalVolume);

    if (isNaN(inputValueFloat) || isNaN(totalVolumeFloat)) {
      alert(
        "Please enter valid numbers for the desired return and total volume."
      );
      return; // Exit the function if either value is not a number
    }

    // Combine all the data from state into one payload
    const payload = {
      tickers: portfolioData.selectedStocksList,
      constraint: portfolioData.selectedTechnique,
      inputValue: inputValueFloat,
      totalVolume: totalVolumeFloat,
      duration: portfolioData.duration,
    };

    // Send the payload to your backend using fetch or another HTTP client
    try {
      const response = await fetch("http://127.0.0.1:5000/portfolio", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const errorData = await response.json(); // Assuming the server sends a JSON response with an error description
        alert(`Error: ${errorData.error}`); // Show an alert with the error message
        return; // Exit the function after handling the error
      }

      const data = await response.json();
      // Handle the response data - maybe set some state or alert the user
      console.log(data);
    } catch (error) {
      // Handle any errors that occurred during the fetch
      console.error("There was an error with the portfolio submission:", error);
    }
  };

  return (
    <div className="App">
      <div className="AppGlass">
        <Sidebar />
        <HomeStockCard
          selectedStocksList={portfolioData.selectedStocksList}
          selectedTechnique={portfolioData.selectedTechnique}
          userInput={portfolioData.userInput}
          onPortfolioChange={handlePortfolioChange}
        />
        <HomeRightSide
          totalVolume={portfolioData.totalVolume}
          duration={portfolioData.duration}
          onPortfolioChange={handlePortfolioChange}
        />
        <button type="submit" className="Submit" onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </div>
  );
}

export default Home;
