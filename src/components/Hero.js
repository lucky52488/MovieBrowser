const Hero = ({ text, backdrop }) => {
  return (
    <div>
      <header className="bg-dark p-5 text-white hero-container">
        <h1 className="hero-text">{text}</h1>
        <div className="hero-backdrop" style={{backgroundImage: `url(${backdrop})`}}></div>
      </header>
    </div>
  );
};

export default Hero;
