import React from "react";
import "./Effcard.css";
import eff from "../../imgs/eff.png"; // Adjust the path as necessary

const EffCard = () => {
  return (
    <div className="Card_Eff">
      <p>Efficient Frontier</p>
      <img className="eff" src={eff} alt="Description" />
    </div>
  );
};

export default EffCard;
