import React, { useState, useContext } from "react";
import { PostContext } from "../context/PostContext";
import { useNavigate } from "react-router-dom";

const CreatePost = () => {
  const { addPost } = useContext(PostContext);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() && description.trim()) {
      addPost(title, description);
      navigate("/community");
    }
  };

  return (
    <div className="min-h-screen bg-[#fff3e0] flex justify-center items-center px-4 py-10">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-xl border border-orange-200">
        <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">Create a New Post</h2>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-gray-700 font-medium mb-1">Title</label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:border-[#FF8000]"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-1">Description</label>
            <textarea
              className="w-full border border-gray-300 rounded-md p-3 h-32 resize-none focus:outline-none focus:border-[#FF8000]"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-[#FF8000] text-white px-6 py-3 rounded-md font-semibold hover:bg-orange-600 transition"
          >
            Post Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreatePost;
