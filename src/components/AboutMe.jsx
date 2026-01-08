const AboutMe = () => {
  return (
    <section
      id="about"
      className="py-20 px-6 bg-white"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

    
     <div className="relative flex justify-center">
  <div className="absolute inset-0 bg-blue-200 blur-3xl opacity-30 rounded-full"></div>
  <img
    src="/shardajha.png"
    alt="Sharda Jha"
    className="relative w-72 h-72 md:w-80 md:h-80 
               object-contain bg-white p-4 
               rounded-full shadow-xl"
  />
</div>


        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            About <span className="text-blue-600">Me</span>
          </h2>

          <p className="text-gray-600 text-lg mb-4">
            Hi, I'm <span className="font-semibold text-gray-900">Sharda Jha</span>, 
            a passionate <span className="font-semibold">Full Stack Developer </span> 
            who loves building real-world web applications.
          </p>

          <p className="text-gray-600 text-lg mb-4">
            I work with <span className="font-medium">React, Node.js, Express, and MongoDB </span> 
            to create scalable and responsive applications.
          </p>

          <p className="text-gray-600 text-lg mb-6">
            Along with development, I actively practice 
            <span className="font-semibold text-gray-900"> DSA in C++ </span> 
            to improve problem-solving and write optimized code.
          </p>

          <a
            href="/resume.pdf"
            className="inline-block px-6 py-3 bg-blue-600 text-white rounded-full 
                       font-semibold hover:bg-blue-700 transition"
          >
            Download Resume
          </a>
        </div>

      </div>
    </section>
  );
};

export default AboutMe;
