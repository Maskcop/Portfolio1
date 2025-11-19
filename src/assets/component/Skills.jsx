import React from "react";
import { motion } from "framer-motion";
import AdditionalSkills from "./AditionalSkills";

const skills = [
  {
    name: "HTML5",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  {
    name: "CSS3",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
  {
    name: "JavaScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    name: "React",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "Next.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  },
  {
    name: "Node.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  {
    name: "Tailwind CSS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
  },
  {
    name: "MongoDB",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="relative flex flex-col items-center justify-center py-20 px-8 bg-gradient-to-b from-blue-50 via-purple-50 to-pink-50 overflow-hidden"
    >
      {/* Background glows */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-blue-600/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-purple-600/20 rounded-full blur-3xl animate-pulse"></div>

      <motion.h2
        className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-400 to-pink-400 mb-12 text-center"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        My Skills
      </motion.h2>

      <motion.div
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10 max-w-5xl z-10"
        initial="hidden"
        whileInView="visible"
        variants={{
          hidden: { opacity: 0, y: 40 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { staggerChildren: 0.15 },
          },
        }}
      >
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="relative group bg-gray-800/50 p-6 rounded-xl shadow-lg flex flex-col items-center justify-center 
                       backdrop-blur-md transition-transform duration-300 hover:scale-110 hover:shadow-purple-500/50"
            whileHover={{ scale: 1.1 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 opacity-0 group-hover:opacity-20 rounded-xl transition duration-300"></div>
            <img
              src={skill.icon}
              alt={skill.name}
              className="w-20 h-20 mb-4 transition-transform duration-300 group-hover:rotate-6"
            />
            <p className="text-lg font-semibold text-yellow-300 tracking-wide">
              {skill.name}
            </p>
          </motion.div>
        ))}
      </motion.div>

      {/* Additional Skills */}
      <motion.div
        className="mt-16 bg-gray-800/70 p-8 rounded-2xl shadow-lg max-w-3xl w-full backdrop-blur-md"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        <AdditionalSkills />
      </motion.div>
    </section>
  );
};

export default Skills;
