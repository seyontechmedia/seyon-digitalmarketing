import {
  BookOpen,
  BrainCircuit,
  Presentation,
  CheckCircle2,
  Sparkles,
  BadgeIndianRupee,
  CalendarDays,
} from "lucide-react";
import { useState } from "react";
import RegisterModal from "./RegisterModal";

const plans = [
  {
    id: "starter",
    name: "Starter Plan – 30 Days",
    amount: 999900, // ₹9,999 in paise
    displayPrice: "₹9,999",
  },
  {
    id: "ai_digital",
    name: "AI Digital Marketing – 100 Days",
    amount: 3500000, // ₹35,000
    displayPrice: "₹35,000",
  },
  {
    id: "workshop",
    name: "Premium Workshop – 1 Day",
    amount: 99900, // ₹999
    displayPrice: "₹999",
  },
];

const Pricing = () => {
  const [selectedPlan, setSelectedPlan] = useState(null);

  return (
    <>
      {selectedPlan && (
        <RegisterModal
          plan={selectedPlan}
          onClose={() => setSelectedPlan(null)}
        />
      )}

      <section id="pricing" className="pricing-section py-5">
        <div className="container pricing-container">

          {/* Heading */}
          <div className="text-center mb-5">
            <span className="pricing-tag">COURSE FEES</span>
            <h2 className="fw-bold display-5 mt-3">
              Choose Your Learning Journey
            </h2>
          </div>

          <div className="row g-4 justify-content-center">

            {/* Starter */}
            <div className="col-lg-4 col-md-6">
              <div className="pricing-card shadow-sm h-100">
                <div className="pricing-icon"><BookOpen size={34} /></div>
                <h3 className="fw-bold mt-4">Starter Plan</h3>
                <h1 className="pricing-price">₹9,999</h1>
                <ul className="pricing-features list-unstyled mt-4">
                  <li><CheckCircle2 size={18} /> Recorded Sessions</li>
                  <li><CheckCircle2 size={18} /> Lifetime Access</li>
                  <li><CheckCircle2 size={18} /> Course Materials</li>
                  <li><CheckCircle2 size={18} /> Certification</li>
                  <li><CheckCircle2 size={18} /> Community Support</li>
                </ul>
                <button
                  className="btn btn-primary w-100 mt-4"
                  onClick={() => setSelectedPlan(plans[0])}
                >
                  Get Started — ₹9,999
                </button>
              </div>
            </div>

            {/* AI */}
            <div className="col-lg-4 col-md-6">
              <div className="pricing-card premium shadow-lg h-100">
                <div className="pricing-icon"><BrainCircuit size={34} /></div>
                <h3 className="fw-bold mt-4">AI Digital Marketing</h3>
                <h1 className="pricing-price">₹35,000</h1>
                <ul className="pricing-features list-unstyled mt-4">
                  <li><Sparkles size={18} /> AI Marketing Mastery</li>
                  <li><Sparkles size={18} /> AI Content Creation</li>
                  <li><Sparkles size={18} /> AI SEO Optimization</li>
                  <li><Sparkles size={18} /> Funnel & Ads Strategy</li>
                  <li><Sparkles size={18} /> Internship Support</li>
                </ul>
                <button
                  className="btn btn-primary w-100 mt-4"
                  onClick={() => setSelectedPlan(plans[1])}
                >
                  Enroll Now — ₹35,000
                </button>
              </div>
            </div>

            {/* Workshop */}
            <div className="col-lg-4 col-md-6">
              <div className="pricing-card workshop-card shadow-sm h-100">
                <div className="pricing-icon"><Presentation size={34} /></div>
                <h3 className="fw-bold mt-4">Premium Workshop</h3>
                <h1 className="pricing-price">₹999</h1>
                <ul className="pricing-features list-unstyled mt-4">
                  <li><BadgeIndianRupee size={18} /> Meta Ads Workshop</li>
                  <li><BadgeIndianRupee size={18} />AI Marketing Sessions</li>
                  <li><BadgeIndianRupee size={18} />SEO Growth Blueprint</li>
                  <li><BadgeIndianRupee size={18} />Live Q&A + Networking</li>
                  <li><BadgeIndianRupee size={18} />Workshop Certificate</li>
                </ul>
                <button
                  className="btn btn-primary w-100 mt-4"
                  onClick={() => setSelectedPlan(plans[2])}
                >
                  Register — ₹999
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default Pricing;