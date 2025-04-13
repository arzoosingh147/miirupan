import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const PostProject = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !description || !category) {
      alert("Please fill out all fields.");
      return;
    }

    const newProject = {
      title,
      description,
      category,
    };

    const existingProjects = JSON.parse(localStorage.getItem("miirupan-projects")) || [];
    const updatedProjects = [...existingProjects, newProject];
    localStorage.setItem("miirupan-projects", JSON.stringify(updatedProjects));

    // Clear the form
    setTitle("");
    setDescription("");
    setCategory("");

    alert(" Project posted successfully!");

    // Navigate to /projects
    navigate("/projects");
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
          <label className=" text-black block text-sm font-bold mb-1">Project Title</label>
          <input
            type="text"
            className="border-4 border-black w-full px-4 py-2 bg-white text-black rounded-xl focus:outline-none focus:ring-2 focus:ring-[#F196E4]"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Ex: Build a Portfolio Website"
          />
        </div>

        <div>
          <label className="text-black block text-sm font-bold mb-1">Description</label>
          <textarea
            className="border-4 border-black w-full px-4 py-2 bg-white text-black rounded-xl focus:outline-none focus:ring-2 focus:ring-[#F196E4]"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Brief overview of your project..."
            rows="4"
          ></textarea>
        </div>

        <div>
          <label className="text-black block text-sm font-bold mb-1">Category</label>
          <input
            type="text"
            className="border-4 border-black w-full px-4 py-2 bg-white text-black rounded-xl focus:outline-none focus:ring-2 focus:ring-[#F196E4]"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            placeholder="Ex: Frontend, UI/UX, Backend, etc."
          />
        </div>

        <button
          type="submit"
          className="w-full bg-[#FF8000] hover:bg-[#ffa645] text-white font-semibold py-2 px-4 rounded-xl transition-all"
        >
          Post Project 
        </button>
      </form>
    </div>
  );
};

export default PostProject;
