import React from "react";
import "./profileCard.css";
const ProfileCard = ({ profile, onSelectProfile }) => {
  return (
    <div className="profile-card">
      <img src={profile.photo} alt={profile.name} className="profile-photo" />
      <div className="profile-info">
        <h3>{profile.name}</h3>
        <p>{profile.description}</p>
        <button
          className="view-map-btn"
          onClick={() => onSelectProfile(profile)}
        >
          View on Map
        </button>
      </div>
    </div>
  );
};

export default ProfileCard;
