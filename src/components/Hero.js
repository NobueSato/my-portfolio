import heroImage from '../assets/images/hero-image.png';

function Hero() {
  return (
    <div id="hero" className="flex items-center justify-center">
    <img
      src={heroImage}
      alt="Nobue Sato's website title"
      className="h-auto object-contain"
    />
  </div>
  );
}

export default Hero;
