import heroImage from "../assets/images/hero-image.png";

function Hero() {
  return (
    <>
      <img
        src={heroImage}
        alt="Nobue Sato's website title"
        className="h-auto object-contain"
      />
    </>
  );
}

export default Hero;
