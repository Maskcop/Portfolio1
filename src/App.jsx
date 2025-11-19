import React from "react";
import Navbar from "./assets/component/Navbar";
import Home from "./assets/component/Home";
import About from "./assets/component/About";
import Skills from "./assets/component/Skills";
import Projects from "./assets/component/Projects";
import Contact from "./assets/component/Contact";

function App() {
  return (
    <div className="bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 min-h-screen">
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />

      {/* Footer */}
      <footer className="text-center text-gray-400 py-6 border-t border-gray-700 mt-10">
        <p>© 2025 Aditya Suryawanshi | Built with ❤️ using React & Tailwind CSS</p>
      </footer>
    </div>
  );
}

export default App;
