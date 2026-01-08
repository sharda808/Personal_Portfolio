import { useEffect, useState } from "react";

const Hero = () => {
  const DynamicHeroText = () => {
    const phrases = [
      "Hi,I'm Sharda jha",
      "Full Stack Developer",
      "Building Smart Web Application",
      "Solving DSA Problems in C++"
    ];
  const gradients = [
  "text-gradient-1",
  "text-gradient-2",
  "text-gradient-3",
  "text-gradient-4"
];

    const [currentIndex, setCurrentIndex] = useState(0);
    useEffect(()=> {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) =>(prevIndex + 1) % phrases.length);
      },2000);
      return () =>clearInterval(interval);
    },[]);
  
    return (
      <span className={`${gradients[currentIndex]}transition-all duration-700 ease-in-out`}>
{phrases[currentIndex]}
      </span>
    );
  };
  return (
    <section className="min-h-screen flex items-center justify-center px-6 
                      section-gradient">
      <div className="max-w-4xl text-center bg-white/80 backdrop-blur-lg 
                       p-12 rounded-3xl shadow-2xl border border-white">
        
                  <h1 className="text-3xl md:text-6xl text-gray-700 font-bold mb-6 leading-tight min-h-20  flex items-center justify-center text-center">
        <DynamicHeroText />
       </h1>

        <p className="text-gray-600 text-lg md:text-xl mb-8">
          Full Stack Developer • React • Node.js • MongoDB
          <br />
          <span className="text-gray-500">
            Building smart, real-world web applications
          </span>
        </p>

     
        <div className="flex flex-wrap justify-center gap-6">
          <a
            href="#projects"
            className="px-8 py-3 text-white rounded-full font-semibold 
                       shadow-lg hover:scale-105 hover:shadow-xl transition duration-300
                       bg-blue-600"
          >
            View Projects
          </a>

          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 border-2 border-blue-600 text-blue-600 rounded-full 
                       font-semibold hover:bg-blue-600 hover:text-white hover:scale-105 
                       transition duration-300"
          >
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;



