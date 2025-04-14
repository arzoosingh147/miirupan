import React, { useState, useContext } from "react";
import { motion } from "framer-motion";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const { setUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const toggleMode = () => setIsLogin(!isLogin);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password || (!isLogin && (!name || password !== confirmPassword))) {
      alert("Please fill all fields correctly.");
      return;
    }

    const newUser = {
      name: isLogin ? "Miirupan User" : name,
      email,
      avatar: "https://i.pravatar.cc/150?u=" + email,
      bio: "Freelancer at Miirupan 💼",
      posts: [],
    };

    setUser(newUser);
    navigate("/userdashboard");
  };

  return (
    <div className="min-h-screen bg-[#F7CB46] text-white flex items-center justify-center px-4 py-12">
      <motion.div
        className="w-full max-w-md bg-white p-8 rounded-xl border-4 border-black shadow-lg"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold text-center text-black mb-6">
          {isLogin ? " Login" : " Register"}
        </h2>

        <form className="space-y-5" onSubmit={handleSubmit}>
          {!isLogin && (
            <div>
              <label className="text-sm font-semibold text-black">Full Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="John Doe"
                className="w-full mt-1 p-3 rounded-lg bg-white text-black border-4 border-black focus:ring-2 focus:ring-[#F196E4]"
              />
            </div>
          )}

          <div>
            <label className="text-sm font-semibold text-black">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="w-full mt-1 p-3 rounded-lg bg-white text-black border-4 border-black focus:ring-2 focus:ring-[#F196E4]"
            />
          </div>

          <div>
            <label className="text-sm font-semibold text-black">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="********"
              className="w-full mt-1 p-3 rounded-lg bg-white text-black border-4 border-black focus:ring-2 focus:ring-[#F196E4]"
            />
          </div>

          {!isLogin && (
            <div>
              <label className="text-sm font-semibold text-black">Confirm Password</label>
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="********"
                className="w-full mt-1 p-3 rounded-lg bg-white text-black border-4 border-black focus:ring-2 focus:ring-[#F196E4]"
              />
            </div>
          )}

          <button
            type="submit"
            className="w-full py-3 bg-[#FF8000] hover:bg-[#FFD9B3] text-black rounded-lg font-semibold transition"
          >
            {isLogin ? "Login" : "Register"}
          </button>
        </form>

        <p className="text-center text-sm mt-6 text-gray-400">
          {isLogin ? "Don't have an account?" : "Already have an account?"}
          <button
            onClick={toggleMode}
            className="ml-2 text-[#FF8000] hover:underline focus:outline-none"
          >
            {isLogin ? "Register" : "Login"}
          </button>
        </p>
      </motion.div>
    </div>
  );
};

export default Auth;
