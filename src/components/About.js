import image from "../assets/images/about.png";

function About() {
  return (
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* <!-- Image column --> */}
            <div class="md:order-first flex justify-center">
              <img src={image} alt="About title" class="object-contain" />
            </div>

            {/* <!-- Paragraph column --> */}
            <div class="md:order-last px-10">
              <p class="text-xl font-semibold mb-4">Hi I’m Nobue Sato</p>
              <p class="text-gray-700">
                With one year of experience as a software engineer under my belt, 
                I am known for my dedication, 
                collaborative work style, 
                and strong commitment to continuous learning through projects and initiatives. 
                I strive to create solutions that improve people's daily lives 
                and make a difference in the world.
              </p>
            </div>
          </div>
  );
}

export default About;
