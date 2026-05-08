import {
  BookOpen,
  BrainCircuit,
  Presentation,
  CheckCircle2,
  Sparkles,
  BadgeIndianRupee,
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

              {/* Icon */}
              <div className="pricing-icon">
                <BookOpen size={34} />
              </div>

              {/* Plan */}
              <h3 className="fw-bold mt-4">
                Starter Plan
              </h3>

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
              <button className="btn btn-outline-primary w-100 mt-4 pricing-btn">
                Get Started
              </button>

            </div>
          </div>

          {/* AI Digitla Marketing */}
          <div className="col-lg-4 col-md-6">

            <div className="pricing-card premium shadow-lg h-100">

              {/* Badge */}
              <div className="popular-badge">
                MOST POPULAR
              </div>

              {/* Icon */}
              <div className="pricing-icon premium-icon">
                <BrainCircuit size={34} />
              </div>

              {/* Plan */}
              <h3 className="fw-bold mt-4">
                AI Powered Digital Marketing Course
              </h3>

              <p className="text-muted">
                Advanced AI digital marketing
                master program
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
                  ChatGPT & Claude AI
                </li>

                <li>
                  <Sparkles size={18} />
                  Canva AI & CapCut
                </li>

                <li>
                  <Sparkles size={18} />
                  WhatsApp Automation
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
              <button className="btn btn-primary w-100 mt-4 pricing-btn">
                Join Course
              </button>

            </div>
          </div>

          {/* Workshops */}
          <div className="col-lg-4 col-md-6">

            <div className="pricing-card workshop-card shadow-sm h-100">

              {/* Badge */}
              <div className="ai-badge">
                
              </div>

              {/* Icon */}
              <div className="pricing-icon workshop-icon">
                <Presentation size={34} />
              </div>

              {/* Plan */}
              <h3 className="fw-bold mt-4">
                Premium Workshops
              </h3>

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
              <button className="btn btn-primary w-100 mt-4 pricing-btn">
                Register Workshop
              </button>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Pricing;