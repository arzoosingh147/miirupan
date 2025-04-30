import React from "react";
import { Briefcase, Users, Rocket, PenTool, Star } from "lucide-react";

const features = [
  {
    title: "Post Projects Easily",
    description: "Clients can quickly post new freelance-friendly projects and connect with the right talent.",
    icon: <Briefcase size={28} className="text-[#E39AE1]" />,
  },
  {
    title: "Find Team Members",
    description: "Freelancers can join forces with others on exciting, real-world projects.",
    icon: <Users size={28} className="text-[#E39AE1]" />,
  },
  {
    title: "Real-Time Collaboration",
    description: "Work together smoothly with intuitive tools, feedback options, and status tracking.",
    icon: <Rocket size={28} className="text-[#E39AE1]" />,
  },
  {
    title: "Showcase Your Skills",
    description: "Create your public profile to stand out and build a solid freelance portfolio.",
    icon: <PenTool size={28} className="text-[#E39AE1]" />,
  },
  {
    title: "Earn & Grow",
    description: "Get recognition, testimonials, and future opportunities by contributing to real projects.",
    icon: <Star size={28} className="text-[#E39AE1]" />,
  },
];

const Features = () => {
  return (
    <section className="bg-[#F7CB46] py-20 px-6 md:px-20">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        Why <span className="text-white">miirupan?</span>
      </h2>
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((feature, index) => (
          <div
            key={index}
            className=" border-4 border-black bg-[white] p-6 rounded-xl shadow hover:shadow-2xl transition-all duration-300"
          >
            <div className="mb-4">{feature.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-700">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
