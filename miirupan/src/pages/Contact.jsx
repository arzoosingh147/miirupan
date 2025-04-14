import React from "react";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div className="min-h-screen bg-[#F7CB46] text-white px-6 py-16">
      <motion.h1
        className="text-4xl sm:text-5xl font-bold text-center mb-12 text-black"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Get in Touch
      </motion.h1>

      <motion.div
        className="max-w-3xl mx-auto bg-white p-8 rounded-2xl border-4 border-black shadow-xl"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <p className="text-black mb-6 text-lg font-bold text-center">
          Have a question, want to collaborate, or just want to say hi? Drop me a message
          below—I'd love to hear from you!
        </p>

        <form className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-black mb-1">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full p-3 rounded-lg bg-white text-white border-4 border-black focus:outline-none focus:ring-2 focus:ring-[#F196E4]"
              placeholder="Your Name"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-black mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full p-3 rounded-lg bg-white text-white border-4 border-black focus:outline-none focus:ring-2 focus:ring-[#F196E4]"
              placeholder="your@email.com"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-black mb-1">
              Message
            </label>
            <textarea
              id="message"
              rows="5"
              className="w-full p-3 rounded-lg bg-white text-black border-4 border-black focus:outline-none focus:ring-2 focus:ring-[#F196E4]"
              placeholder="Write your message here..."
            ></textarea>
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="px-6 py-3 bg-[#FF8000] text-white rounded-full font-semibold hover:bg-[#FFD9B3] transition"
            >
              Send Message
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  );
};

export default Contact;
