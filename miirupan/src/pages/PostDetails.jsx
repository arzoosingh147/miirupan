import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { PostContext } from "../context/PostContext";

const PostDetails = () => {
  const { id } = useParams();
  const { posts, addComment } = useContext(PostContext);
  const post = posts.find((p) => p.id === id);

  const [comment, setComment] = useState("");

  if (!post) return <div className="p-6 text-center">Post not found.</div>;

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (comment.trim()) {
      addComment(id, comment);
      setComment("");
    }
  };

  return (
    <div className="min-h-screen bg-[#fff3e0] px-4 py-12 flex justify-center">
      <div className="max-w-3xl w-full bg-white shadow-xl rounded-lg p-8 border border-orange-100">
        <h2 className="text-3xl font-bold text-gray-800 mb-3">{post.title}</h2>
        <p className="text-gray-600 mb-4">{post.description}</p>
        <p className="text-sm text-gray-400 mb-6">
          Posted on {new Date(post.createdAt).toLocaleString()}
        </p>

        <hr className="my-6" />
        <h3 className="text-xl font-semibold mb-4">Comments</h3>

        <form onSubmit={handleCommentSubmit} className="mb-6 space-y-3">
          <textarea
            className="w-full border rounded-md p-3 h-24 resize-none focus:outline-none focus:ring-2 focus:ring-orange-300"
            placeholder="Leave a comment..."
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
          <button
            type="submit"
            className="bg-[#FF8000] text-white px-6 py-2 rounded-md font-semibold hover:bg-orange-600 transition"
          >
            Add Comment
          </button>
        </form>

        <div className="space-y-4">
          {post.comments.length > 0 ? (
            post.comments.map((c) => (
              <div key={c.id} className="bg-[#fff6ee] p-3 rounded shadow-sm">
                <p className="text-gray-700">{c.text}</p>
                <span className="text-xs text-gray-400 block mt-1">
                  {new Date(c.createdAt).toLocaleString()}
                </span>
              </div>
            ))
          ) : (
            <p className="text-gray-500">No comments yet.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default PostDetails;
