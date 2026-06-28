import { Link, useLocation } from 'react-router-dom';

const logo = `${process.env.PUBLIC_URL}/NeonClub.png`;

function Navbar() {
  const { pathname } = useLocation();
  const isHome = pathname === '/';

  return (
    <nav className="navbar navbar-expand-lg app-navbar">
      <div className="container">
        <Link to="/" className="navbar-brand-wrap">
          <img src={logo} alt="NeonClub" className="navbar-logo" />
          <p className="brand-title mb-0">NeonClub.pk</p>
        </Link>

        <button
          className="navbar-toggler border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNav"
          aria-controls="mainNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="mainNav">
          <ul className="navbar-nav ms-auto align-items-lg-center gap-lg-1">
            <li className="nav-item">
              <Link to="/" className={`nav-link-custom ${isHome ? 'active' : ''}`}>
                Design Studio
              </Link>
            </li>
            <li className="nav-item">
              <a href="#features" className="nav-link-custom">Features</a>
            </li>
            <li className="nav-item">
              <a href="#faq" className="nav-link-custom">FAQ</a>
            </li>
            <li className="nav-item ms-lg-2">
              <Link to="/design-proof" className="nav-cta">
                View proof
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
