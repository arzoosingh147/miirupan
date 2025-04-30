import React, { useContext, useState } from "react";
import { PostContext } from "../context/PostContext";

const Community = () => {
  const { posts, addPost, updateVotes, addComment } = useContext(PostContext);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [tag, setTag] = useState("project");
  const [filter, setFilter] = useState("all");
  const [commentInput, setCommentInput] = useState({});
  const [replyInput, setReplyInput] = useState({});
  const [showReplyBox, setShowReplyBox] = useState({});

  // Likes and Saves States
  const [likes, setLikes] = useState({});
  const [saved, setSaved] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !description) return;
    addPost(title, description, tag);
    setTitle("");
    setDescription("");
    setTag("project");
  };

  const handleCommentSubmit = (e, postId) => {
    e.preventDefault();
    if (!commentInput[postId]) return;
    addComment(postId, commentInput[postId]);
    setCommentInput({ ...commentInput, [postId]: "" });
  };

  const handleReplySubmit = (e, postId, commentIndex) => {
    e.preventDefault();
    if (!replyInput[`${postId}-${commentIndex}`]) return;
    addComment(postId, replyInput[`${postId}-${commentIndex}`], commentIndex);
    setReplyInput({ ...replyInput, [`${postId}-${commentIndex}`]: "" });
    setShowReplyBox({ ...showReplyBox, [`${postId}-${commentIndex}`]: false });
  };

  // Like & Save Handlers
  const toggleLike = (postId) => {
    setLikes((prev) => ({ ...prev, [postId]: !prev[postId] }));
  };

  const toggleSave = (postId) => {
    setSaved((prev) => ({ ...prev, [postId]: !prev[postId] }));
  };

  const filteredPosts =
    filter === "all" ? posts : posts.filter((post) => post.tag === filter);

  const renderTagBadge = (tag) => {
    let color = "";
    switch (tag) {
      case "project":
        color = "bg-blue-100 text-blue-700";
        break;
      case "guidance":
        color = "bg-green-100 text-green-700";
        break;
      case "skills":
        color = "bg-purple-100 text-purple-700";
        break;
      default:
        color = "bg-gray-100 text-gray-700";
    }
    return (
      <span
        className={`px-3 py-1 rounded-full text-xs font-semibold ${color}`}
      >
        {tag.toUpperCase()}
      </span>
    );
  };

  return (
    <div className="min-h-screen bg-[#F196E4] px-6 py-10">
      <h1 className="text-4xl font-bold mb-8 text-center">Community Forum</h1>

      {/* Filter Dropdown */}
      <div className="flex justify-center mb-6">
        <select
          className="border-4 border-black font-semibold px-4 py-2 rounded-lg"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="all">All</option>
          <option value="project">Projects</option>
          <option value="guidance">Guidance</option>
          <option value="skills">Skill Pitch</option>
        </select>
      </div>

      {/* Post Form */}
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg max-w-2xl mx-auto mb-10 shadow-md border-4 border-black"
      >
        <h2 className="text-2xl font-bold mb-4">Create a Post</h2>
        <input
          type="text"
          placeholder="Title"
          className="w-full p-3 mb-4 border-4 border-black font-semibold rounded-lg"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="What's on your mind?"
          className="w-full p-3 mb-4 border-4 border-black font-semibold rounded-lg"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <select
          className="w-full p-3 mb-4 border-4 border-black font-semibold font-semibold rounded-lg"
          value={tag}
          onChange={(e) => setTag(e.target.value)}
        >
          <option value="project">Project</option>
          <option value="guidance">Guidance</option>
          <option value="skills">Skill Pitch</option>
        </select>
        <button
          type="submit"
          className="bg-[#FF8000] border-4 border-black hover:bg-[#ffa645] text-white px-6 py-2 rounded-lg font-semibold"
        >
          Post
        </button>
      </form>

      {/* Posts List */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredPosts.length === 0 ? (
          <p className="text-center text-gray-500 col-span-full">No posts found.</p>
        ) : (
          filteredPosts.map((post) => (
            <div
              key={post.id}
              className="bg-white p-5 rounded-xl shadow hover:shadow-md transition-all border-4 border-black flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-bold">{post.title}</h3>
                  {renderTagBadge(post.tag)}
                </div>
                <p className="text-gray-700">{post.description}</p>
              </div>

              {/* Vote & Like/Save Buttons */}
              <div className="flex items-center justify-between mt-4 mb-2">
                <div className="flex space-x-4">
                  <button
                    onClick={() => updateVotes(post.id, "upvote")}
                    className="text-green-600 hover:text-green-800 font-semibold"
                  >
                    ⬆ {post.votes.up}
                  </button>
                  <button
                    onClick={() => updateVotes(post.id, "downvote")}
                    className="text-red-600 hover:text-red-800 font-semibold"
                  >
                    ⬇ {post.votes.down}
                  </button>
                </div>

                {/* Like & Save Buttons */}
                <div className="flex space-x-3">
                  <button
                    onClick={() => toggleLike(post.id)}
                    className={`text-sm font-semibold ${likes[post.id] ? "text-pink-600" : "text-gray-500"}`}
                  >
                    {likes[post.id] ? "Liked" : "Like"}
                  </button>
                  <button
                    onClick={() => toggleSave(post.id)}
                    className={`text-sm font-semibold ${saved[post.id] ? "text-yellow-600" : "text-gray-500"}`}
                  >
                    {saved[post.id] ? "Saved" : "Save"}
                  </button>
                </div>
              </div>

              {/* Comments */}
              <div className="mt-4 space-y-2">
                {post.comments && post.comments.map((comment, index) => (
                  <div key={index} className="bg-gray-100 p-2 rounded-md">
                    <p className="font-medium">{comment.text}</p>
                    {/* Replies */}
                    <div className="ml-4 mt-2 space-y-1">
                      {comment.replies?.map((reply, rIdx) => (
                        <p
                          key={rIdx}
                          className="text-sm bg-white p-2 rounded-md border border-gray-300"
                        >
                          ↳ {reply}
                        </p>
                      ))}
                      {/* Reply Input */}
                      {showReplyBox[`${post.id}-${index}`] ? (
                        <form
                          onSubmit={(e) => handleReplySubmit(e, post.id, index)}
                          className="flex space-x-2 mt-2"
                        >
                          <input
                            type="text"
                            placeholder="Write a reply..."
                            className="flex-1 p-2 border border-black rounded"
                            value={replyInput[`${post.id}-${index}`] || ""}
                            onChange={(e) =>
                              setReplyInput({
                                ...replyInput,
                                [`${post.id}-${index}`]: e.target.value,
                              })
                            }
                          />
                          <button
                            type="submit"
                            className="bg-black text-white px-3 rounded"
                          >
                            Reply
                          </button>
                        </form>
                      ) : (
                        <button
                          onClick={() =>
                            setShowReplyBox({
                              ...showReplyBox,
                              [`${post.id}-${index}`]: true,
                            })
                          }
                          className="text-sm text-blue-600 mt-1 hover:underline"
                        >
                          Reply
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Add Comment Form */}
              <form
                onSubmit={(e) => handleCommentSubmit(e, post.id)}
                className="mt-4 flex space-x-2"
              >
                <input
                  type="text"
                  placeholder="Add a comment..."
                  className="flex-1 p-2 border border-black rounded"
                  value={commentInput[post.id] || ""}
                  onChange={(e) =>
                    setCommentInput({ ...commentInput, [post.id]: e.target.value })
                  }
                />
                <button
                  type="submit"
                  className="bg-black text-white px-3 rounded"
                >
                  Comment
                </button>
              </form>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Community;
