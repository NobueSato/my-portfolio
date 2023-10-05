import titleimg from "../assets/images/skills.png";
import data from "../assets/data.json";

export function Card({ title, colour = "purple", children }) {
  const windowClass = `window-${colour}-bg`;
  const titleBarClass = `window-${colour}-title`;

  return (
    <div className={windowClass}>
      {/* Title Bar */}
      <div className={titleBarClass}>
        {/* Pink Button */}
        <div className="pink-button"></div>
        {/* Yellow Button */}
        <div className="yellow-button"></div>
        {/* White Button */}
        <div className="white-button"></div>
        <span className="card-title">{title ? title : ""}</span>
      </div>{" "}
      {/* The end of title bar */}
      {/* Content for the card */}
      <div className="card-content bg-white rounded-b-lg shadow-md flex flex-col items-center justify-center h-full">
        {children}
      </div>
    </div>
  );
}

function Skills() {
  const skillsTitles = data.skills.titles;
  const skills = data.skills.skills;

  return (
    <>
      <div className="section-header">
        <img src={titleimg} alt="Skills title" className="h-full w-auto" />
        <h2 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0">
          Skills
        </h2>
      </div>

      <div className="grid-wrapper grid grid-cols-3 gap-4">
        {/* Generate Card by mapping */}
        {skillsTitles.map((title) => (
          <Card key={title} title={title} colour="blue">
            {skills[title].map((skill) => (
              <p key={skill} className="text-4xl">
                {skill}
              </p>
            ))}
          </Card>
        ))}
      </div>
    </>
  );
}

export default Skills;
