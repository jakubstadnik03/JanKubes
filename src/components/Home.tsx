import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1 className="fade-in">Jan Kubeš</h1>
            <h2 className="fade-in">Profesionální Trenér</h2>
            <p className="fade-in">Specializace na triatlon, atletiku a cyklistiku</p>
            <div className="hero-buttons fade-in">
              <Link to="/contact" className="btn">Začít</Link>
              <Link to="/about" className="btn btn-outline">Více informací</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="services-preview">
        <div className="container">
          <h2 className="section-title">Moje Služby</h2>
          <div className="grid grid-3">
            <div className="card fade-in">
              <h3>Trénink Triatlonu</h3>
              <p>Kompletní tréninkové programy pro všechny vzdálenosti a úrovně dovedností.</p>
              <Link to="/services" className="btn btn-outline">Více informací</Link>
            </div>
            <div className="card fade-in">
              <h3>Atletický Trénink</h3>
              <p>Specializované programy pro atlety všech disciplín.</p>
              <Link to="/services" className="btn btn-outline">Více informací</Link>
            </div>
            <div className="card fade-in">
              <h3>Trénink Cyklistiky</h3>
              <p>Tréninkové programy pro silniční a horskou cyklistiku.</p>
              <Link to="/services" className="btn btn-outline">Více informací</Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="about-preview">
        <div className="container">
          <div className="grid grid-2">
            <div className="about-content">
              <h2 className="section-title">O mně</h2>
              <p>S více než 15 lety zkušeností v profesionálním tréninku pomáhám sportovcům dosáhnout jejich plného potenciálu prostřednictvím personalizovaných tréninkových programů a odborného vedení.</p>
              <Link to="/about" className="btn">Číst více</Link>
            </div>
            <div className="image-container">
              <img src="/about/placeholder.jpg" alt="Jan Kubeš" />
            </div>
          </div>
        </div>
      </section>

      {/* Blog Preview */}
      <section className="blog-preview">
        <div className="container">
          <h2 className="section-title">Nejnovější Články</h2>
          <div className="grid grid-3">
            <div className="card fade-in">
              <div className="image-container">
                <img src="/blog/placeholder.jpg" alt="Blog post" />
              </div>
              <h3>Trénink pro váš první triatlon</h3>
              <p>Základní tipy a strategie pro začátečníky připravující se na svůj první triatlon.</p>
              <Link to="/blog" className="btn btn-outline">Číst více</Link>
            </div>
            <div className="card fade-in">
              <div className="image-container">
                <img src="/blog/placeholder.jpg" alt="Blog post" />
              </div>
              <h3>Výživa pro vytrvalostní sportovce</h3>
              <p>Optimalizujte svůj výkon pomocí správné výživy a hydratace.</p>
              <Link to="/blog" className="btn btn-outline">Číst více</Link>
            </div>
            <div className="card fade-in">
              <div className="image-container">
                <img src="/blog/placeholder.jpg" alt="Blog post" />
              </div>
              <h3>Mentální příprava na závody</h3>
              <p>Rozvíjejte mentální odolnost a soustředění pro špičkový výkon v závodech.</p>
              <Link to="/blog" className="btn btn-outline">Číst více</Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <div className="container">
          <div className="cta-content">
            <h2>Připraveni začít svou cestu?</h2>
            <p>Kontaktujte mě ještě dnes a prodiskutujte své cíle a jak můžeme spolupracovat na jejich dosažení.</p>
            <Link to="/contact" className="btn">Kontaktovat</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home; 