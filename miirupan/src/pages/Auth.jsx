import React, { useState } from "react";
import { motion } from "framer-motion";

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleMode = () => setIsLogin(!isLogin);

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

        <form className="space-y-5">
          {!isLogin && (
            <div>
              <label className="text-sm font-semibold text-black">Full Name</label>
              <input
                type="text"
                placeholder="John Doe"
                className="w-full mt-1 p-3 rounded-lg bg-white border-4 border-black focus:ring-2 focus:ring-[#F196E4]"
              />
            </div>
          )}

          <div>
            <label className="text-sm font-semibold text-black">Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full mt-1 p-3 rounded-lg bg-white border-4 border-black focus:ring-2 focus:ring-[#F196E4]"
            />
          </div>

          <div>
            <label className="text-sm font-semibold text-black">Password</label>
            <input
              type="password"
              placeholder="********"
              className="w-full mt-1 p-3 rounded-lg bg-white border-4 border-black focus:ring-2 focus:ring-[#F196E4]"
            />
          </div>

          {!isLogin && (
            <div>
              <label className="text-sm font-semibold text-black">Confirm Password</label>
              <input
                type="password"
                placeholder="********"
                className="w-full mt-1 p-3 rounded-lg bg-white border-4 border-black focus:ring-2 focus:ring-[#F196E4]"
              />
            </div>
          )}

          <button
            type="submit"
            className="w-full py-3 bg-[#FF8000] hover:bg-[#FFD9B3] rounded-lg font-semibold transition"
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
