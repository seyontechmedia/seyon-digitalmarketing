import {
  BookOpen,
  MonitorPlay,
  CheckCircle2,
  BadgeCheck,
} from "lucide-react";

const Pricing = () => {
  return (
    <section
      id="pricing"
      className="pricing-section py-5"
    >
      <div className="container">

        {/* Heading */}
        <div className="text-center mb-5">

          <span className="pricing-tag">
            PRICING PLANS
          </span>

          <h2 className="fw-bold display-5 mt-3">
            Choose Your Learning Journey
          </h2>

          <p className="text-muted mt-3">
            Flexible pricing plans designed for
            students, freelancers and business
            owners who want to master digital
            marketing skills.
          </p>

        </div>

        {/* Pricing Cards */}
        <div className="row g-4">

          {/* Self Learning */}
          <div className="col-lg-6">

            <div className="pricing-card shadow-sm h-100">

              {/* Icon */}
              <div className="pricing-icon">
                <BookOpen size={34} />
              </div>

              {/* Plan */}
              <h3 className="fw-bold mt-4">
                Self Learning
              </h3>

              <p className="text-muted">
                Perfect for independent learners
              </p>

              {/* Price */}
              <h1 className="pricing-price">
                ₹9,999
              </h1>

              <p className="text-muted">
                One-time payment
              </p>

              {/* Features */}
              <ul className="pricing-features list-unstyled mt-4">

                <li>
                  <CheckCircle2 size={18} />
                  Lifetime Access
                </li>

                <li>
                  <CheckCircle2 size={18} />
                  Recorded Video Sessions
                </li>

                <li>
                  <CheckCircle2 size={18} />
                  Course Materials
                </li>

                <li>
                  <CheckCircle2 size={18} />
                  Certification
                </li>

                <li>
                  <CheckCircle2 size={18} />
                  Community Support
                </li>

              </ul>

              {/* Button */}
              <button className="btn btn-outline-primary w-100 mt-4 pricing-btn">
                Choose Plan
              </button>

            </div>
          </div>

          {/* Live Bootcamp */}
          <div className="col-lg-6">

            <div className="pricing-card premium shadow-lg h-100">

              {/* Popular Badge */}
              <div className="popular-badge">
                MOST POPULAR
              </div>

              {/* Icon */}
              <div className="pricing-icon premium-icon">
                <MonitorPlay size={34} />
              </div>

              {/* Plan */}
              <h3 className="fw-bold mt-4">
                Live Bootcamp
              </h3>

              <p className="text-muted">
                Best for practical learning &
                placements
              </p>

              {/* Price */}
              <h1 className="pricing-price">
                ₹35,000
              </h1>

              <p className="text-muted">
                Includes mentorship & projects
              </p>

              {/* Features */}
              <ul className="pricing-features list-unstyled mt-4">

                <li>
                  <BadgeCheck size={18} />
                  Live Interactive Classes
                </li>

                <li>
                  <BadgeCheck size={18} />
                  Real-Time Projects
                </li>

                <li>
                  <BadgeCheck size={18} />
                  Placement Assistance
                </li>

                <li>
                  <BadgeCheck size={18} />
                  1-on-1 Mentorship
                </li>

                <li>
                  <BadgeCheck size={18} />
                  Premium Certification
                </li>

              </ul>

              {/* Button */}
              <button className="btn btn-primary w-100 mt-4 pricing-btn">
                Join Bootcamp
              </button>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Pricing;