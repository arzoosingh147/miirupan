import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { PostContext } from "../context/PostContext";
import { useNavigate } from "react-router-dom";

const UserDashboard = () => {
  const { user, setUser } = useContext(AuthContext);
  const { posts } = useContext(PostContext);
  const [userProjects, setUserProjects] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem("miirupan-user");
    if (!user && storedUser) {
      setUser(JSON.parse(storedUser));
    }

    if (user?.email) {
      const allProjects = JSON.parse(localStorage.getItem("miirupan-projects")) || [];
      const filteredProjects = allProjects.filter(p => p.authorEmail === user.email);
      setUserProjects(filteredProjects);
    }
  }, [user]);

  const userPosts = posts.filter(post => post.authorEmail === user?.email);

  if (!user) {
    return <p className="text-center font-bold bg-[#F7CB46] pt-40 pb-40">Please log in to view your dashboard.</p>;
  }

  return (
    <div className="p-6 bg-[#F7CB46] min-h-screen">
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-xl shadow-lg border-4 border-black">
        <h2 className="text-3xl font-bold text-black mb-4">
          Welcome, {user.name} 
        </h2>

        <p className="mb-6 text-gray-700">Here's a summary of your activity:</p>

        <div className="mb-6">
          <h3 className="text-xl font-bold text-black mb-2">Your Community Posts</h3>
          {userPosts.length > 0 ? (
            userPosts.map((post) => (
              <div
                key={post.id}
                onClick={() => navigate(`/post/${post.id}`)}
                className="p-4 border-4 border-black rounded-xl mb-2 cursor-pointer hover:bg-gray-100 transition"
              >
                <h4 className="font-bold text-black">{post.title}</h4>
                <p className="text-gray-600">{post.description}</p>
              </div>
            ))
          ) : (
            <p className="text-gray-500">You haven't made any community posts yet.</p>
          )}
        </div>

        <div>
          <h3 className="text-xl font-bold text-black mb-2">Your Projects</h3>
          {userProjects.length > 0 ? (
            userProjects.map((project, index) => (
              <div
                key={index}
                className="p-4 border-4 border-black rounded-xl mb-2"
              >
                <h4 className="font-bold text-black">{project.title}</h4>
                <p className="text-gray-600">{project.description}</p>
              </div>
            ))
          ) : (
            <p className="text-gray-500">You haven't posted any projects yet.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
