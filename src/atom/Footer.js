import facebookLogo from '../Assets/Imgs/facebook-logo.png';
import instagramLogo from '../Assets/Imgs/instagram-logo.png';

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="row g-4">
          <div className="col-md-4">
            <p className="site-footer__brand">NeonClub.pk</p>
            <p className="mb-0" style={{ fontSize: '0.875rem', maxWidth: '20rem' }}>
              Custom LED neon signs — designed online, handmade from light.
            </p>
          </div>
          <div className="col-6 col-md-2">
            <p className="text-white fw-semibold mb-2" style={{ fontSize: '0.8rem' }}>Company</p>
            <div className="d-flex flex-column gap-2">
              <a href="#features" className="site-footer__link">Features</a>
              <a href="#faq" className="site-footer__link">FAQ</a>
              <span className="site-footer__link">About us</span>
            </div>
          </div>
          <div className="col-6 col-md-2">
            <p className="text-white fw-semibold mb-2" style={{ fontSize: '0.8rem' }}>Support</p>
            <div className="d-flex flex-column gap-2">
              <span className="site-footer__link">Contact us</span>
              <span className="site-footer__link">Returns policy</span>
              <span className="site-footer__link">Privacy</span>
            </div>
          </div>
          <div className="col-md-4">
            <p className="text-white fw-semibold mb-2" style={{ fontSize: '0.8rem' }}>Contact</p>
            <a href="mailto:info@neonclub.com" className="site-footer__link d-block mb-2">
              info@neonclub.com
            </a>
            <div className="d-flex gap-2 mt-2">
              <img src={facebookLogo} alt="Facebook" width={28} height={28} />
              <img src={instagramLogo} alt="Instagram" width={28} height={28} />
            </div>
          </div>
        </div>
        <div className="site-footer__bottom text-center">
          © {new Date().getFullYear()} NeonClub.pk. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
