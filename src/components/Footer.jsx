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
                href="#"
                className="text-white social-icon"
              >
                <i className="bi bi-facebook"></i>
              </a>

              <a
                href="#"
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
              <li>Analytics & Reporting</li>
            </ul>
          </div>

          {/* Contact */}
          <div className="col-lg-3">
            <h5 className="fw-bold mb-3">
              Contact Us
            </h5>

            <p className="mb-2">
              📍 Chennai, Tamil Nadu
            </p>

            <p className="mb-2">
              📞 +91 86104 99770
            </p>

            <p className="mb-2">
              ✉ info@seyontech.in
            </p>

            <p>
              🕒 Mon - Sat | 9 AM - 6 PM
            </p>
          </div>
        </div>

        <hr className="border-secondary my-4" />

        {/* Bottom */}
        <div className="text-center">
          <p className="mb-0 text-light">
            © 2026 Seyon Tech Digital Media
            Solutions. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;