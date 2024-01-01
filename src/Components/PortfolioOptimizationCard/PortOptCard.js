import React, { useEffect, useState } from "react";
import "./PortOptCard.css";

const PortfolioOptimizationPage = () => {
  const [portfolioData, setPortfolioData] = useState(
    JSON.parse(localStorage.getItem("portfolioData"))
  );

  // Clear the localStorage after fetching data
  useEffect(() => {
    localStorage.removeItem("portfolioData");
  }, []);

  useEffect(() => {
    // Fetch the portfolio data when the component mounts
    const fetchPortfolioData = async () => {
      try {
        // for retrieving data, consider using a GET request
        const response = await fetch("http://127.0.0.1:5000/portfolio");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setPortfolioData(data);
      } catch (error) {
        console.error("Failed to fetch portfolio data:", error);
      }
    };

    fetchPortfolioData();
  }, []);

  // Check if portfolio data is available
  const hasPortfolioData = portfolioData && portfolioData.pie_chart_b64;

  // If data is not available, show the default content
  if (!hasPortfolioData) {
    return (
      <div className="default-page">
        <h2>Welcome to the Portfolio Optimization Tool!</h2>
        <p>
          Here you can calculate the optimal allocation for your investment
          portfolio.
        </p>
        <p>
          Start by entering your stock selections on the <strong>Home</strong>{" "}
          page.
        </p>
        <p>
          Learn more about portfolio optimization, expected returns, volatility,
          and the Sharpe Ratio.
        </p>
        <button onClick={() => (window.location.href = "/")}>
          Get Started
        </button>
        {/* You can replace the above with a Link component if you're using react-router-dom */}
      </div>
    );
  }

  return (
    <>
      <div className="Card">
        {portfolioData && portfolioData.pie_chart_b64 && (
          <img
            className="port"
            src={`data:image/png;base64,${portfolioData.pie_chart_b64}`}
            alt="Portfolio Pie Chart"
          />
        )}
        <div className="Card2">
          <div className="card-header">Portfolio Optimization Details</div>
          <div className="card-body">
            {portfolioData && (
              <>
                <p>
                  Expected annual return:{" "}
                  <span>
                    {(portfolioData.performance[0] * 100).toFixed(2)}%
                  </span>
                </p>
                <p>
                  Annual volatility:{" "}
                  <span>
                    {(portfolioData.performance[1] * 100).toFixed(2)}%
                  </span>
                </p>
                <p>
                  Sharpe Ratio:{" "}
                  <span>{portfolioData.performance[2].toFixed(2)}</span>
                </p>
                <ol>
                  {Object.entries(portfolioData["volume for each stock"]).map(
                    ([stock, volume]) => (
                      <li key={stock}>
                        {stock}: {volume}
                      </li>
                    )
                  )}
                </ol>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default PortfolioOptimizationPage;
