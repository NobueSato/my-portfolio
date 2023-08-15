import titleImage from "../assets/images/projects.png";
import projectImg from "../assets/images/projectImg.png";
import projectData from '../assets/projectData.json';   // The data is relatively small now hence using JSON file

function Projects() {

  return (
    <>
      <div className="section-header flex justify-center items-center h-30">
        <img src={titleImage}
        alt="Projects title"
        className="h-full w-auto object-contain" />
      </div>

      <p className="text-5xl font-semibold mb-4">Projects I've done with ❤️</p>
      <div className="h-4/6 mt-5 grid grid-cols-4 gap-4">
        {projectData.projects.map((project, index) => (
          <div key={index} className="h-full p-10 bg-white border shadow-lg transform">
          {/* Content for the first polaroid */}
          <img src={projectImg} alt={project.name} className="w-full h-5/6 object-contain mb-4" />
          <p className="text-3xl text-gray-800">{project.name}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default Projects;
