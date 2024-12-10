import React from "react";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Genesis (SaaS Platform for AI Solutions)",
      period: "March 2024 - August 2024",
      description: [
        "Spearheaded the UI design and development for the entire SaaS platform.",
        "Focused on creating a responsive UI with a modern theme, ensuring an intuitive and engaging user experience.",
        "Presented a demo with AWS showcasing the platform’s capabilities, receiving positive feedback from stakeholders.",
      ],
    },
    {
      id: 2,
      title: "CISO (AI Security Q&A Tool)",
      period: "August 2024 - Present",
      description: [
        "Developed the entire UI from planning through deployment, including dashboard features for time utilization and questionnaire counts.",
        "Supported client demos and engagements, ensuring user satisfaction and ongoing improvements.",
      ],
    },
    {
      id: 3,
      title: "AH Connect (Time Tracker Application)",
      period: "December 2023 – February 2024",
      description: [
        "Supported the development of a comprehensive UI for task logging, user profiles, and performance reports.",
        "Implemented real-time graphical representations of data, providing better insights into team productivity.",
      ],
    },
  ];

  return (
    <div className="py-20 w-full">
      <h1 className="text-center text-4xl font-bold mb-10">
        My <span className="">Projects</span>
      </h1>

      <div className="w-full mt-12 grid lg:grid-cols-2 gap-10">
        {projects.map((project) => (
          <div key={project.id} className="p-6  rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-2">{project.title}</h2>
            <p className="text-sm text-gray-400 mb-4">{project.period}</p>
            <ul className="list-disc pl-5 space-y-2">
              {project.description.map((point, index) => (
                <li key={index} className="text-gray-300">
                  {point}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
