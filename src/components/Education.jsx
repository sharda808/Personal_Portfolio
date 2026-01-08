const Education = () => {
const education =[
  {
    degree:"B.Tech in Electronics and Communication Engineering",
    institution:"J.K institute of Applied physics and Technology (Allahabad University)",
    year:"2024 - 2028",

  },
  {
    degree:"High School",
    institution: "M.L.S.M College Darbhanga",
    year:"2020-2022",

  }
];
return (
  <section className="py-16 px-6 max-w-6xl mx-auto">
<h2 className="text-3xl font-bold text-center mb-10 text-gray-800 dark:text-gray-100">Education</h2>
<div className="flex flex-col md:flex-row md:justify-center gap-6">
  {education.map((edu, index) => (
<div
key ={index}
className="bg-white dark:bg-gray-800 rounded-xl shadow hover:shadwo-xl transition-transform duration-300 p-5"
>
<h3 className="text-xl font-semibold mb-2">{edu.degree}</h3>
<p className="text-gray-600 dark:text-gray-300 mb-1">{edu.institution}</p>
<p className="text-gray-400 text-sm">{edu.year}</p>
</div>
  ))}

</div>
  </section>
)
}
export default Education;