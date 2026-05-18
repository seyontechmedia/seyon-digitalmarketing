import { useState } from "react"
import RegisterModal from "./RegisterModal"

const Hero = () => {
  const [showModal, setShowModal] = useState(false)

  return (
    <>
      <style>{`
        @keyframes pulse-glow {
          0%   { box-shadow: 0 0 0 0 rgb(13, 110, 253); transform: scale(1.08); }
          50%  { box-shadow: 0 0 0 10px rgba(255, 80, 0, 0); transform: scale(1.18); }
          100% { box-shadow: 0 0 0 0 rgba(255, 80, 0, 0); transform: scale(1); }
        }
        @keyframes shimmer {
          0%   { background-position: -200% center; }
          50%  { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        .register-btn {
          margin: 20px 0;
          padding: 10px 54px;
          border-radius: 30px;
          border: none;
          cursor: pointer;
          font-size: 14px;
          font-weight: 600;
          color: white !important;
          background: linear-gradient(90deg, #0d6efd, #0b5ed7, #0d6efd);
          background-size: 200% auto;
          animation: pulse-glow 1.8s ease-in-out infinite, shimmer 2.5s linear infinite;
          letter-spacing: 0.5px;
          text-decoration: none !important;
          display: inline-flex;
          align-items: center;
          gap: 8px;
        }
        .register-btn:hover {
          animation: none;
          background: #0d6efd !important;
          color: white !important;
          transform: scale(1.07);
          transition: transform 0.2s ease;
          box-shadow: 0 4px 20px rgb(13, 110, 253);
        }
      `}</style>

      <section
        id="home"
        className="hero-section d-flex align-items-center text-white"
      >
        <div className="container text-center">
          <h1 className="display-2 fw-bold">
            Master AI Digital Marketing
          </h1>

          <p className="lead mt-4">
            Learn SEO, Meta Ads, Google Ads &
            Software Development from industry experts.
          </p>

          <div className="mt-4 d-flex justify-content-center align-items-center flex-wrap gap-3">
            <button
              className="btn btn-primary btn-lg"
              onClick={() =>
                document.getElementById("workshop").scrollIntoView({ behavior: "smooth" })
              }
            >
              Start Learning
            </button>

            <button
              className="btn btn-outline-light btn-lg"
              onClick={() =>
                document.getElementById("courses").scrollIntoView({ behavior: "smooth" })
              }
            >
              Explore Courses
            </button>
          </div>

          {/* Register Now Button moved from Navbar */}
          <button className="register-btn" onClick={() => setShowModal(true)}>
            Register Now
          </button>
        </div>
      </section>

      {showModal && <RegisterModal onClose={() => setShowModal(false)} />}
    </>
  )
}

export default Hero;