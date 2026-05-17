import Img from "../assets/logo8.webp"
import RegisterModal from "./RegisterModal"
import { useState } from "react"

const Navbar = () => {
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
          50%   { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        .register-btn {
          padding: 10px 24px;
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

      <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top shadow">
        <div className="container">

          {/* Brand */}
          <a className="navbar-brand d-flex align-items-center gap-2" href="#">
            <img src={Img} alt="Seyon Tech Logo" className="navbar-logo" />
            <div className="d-flex flex-column">
              <span className="brand-title">SEYON TECH</span>
              <small className="brand-subtitle">Digital Marketing Training Program</small>
            </div>
          </a>

          {/* Mobile Toggle */}
          <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#menu">
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Nav Links — centered */}
          <div className="collapse navbar-collapse" id="menu">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item"><a className="nav-link" href="#home">Home</a></li>
              <li className="nav-item"><a className="nav-link" href="#about">About</a></li>
              <li className="nav-item"><a className="nav-link" href="#courses">Courses</a></li>
              <li className="nav-item"><a className="nav-link" href="#pricing">Pricing</a></li>
              <li className="nav-item"><a className="nav-link" href="#contact">Contact</a></li>
            </ul>

            {/* Register Now Button */}
            <button className="register-btn ms-lg-2" onClick={() => setShowModal(true)}>
              Register Now
            </button>
          </div>
        </div>
      </nav>

      {/* Registration Modal */}
      {showModal && <RegisterModal onClose={() => setShowModal(false)} />}
    </>
  );
};

export default Navbar;