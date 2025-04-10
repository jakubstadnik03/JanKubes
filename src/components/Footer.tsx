import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>O Janu Kubešovi</h3>
            <p>
              Profesionální trenér specializující se na triatlon, atletiku a cyklistiku.
              Pomáhám sportovcům dosáhnout jejich plného potenciálu prostřednictvím
              personalizovaných tréninkových programů a odborného vedení.
            </p>
          </div>
          
          <div className="footer-section">
            <h3>Rychlé odkazy</h3>
            <ul className="footer-links">
              <li><a href="/">Domů</a></li>
              <li><a href="/about">O mně</a></li>
              <li><a href="/services">Služby</a></li>
              <li><a href="/blog">Blog</a></li>
              <li><a href="/contact">Kontakt</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h3>Služby</h3>
            <ul className="footer-links">
              <li><a href="/services#triathlon">Trénink Triatlonu</a></li>
              <li><a href="/services#athletics">Atletický Trénink</a></li>
              <li><a href="/services#cycling">Trénink Cyklistiky</a></li>
              <li><a href="/services#personal">Osobní Trénink</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h3>Spojení</h3>
            <div className="social-links">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <FaFacebook />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <FaInstagram />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <FaTwitter />
              </a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Jan Kubeš. Všechna práva vyhrazena.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 