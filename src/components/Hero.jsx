const Hero = () => {
  return (
    <section
      id="home"
      className="hero-section d-flex align-items-center text-white"
    >
      <div className="container text-center">
        <h1 className="display-2 fw-bold">
          Master Digital Marketing
        </h1>

        <p className="lead mt-4">
          Learn SEO, Meta Ads, Google Ads &
          Analytics from industry experts.
        </p>

        <div className="mt-4">
          <button className="btn btn-primary btn-lg me-3">
            Start Learning
          </button>

          <button className="btn btn-outline-light btn-lg">
            Explore Courses
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;