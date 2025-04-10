import { Link } from 'react-router-dom';
import { FaTrophy, FaGraduationCap, FaUsers } from 'react-icons/fa';
import './About.css';

const About = () => {
  return (
    <div className="about">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="container">
          <div className="about-hero-content">
            <h1>O mně</h1>
            <p>Profesionální trenér s více než 15 lety zkušeností v oblasti sportovního tréninku</p>
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="about-content">
        <div className="container">
          <div className="grid grid-2">
            <div className="about-text">
              <h2>Má cesta</h2>
              <p>
                Jsem vášnivý sportovec a trenér s dlouholetou zkušeností v oblasti triatlonu, atletiky a cyklistiky. 
                Mým cílem je pomáhat sportovcům všech úrovní dosáhnout jejich maximálního potenciálu.
              </p>
              <p>
                S více než 15 lety zkušeností v oblasti sportovního tréninku jsem pracoval s amatérskými i profesionálními sportovci, 
                pomáhal jim dosáhnout jejich cílů a překonat jejich limity.
              </p>
              <p>
                Věřím v individuální přístup ke každému sportovci a vytváření tréninkových plánů, které jsou přizpůsobeny 
                jejich specifickým potřebám a cílům.
              </p>
            </div>
            <div className="about-image">
              <img src="/about/profile.jpg" alt="Jan Kubeš" />
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="experience">
        <div className="container">
          <h2 className="section-title text-center">Moje zkušenosti</h2>
          <div className="grid grid-3">
            <div className="experience-card">
              <div className="experience-icon">
                <FaTrophy />
              </div>
              <h3>Sportovní úspěchy</h3>
              <ul>
                <li>Více než 50 dokončených triatlonů</li>
                <li>Účast na mistrovství světa v triatlonu</li>
                <li>Vítězství v několika závodech</li>
                <li>Osobní rekordy v běhu a cyklistice</li>
              </ul>
            </div>
            <div className="experience-card">
              <div className="experience-icon">
                <FaGraduationCap />
              </div>
              <h3>Vzdělání a certifikace</h3>
              <ul>
                <li>Magisterský titul v oboru Sportovní vědy</li>
                <li>Certifikovaný trenér triatlonu</li>
                <li>Certifikace v oblasti sportovní výživy</li>
                <li>Specializace na sportovní diagnostiku</li>
              </ul>
            </div>
            <div className="experience-card">
              <div className="experience-icon">
                <FaUsers />
              </div>
              <h3>Tréninková praxe</h3>
              <ul>
                <li>15+ let tréninkové praxe</li>
                <li>Práce s více než 500 sportovci</li>
                <li>Specializace na individuální trénink</li>
                <li>Vývoj vlastních tréninkových metodik</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="philosophy">
        <div className="container">
          <h2 className="section-title text-center">Má filozofie tréninku</h2>
          <div className="philosophy-content">
            <p>
              Věřím v holistický přístup k tréninku, který zahrnuje nejen fyzickou přípravu, ale také mentální odolnost, 
              správnou výživu a regeneraci. Každý sportovec je jedinečný a vyžaduje individuální přístup.
            </p>
            <p>
              Mým cílem je pomáhat sportovcům dosáhnout jejich cílů udržitelným způsobem, s důrazem na dlouhodobý rozvoj 
              a prevenci zranění.
            </p>
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

export default About; 