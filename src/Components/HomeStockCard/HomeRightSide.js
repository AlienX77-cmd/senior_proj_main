import React from "react";
import "./HomeRightSide.css";
import { Card } from "react-bootstrap";

const HomeRightSide = ({ totalVolume, duration, onPortfolioChange }) => {
  return (
    <Card className="user-input-card">
      <Card.Body>
        <Card.Title>
          <b>Please Enter Volume and Duration</b>
        </Card.Title>

        <div className="input-group">
          <label htmlFor="total-volume">Total Volume</label>
          <input
            type="number"
            id="total-volume"
            min="4"
            max="1000000000000"
            step="any" // to allow decimal numbers
            value={totalVolume}
            onChange={(e) => onPortfolioChange("totalVolume", e.target.value)}
            onKeyPress={(event) => {
              // Prevent non-numeric characters
              if (!/[0-9]/.test(event.key) && event.key !== ".") {
                event.preventDefault();
              }
            }}
          />
        </div>

        <div className="input-group">
          <label htmlFor="duration">Duration</label>
          <select
            id="duration"
            value={duration}
            onChange={(e) => onPortfolioChange("duration", e.target.value)}
          >
            <option value="">Select Duration</option>
            <option value="3h">3 hours</option>
            <option value="6h">6 hours</option>
            <option value="9h">9 hours</option>
            <option value="12h">12 hours</option>
          </select>
        </div>
      </Card.Body>
    </Card>
  );
};

export default HomeRightSide;
