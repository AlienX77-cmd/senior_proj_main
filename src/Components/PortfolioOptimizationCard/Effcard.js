// Effcard.js
import React from "react";
import "./Effcard.css";

const EffCard = ({ effImageUrl }) => {
  return (
    <div className="Card_Eff">
      <p>
        <b>Efficient Frontier</b>
      </p>
      {effImageUrl ? (
        <div>
          <img
            className="eff"
            src={`data:image/png;base64,${effImageUrl}`}
            alt="Efficient Frontier"
          />
          <p>
            The red dot represent your desired portfolio in the Efficient
            Frontier graph.
          </p>
        </div>
      ) : (
        <p>Nothing to show...</p>
      )}
    </div>
  );
};

export default EffCard;
