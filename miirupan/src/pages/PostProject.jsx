import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const PostProject = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [skills, setSkills] = useState("");

  const navigate = useNavigate();
  const { user } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !description || !category) {
      alert("Please fill out all required fields.");
      return;
    }

    const newProject = {
      title,
      description,
      category,
      skills, 
      authorEmail: user?.email,
      createdAt: new Date().toISOString()
    };

    const existingProjects = JSON.parse(localStorage.getItem("miirupan-projects")) || [];
    const updatedProjects = [...existingProjects, newProject];
    localStorage.setItem("miirupan-projects", JSON.stringify(updatedProjects));

    setTitle("");
    setDescription("");
    setCategory("");
    setSkills("");

    alert("Project posted successfully!");
    navigate("/find-work");
  };

  return (
    <div className="min-h-screen bg-[#F7CB46] text-white flex items-center justify-center px-4 py-16">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-lg bg-white rounded-2xl shadow-lg p-8 space-y-6"
      >
        <h2 className="text-3xl font-bold text-center text-black mb-4">
          Post a Project
        </h2>

        <div>
          <label className="text-black block text-sm font-bold mb-1">Project Title</label>
          <input
            type="text"
            className="border-4 border-black w-full px-4 py-2 bg-white text-black rounded-xl"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Ex: Build a Portfolio Website"
            required
          />
        </div>

        <div>
          <label className="text-black block text-sm font-bold mb-1">Description</label>
          <textarea
            className="border-4 border-black w-full px-4 py-2 bg-white text-black rounded-xl"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Brief overview of your project..."
            rows="4"
            required
          ></textarea>
        </div>

        <div>
          <label className="text-black block text-sm font-bold mb-1">Category</label>
          <input
            type="text"
            className="border-4 border-black w-full px-4 py-2 bg-white text-black rounded-xl"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            placeholder="Ex: Frontend, UI/UX, Backend, etc."
            required
          />
        </div>

        <div>
          <label className="text-black block text-sm font-bold mb-1">Skills</label>
          <input
            type="text"
            className="border-4 border-black w-full px-4 py-2 bg-white text-black rounded-xl"
            value={skills}
            onChange={(e) => setSkills(e.target.value)}
            placeholder="Ex: React, Firebase, TailwindCSS"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-[#FF8000] hover:bg-[#ffa645] text-white font-semibold py-2 px-4 rounded-xl"
        >
          Post Project
        </button>
      </form>
    </div>
  );
};

export default PostProject;
