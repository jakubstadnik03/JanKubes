import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './Navbar.css';

interface NavbarProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (isOpen: boolean) => void;
}

const Navbar = ({ isMenuOpen, setIsMenuOpen }: NavbarProps) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
    if (!isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false);
    document.body.style.overflow = 'auto';
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="navbar-content">
          <Link to="/" className="logo" onClick={handleLinkClick}>
            Jan Kubeš
          </Link>

          <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
            <Link to="/" onClick={handleLinkClick}>Domů</Link>
            <Link to="/about" onClick={handleLinkClick}>O mně</Link>
            <Link to="/services" onClick={handleLinkClick}>Služby</Link>
            <Link to="/blog" onClick={handleLinkClick}>Blog</Link>
            <Link to="/contact" onClick={handleLinkClick}>Kontakt</Link>
          </div>

          <button 
            className={`menu-toggle ${isMenuOpen ? 'active' : ''}`}
            onClick={handleMenuToggle}
            aria-label="Přepnout menu"
            aria-expanded={isMenuOpen}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 