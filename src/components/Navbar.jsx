import Img from "../assets/logo8.webp"

const Navbar = () => {
  return (
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

        {/* Nav Links */}
        <div className="collapse navbar-collapse" id="menu">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item"><a className="nav-link" href="#home">Home</a></li>
            <li className="nav-item"><a className="nav-link" href="#about">About</a></li>
            <li className="nav-item"><a className="nav-link" href="#courses">Courses</a></li>
            <li className="nav-item"><a className="nav-link" href="#pricing">Pricing</a></li>
            <li className="nav-item"><a className="nav-link" href="#contact">Contact</a></li>
          </ul>
        </div>

      </div>
    </nav>
  )
}

export default Navbar;