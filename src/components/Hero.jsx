import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-[#F196E4] px-4 md:px-20 text-center">
      <div className="max-w-4xl">
        {/* Heading animation */}
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-bold text-[#1c1c1c] leading-tight"
        >
          Empowering <span className="text-white">Freelancers</span> <br />
          One Collaboration at a Time.
        </motion.h1>

        {/* Paragraph animation */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
          viewport={{ once: true }}
          className="mt-6 text-lg md:text-xl text-gray-600"
        >
          miirupan is your creative space to find collaborators, post projects, and track progress — all in one place.
        </motion.p>

        {/* Button animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-8 flex justify-center gap-4"
        >
          <button className="border-4 border-black bg-[#FF8000] text-black px-6 py-3 rounded-lg font-bold hover:bg-[#FFD9B3] transition duration-300">
  Get Started
</button>

          <button className="border-4 border-black text-black px-6 py-3 rounded-lg font-bold hover:bg-[#FFD9B3] hover:text-white transition duration-300">
            Explore Projects
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
