// src/pages/FindWork.jsx

import React from "react";

const projects = [
  {
    title: "Portfolio Website for a Designer",
    description: "Need a React dev to help build a minimalist portfolio site for a fashion designer.",
    category: "Web Development",
    skills: "React, TailwindCSS, Framer Motion",
    contact: "https://linkedin.com/in/designer123"
  },
  {
    title: "Figma to HTML Conversion",
    description: "I have a complete Figma file and need someone to turn it into responsive HTML/CSS.",
    category: "UI/UX Design",
    skills: "HTML, CSS, Figma",
    contact: "https://linkedin.com/in/frontendqueen"
  },
  {
    title: "Mobile App for Study Tracker",
    description: "Looking for a Flutter developer to create a habit/study tracker for students.",
    category: "Mobile App",
    skills: "Flutter, Firebase",
    contact: "https://linkedin.com/in/techyteens"
  }
];

const FindWork = () => {
  return (
    <section className="min-h-screen px-4 md:px-20 py-16 bg-[#F196E4] text-[#1c1c1c]">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
        Find <span className="text-white">Projects</span>
      </h2>

      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white border-4 border-black shadow-md rounded-xl p-6 hover:shadow-xl transition-all"
          >
            <h3 className="text-xl font-bold mb-2">{project.title}</h3>
            <p className="text-black mb-3">{project.description}</p>
            <div className="text-sm text-gray-600 mb-2">
              <strong>Category:</strong> {project.category}
            </div>
            <div className="text-sm text-gray-600 mb-2">
              <strong>Skills:</strong> {project.skills}
            </div>
            <a
              href={project.contact}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-3 text-[#FF8000] font-medium hover:underline"
            >
              Contact Poster →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FindWork;
