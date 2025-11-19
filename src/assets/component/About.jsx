import React from "react";
import { motion } from "framer-motion";

function About() {
  return (
    <section
      id="about"
      className="relative flex flex-col items-center justify-center py-20 px-6 md:px-20 
                 bg-gradient-to-b from-blue-50 via-purple-50 to-pink-50 overflow-hidden"
    >
      <motion.h2
        className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600 mb-8"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        About Me
      </motion.h2>

      <motion.p
        className="max-w-3xl text-lg md:text-xl text-gray-700 leading-relaxed text-center"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        Hi! I'm <span className="text-purple-600 font-semibold">Aditya</span>, a{" "}
        <span className="text-blue-600 font-semibold">Web Developer</span> passionate about
        building fast and elegant websites with{" "}
        <span className="text-purple-600 font-semibold">React</span> and{" "}
        <span className="text-blue-600 font-semibold">TailwindCSS</span>.
      </motion.p>
    </section>
  );
}

export default About;
