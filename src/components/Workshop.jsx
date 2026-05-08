import {
  Presentation,
  CalendarDays,
  Clock3,
  Users,
  ArrowRight,
} from "lucide-react";

const Workshop = () => {
  return (
    <section
      id="workshop"
      className="workshop-section py-5"
    >
      <div className="container">

        {/* Heading */}
        <div className="text-center mb-5">

          <span className="workshop-tag">
            LIVE WORKSHOPS
          </span>

          <h2 className="fw-bold display-5 mt-3">
            Learn From Real Industry Experts
          </h2>

          <p className="text-muted mt-3">
            Join our hands-on workshops and
            gain practical digital marketing
            experience through live sessions,
            case studies and real campaigns.
          </p>

        </div>

        {/* Workshop Cards */}
        <div className="row g-4">

          {/* Card 1 */}
          <div className="col-lg-4 col-md-6">

            <div className="workshop-box shadow-sm">

              <div className="workshop-icon">
                <Presentation size={34} />
              </div>

              <h4 className="fw-bold mt-4">
                Meta Ads Masterclass
              </h4>

              <p className="text-muted mt-3">
                Learn Facebook & Instagram ads,
                audience targeting and campaign
                optimization techniques.
              </p>

              <div className="workshop-details">

                <span>
                  <CalendarDays size={16} />
                  12 May 2026
                </span>

                <span>
                  <Clock3 size={16} />
                  2 Hours
                </span>

              </div>

              <div className="workshop-footer">

                <span>
                  <Users size={16} />
                  120+ Joined
                </span>

                <button className="btn btn-primary">
                  Join Now
                </button>

              </div>

            </div>

          </div>

          {/* Card 2 */}
          <div className="col-lg-4 col-md-6">

            <div className="workshop-box shadow-sm featured-workshop">

              <div className="featured-badge">
                TRENDING
              </div>

              <div className="workshop-icon">
                <Presentation size={34} />
              </div>

              <h4 className="fw-bold mt-4">
                AI Marketing Workshop
              </h4>

              <p className="text-muted mt-3">
                Discover AI tools, automation,
                ChatGPT marketing strategies
                and AI-powered content creation.
              </p>

              <div className="workshop-details">

                <span>
                  <CalendarDays size={16} />
                  18 May 2026
                </span>

                <span>
                  <Clock3 size={16} />
                  3 Hours
                </span>

              </div>

              <div className="workshop-footer">

                <span>
                  <Users size={16} />
                  250+ Joined
                </span>

                <button className="btn btn-light text-primary">
                  Register
                </button>

              </div>

            </div>

          </div>

          {/* Card 3 */}
          <div className="col-lg-4 col-md-6">

            <div className="workshop-box shadow-sm">

              <div className="workshop-icon">
                <Presentation size={34} />
              </div>

              <h4 className="fw-bold mt-4">
                SEO Growth Blueprint
              </h4>

              <p className="text-muted mt-3">
                Understand keyword research,
                technical SEO, backlinks and
                ranking strategies.
              </p>

              <div className="workshop-details">

                <span>
                  <CalendarDays size={16} />
                  25 May 2026
                </span>

                <span>
                  <Clock3 size={16} />
                  2.5 Hours
                </span>

              </div>

              <div className="workshop-footer">

                <span>
                  <Users size={16} />
                  90+ Joined
                </span>

                <button className="btn btn-primary">
                  Explore
                </button>

              </div>

            </div>

          </div>

        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-5">

          <button className="btn workshop-main-btn">
            View All Workshops

            <ArrowRight size={20} />
          </button>

        </div>

      </div>
    </section>
  );
};

export default Workshop;