import React from "react";

const additionalSkills = [
  {
    name: "Bootstrap",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
  },
  {
    name: "Redux",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
  },
  {
    name: "Axios",
    icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRxuJlSwQHNj7yD55jMfUYg5YNV4LSO31EOg&s",
  },
];

const AdditionalSkills = () => {
  return (
    <section className="bg-gradient-to-b from-gray-900 to-gray-800 text-white py-10 rounded-xl px-6 w-full">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-300 mb-8">
          Additional Skills
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {additionalSkills.map((skill, index) => (
            <div
              key={index}
              className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col items-center"
            >
              <img
                src={skill.icon}
                alt={skill.name}
                className="w-16 h-16 mb-4 transition-transform duration-300 transform hover:scale-110"
              />
              <h3 className="text-lg font-semibold text-gray-300">
                {skill.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdditionalSkills;