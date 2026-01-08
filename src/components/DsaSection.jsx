const DsaSection = () => {
const stats = [
  {label: "Problems Solved",value:"450"},
  {label:"Plateforms", value:"Leetcode,CodeChef"},
  {label:"Contest Rating", value:"1600+"},
  {label:"Languages", value:"C++, JavaScript"},
];
const topics = [
  "Arrays","Strings","Linked List","Stack & Queue","Recursion","Binary Search","Tress","Graphs","Dynamic Programming",
];
return (
  <section id="dsa" className="py-16 px-6 max-w-6xl mx-auto">
<h2 className="text-3xl font-bold mb-4">DSA & Problem Solving</h2>
<p>Strong foundation in Data Structures and Algorithm with consistent practice across multiple completitive programming plateforms. Focused on writing optimized and clean solutions.</p>
<div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
{stats.map((item,index) => (
  <div
 key ={index} 
 className="border rounded-xl p-5 text-center hover:shadow-md transition"
  >
    <h3 className="text-2xl font-semibold">{item.value}</h3>
    <p className="text-gray-500 mt-1">{item.label}</p>
    </div>
))}
</div>
<h3 className="text-xl font-semibold mb-4">Topics Covered</h3>
<div className="flex flex-wrap gap-3">
{topics.map((topic,index) =>(
  <span
  key ={index}
  className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
  
  {topic}

  </span>
))}
</div>
  </section>
)
}
export default DsaSection;