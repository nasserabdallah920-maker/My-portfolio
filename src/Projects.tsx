import Header from "./components/Header"

type Project = {
  title: string
  description: string
  image?: string
  link?: string
}

const ProjectCard = ({ project }: { project: Project }) => (
  <div className="flex flex-col items-center gap-3 p-6 rounded-2xl bg-[#1E293B] shadow-lg hover:shadow-[#38BDF8]/40 hover:scale-105 transition-all duration-300 cursor-pointer">
    {project.image ? (
      <img src={project.image} alt={project.title} className="w-full h-40 object-cover rounded-lg" />
    ) : (
      <div className="w-full h-40 flex justify-center items-center bg-gray-800 rounded-lg">
        <p className="text-gray-400 italic">No Image Yet</p>
      </div>
    )}
    <h3 className="text-lg font-bold text-white">{project.title || "Coming Soon..."}</h3>
    <p className="text-gray-400 text-center">{project.description || "Project details will be added soon."}</p>
    {project.link && (
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-[#38BDF8] mt-2 hover:underline"
      >
        View Project
      </a>
    )}
  </div>
)

export default function Projects() {
  const projects: Project[] = [
    
  ]

  return (
    <div className="Projects-container text-white px-[50px] bg-[#0F172A] w-[100%] min-h-[100vh]">
      <Header />

      <div className="mt-[100px] text-center">
        <h1 className="text-[#38BDF8] text-5xl md:text-6xl font-bold drop-shadow-lg">
          My Projects
        </h1>
        <p className="text-gray-400 mt-3 text-lg">Some of my work & upcoming projects</p>
      </div>

      <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {projects.length > 0 ? (
          projects.map((project, index) => <ProjectCard key={index} project={project} />)
        ) : (
          <div className="col-span-full flex justify-center items-center p-10 rounded-2xl bg-[#1E293B] shadow-lg">
            <p className="text-gray-400 text-xl italic">Coming Soon...</p>
          </div>
        )}
      </div>

      <div className="mt-20"></div>
    </div>
  )
}
