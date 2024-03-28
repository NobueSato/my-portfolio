import { Card } from "./Skills";
import titleImg from "../assets/images/about.png";
import linkedinIcon from "../assets/images/icons8-linkedin-50.png";
import githubIcon from "../assets/images/icons8-github-50.png";
import data from "../assets/data.json";

function About() {
  const resumeLink = "/NobueSato_resume.pdf";
  const linkedinLink = "https://www.linkedin.com/in/nobue-sato";
  const githubLink = "https://github.com/NobueSato";
  const aboutTitle = data.about.title[0];
  const [aboutParagraph1, aboutParagraph2] = data.about.paragraphs;

  return (
    <>
      <div className="section-header">
        <img
          src={titleImg}
          alt="About section title"
          className="object-contain"
        />
      </div>
      <div className="flex justify-center items-center">
        <Card title={aboutTitle}>
          <div className="about-card">
            {/* 1st column */}
            <div className="about-column">
              <p className="font-semibold">{aboutParagraph1}</p>
            </div>
            {/* 2nd column */}
            <div className="about-column">
              <p>{aboutParagraph2}</p>
            </div>

            <div className="flex items-center justify-center">
              <a
                href={resumeLink}
                className="inline-block px-4 py-2 bg-blue-600 text-xs sm:text-base text-white no-underline rounded-md mr-4"
                download
              >
                Download Resume
              </a>
              <a href={linkedinLink} target="_blank" rel="noopener noreferrer">
                <img src={linkedinIcon} alt="LinkedIn" className="icon" />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a href={githubLink} target="_blank" rel="noopener noreferrer">
                <img src={githubIcon} alt="GitHub" className="icon" />
                <span className="sr-only">GitHub</span>
              </a>
            </div>
          </div>
        </Card>
      </div>
    </>
  );
}

export default About;
