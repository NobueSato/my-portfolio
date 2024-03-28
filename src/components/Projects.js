import titleImage from "../assets/images/projects.png";
import projectImg from "../assets/images/projectImg.png";
import data from "../assets/data.json"; // The data is relatively small now hence using JSON file

function Projects() {
  return (
    <>
      <div className="section-header">
        <img src={titleImage} alt="Projects title" className="object-contain" />
      </div>

      <div className="flex gap-4 flex-col flex-wrap md:flex-row items-center justify-center overflow-hidden">
        <div className="w-full">
          <p className="text-xl md:text-4xl font-semibold">
            Projects I've done with ❤️
          </p>
        </div>
        {data.projects.map((project, index) => (
          <div
            key={index}
            className="w-1/2 md:w-1/5 p-6 bg-white border shadow-lg flex flex-col justify-between overflow-hidden"
          >
            {/* Content for the first polaroid */}
            <img
              src={projectImg}
              alt={project.name}
              className="w-full h-5/6 object-contain mb-1"
            />
            <p className="text-base text-gray-800">{project.name}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default Projects;
