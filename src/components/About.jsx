import {
  BriefcaseBusiness,
  GraduationCap,
  BarChart3,
  Users,
  Building2,
  BadgeCheck,
  Handshake,
  AwardIcon,
} from "lucide-react";

import { Link } from "react-router-dom";

import Banner from "../assets/Banner.jpeg";

const About = () => {
  return (
    <section id="about" className="about-section py-5">
      <div className="container">
        <div className="row align-items-center g-5">

          {/* Left Image */}
          <div className="col-lg-6">
            <div className="about-image-wrapper">

              <img
                src={Banner}
                className="img-fluid rounded-4 shadow-lg about-image"
                alt="About Seyon Tech"
              />

              {/* Floating Experience Card */}
              <div className="experience-card shadow">

                <h2>SATHISH ARUMUGAM</h2>

                <p style={{ color: 'white', fontWeight: 'bold', textAlign: 'left' }}>Digital Marketing Specialist / Trainer </p>


                <p style={{ color: 'white', fontWeight: 'bold', textAlign: 'left' }}>FOUNDER & MANAGING DIRECTOR</p>

                {/* Button */}
                <Link to="/founder-bio">
                  <button className="bio-btn">
                    View Bio
                  </button>
                </Link>

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
              Learn from an industry expert with
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
                    <Handshake size={28} />
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

              {/* Experience */}
              <div className="col-4">
                <div className="stats-card shadow">
                  <AwardIcon size={40} className="text-primary mb-2" />
                  <h2 className="fw-bold text-primary">7+</h2>
                  <p className="text-muted mb-0">Experience</p>
                </div>
              </div>

              {/* Students Trained */}
              <div className="col-4">
                <div className="stats-card shadow">
                  <GraduationCap size={40} className="text-primary mb-2" />
                  <h2 className="fw-bold text-primary">10000+</h2>
                  <p className="text-muted mb-0">Students Trained</p>
                </div>
              </div>

              {/* Engineering Colleges */}
              <div className="col-4">
                <div className="stats-card shadow">
                  <Building2 size={40} className="text-primary mb-2" />
                  <h2 className="fw-bold text-primary">50+</h2>
                  <p className="text-muted mb-0">Engineering Colleges</p>
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