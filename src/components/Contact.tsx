import { useState } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Zde bude logika pro odeslání formuláře
    console.log('Formulář odeslán:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="contact">
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="container">
          <div className="contact-hero-content">
            <h1>Kontakt</h1>
            <p>Máte otázky nebo zájem o spolupráci? Neváhejte mě kontaktovat.</p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="contact-content">
        <div className="container">
          <div className="grid grid-2">
            {/* Contact Form */}
            <div className="contact-form">
              <h2>Kontaktní formulář</h2>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Jméno a příjmení</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">E-mail</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Telefon</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="subject">Předmět</label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Vyberte předmět</option>
                    <option value="training">Tréninkový program</option>
                    <option value="testing">Diagnostické testy</option>
                    <option value="consultation">Konzultace</option>
                    <option value="other">Jiné</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="message">Zpráva</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>
                <button type="submit" className="btn">Odeslat</button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="contact-info">
              <h2>Kontaktní údaje</h2>
              <div className="info-item">
                <FaEnvelope />
                <div>
                  <h3>E-mail</h3>
                  <p>info@jankubes.cz</p>
                </div>
              </div>
              <div className="info-item">
                <FaPhone />
                <div>
                  <h3>Telefon</h3>
                  <p>+420 123 456 789</p>
                </div>
              </div>
              <div className="info-item">
                <FaMapMarkerAlt />
                <div>
                  <h3>Adresa</h3>
                  <p>Praha, Česká republika</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact; 