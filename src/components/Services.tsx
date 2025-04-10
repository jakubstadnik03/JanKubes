import { Link } from 'react-router-dom';
import { FaRunning, FaSwimmer, FaBiking, FaHeartbeat, FaLungs, FaBrain, FaChartLine, FaUserMd } from 'react-icons/fa';
import './Services.css';

const Services = () => {
  return (
    <div className="services">
      {/* Hero Section */}
      <section className="services-hero">
        <div className="container">
          <div className="services-hero-content">
            <h1>Moje Služby</h1>
            <p>Kompletní tréninkové a diagnostické programy šité na míru vašim potřebám</p>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="main-services">
        <div className="container">
          <div className="grid grid-3">
            <div className="service-card fade-in">
              <div className="service-icon">
                <FaUserMd />
              </div>
              <div className="service-content">
                <h2>Osobní Trénink</h2>
                <p>Individuální přístup a personalizované tréninkové plány pro maximální výsledky.</p>
                <ul>
                  <li>Individuální tréninkové plány</li>
                  <li>Osobní konzultace a analýza</li>
                  <li>Pravidelné hodnocení pokroku</li>
                  <li>Online podpora a komunikace</li>
                  <li>Závodní příprava a strategie</li>
                </ul>
                <Link to="/contact" className="btn">Začít</Link>
              </div>
            </div>

            <div className="service-card fade-in">
              <div className="service-icon">
                <FaHeartbeat />
              </div>
              <div className="service-content">
                <h2>Laktátové Testování</h2>
                <p>Profesionální diagnostika pro optimalizaci tréninkových zón a výkonu.</p>
                <ul>
                  <li>Laktátové testy na běžeckém pásu</li>
                  <li>Laktátové testy na cyklistickém ergometru</li>
                  <li>Stanovení tréninkových zón</li>
                  <li>Analýza aerobní a anaerobní kapacity</li>
                  <li>Doporučení pro tréninkovou intenzitu</li>
                </ul>
                <Link to="/contact" className="btn">Začít</Link>
              </div>
            </div>

            <div className="service-card fade-in">
              <div className="service-icon">
                <FaLungs />
              </div>
              <div className="service-content">
                <h2>Respirační Testy</h2>
                <p>Detailní analýza dýchání a spotřeby kyslíku pro maximální výkon.</p>
                <ul>
                  <li>VO2 max testování</li>
                  <li>Analýza respiračního kvocientu</li>
                  <li>Hodnocení ventilace</li>
                  <li>Stanovení anaerobního prahu</li>
                  <li>Optimalizace dýchací techniky</li>
                </ul>
                <Link to="/contact" className="btn">Začít</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sport Specific Services */}
      <section className="sport-services">
        <div className="container">
          <h2 className="section-title text-center">Sportovní Specializace</h2>
          <div className="grid grid-3">
            <div className="card fade-in">
              <div className="service-icon">
                <FaRunning />
              </div>
              <h3>Atletický Trénink</h3>
              <p>Specializované programy pro všechny běžecké disciplíny.</p>
              <ul>
                <li>Technická analýza běhu</li>
                <li>Silový a kondiční trénink</li>
                <li>Trénink flexibility a mobility</li>
                <li>Prevence zranění</li>
                <li>Závodní příprava</li>
              </ul>
            </div>
            <div className="card fade-in">
              <div className="service-icon">
                <FaSwimmer />
              </div>
              <h3>Plavecký Trénink</h3>
              <p>Kompletní plavecká příprava pro všechny úrovně.</p>
              <ul>
                <li>Analýza plavecké techniky</li>
                <li>Nácvik jednotlivých stylů</li>
                <li>Silová příprava pro plavce</li>
                <li>Trénink vytrvalosti</li>
                <li>Závodní strategie</li>
              </ul>
            </div>
            <div className="card fade-in">
              <div className="service-icon">
                <FaBiking />
              </div>
              <h3>Cyklistický Trénink</h3>
              <p>Tréninkové programy pro silniční a horskou cyklistiku.</p>
              <ul>
                <li>Analýza jízdní pozice</li>
                <li>Silový trénink na kole</li>
                <li>Technická příprava</li>
                <li>Závodní strategie</li>
                <li>Výživové poradenství</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="additional-services">
        <div className="container">
          <h2 className="section-title text-center">Doplňkové Služby</h2>
          <div className="grid grid-3">
            <div className="card fade-in">
              <div className="service-icon">
                <FaChartLine />
              </div>
              <h3>Výkonnostní Analýza</h3>
              <p>Detailní analýza výkonu a tréninkových dat.</p>
              <ul>
                <li>Analýza tréninkových dat</li>
                <li>Hodnocení výkonnostního vývoje</li>
                <li>Optimalizace tréninkového plánu</li>
                <li>Závodní analýza</li>
              </ul>
            </div>
            <div className="card fade-in">
              <div className="service-icon">
                <FaBrain />
              </div>
              <h3>Mentální Příprava</h3>
              <p>Techniky pro rozvoj mentální odolnosti a soustředění.</p>
              <ul>
                <li>Vizualizační cvičení</li>
                <li>Zvládání stresu</li>
                <li>Stanovování cílů</li>
                <li>Koncentrační techniky</li>
              </ul>
            </div>
            <div className="card fade-in">
              <div className="service-icon">
                <FaUserMd />
              </div>
              <h3>Výživové Poradenství</h3>
              <p>Personalizované výživové plány pro optimalizaci výkonu.</p>
              <ul>
                <li>Individuální jídelníček</li>
                <li>Doporučení doplňků</li>
                <li>Výživa na závody</li>
                <li>Regenerační výživa</li>
              </ul>
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

export default Services; 