import React, { useState } from "react";

function Navbar() {
  const [menu, setMenu] = useState(false);

  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setMenu(false);
    }
  };

  return (
    <nav className="sticky top-0 z-50 flex flex-wrap justify-between items-center px-10 py-4 
                    bg-white/70 backdrop-blur-md shadow-lg border-b border-gray-200">
      <span
        className="text-3xl font-bold tracking-wide text-blue-600 cursor-pointer"
        onClick={() => handleScroll("home")}
      >
        Aditya<span className="text-purple-600">.</span>
      </span>

      <ul
        className={`${menu ? "block" : "hidden"} md:flex gap-8 text-lg font-medium text-gray-700`}
      >
        {["home", "about", "skills", "projects", "contact"].map((item) => (
          <li key={item}>
            <button
              onClick={() => handleScroll(item)}
              className="capitalize hover:text-purple-600 transition duration-300"
            >
              {item}
            </button>
          </li>
        ))}
      </ul>

      <button
        className="md:hidden text-purple-600 hover:text-purple-800 transition duration-300"
        onClick={() => setMenu(!menu)}
      >
        {menu ? "Close" : "Menu"}
      </button>
    </nav>
  );
}

export default Navbar;
