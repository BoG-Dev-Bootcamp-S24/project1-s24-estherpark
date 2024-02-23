//Within the TrainList.js component, the data should be filtered to only return info for trains that are part of the specific line.
//For example, for the gold line we only want an array of gold trains.
import React, { useEffect, useState } from "react";
import ColorButtons from "../../components/ColorButtons/ColorButtons";
import "./LinesPage.css";

export default function LinesPage() {
  const [activeColor, setActiveColor] = useState(null);

  const handleColorButtonsClick = (color) => {
    console.log(`Selected color: ${color}`);
  };

  useEffect(() => {
    if (activeColor != null) {
      setLoading(true);
      fetch("https://midsem-bootcamp-api.onrender.com/arrivals/${activeColor}")
        .then((response) => response.json())
        .then((arrivalsData) => {
          setData(arrivalsData);
          setLoading(false);
        });
        .catch((error) => {
          setLoading(false);
        });
      fetch ("https://midsem-bootcamp-api.onrender.com/stations/${activeColor}")
      .then ((response => response.json()))
      .then((stationsData) => {
        setData(stationsData);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
      })
    }
  }, [activeColor]); //initiate fetch when activeColor changes

  return (
    <div className="container">
      <div className="color-container">
        <ColorButtons
          onColorButtonsClick={handleColorButtonsClick}
          activeColor={activeColor}
          setActiveColor={setActiveColor}
        />
        <div className="color-indicator">
          <h1>{`${activeColor === null ? "None selected" : activeColor}`}</h1>
        </div>
        <div className="info-container">
          <div className="navbar-container"></div>
          <div className="station-container">
            <div className="status-container"></div>
            <div className="trainlist-sections"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
