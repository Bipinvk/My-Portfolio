import React from "react";

const Experience = () => {
  const experiences = [
    {
      id: 1,
      title: "Software Developer | Augusta Hitech Soft Solutions",
      period: "January 2023 – Present",
      description: [
        "Contributed to the development of full-stack web applications using React.js, Node.js, MongoDB, and AWS.",
        "Collaborated with clients to define requirements, refine features, and ensure project success.",
        "Focused on improving frontend UI using React.js and Tailwind CSS for responsive, high-quality user experiences.",
        "Implemented RESTful APIs, managed authentication with JWT, and integrated AWS Cognito for secure login."
      ]
    }
  ];

  return (
    <div className="py-20 w-full">
      <h1 className="text-center text-4xl font-bold mb-10">
        My <span className="text-purple-500">Work Experience</span>
      </h1>

      <div className="w-full mt-12 grid lg:grid-cols-1 gap-10">
        {experiences.map((exp) => (
          <div
            key={exp.id}
            className="p-6 bg-gradient-to-r from-gray-800 to-gray-900 text-white rounded-lg shadow-lg"
          >
            <h2 className="text-2xl font-bold mb-2">{exp.title}</h2>
            <p className="text-sm text-gray-400 mb-4">{exp.period}</p>
            <ul className="list-disc pl-5 space-y-2">
              {exp.description.map((point, index) => (
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

export default Experience;
