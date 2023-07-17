import heroImage from '../assets/images/hero-image.png';

function Hero() {
  return (
    <>
      <img
        src={heroImage}
        alt="Nobue Sato's website title"
        className="w-full h-auto object-cover object-center"
      />
    </>
  );
}

export default Hero;
