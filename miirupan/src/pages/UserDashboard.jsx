import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext"; // Adjust path based on your setup

const UserDashboard = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleEdit = () => {
    navigate("/edit-profile");
  };

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  if (!user) {
    return (
      <div className="text-center mt-20 text-xl text-gray-500">
        You must be logged in to view the dashboard.
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold mb-6">👋 Welcome, {user.name}</h1>

      <div className="bg-white rounded-xl shadow-lg p-6 flex items-center space-x-6">
        <img
          src={user.avatar || "https://i.pravatar.cc/150?img=3"}
          alt="User Avatar"
          className="w-20 h-20 rounded-full object-cover"
        />
        <div>
          <h2 className="text-xl font-semibold">{user.name}</h2>
          <p className="text-gray-600">{user.email}</p>
          <p className="text-gray-500 mt-1 italic">{user.bio || "No bio yet."}</p>
        </div>
      </div>

      <div className="mt-6 flex space-x-4">
        <button
          onClick={handleEdit}
          className="bg-blue-600 text-white px-5 py-2 rounded-lg shadow hover:bg-blue-700"
        >
          Edit Profile
        </button>
        <button
          onClick={handleLogout}
          className="bg-red-500 text-white px-5 py-2 rounded-lg shadow hover:bg-red-600"
        >
          Logout
        </button>
      </div>

      {/* User's content */}
      <div className="mt-10">
        <h3 className="text-2xl font-semibold mb-4">📝 Your Posts</h3>
        {user.posts && user.posts.length > 0 ? (
          <ul className="space-y-4">
            {user.posts.map((post) => (
              <li key={post.id} className="bg-gray-50 p-4 rounded-lg shadow">
                <h4 className="text-lg font-bold">{post.title}</h4>
                <p className="text-gray-700">{post.description}</p>
                <span className="text-sm text-purple-600">#{post.tag}</span>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-600">You haven't posted anything yet.</p>
        )}
      </div>
    </div>
  );
};

export default UserDashboard;
