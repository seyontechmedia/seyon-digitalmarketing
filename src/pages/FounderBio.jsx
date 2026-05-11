import React from "react";
import {
  GraduationCap,
  Briefcase,
  Trophy,
  Globe,
  Award,
  Megaphone,
  Star,
  Zap,
  Phone,
  Link as LinkIcon,
} from "lucide-react";

export default function FounderBio() {
  return (
    <div className="container py-5 founder-bio">

      {/* HERO CARD */}
      <div className="bio-hero-card text-center mb-5">
        <h1 className="fw-bold">
          Professional Profile – Sathish Arumugam
        </h1>

        <p className="lead mt-3">
          Founder & Managing Director of <strong>SEYON TECH DIGITAL MEDIA SOLUTIONS</strong>
        </p>

        <p className="text-muted">
          Digital Marketing Entrepreneur | Growth Strategist | Campaign Expert
        </p>
      </div>

      {/* GRID SECTION */}
      <div className="row g-4">

        {/* Education */}
        <div className="col-md-6">
          <div className="bio-card">
            <h4><GraduationCap size={20} /> Education</h4>
            <p>B.E Mechanical Engineering – 2015</p>
            <p>📍 Tirupattur, Tamil Nadu | Born: June 12, 1993</p>
          </div>
        </div>

        {/* Business */}
        <div className="col-md-6">
          <div className="bio-card">
            <h4><Briefcase size={20} /> Business Journey</h4>
            <p>
              Founded SEYON TECH DIGITAL MEDIA SOLUTIONS in 2021 and scaled it into a
              multi-city digital marketing agency.
            </p>
          </div>
        </div>

        {/* Achievements */}
        <div className="col-md-6">
          <div className="bio-card">
            <h4><Trophy size={20} /> Achievements</h4>
            <ul>
              <li>100+ Projects Delivered</li>
              <li>15+ Member Expert Team</li>
              <li>Pan India Operations</li>
            </ul>
          </div>
        </div>

        {/* Global */}
        <div className="col-md-6">
          <div className="bio-card">
            <h4><Globe size={20} /> Global Clients</h4>
            <p>UK | UAE | Switzerland</p>
          </div>
        </div>

        {/* Awards */}
        <div className="col-md-6">
          <div className="bio-card">
            <h4><Award size={20} /> Awards</h4>
            <ul>
              <li>Best Digital Marketing Company – 2022</li>
              <li>Best Leads Campaign – 2023</li>
              <li>Best Leads Campaign – 2024</li>
            </ul>
          </div>
        </div>

        {/* Political */}
        <div className="col-md-6">
          <div className="bio-card">
            <h4><Megaphone size={20} /> Campaign Expertise</h4>
            <p>DMK MP Election Campaigns (2023–2024)</p>
          </div>
        </div>

        {/* Highlights */}
        <div className="col-md-6">
          <div className="bio-card">
            <h4><Star size={20} /> Highlights</h4>
            <ul>
              <li>Google Authorized Partner</li>
              <li>Ranked 186th in India</li>
            </ul>
          </div>
        </div>

        {/* Skills */}
        <div className="col-md-6">
          <div className="bio-card">
            <h4><Zap size={20} /> Specializations</h4>
            <p>AI Marketing | SEO | Ads | Branding | Funnels</p>
          </div>
        </div>

      </div>

      {/* CONTACT CARD */}
      <div className="bio-contact-card text-center mt-5">
        <h4><Phone size={20} /> Contact</h4>
        <p>+91 88702 14412 | +91 86104 99770</p>

        <p>
          <LinkIcon size={18} className="me-1" />
          <a href="http://www.seyontech.in" target="_blank" rel="noreferrer">
            www.seyontech.in
          </a>
        </p>

        <p className="fst-italic mt-3">
          “Transforming Brands with Innovation, Strategy & Digital Excellence.”
        </p>
      </div>

    </div>
  );
}