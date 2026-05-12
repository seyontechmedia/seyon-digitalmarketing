import {

  CalendarDays,
  Clock3,
  Users,
  ArrowRight,
  Megaphone,
  Bot,
  LineChart,
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
                <Megaphone size={34} />
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
                  6 Hours
                </span>

              </div>

              <div className="workshop-footer">

                <span>
                  <Users size={16} />
                  120+ Joined
                </span>

                <a
                  href="https://wa.me/918610499770?text=Hi%20want%20to%20join"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  Join Now
                </a>

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
                <Bot size={34} />
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
                  6.5 Hours
                </span>

              </div>

              <div className="workshop-footer">

                <span>
                  <Users size={16} />
                  250+ Joined
                </span>

                <a
                  href="https://wa.me/918610499770?text=Hi%20want%20to%20register"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-light text-primary"
                >
                  Register
                </a>

              </div>

            </div>

          </div>

          {/* Card 3 */}
          <div className="col-lg-4 col-md-6">

            <div className="workshop-box shadow-sm">

              <div className="workshop-icon">
                < LineChart size={34} />
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
                  7.5 Hours
                </span>

              </div>

              <div className="workshop-footer">

                <span>
                  <Users size={16} />
                  90+ Joined
                </span>

                <a
                  href="https://wa.me/918610499770?text=Hi%20want%20to%20Explore"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  Explore
                </a>

              </div>

            </div>

          </div>

        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-5">

          <a
            href="https://wa.me/918610499770?text=Hi%20want%20to%20view%20all%20workshops"
            className="btn btn-light text-primary fw-bold"
          >
            View All Workshops

            <ArrowRight size={18} />
          </a>

        </div>

      </div>
    </section>
  );
};

export default Workshop;