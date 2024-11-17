import React, { useState } from "react";
import "./adminPanel.css";
const AdminPanel = ({ profiles, setProfiles }) => {
  const [newProfile, setNewProfile] = useState({
    name: "",
    photo: "",
    description: "",
    address: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProfile({ ...newProfile, [name]: value });
  };

  const handleAddProfile = () => {
    if (newProfile.name && newProfile.address) {
      setProfiles([...profiles, { ...newProfile, id: Date.now() }]);
      setNewProfile({ name: "", photo: "", description: "", address: "" });
    } else {
      alert("Name and Address are required!");
    }
  };

  return (
    <div className="admin-panel">
      <h3>Admin Panel</h3>
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={newProfile.name}
        onChange={handleInputChange}
      />
      <input
        type="text"
        name="photo"
        placeholder="Photo URL"
        value={newProfile.photo}
        onChange={handleInputChange}
      />
      <input
        type="text"
        name="description"
        placeholder="Description"
        value={newProfile.description}
        onChange={handleInputChange}
      />
      <input
        type="text"
        name="address"
        placeholder="Address"
        value={newProfile.address}
        onChange={handleInputChange}
      />
      <button className="add-profile-btn" onClick={handleAddProfile}>
        Add Profile
      </button>
    </div>
  );
};

export default AdminPanel;
