import titleimg from "../assets/images/skills.png";
import data from "../assets/data.json";

export function Card({ title, colour = "purple", children }) {
  const windowClass = `window-${colour}-bg`;
  const titleBarClass = `window-${colour}-title`;

  return (
    <div className={`w-5/6 ${windowClass}`}>
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
      <div className="card-content bg-white rounded-b-lg shadow-md flex flex-col items-center justify-center h-full w-auto overflow-hidden">
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
        <img src={titleimg} alt="Skills title" className="object-contain" />
        <h2 className="sr-only">Skills</h2>
      </div>

      <div className="grid-wrapper grid gap-4 md:grid-cols-3 overflow-hidden">
        {/* Generate Card by mapping */}
        {skillsTitles.map((title) => (
          <div key={title} className="flex justify-center">
            <Card title={title} colour="blue">
              {skills[title].map((skill) => (
                <p key={skill}>{skill}</p>
              ))}
            </Card>
          </div>
        ))}
      </div>
    </>
  );
}

export default Skills;
