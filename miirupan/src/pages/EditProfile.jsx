import React, { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const EditProfile = () => {
  const { user, setUser } = useContext(AuthContext);
  const [name, setName] = useState(user?.name || "");
  const [bio, setBio] = useState(user?.bio || "");
  const [avatar, setAvatar] = useState(user?.avatar || "");

  const navigate = useNavigate();

  const handleSave = () => {
    if (!name || !bio || !avatar) {
      alert("Please fill out all fields.");
      return;
    }

    setUser({ ...user, name, bio, avatar });
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen bg-[#FFF6E5] flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-lg bg-white p-8 border-4 border-black rounded-xl shadow-lg">
        <h2 className="text-2xl font-bold text-center text-black mb-6">Edit Profile</h2>

        <div className="space-y-5">
          <div>
            <label className="text-sm font-semibold text-black">Full Name</label>
            <input
              type="text"
              className="w-full mt-1 p-3 rounded-lg border-4 border-black"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div>
            <label className="text-sm font-semibold text-black">Bio</label>
            <input
              type="text"
              className="w-full mt-1 p-3 rounded-lg border-4 border-black"
              value={bio}
              onChange={(e) => setBio(e.target.value)}
              placeholder="Your profession, hobbies, etc."
            />
          </div>

          <div>
            <label className="text-sm font-semibold text-black">Avatar URL</label>
            <input
              type="text"
              className="w-full mt-1 p-3 rounded-lg border-4 border-black"
              value={avatar}
              onChange={(e) => setAvatar(e.target.value)}
              placeholder="https://i.pravatar.cc/150?u=..."
            />
          </div>

          <button
            onClick={handleSave}
            className="w-full bg-[#FF8000] hover:bg-[#FFD9B3] text-black py-3 rounded-lg font-semibold"
          >
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
