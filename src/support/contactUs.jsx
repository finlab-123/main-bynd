import React, { useState } from "react";
import { API_CONFIG } from "../config/api";

const styles = `
  .contact-page {
    font-family: 'Poppins', 'Segoe UI', system-ui, sans-serif;
    color: #1f2b37;
    background: #ffffff;
  }

  .map-embed {
    width: 100%;
    border: none;
    height: 320px;
    display: block;
  }

  .contact-shell {
    max-width: 1180px;
    margin: 0 auto;
    padding: 26px 18px 34px;
    display: flex;
    justify-content: center;
  }

  .contact-form-wrapper {
    width: 100%;
    max-width: 600px;
  }

  .contact-form-card {
    background: linear-gradient(135deg, #f7fbef 0%, #ffffff 100%);
    border: 1px solid #dfe8c9;
    border-radius: 12px;
    padding: 28px;
    box-shadow: 0 10px 28px rgba(0, 0, 0, 0.08);
  }

  .contact-form-card h2 {
    margin: 0 0 12px 0;
    font-size: 22px;
    font-weight: 800;
    color: #7ab600;
  }

  .contact-form-card p {
    margin: 0 0 20px 0;
    font-size: 14px;
    color: #475569;
    line-height: 1.5;
  }

  .form-group {
    display: flex;
    flex-direction: column;
    gap: 8px;
    margin-bottom: 16px;
  }

  .form-group label {
    font-size: 13px;
    font-weight: 700;
    color: #1f2d3d;
  }

  .form-group input,
  .form-group textarea {
    padding: 10px 12px;
    border: 1px solid #dfe8c9;
    border-radius: 8px;
    font-family: inherit;
    font-size: 13px;
    color: #1f2b37;
    background: #ffffff;
    transition: border-color 0.2s ease;
  }

  .form-group input:focus,
  .form-group textarea:focus {
    outline: none;
    border-color: #7ab600;
    box-shadow: 0 0 0 2px rgba(122, 182, 0, 0.1);
  }

  .form-group textarea {
    resize: vertical;
    min-height: 110px;
  }

  .submit-btn {
    width: 100%;
    padding: 12px 16px;
    background: linear-gradient(90deg, #7ab600, #6ca200);
    color: #ffffff;
    border: 1px solid #649600;
    border-radius: 8px;
    font-weight: 800;
    font-size: 14px;
    cursor: pointer;
    transition: all 0.2s ease;
    margin-top: 12px;
  }

  .submit-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 18px rgba(122, 182, 0, 0.3);
  }

  .submit-btn:active {
    transform: translateY(0);
  }

  @media (max-width: 1024px) {
    .contact-shell {
      padding: 22px 14px 30px;
    }

    .contact-form-card {
      padding: 22px;
    }
  }

  @media (max-width: 640px) {
    .map-embed {
      height: 260px;
    }

    .contact-form-card {
      padding: 18px;
    }

    .contact-form-card h2 {
      font-size: 20px;
    }

    .submit-btn {
      padding: 10px 14px;
      font-size: 13px;
    }
  }
`;

export default function ContactForm() {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    phone: "",
    city: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const res = fetch(API_CONFIG.FORMS.GET_IN_TOUCH, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
    setFormData({ fullname: "", email: "", phone: "", city: "", message: "" });
  };

  return (
    <div className="contact-page">
      <style>{styles}</style>
      <iframe
        className="map-embed"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.325599135303!2d73.87990321489328!3d18.52043038738238!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c0e8f8f8f8f9%3A0x8f8f8f8f8f8f8f8f!2sPune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1620636955888!5m2!1sen!2sin"
        allowFullScreen=""
        loading="lazy"
        title="Location Map"
      ></iframe>
      <div className="contact-shell">
        <div className="contact-form-wrapper">
          <div className="contact-form-card">
            <h2>Get In Touch</h2>
            <p>
              Have questions? We'd love to hear from you. Send us a message and
              we'll respond as soon as possible.
            </p>

            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="fullname">Full Name *</label>
                <input
                  type="text"
                  id="fullname"
                  name="fullname"
                  value={formData.fullname}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+91 XXXXX XXXXX"
                />
              </div>

              <div className="form-group">
                <label htmlFor="city">City</label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  placeholder="Your city"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us how we can help..."
                  required
                />
              </div>

              <button type="submit" className="submit-btn">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
