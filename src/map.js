import React from "react";
import "./map.css";
const Map = ({ profile }) => {
  return (
    <div className="map-container">
      <h2>Map for {profile.name}</h2>
      <div className="map-placeholder">
        <p>{profile.address}</p>
      </div>
    </div>
  );
};

export default Map;
