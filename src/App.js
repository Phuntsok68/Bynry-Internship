import React, { useState } from "react";
import ProfileCard from "./profileCard";
import Map from "./map";
import AdminPanel from "./adminPanel";
import "./app.css";
import "./index.css";

const App = () => {
  const [profiles, setProfiles] = useState([
    {
      id: 1,
      name: "Tenzin Dawa",
      photo: "./images/1.jpeg",
      description: "Software Engineer from Delhi",
      address:
        "House No. 6, 1st Floor, Majnu-ka-tilla, New Aruna Nagar, New Delhi 110054",
    },
    {
      id: 2,
      name: "Deepanathan",
      photo: "./images/3.jpeg",
      description: "Graphic Designer from Pune",
      address: "Indian Institute of Science Education and Research Pune 411008",
    },
    {
      id: 3,
      name: "Tenzin Gaphel",
      photo: "./images/2.jpeg",
      description: "Project Manager from Bangalore",
      address:
        "1st Floor, Prestige Ferozes, Sampangi, Sri Rama Temple Rd, Vasanth Nagar, Bengaluru, Karnataka 560052",
    },
    {
      id: 4,
      name: "Tenzin Phuntsok",
      photo: "./images/4.jpeg",
      description: "Full-stack developer from Himachal",
      address:
        "Dharamkot Rd, McLeod Ganj, Dharamshala, Himachal Pradesh 176219",
    },
  ]);

  const [selectedProfile, setSelectedProfile] = useState(null);

  const handleSelectProfile = (profile) => {
    setSelectedProfile(profile);
  };

  return (
    <div className="app">
      <header className="app-header">
        <h1>Profile Explorer</h1>
      </header>
      <main>
        <div className="profile-list">
          {profiles.map((profile) => (
            <ProfileCard
              key={profile.id}
              profile={profile}
              onSelectProfile={handleSelectProfile}
            />
          ))}
        </div>
        {selectedProfile && <Map profile={selectedProfile} />}
      </main>
      <AdminPanel profiles={profiles} setProfiles={setProfiles} />
    </div>
  );
};

export default App;
