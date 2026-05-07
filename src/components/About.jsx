import {
  BriefcaseBusiness,
  GraduationCap,
  BarChart3,
  Users,
} from "lucide-react";

const About = () => {
  return (
    <section id="about" className="about-section py-5">
      <div className="container">
        <div className="row align-items-center g-5">

          {/* Left Image */}
          <div className="col-lg-6">
            <div className="about-image-wrapper">

              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978"
                className="img-fluid rounded-4 shadow-lg about-image"
                alt="About Seyon Tech"
              />

              {/* Floating Experience Card */}
              <div className="experience-card shadow">
                <h2>3+</h2>

                <p>Years Experience</p>
              </div>

            </div>
          </div>

          {/* Right Content */}
          <div className="col-lg-6">

            {/* Tag */}
            <span className="about-tag">
              WHY CHOOSE US
            </span>

            {/* Heading */}
            <h2 className="fw-bold display-5 mt-3">
              Transform Your Career With
              <span className="text-primary">
                {" "}Seyon Tech
              </span>
            </h2>

            {/* Description */}
            <p className="text-muted mt-4 about-text">
              We provide industry-focused
              digital marketing training with
              practical learning, live projects
              and expert mentorship.

              Our courses are designed for
              students, freelancers,
              entrepreneurs and professionals
              who want to master modern
              digital marketing strategies.
            </p>

            {/* Features */}
            <div className="row mt-4 g-3">

              {/* Feature */}
              <div className="col-md-6">
                <div className="about-feature shadow-sm">

                  <div className="feature-icon">
                    <BriefcaseBusiness size={28} />
                  </div>

                  <h5 className="fw-bold mt-3">
                    Live Projects
                  </h5>

                  <p className="text-muted mb-0">
                    Work on real campaigns and
                    practical assignments.
                  </p>

                </div>
              </div>

              {/* Feature */}
              <div className="col-md-6">
                <div className="about-feature shadow-sm">

                  <div className="feature-icon">
                    <GraduationCap size={28} />
                  </div>

                  <h5 className="fw-bold mt-3">
                    Placement Support
                  </h5>

                  <p className="text-muted mb-0">
                    Interview preparation and
                    career guidance included.
                  </p>

                </div>
              </div>

              {/* Feature */}
              <div className="col-md-6">
                <div className="about-feature shadow-sm">

                  <div className="feature-icon">
                    <BarChart3 size={28} />
                  </div>

                  <h5 className="fw-bold mt-3">
                    Industry Tools
                  </h5>

                  <p className="text-muted mb-0">
                    Learn Meta Ads, GA4, GTM,
                    CRM and SEO tools.
                  </p>

                </div>
              </div>

              {/* Feature */}
              <div className="col-md-6">
                <div className="about-feature shadow-sm">

                  <div className="feature-icon">
                    <Users size={28} />
                  </div>

                  <h5 className="fw-bold mt-3">
                    Expert Mentorship
                  </h5>

                  <p className="text-muted mb-0">
                    Learn directly from digital
                    marketing experts.
                  </p>

                </div>
              </div>

            </div>

            {/* Stats */}
            <div className="row mt-5 text-center">

              <div className="col-4">
                <div className="stat-box">
                  <h2 className="fw-bold text-primary">
                    500+
                  </h2>

                  <p className="text-muted mb-0">
                    Students
                  </p>
                </div>
              </div>

              <div className="col-4">
                <div className="stat-box">
                  <h2 className="fw-bold text-primary">
                    100+
                  </h2>

                  <p className="text-muted mb-0">
                    Projects
                  </p>
                </div>
              </div>

              <div className="col-4">
                <div className="stat-box">
                  <h2 className="fw-bold text-primary">
                    95%
                  </h2>

                  <p className="text-muted mb-0">
                    Success
                  </p>
                </div>
              </div>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;