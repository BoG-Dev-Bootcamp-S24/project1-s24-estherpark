import React from "react";
import "./ColorButtons.css";

const ColorButtons = ({ onColorButtonsClick, activeColor, setActiveColor }) => {
  const handleColorButtonsClick = (color) => {
    setActiveColor(color);
    onColorButtonsClick(color);
  };
  return (
    <div className="buttons">
      <button
        className={`button ${activeColor === "gold" ? "active" : " "}`}
        style={{ backgroundColor: "gold" }}
        onClick={() => handleColorButtonsClick("gold")}
      >
        <h2>Gold</h2>
      </button>
      <button
        className={`button ${activeColor === "red" ? "active" : " "}`}
        style={{ backgroundColor: "red" }}
        onClick={() => {
          handleColorButtonsClick("red");
        }}
      >
        <h2>Red</h2>
      </button>
      <button
        className={`button ${activeColor === "blue" ? "active" : " "}`}
        style={{ backgroundColor: "blue" }}
        onClick={() => handleColorButtonsClick("blue")}
      >
        <h2>Blue</h2>
      </button>
      <button
        className={`button ${activeColor === "green" ? "active" : " "}`}
        style={{ backgroundColor: "green" }}
        onClick={() => handleColorButtonsClick("green")}
      >
        <h2>Green</h2>
      </button>
    </div>
  );
};

export default ColorButtons;
