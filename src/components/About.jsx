import {
  BriefcaseBusiness,
  GraduationCap,
  BarChart3,
  Users,
  Building2,
  Handshake,
  AwardIcon,
} from "lucide-react";

import { Link } from "react-router-dom";
import Banner from "../assets/Banner.jpeg";

const About = () => {
  return (
    <>
      <style>{`
        .about-section {
          background: #f0f6ff;
        }

        /* ── Tag ── */
        .about-tag-new {
          display: inline-block;
          background: linear-gradient(90deg, #0d6efd, #3b8dfd);
          color: white;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 1.5px;
          padding: 6px 18px;
          border-radius: 30px;
          margin-bottom: 20px;
          text-transform: uppercase;
        }

        /* ── Image wrapper ── */
        .about-img-wrapper {
          position: relative;
          border-radius: 20px;
          overflow: visible;
        }
        .about-img-wrapper img {
          border-radius: 20px;
          width: 100%;
          object-fit: cover;
          box-shadow: 0 20px 60px rgba(13, 110, 253, 0.2);
        }

        /* ── Founder card ── */
        .founder-card {
          position: absolute;
          bottom: -24px;
          left: 50%;
          transform: translateX(-50%);
          background: white;
          border-radius: 16px;
          padding: 16px 24px;
          width: 90%;
          box-shadow: 0 8px 30px rgba(13, 110, 253, 0.15);
          border-left: 4px solid #0d6efd;
          text-align: left;
        }
        .founder-card h2 {
          font-size: 14px;
          font-weight: 700;
          color: #1a1a1a;
          margin: 0 0 4px;
          line-height: 1.4;
        }
        .founder-card p {
          font-size: 12px;
          color: #777;
          margin: 0 0 12px;
        }
        .bio-btn-new {
          background: #0d6efd;
          color: white;
          border: none;
          padding: 8px 20px;
          border-radius: 30px;
          font-size: 13px;
          font-weight: 600;
          cursor: pointer;
          transition: background 0.2s, transform 0.2s;
        }
        .bio-btn-new:hover {
          background: #0a58ca;
          transform: scale(1.03);
        }

        /* ── Heading ── */
        .about-heading {
          font-size: 2rem;
          font-weight: 800;
          color: #1a1a1a;
          line-height: 1.3;
        }
        .about-heading .highlight {
          color: #0d6efd;
        }
        .about-desc {
          color: #666;
          font-size: 15px;
          line-height: 1.8;
          margin-top: 16px;
        }

        /* ── Feature cards ── */
        .feature-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
          margin-top: 24px;
        }
        .feature-card-new {
          background: white;
          border-radius: 16px;
          padding: 20px;
          box-shadow: 0 4px 20px rgba(13, 110, 253, 0.08);
          border: 1px solid #e7f0ff;
          transition: transform 0.2s, box-shadow 0.2s;
        }
        .feature-card-new:hover {
          transform: translateY(-4px);
          box-shadow: 0 8px 30px rgba(13, 110, 253, 0.15);
        }
        .feature-icon-new {
          width: 48px; height: 48px;
          background: linear-gradient(135deg, #0d6efd, #3b8dfd);
          border-radius: 12px;
          display: flex; align-items: center; justify-content: center;
          color: white;
          margin-bottom: 12px;
        }
        .feature-card-new h5 {
          font-size: 15px;
          font-weight: 700;
          color: #1a1a1a;
          margin: 0 0 6px;
        }
        .feature-card-new p {
          font-size: 13px;
          color: #888;
          margin: 0;
          line-height: 1.5;
        }

        /* ── Stats ── */
        .stats-row {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
          margin-top: 28px;
        }
        .stat-card-new {
          background: white;
          border-radius: 16px;
          padding: 20px 12px;
          text-align: center;
          box-shadow: 0 4px 20px rgba(13, 110, 253, 0.08);
          border: 1px solid #e7f0ff;
          transition: transform 0.2s;
        }
        .stat-card-new:hover { transform: translateY(-3px); }
        .stat-card-new .stat-icon {
          color: #0d6efd;
          margin-bottom: 8px;
        }
        .stat-card-new h2 {
          font-size: 26px;
          font-weight: 800;
          color: #0d6efd;
          margin: 0 0 4px;
        }
        .stat-card-new p {
          font-size: 12px;
          color: #888;
          margin: 0;
          font-weight: 500;
        }

        @media (max-width: 768px) {
          .feature-grid { grid-template-columns: 1fr 1fr; }
          .stats-row { grid-template-columns: repeat(3, 1fr); }
          .about-img-wrapper { margin-bottom: 60px; }
        }
        @media (max-width: 480px) {
          .stats-row { grid-template-columns: 1fr; }
          .feature-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      <section id="about" className="about-section py-5">
        <div className="container">
          <div className="row align-items-center g-5">

            {/* ── Left: Image ── */}
            <div className="col-lg-6">
              <div className="about-img-wrapper">
                <img src={Banner} alt="About Seyon Tech" />
                <div className="founder-card">
                  <h2>SATHISH ARUMUGAM — Digital Marketing Specialist / Trainer</h2>
                  <p>SeyonTech Digital Media Solutions · FOUNDER & MANAGING DIRECTOR</p>
                  <Link to="/founder-bio">
                    <button className="bio-btn-new">View Bio</button>
                  </Link>
                </div>
              </div>
            </div>

            {/* ── Right: Content ── */}
            <div className="col-lg-6" style={{ paddingTop: "32px" }}>

              <span className="about-tag-new">WHY CHOOSE US</span>

              <h2 className="about-heading">
                Learn from an industry expert with{" "}
                <span className="highlight">Seyon Tech</span>
              </h2>

              <p className="about-desc">
                We provide industry-focused digital marketing training with practical
                learning, live projects and expert mentorship. Our courses are designed for
                students, freelancers, entrepreneurs and professionals who want to master
                modern digital marketing strategies.
              </p>

              {/* Feature Cards */}
              <div className="feature-grid">
                <div className="feature-card-new">
                  <div className="feature-icon-new"><BriefcaseBusiness size={22} /></div>
                  <h5>Live Projects</h5>
                  <p>Work on real campaigns and practical assignments.</p>
                </div>
                <div className="feature-card-new">
                  <div className="feature-icon-new"><Handshake size={22} /></div>
                  <h5>Placement Support</h5>
                  <p>Interview preparation and career guidance included.</p>
                </div>
                <div className="feature-card-new">
                  <div className="feature-icon-new"><BarChart3 size={22} /></div>
                  <h5>Industry Tools</h5>
                  <p>Learn Meta Ads, GA4, GTM, CRM and SEO tools.</p>
                </div>
                <div className="feature-card-new">
                  <div className="feature-icon-new"><Users size={22} /></div>
                  <h5>Expert Mentorship</h5>
                  <p>Learn directly from digital marketing experts.</p>
                </div>
              </div>

              {/* Stats */}
              <div className="stats-row">
                <div className="stat-card-new">
                  <div className="stat-icon"><AwardIcon size={36} /></div>
                  <h2>7+</h2>
                  <p>Years Experience</p>
                </div>
                <div className="stat-card-new">
                  <div className="stat-icon"><GraduationCap size={36} /></div>
                  <h2>20K+</h2>
                  <p>Students Trained</p>
                </div>
                <div className="stat-card-new">
                  <div className="stat-icon"><Building2 size={36} /></div>
                  <h2>50+</h2>
                  <p>Colleges</p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;