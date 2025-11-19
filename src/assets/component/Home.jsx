import React from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import pic from "../component/image/My.jpg";

function Home() {
  return (
    <section
      id="home"
      className="text-white-30 flex flex-col md:flex-row w-full justify-between items-center md:items-start p-10 md:p-20 
                 bg-gradient-to-b from-blue-50 via-purple-50 to-pink-50  shadow-xl relative overflow-hidden"
    >
      {/* Soft pastel background glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-300/20 via-purple-200/30 to-pink-200/20 blur-3xl animate-pulse"></div>

      {/* Left Section */}
      <motion.div
        className="relative z-10 md:w-2/4 md:pt-10"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6 text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 to-purple-500">
          Hello, I’m Aditya 
        </h1>

        <h2 className="text-2xl md:text-3xl font-semibold text-purple-600 mb-6">
          <TypeAnimation
            sequence={[
              "A Web Developer 💻",
              1500,
              "A Problem Solver ⚡",
              1500,
              "A Tech Enthusiast 🚀",
              1500,
            ]}
            speed={50}
            repeat={Infinity}
          />
        </h2>

        <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-8">
          I create modern, responsive, and user-friendly web apps using{" "}
          <span className="text-blue-500 font-semibold">React.js</span>,{" "}
          <span className="text-purple-500 font-semibold">TailwindCSS</span>, and{" "}
          <span className="text-yellow-600 font-semibold">JavaScript</span>. I love
          turning ideas into smooth, beautiful digital experiences.
        </p>

        <div className="flex flex-wrap gap-4">
          <a
            href="/Resume.pdf"
            download
            className="px-8 py-3 text-lg font-semibold text-white bg-gradient-to-r from-blue-500 to-purple-500 rounded-full shadow-md 
                       hover:scale-105 transition-all duration-300"
          >
            📄 Download Resume
          </a>
          <a
            href="#projects"
            className="px-8 py-3 text-lg font-semibold text-purple-700 border-2 border-purple-400 rounded-full bg-white/60 
                       hover:bg-purple-100 hover:scale-105 transition-all duration-300"
          >
            🚀 View Projects
          </a>
        </div>
      </motion.div>

      {/* Right Image */}
      <motion.div
        className="relative z-10 md:w-1/2 md:ml-48 md:mt-10 mt-12 order-1"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2 }}
      >
        <div className="relative">
          <div className="absolute -inset-3 bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300 rounded-full blur-lg opacity-70"></div>
          <img
            src={pic}
            className="relative rounded-full w-[300px] md:w-[380px] h-[300px] md:h-[380px] object-cover shadow-xl border-4 border-white"
            alt="Profile"
          />
        </div>
      </motion.div>
    </section>
  );
}

export default Home;
