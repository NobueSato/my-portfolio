import image from "../assets/images/about.png";
import { Card } from "./Skills";

function About() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-full items-center">
      {/* <!-- Image column --> */}
      <div className="md:order-first h-full flex justify-center items-center">
        <img src={image} alt="About title" className="w-auto h-5/6 p-30 object-contain" />
      </div>

      {/* <!-- Paragraph column --> */}
      <div className="md:order-last flex justify-center items-center">
        {/* <div className="text-center pr-24">
          <p className="text-7xl font-semibold mb-4">Hi I’m Nobue Sato</p>
          <p className="text-4xl text-gray-700">
            With one year of experience as a software engineer under my belt, 
            I am known for my dedication, 
            collaborative work style, 
            and strong commitment to continuous learning through projects and initiatives. 
            I strive to create solutions that improve people's daily lives 
            and make a difference in the world.
          </p>
        </div> */}
        <Card title="About Me">
          <p className="text-7xl font-semibold mb-4">Hi I’m Nobue Sato</p>
          <p className="text-3xl text-gray-700">
            With one year of experience as a software engineer under my belt, 
            I am known for my dedication, 
            collaborative work style, 
            and strong commitment to continuous learning through projects and initiatives. 
            I strive to create solutions that improve people's daily lives 
            and make a difference in the world.
          </p>
        </Card>
      </div>
      
    </div>
  );
}

export default About;
