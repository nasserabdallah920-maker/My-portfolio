import Header from "./components/Header";

type Skill = {
  name: string;
  icon: string;
};

const Card = ({ skill }: { skill: Skill }) => (
  <div className="flex flex-col items-center gap-3 p-6 rounded-2xl bg-[#1E293B] shadow-lg hover:shadow-[#38BDF8]/40 hover:scale-105 transition-all duration-400 cursor-pointer">
    <i className={`${skill.icon} text-6xl`}></i>
    <p className="text-lg font-medium tracking-wide hover:text-[#38BDF8] transition-colors duration-300">
      {skill.name}
    </p>
  </div>
);

const Section = ({ title, skills }: { title: string; skills: Skill[] }) => (
  <div className="mt-16">
    <h2 className="text-3xl font-bold text-[#38BDF8] mb-8 border-b border-gray-700 inline-block pb-2">
      {title}
    </h2>
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
      {skills.map((skill, index) => (
        <Card key={index} skill={skill} />
      ))}
    </div>
  </div>
);

export default function Skills() {
  const frontend: Skill[] = [
    { name: "HTML", icon: "fa-brands fa-html5 text-orange-500" },
    { name: "CSS", icon: "fa-brands fa-css3-alt text-blue-500" },
    { name: "JavaScript", icon: "fa-brands fa-js text-yellow-400" },
    { name: "TypeScript", icon: "fa-solid fa-code text-blue-400" },
    { name: "React", icon: "fa-brands fa-react text-cyan-400" },
    { name: "Tailwind", icon: "fa-solid fa-wind text-sky-400" },
  ];

  const libraries: Skill[] = [
    { name: "Redux Toolkit", icon: "fa-brands fa-react text-purple-500" },
    { name: "Axios", icon: "fa-solid fa-network-wired text-blue-600" },
    { name: "React Router", icon: "fa-solid fa-route text-green-400" },
    { name: "Universal Cookie", icon: "fa-solid fa-cookie text-yellow-600" },
    { name: "Font Awesome", icon: "fa-brands fa-font-awesome text-orange-400" },
    { name: "Zod", icon: "fa-solid fa-shield-halved text-green-600" },
    {
      name: "React Hook Form",
      icon: "fa-solid fa-clipboard-check text-pink-500",
    },
  ];

  const tools: Skill[] = [
    { name: "Git", icon: "fa-brands fa-git-alt text-red-500" },
    { name: "GitHub", icon: "fa-brands fa-github text-gray-300" },
    { name: "VS Code", icon: "fa-solid fa-code-branch text-green-400" },
  ];

  const other: Skill[] = [
    { name: "Problem Solving", icon: "fa-solid fa-lightbulb text-yellow-300" },
    { name: "Algorithms", icon: "fa-solid fa-diagram-project text-purple-400" },
  ];

  return (
    <div className="Skills-container text-white px-[50px] bg-[#0F172A] w-[100%] pb-[5px]">
      <Header />

      <div className="mt-[100px] text-center">
        <h1 className="text-[#38BDF8] text-5xl md:text-6xl font-bold drop-shadow-lg">
          My Skills
        </h1>
        <p className="text-gray-400 mt-3 text-lg">Technologies & Tools I use</p>
      </div>

      <Section title="Frontend" skills={frontend} />
      <Section title="libraries" skills={libraries} />
      <Section title="Tools" skills={tools} />
      <Section title="Other" skills={other} />

      <div className="mt-16 mb-20">
        <h2 className="text-3xl font-bold text-[#38BDF8] mb-8 border-b border-gray-700 inline-block pb-2">
          Backend
        </h2>
        <div className="flex justify-center items-center p-10 rounded-2xl bg-[#1E293B] shadow-lg ">
          <p className="text-gray-400 text-xl italic">Coming Soon...</p>
        </div>
      </div>
    </div>
  );
}
