const Project = () => {
  const projects = [
    {
      title: "Smart Study Planner",
      description:
        "A full stack study planning app with analytics, streaks, and task management.",
      tech: ["React", "Node.js", "MongoDB"],
      github: "https://github.com/sharda808/smart-study-planner",
    },
    {
      title: "Simple Task Manager (C++)",
      description:
        "A console-based task manager built using C++  demonstrating data structures and file handling.",
      tech: ["C++", "OOP", "File Handling"],
      github: "https://github.com/sharda808/task-manager-cpp",
    },
  ];

  return (
    <div className="grid md:grid-cols-2 gap-6">
      {projects.map((project, index) => (
        <div
          key={index}
          className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow hover:shadow-xl transition"
        >
          <h3 className="text-xl font-semibold mb-2">
            {project.title}
          </h3>

          <p className="text-gray-600 dark:text-gray-300 mb-3">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2 mb-4">
            {project.tech.map((t, i) => (
              <span
                key={i}
                className="px-3 py-1 text-sm bg-blue-100 text-blue-800 rounded-full"
              >
                {t}
              </span>
            ))}
          </div>

          <div className="flex gap-3">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 border rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              GitHub
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Project;
