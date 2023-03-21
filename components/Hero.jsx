
const Hero = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: `url("/img/hero.jpg")`,
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-lg">
          <h1 className="font-bold text-logoBlue magma text-4xl md:text-6xl whitespace-nowrap">Sun Holidays Ltd</h1>
          <p className="mb-5">
          <span className="fontHand text-logoSun text-3xl"> live every day as a holiday</span>
          </p>
          <button className="btn bg-gradient-to-t from-logoSun to-logoRay border-0 hover:shadow-lg hover:to-logoTag">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
