import React from "react";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import logo1 from "../src/assets/logo1.png";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/support/about-us" },
  { label: "Services", href: "/services" },
  { label: "FAQs", href: "/faq" },
  { label: "Sitemap", href: "/sitemap" },
];

const investmentLinks = [
  { label: "Invest in Private Credit", href: "/investment-plans/private-credit" },
  { label: "Invest in Mutual Funds", href: "/investment-plans/mutual-funds" },
  { label: "Investment in Equity", href: "/investment-plans/equity" },
];

const loanLinks = [
  { label: "Education Loan", href: "/loans/education" },
  { label: "Loan Against Property", href: "/loans/lap" },
  { label: "Medical Loan", href: "/loans/medical" },
  { label: "Vehicle Loan", href: "/loans/vehicle" },
];


const styles = `
  .footer-shell { background: #000000; color: #ffffff; padding: 40px 20px; margin-top: 60px; }
  .footer-content { max-width: 1200px; margin: 0 auto; }
  .footer-top { display: grid; grid-template-columns: repeat(5, 1fr); gap: 30px; margin-bottom: 30px; }
  .footer-col { display: flex; flex-direction: column; gap: 12px; }
  .footer-logo { max-width: 180px; height: auto; object-fit: contain; }
  .footer-heading { font-size: 15px; font-weight: 700; text-transform: uppercase; margin: 0; }
  .footer-links { display: flex; flex-direction: column; gap: 8px; }
  .footer-links a { color: rgba(255, 255, 255, 0.75); text-decoration: none; font-size: 14px; }
  .footer-links a:hover { color: #8bc700; }
  .footer-contact { display: flex; flex-direction: column; gap: 8px; font-size: 14px; }
  .footer-contact-item { display: flex; align-items: flex-start; gap: 8px; color: rgba(255, 255, 255, 0.75); }
  .footer-cta { display: inline-flex; align-items: center; gap: 6px; padding: 8px 12px; background: #6d9a04; color: #ffffff; border-radius: 4px; text-decoration: none; font-weight: 600; font-size: 13px; width: fit-content; }
  .footer-divider { height: 1px; background: rgba(255, 255, 255, 0.1); margin: 20px 0; }
  .footer-bottom { display: flex; justify-content: space-between; font-size: 13px; color: rgba(255, 255, 255, 0.6); }
  @media (max-width: 1024px) { .footer-top { grid-template-columns: repeat(3, 1fr); } }
  @media (max-width: 768px) { .footer-top { grid-template-columns: repeat(2, 1fr); } }
`;

export default function Footer() {
  return (
    <footer className="footer-shell">
      <style>{styles}</style>
      <div className="footer-content">
        <div className="footer-top">
          <div className="footer-col footer-brand">
            <img src={logo1} alt="BYND Finserve" className="footer-logo" />
            <p>Your trusted partner for financial solutions and investment growth.</p>
            <a className="footer-cta" href="https://wa.me/919837010594">
              <MessageCircle size={12} />
              Chat with us
            </a>
          </div>

          <div className="footer-col">
            <h4 className="footer-heading">Quick Links</h4>
            <div className="footer-links">
              {quickLinks.map((link) => (
                <a key={link.label} href={link.href}>{link.label}</a>
              ))}
            </div>
          </div>

          <div className="footer-col">
            <h4 className="footer-heading">Investments</h4>
            <div className="footer-links">
              {investmentLinks.map((link) => (
                <a key={link.label} href={link.href}>{link.label}</a>
              ))}
            </div>
          </div>

          <div className="footer-col">
            <h4 className="footer-heading">Loans</h4>
            <div className="footer-links">
              {loanLinks.map((link) => (
                <a key={link.label} href={link.href}>{link.label}</a>
              ))}
            </div>
          </div>

          <div className="footer-col">
            <h4 className="footer-heading">Contact</h4>
            <div className="footer-contact">
              <div className="footer-contact-item">
                <Phone size={14} />
                <a href="tel:+919837010594" style={{ color: "inherit", textDecoration: "none" }}>+91 9837010594</a>
              </div>
              <div className="footer-contact-item">
                <Mail size={14} />
                <a href="mailto:byndfinserve@gmail.com" style={{ color: "inherit", textDecoration: "none" }}>byndfinserve@gmail.com</a>
              </div>
              <div className="footer-contact-item">
                <MapPin size={14} />
                <span>Gurgaon, Haryana</span>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-divider"></div>

        <div className="footer-bottom">
          <span>© 2026 BYND Finserve. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}