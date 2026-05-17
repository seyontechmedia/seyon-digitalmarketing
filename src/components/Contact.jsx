import { useState } from "react";
import { Mail, Phone, MapPin, Send, Clock } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    course: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    let newErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full Name is required";
    }

    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)
    ) {
      newErrors.email = "Invalid email address";
    }

    if (!formData.phone) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = "Phone number must be 10 digits";
    }

    if (!formData.course) {
      newErrors.course = "Please select a course";
    }

    return newErrors;
  };

  const classTimings = [
    {
      label: "Weekday Morning Batch",
      time: "8:00 AM – 10:00 AM",
    },
    {
      label: "Weekday Evening Batch",
      time: "4:00 PM – 6:00 PM",
    },
    {
      label: "Weekend Special Batch",
      time: "Same timings as Weekday's",
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      const message = `Hello, I want to enroll:

Name: ${formData.fullName}
Email: ${formData.email}
Phone: ${formData.phone}
Course: ${formData.course}
Message: ${formData.message}`;

      const whatsappUrl = `https://wa.me/918610499770?text=${encodeURIComponent(
        message
      )}`;

      window.open(whatsappUrl, "_blank");
    }
  };

  return (
    <section id="contact" className="contact-section py-5">
      <div className="container">

        <div className="row g-5 align-items-center">

          {/* ✅ LEFT SIDE */}
          <div className="col-lg-5">
            <div className="contact-info">

              <div className="info-card shadow-sm">
                <div className="info-icon">
                  <Phone size={28} />
                </div>
                <div>
                  <h5 className="fw-bold mb-1">Call Us</h5>
                  <p className="text-muted mb-0">
                    +91 86104 99770
                  </p>
                </div>
              </div>

              <div className="info-card shadow-sm">
                <div className="info-icon">
                  <Mail size={28} />
                </div>
                <div>
                  <h5 className="fw-bold mb-1">Email Address</h5>
                  <p className="text-muted mb-0">
                    info@seyontech.in
                  </p>
                </div>
              </div>

              <div className="info-card shadow-sm">
                <div className="info-icon">
                  <MapPin size={28} />
                </div>
                <div>
                  <h5 className="fw-bold mb-1">Office Location</h5>
                  <p className="text-muted mb-0">
                    Thousand Lights, Tamil Nadu
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* ✅ RIGHT SIDE (FORM) */}
          <div className="col-lg-7">
            <div className="contact-form-wrapper shadow-lg">
              <h3 className="fw-bold mb-4">Enroll Now</h3>

              <form onSubmit={handleSubmit} noValidate>

                <div className="row">
                  <div className="col-md-6">
                    <input
                      type="text"
                      name="fullName"
                      className="form-control custom-input"
                      placeholder="Full Name"
                      value={formData.fullName}
                      onChange={handleChange}
                    />
                    {errors.fullName && (
                      <small className="text-danger">
                        {errors.fullName}
                      </small>
                    )}
                  </div>

                  <div className="col-md-6">
                    <input
                      type="email"
                      name="email"
                      className="form-control custom-input"
                      placeholder="Email Address"
                      value={formData.email}
                      onChange={handleChange}
                    />
                    {errors.email && (
                      <small className="text-danger">
                        {errors.email}
                      </small>
                    )}
                  </div>
                </div>

                <input
                  type="text"
                  name="phone"
                  className="form-control custom-input mt-3"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                />
                {errors.phone && (
                  <small className="text-danger">
                    {errors.phone}
                  </small>
                )}

                <select
                  name="course"
                  className="form-select custom-input mt-3"
                  value={formData.course}
                  onChange={handleChange}
                >
                  <option value="">Select Course</option>
                  <option value="AI + Digital Marketing">
                    AI + Digital Marketing
                  </option>
                </select>
                {errors.course && (
                  <small className="text-danger">
                    {errors.course}
                  </small>
                )}

                <textarea
                  name="message"
                  rows="5"
                  className="form-control custom-input mt-3"
                  placeholder="Tell us about your goals..."
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>

                <button
                  type="submit"
                  className="btn btn-primary submit-btn mt-4 d-inline-flex align-items-center gap-2"
                >
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