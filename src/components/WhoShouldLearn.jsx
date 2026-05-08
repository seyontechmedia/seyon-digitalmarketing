import {
  GraduationCap,
  Briefcase,
  TrendingUp,
  UserPlus,
  Laptop,
  Store,
} from "lucide-react";

const WhoShouldLearn = () => {
  return (
    <section className="who-section py-5">

      <div className="container">

        {/* Heading */}
        <div className="text-center mb-5">

          <span className="section-tag">
            WHO SHOULD LEARN
          </span>

          <h2 className="fw-bold display-5 mt-3">
            The AI Powered Digital Marketing Course is Perfect For
          </h2>

          <p className="text-muted mt-3">
            Whether you're a student, job seeker, Freelancers or business owner,
            this program helps you master real-world digital marketing skills.
          </p>

        </div>

        {/* Cards */}
        <div className="row g-4">

          <div className="col-lg-4 col-md-6">
            <div className="who-card shadow-sm">

              <GraduationCap size={38} className="who-icon" />

              <h4>Students & Freshers</h4>
              <p>
                Start your career in digital marketing with practical skills,
                internships and certification.
              </p>

            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="who-card shadow-sm">

              <Briefcase size={38} className="who-icon" />

              <h4>Job Seekers</h4>
              <p>
                Upgrade your skills and get placed in top marketing agencies,
                startups and companies.
              </p>

            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="who-card shadow-sm">

              <TrendingUp size={38} className="who-icon" />

              <h4>Freelancers</h4>
              <p>
                Learn how to get clients, run ads and build income through
                freelancing platforms.
              </p>

            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="who-card shadow-sm">

              <Store size={38} className="who-icon" />

              <h4>Business Owners</h4>
              <p>
                Grow your business online using SEO, ads, funnels and
                social media marketing.
              </p>

            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="who-card shadow-sm">

              <Laptop size={38} className="who-icon" />

              <h4>Working Professionals</h4>
              <p>
                Switch careers or upgrade your skills for better salary and
                growth opportunities.
              </p>

            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="who-card shadow-sm">

              <UserPlus size={38} className="who-icon" />

              <h4>Entrepreneurs</h4>
              <p>
                Build personal brand, generate leads and scale your startup
                using digital strategies.
              </p>

            </div>
          </div>

        </div>

      </div>

    </section>
  );
};

export default WhoShouldLearn;