import React from "react";

const OptionCard = ({ image, description, name, handleSelect }) => (
  <div
    style={{
      background: "lavender",
      border: "1px solid purple",
      height: "400px",
      width: "250px",
      margin: "20px"
    }}
  >
    <div style={{ background: "black" }} />
    <h4>{name}</h4>
    <p>{description}</p>
    <button onClick={handleSelect}>Select</button>
  </div>
);

export default OptionCard;
