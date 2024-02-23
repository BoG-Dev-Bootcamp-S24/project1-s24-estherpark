//Within the TrainList.js component, the data should be filtered to only return info for trains that are part of the specific line.
//For example, for the gold line we only want an array of gold trains.
import React, { useState } from "react";
import ColorButtons from "../../components/ColorButtons/ColorButtons";
import "./LinesPage.css";

export default function LinesPage() {
  // initialize some currColor state
  const [activeColor, setActiveColor] = useState(null);

  const handleColorButtonsClick = (color) => {
    console.log(`Selected color: ${color}`);
  };

  return (
    <div className="container">
      <div className="color-container">
        <ColorButtons
          onColorButtonsClick={handleColorButtonsClick}
          activeColor={activeColor}
          setActiveColor={setActiveColor}
        />
        <div className="color-indicator">
          <h1>{activeColor}</h1>
        </div>
        <div className="info-container">
          <div className="start-container"></div>
          <div className="station-container">
            <div className="status-container"></div>
            <div className="station-sections"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
