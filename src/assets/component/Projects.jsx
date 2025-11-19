import React from "react";

function Projects() {
  const projectList = [
    {
      title: "Portfolio Website",
      description: "A personal portfolio website built with ReactJS and TailwindCSS.",
      link: "https://github.com/Maskcop/PortFolio2.git",
      image: "download.jpeg", // replace with your actual image
    },
    {
      title: "E-commerce App",
      description: "A fully functional e-commerce application with ReactJS and Firebase.",
      link: "https://github.com/Maskcop/clothbrand-website.git",
      image: "E-Commerce.jpg",
    },
    {
      title: "Weather App",
      description: "A weather forecasting app using OpenWeatherMap API and ReactJS.",
      link: "https://github.com/your-username/weather-app",
      image: "Weather.webp",
    },
  ];

  return (
    <section id="projects" className="text-white p-10 md:p-20 bg-gradient-to-b from-gray-900 to-gray-800">
      <h2 className="text-4xl font-bold mb-10 text-center">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {projectList.map((project, index) => (
          <div
            key={index}
            className="bg-gray-900 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
          >
            <img
              src={project.image}
              alt={project.title}
              className="rounded-t-2xl h-48 w-full object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-full text-white font-medium transition"
              >
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
