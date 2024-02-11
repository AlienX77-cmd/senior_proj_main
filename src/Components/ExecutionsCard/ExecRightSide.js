// Effcard.js
import React from "react";
import "./ExecRightSide.css";

const EffCard = () => {
  return (
    <div className="Card_Eff">
      <p>
        <b>Execution Details</b>
      </p>
      <p>
        Order Volume: The total volume that must be executed No Order: Number of
        orders that have been placed AVG: The Average price of the particular
        stock Market VWAP: The VWAP of market for the paticular stock price
        Diff: The Difference between my VWAP and Market VWAP
      </p>
    </div>
  );
};

export default EffCard;
