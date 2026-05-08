import Img from "../assets/logo8.webp"

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top shadow">
      <div className="container">
        <a
          className="navbar-brand d-flex align-items-center gap-2"
          href="#"
        >

          {/* Logo */}
          <img
            src={Img}
            alt="Seyon Tech Logo"
            className="navbar-logo"
          />

          {/* Brand Name */}
          <div className="d-flex flex-column">

            <span className="brand-title">
              SEYON TECH
            </span>

            <small className="brand-subtitle">
              Digital Marketing Training Program
            </small>

          </div>

        </a>

        <button
          className="navbar-toggler"
          data-bs-toggle="collapse"
          data-bs-target="#menu"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse"
          id="menu"
        >
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" href="#home">
                Home
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#about">
                About
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#courses">
                Courses
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#pricing">
                Pricing
              </a>
            </li>

            <li className="nav-item ms-lg-3">
              <a
                className="btn btn-primary"
                href="#contact"
              >
                Enroll Now
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;