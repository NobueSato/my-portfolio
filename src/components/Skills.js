import image from "../assets/images/skills.png";

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
      <span className="text-white 2xl:text-3xl absolute left-1/2 transform -translate-x-1/2">{title ? title : ''}</span>
      </div> {/* The end of title bar */}

      {/* Content for the card */}
      <div className="card-content bg-white rounded-b-lg shadow-md flex flex-col items-center justify-center h-full">
        {children}
      </div>
    </div>
  );
}

function Skills() {
  return (
    <>
      <div className="section-header">
        <img src={image} alt="Skills title" className="h-full w-auto" />
        <h2 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0">Skills</h2>
      </div>

      <div className="grid-wrapper grid grid-cols-3 gap-4">
        {/* Card 1 */}
        <Card title="Front-end" colour="blue">
          <p>Text for Card 1</p>
          <p>Text for Card 1</p>
          <p>Text for Card 1</p>
        </Card>

        {/* Card 2 */}
        <Card title="Back-end" colour="blue">
          <p>Text for Card 2</p>
          <p>Text for Card 2</p>
          <p>Text for Card 2</p>
        </Card>

        {/* Card 3 */}
        <Card title="Others" colour="blue">
          <p>Text for Card 3</p>
          <p>Text for Card 3</p>
          <p>Text for Card 3</p>
        </Card>
      </div>
    </>
  );
}

export default Skills;