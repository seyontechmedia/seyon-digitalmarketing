import { MapPin, Phone, Mail, Clock } from "lucide-react";
const Footer = () => {
  return (
    <footer className="footer-section bg-dark text-white pt-5 pb-3">
      <div className="container">
        <div className="row g-4">

          {/* Company Info */}
          <div className="col-lg-4">
            <h3 className="fw-bold mb-3">
              SEYON TECH
            </h3>

            <p className="text-light">
              Empowering students and businesses
              through advanced digital marketing
              education and real-world projects.
            </p>

            <div className="d-flex gap-3 mt-4">
              <a
                href="https://www.facebook.com/share/1ELNyVv8Ga/"
                className="text-white social-icon"
              >
                <i className="bi bi-facebook"></i>
              </a>

              <a
                href="https://www.instagram.com/seyontechnology/"
                className="text-white social-icon"
              >
                <i className="bi bi-instagram"></i>
              </a>

              <a
                href="https://www.linkedin.com/company/seyon-technology-digital-solutions/posts/?feedView=all"
                className="text-white social-icon"
              >
                <i className="bi bi-linkedin"></i>
              </a>

              <a
                href="https://www.youtube.com/@seyontechdigitalmediasoultions"
                className="text-white social-icon"
              >
                <i className="bi bi-youtube"></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-lg-2 col-md-6">
            <h5 className="fw-bold mb-3">
              Quick Links
            </h5>

            <ul className="list-unstyled footer-links">
              <li>
                <a href="#home">
                  Home
                </a>
              </li>

              <li>
                <a href="#about">
                  About
                </a>
              </li>

              <li>
                <a href="#courses">
                  Courses
                </a>
              </li>

              <li>
                <a href="#pricing">
                  Pricing
                </a>
              </li>
            </ul>
          </div>

          {/* Courses */}
          <div className="col-lg-3 col-md-6">
            <h5 className="fw-bold mb-3">
              Popular Courses
            </h5>

            <ul className="list-unstyled footer-links">
              <li>SEO Optimization</li>
              <li>Social Media Marketing</li>
              <li>Google Ads</li>
              <li>Email Marketing</li>
            </ul>
          </div>

          {/* Contact */}
          <div className="col-lg-3">
            <h5 className="fw-bold mb-3">
              Contact Us
            </h5>

            <p className="mb-2 d-flex align-items-center gap-2">
              <MapPin size={18} />
              Thousand Lights, Tamil Nadu
            </p>

            <p className="mb-2 d-flex align-items-center gap-2">
              <Phone size={18} />
              +91 86104 99770
            </p>

            <p className="mb-2 d-flex align-items-center gap-2">
              <Mail size={18} />
              info@seyontech.in
            </p>

            <p className="d-flex align-items-center gap-2">
              <Clock size={18} />
              Mon - Sat | 9 AM - 7 PM
            </p>
          </div>
        </div>

        <hr className="border-secondary my-4" />

        {/* Bottom */}
        <div className="d-flex justify-content-between align-items-center flex-wrap">

          <div className="text-start">
            <p className="mb-0 text-light">
              © 2026 Seyon Tech Digital Media
              Solutions. All Rights Reserved.
            </p>
          </div>

          <div className="d-flex gap-4 text-end">
            <p className="mb-0 text-light">
              Privacy Policy
            </p>

            <p className="mb-0 text-light">
              Terms of Service
            </p>

            <p className="mb-0 text-light">
              Career Guidance
            </p>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;