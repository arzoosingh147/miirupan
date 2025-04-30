import React, { useEffect, useState } from "react";

const staticProjects = [
  {
    title: "Portfolio Website for a Designer",
    description: "Need a React dev to help build a minimalist portfolio site for a fashion designer.",
    category: "Web Development",
    skills: "React, TailwindCSS, Framer Motion",
    contact: "https://linkedin.com/in/designer123",
    createdAt: "2024-10-01T10:00:00Z"
  },
  {
    title: "Figma to HTML Conversion",
    description: "I have a complete Figma file and need someone to turn it into responsive HTML/CSS.",
    category: "UI/UX Design",
    skills: "HTML, CSS, Figma",
    contact: "https://linkedin.com/in/frontendqueen",
    createdAt: "2024-10-10T15:00:00Z"
  },
  {
    title: "Mobile App for Study Tracker",
    description: "Looking for a Flutter developer to create a habit/study tracker for students.",
    category: "Mobile App",
    skills: "Flutter, Firebase",
    contact: "https://linkedin.com/in/techyteens",
    createdAt: "2024-11-05T09:30:00Z"
  }
];

const FindWork = () => {
  const [projects, setProjects] = useState([]);
  const [sortNewestFirst, setSortNewestFirst] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedSkill, setSelectedSkill] = useState("All");

  const getUniqueOptions = (items, key) => {
    const allItems = items.flatMap(item => item[key]?.split(",").map(s => s.trim()) || []);
    return Array.from(new Set(allItems));
  };

  useEffect(() => {
    const storedProjects = JSON.parse(localStorage.getItem("miirupan-projects")) || [];

    const formattedUserProjects = storedProjects.map((p) => ({
      ...p,
      contact: `mailto:${p.authorEmail}`,
      skills: p.skills || "", 
    }));

    const all = [...staticProjects, ...formattedUserProjects];
    setProjects(all);
  }, []);

  const filteredProjects = projects
    .filter((p) =>
      selectedCategory === "All" || p.category.toLowerCase() === selectedCategory.toLowerCase()
    )
    .filter((p) => {
      if (selectedSkill === "All") return true;
      const skillsArray = p.skills?.toLowerCase().split(",").map(s => s.trim());
      return skillsArray?.includes(selectedSkill.toLowerCase());
    })
    .sort((a, b) => {
      const dateA = new Date(a.createdAt);
      const dateB = new Date(b.createdAt);
      return sortNewestFirst ? dateB - dateA : dateA - dateB;
    });

  const allCategories = ["All", ...getUniqueOptions(projects, "category")];
  const allSkills = ["All", ...getUniqueOptions(projects, "skills")];

  return (
    <section className="min-h-screen px-4 md:px-20 py-16 bg-[#F196E4] text-[#1c1c1c]">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
        Find <span className="text-white">Projects</span>
      </h2>

      {/* Filters */}
      <div className="flex flex-wrap gap-4 justify-center mb-10">
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="px-4 py-2 rounded-xl border-2 border-black bg-white text-black"
        >
          {allCategories.map((cat, idx) => (
            <option key={idx} value={cat}>
              {cat}
            </option>
          ))}
        </select>

        <select
          value={selectedSkill}
          onChange={(e) => setSelectedSkill(e.target.value)}
          className="px-4 py-2 rounded-xl border-2 border-black bg-white text-black"
        >
          {allSkills.map((skill, idx) => (
            <option key={idx} value={skill}>
              {skill}
            </option>
          ))}
        </select>

        <button
          onClick={() => setSortNewestFirst(!sortNewestFirst)}
          className="px-4 py-2 rounded-xl bg-[#FF8000] hover:bg-[#ffa645] text-white font-semibold"
        >
          Sort: {sortNewestFirst ? "Newest First" : "Oldest First"}
        </button>
      </div>

      {/* Project Grid */}
      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {filteredProjects.map((project, index) => (
          <div
            key={index}
            className="bg-white border-4 border-black shadow-md rounded-xl p-6 hover:shadow-xl transition-all"
          >
            <h3 className="text-xl font-bold mb-2">{project.title}</h3>
            <p className="text-black mb-3">{project.description}</p>
            <div className="text-sm text-gray-600 mb-1">
              <strong>Category:</strong> {project.category}
            </div>
            {project.skills && (
              <div className="text-sm text-gray-600 mb-1">
                <strong>Skills:</strong> {project.skills}
              </div>
            )}
            {project.createdAt && (
              <div className="text-sm text-gray-600 mb-1">
                <strong>Posted:</strong>{" "}
                {new Date(project.createdAt).toLocaleDateString()}
              </div>
            )}
            {project.contact && (
              <a
                href={project.contact}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-3 text-[#FF8000] font-medium hover:underline"
              >
                Contact Poster →
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FindWork;
