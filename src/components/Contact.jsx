import {
  Mail,
  Phone,
  MapPin,
  Send,
} from "lucide-react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="contact-section py-5"
    >
      <div className="container">

        {/* Heading */}
        <div className="text-center mb-5">

          <span className="contact-tag">
            CONTACT US
          </span>

          <h2 className="fw-bold display-5 mt-3">
            Start Your Digital
            Marketing Journey
          </h2>

          <p className="text-muted mt-3">
            Enroll today and get hands-on
            training with real-world projects,
            mentorship and placement support.
          </p>

        </div>

        <div className="row g-5 align-items-center">

          {/* Left Content */}
          <div className="col-lg-5">

            <div className="contact-info">

              {/* Info Card */}
              <div className="info-card shadow-sm">

                <div className="info-icon">
                  <Phone size={24} />
                </div>

                <div>
                  <h5 className="fw-bold mb-1">
                    Call Us
                  </h5>

                  <p className="text-muted mb-0">
                    +91 86104 99770
                  </p>
                </div>

              </div>

              {/* Info Card */}
              <div className="info-card shadow-sm">

                <div className="info-icon">
                  <Mail size={24} />
                </div>

                <div>
                  <h5 className="fw-bold mb-1">
                    Email Address
                  </h5>

                  <p className="text-muted mb-0">
                    info@seyontech.in
                  </p>
                </div>

              </div>

              {/* Info Card */}
              <div className="info-card shadow-sm">

                <div className="info-icon">
                  <MapPin size={24} />
                </div>

                <div>
                  <h5 className="fw-bold mb-1">
                    Office Location
                  </h5>

                  <p className="text-muted mb-0">
                    Chennai, Tamil Nadu
                  </p>
                </div>

              </div>

            </div>
          </div>

          {/* Right Form */}
          <div className="col-lg-7">

            <div className="contact-form-wrapper shadow-lg">

              <h3 className="fw-bold mb-4">
                Enroll Now
              </h3>

              <form>

                <div className="row">

                  <div className="col-md-6">
                    <input
                      type="text"
                      className="form-control custom-input"
                      placeholder="Full Name"
                    />
                  </div>

                  <div className="col-md-6">
                    <input
                      type="email"
                      className="form-control custom-input"
                      placeholder="Email Address"
                    />
                  </div>

                </div>

                <input
                  type="text"
                  className="form-control custom-input mt-3"
                  placeholder="Phone Number"
                />

                <select
                  className="form-select custom-input mt-3"
                >
                  <option>
                    Select Course
                  </option>

                  <option>
                    SEO Optimization
                  </option>

                  <option>
                    Social Media Marketing
                  </option>

                  <option>
                    Google Ads
                  </option>

                  <option>
                    Marketing Analytics
                  </option>
                </select>

                <textarea
                  rows="5"
                  className="form-control custom-input mt-3"
                  placeholder="Tell us about your goals..."
                ></textarea>

                <button className="btn btn-primary submit-btn mt-4">
                  <Send size={18} />

                  Send Inquiry
                </button>

              </form>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;