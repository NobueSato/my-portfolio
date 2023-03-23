import React from 'react';

function Hero() {
  return (
    <section id="hero" className="py-20 bg-f7ede2">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold mb-4">Hello, I'm Nobue!</h1>
        <p className="text-xl mb-8">I'm a web developer based in Toronto, ON. I specialize in building responsive and intuitive web applications using the latest technologies.</p>
        <a href="#contact" className="bg-f28482 hover:bg-red-600 text-white font-bold py-3 px-6 rounded-full uppercase tracking-wide">Get in touch</a>
      </div>
    </section>
  );
}

export default Hero;
