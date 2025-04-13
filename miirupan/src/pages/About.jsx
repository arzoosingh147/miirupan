import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="min-h-screen bg-[#F196E4] text-white px-6 py-16">
      <motion.h1
        className="text-4xl sm:text-5xl font-bold text-center mb-12 text-black"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        About miirupan
      </motion.h1>

      <div className="max-w-4xl mx-auto space-y-16">
        {/* What is miirupan */}
        <motion.div
          className="bg-white rounded-2xl p-6 sm:p-10 shadow-xl border-4 border-black"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl font-bold text-black mb-4">What is miirupan?</h2>
          <p className="text-black text-lg">
            miirupan is a freelance collaboration hub designed to connect developers, designers,
            and writers in a friendly and productive space. It’s your go-to platform to post
            projects, find teammates, showcase skills, and build epic stuff together.
          </p>
        </motion.div>

        {/* Why it exists */}
        <motion.div
          className="bg-white rounded-2xl p-6 sm:p-10 shadow-xl border-4 border-black"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <h2 className="text-2xl font-bold text-black mb-4">Why miirupan?</h2>
          <p className="text-black text-lg">
            Most freelancers struggle to find reliable collaborators or fun passion projects to work
            on. miirupan solves that by making it easier to find like-minded creatives and build
            stuff that matters—together. Whether you're a coder, writer, or designer, this is your
            digital playground.
          </p>
        </motion.div>

        {/* How it works */}
        <motion.div
          className="bg-white rounded-2xl p-6 sm:p-10 shadow-xl border-4 border-black"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="text-2xl font-bold text-black mb-4">How does it work?</h2>
          <ul className="list-disc list-inside text-black space-y-2 text-lg">
            <li> Post your project ideas and describe what you need</li>
            <li>Collaborators can apply to join based on their skills</li>
            <li>Explore other projects and apply to join cool teams</li>
            <li> Connect, build, and grow together!</li>
          </ul>
        </motion.div>

        {/* Who built it */}
        <motion.div
          className="bg-white rounded-2xl p-6 sm:p-10 shadow-xl border-4 border-black"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h2 className="text-2xl font-bold text-black mb-4">Who built this?</h2>
          <p className="text-black text-lg">
            Hi, I’m Arzoo – a passionate web developer and builder who loves turning ideas into
            interactive experiences. miirupan is my portfolio-worthy React + Tailwind + Framer
            Motion project that I hope helps other freelancers just like me!
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
