const Skills = () => {
  const skills = ["React", "JavaScript", "Node.js", "MongoDB", "Tailwind CSS", "Git"];

  return (
    <section className="py-16 section-gradient">
      <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">
        Skills
      </h2>

      <div className="flex flex-wrap justify-center gap-4">
        {skills.map((skill) => (
          <span
            key={skill}
            className="px-6 py-3 bg-white rounded-full shadow-md text-gray-700 font-medium
             hover:bg-blue-100 hover:text-blue-700 hover:scale-105
                       transition-all duration-300 cursor-pointer"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
};

export default Skills;



