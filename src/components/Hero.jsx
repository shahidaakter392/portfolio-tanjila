import React from 'react';

const Hero = () => {
  return (
    <section id="hero" className="hero bg-primary text-white text-center py-5">
      <div className="container">
        <h1>Welcome To my Portfolio website</h1>
        <p className="lead">I am a <span style={{ fontWeight: 'bold', fontStyle: 'italic' }}>graphics designer</span> with expertise in creating visually stunning and user-friendly designs. I specialize in responsive design, ensuring a seamless experience across devices. Proficient in HTML, CSS, and modern design tools like Figma and Adobe XD, I focus on creating clean, intuitive, and aesthetically pleasing user interfaces.</p>
        <a href="#contact" className="btn btn-light btn-lg">Get In Touch</a>
      </div>
    </section>
  );
};

export default Hero;

