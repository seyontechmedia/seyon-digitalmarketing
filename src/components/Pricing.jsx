import {
  BookOpen,
  BrainCircuit,
  Presentation,
  CheckCircle2,
  Sparkles,
  BadgeIndianRupee,
  CalendarDays,
} from "lucide-react";

const Pricing = () => {
  return (
    <section
      id="pricing"
      className="pricing-section py-5"
    >
      <div className="container pricing-container">

        {/* Heading */}
        <div className="text-center mb-5">

          <span className="pricing-tag">
            COURSE FEES
          </span>

          <h2 className="fw-bold display-5 mt-3">
            Choose Your Learning Journey
          </h2>

          <p className="text-muted mt-3">
            Affordable pricing plans for
            students, freelancers and
            business owners who want to
            master digital marketing.
          </p>

        </div>

        {/* Pricing Cards */}
        <div className="row g-4 justify-content-center">

          {/* Starter Plan */}
          <div className="col-lg-4 col-md-6">

            <div className="pricing-card shadow-sm h-100">

              {/* Badge */}
              <div className="popular-badge">
                Bootcamp
              </div>

              {/* Icon */}
              <div className="pricing-icon">
                <BookOpen size={34} />
              </div>

              {/* Plan */}
              <h3 className="fw-bold mt-4">
                Starter Plan
              </h3>

              <div className="d-flex align-items-center gap-2 fw-bold text-primary">
                <CalendarDays size={20} />
                <span>30 Days Program</span>
              </div>

              <p className="text-muted">
                Perfect for beginners &
                self learners
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
                  Recorded Sessions
                </li>

                <li>
                  <CheckCircle2 size={18} />
                  Lifetime Access
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
              <a
                href="https://wa.me/918610499770"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary w-100 mt-4 pricing-btn"
              >
                Get Start
              </a>

            </div>
          </div>

          {/* AI Digital Marketing */}
          <div className="col-lg-4 col-md-6">

            <div className="pricing-card premium shadow-lg h-100">

              {/* Badge */}
              <div className="popular-badge">
                Course
              </div>

              {/* Icon */}
              <div className="pricing-icon">
                <BrainCircuit size={34} />
              </div>

              {/* Plan */}
              <h3 className="fw-bold mt-4">
                AI Digital Marketing
              </h3>

              <div className="d-flex align-items-center gap-2 fw-bold text-primary">
                <CalendarDays size={20} />
                <span>100 Days Program</span>
              </div>

              <p className="text-muted">
                Advanced AI digital marketing course.
              </p>

              {/* Price */}
              <h1 className="pricing-price">
                ₹35,000
              </h1>

              <p className="text-muted">
                Includes AI tools training
              </p>

              {/* Features */}
              <ul className="pricing-features list-unstyled mt-4">

                <li>
                  <Sparkles size={18} />
                  AI Marketing Mastery
                </li>

                <li>
                  <Sparkles size={18} />
                  AI Content Creation
                </li>

                <li>
                  <Sparkles size={18} />
                  AI SEO Optimization
                </li>

                <li>
                  <Sparkles size={18} />
                  Funnel & Ads Strategy
                </li>

                <li>
                  <Sparkles size={18} />
                  Internship Support
                </li>

              </ul>

              {/* Button */}
              <a
                href="https://wa.me/918610499770"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary w-100 mt-4 pricing-btn"
              >
                Enroll Now
              </a>

            </div>
          </div>

          {/* Workshops */}
          <div className="col-lg-4 col-md-6">

            <div className="pricing-card workshop-card shadow-sm h-100">

              <div className="popular-badge">
                Workshop
              </div>

              {/* Icon */}
              <div className="pricing-icon">
                <Presentation size={34} />
              </div>

              {/* Plan */}
              <h3 className="fw-bold mt-4">
                Premium Workshops
              </h3>

              <div className="d-flex align-items-center gap-2 fw-bold text-primary">
                <CalendarDays size={20} />
                <span>1 Day Program</span>
              </div>

              <p className="text-muted">
                Live practical sessions from
                industry experts
              </p>

              {/* Price */}
              <h1 className="pricing-price">
                ₹999
              </h1>

              <p className="text-muted">
                Starting price per workshop
              </p>

              {/* Features */}
              <ul className="pricing-features list-unstyled mt-4">

                <li>
                  <BadgeIndianRupee size={18} />
                  Meta Ads Workshop
                </li>

                <li>
                  <BadgeIndianRupee size={18} />
                  AI Marketing Sessions
                </li>

                <li>
                  <BadgeIndianRupee size={18} />
                  SEO Growth Blueprint
                </li>

                <li>
                  <BadgeIndianRupee size={18} />
                  Live Q&A + Networking
                </li>

                <li>
                  <BadgeIndianRupee size={18} />
                  Workshop Certificate
                </li>

              </ul>

              {/* Button */}
              <a
                href="https://wa.me/918610499770"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary w-100 mt-4 pricing-btn"
              >
                Register Workshop
              </a>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Pricing;