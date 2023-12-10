import React, { useState } from "react";
import "./HomeRightSide.css";
import { Card } from "react-bootstrap";

const HomeRightSide = () => {
  const [totalVolume, setTotalVolume] = useState("");
  const [duration, setDuration] = useState("");

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
            value={totalVolume}
            onChange={(e) => setTotalVolume(e.target.value)}
          />
        </div>

        <div className="input-group">
          <label htmlFor="duration">Duration</label>
          <select
            id="duration"
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
          >
            <option value="">Select Duration</option>
            <option value="3h">3 hours</option>
            <option value="6h">6 hours</option>
            <option value="9h">9 hours</option>
            <option value="12h">12 hours</option>
            <option value="1d">1 day</option>
            <option value="3d">3 days</option>
            <option value="5d">5 days</option>
            <option value="1w">1 week</option>
          </select>
        </div>
      </Card.Body>
    </Card>
  );
};

export default HomeRightSide;
