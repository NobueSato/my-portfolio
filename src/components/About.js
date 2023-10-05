import { Card } from "./Skills";
import titleImg from '../assets/images/about.png';
import linkedinIcon from '../assets/images/icons8-linkedin-50.png';
import githubIcon from '../assets/images/icons8-github-50.png';
import data from '../assets/data.json';

function About() {
  const resumeLink = '/NobueSato_resume.pdf';
  const linkedinLink = 'https://www.linkedin.com/in/nobue-sato';
  const githubLink = 'https://github.com/NobueSato';
  const aboutTitle = data.about.title[0];
  const [aboutParagraph1, aboutParagraph2] = data.about.paragraphs;

  return (
    <div className="grid-container grid md:grid-cols-2 gap-10 h-full max-h-full overflow-hidden">
      {/* Image column */}
      <div className="md:order-first h-full flex mr-28 justify-center items-center pr-">
        <img
          src={titleImg}
          alt="About title"
          className="w-auto h-5/6 object-contain"
        />
      </div>

      {/* Paragraph column */}
      <div className="md:order-last flex justify-center items-center pr-14">
        <Card title={aboutTitle}>
          <p className="text-6xl font-semibold mb-4">{aboutParagraph1}</p>
          <p className="text-2xl text-gray-700">
            {aboutParagraph2}
          </p>
          <div className="horizontal-icons">
            <a href={resumeLink} className="button" download>
              Download Resume
            </a>
            <a href={linkedinLink} target="_blank" rel="noopener noreferrer">
              <img src={linkedinIcon} alt="LinkedIn" className="icon" />
            </a>
            <a href={githubLink} target="_blank" rel="noopener noreferrer">
              <img src={githubIcon} alt="GitHub" className="icon" />
            </a>
          </div>
        </Card>
      </div>
    </div>
  );
}

export default About;
