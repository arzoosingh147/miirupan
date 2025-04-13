import React from "react";
import { Link, Outlet } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const DashboardLayout = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="min-h-screen flex bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white p-6 shadow-xl hidden md:block">
        <div className="mb-10 text-center">
          <img
            src={user?.avatar || "https://i.pravatar.cc/100"}
            alt="Profile"
            className="w-20 h-20 mx-auto rounded-full"
          />
          <h2 className="mt-2 font-bold">{user?.name || "User"}</h2>
          <p className="text-sm text-gray-500">{user?.email}</p>
        </div>
        <nav className="space-y-4">
          <Link to="/dashboard" className="block hover:text-blue-600">🏠 Dashboard</Link>
          <Link to="/dashboard/posts" className="block hover:text-blue-600">📁 My Posts</Link>
          <Link to="/edit-profile" className="block hover:text-blue-600">✏️ Edit Profile</Link>
          <Link to="/logout" className="block hover:text-red-600">🚪 Logout</Link>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        <Outlet />
      </main>
    </div>
  );
};

export default DashboardLayout;
