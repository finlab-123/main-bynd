import { Phone, Mail } from "lucide-react";
import logo from "../src/assets/logo.png";
import Navbar from "./navbar";

export default function Header() {
  return (
    <>
      <header className="header-shell">
        <div className="header-inner">
          <a href="/" className="header-logo" aria-label="BYND Finserve home">
            <img src={logo} alt="BYND Finserve" />
          </a>

          <div className="header-actions">
            <a className="header-link" href="tel:+919837010594">
              <Phone size={18} color="#9a9aa0" />
              <span>+91 9837010594</span>
            </a>

            <span className="header-divider" aria-hidden="true" />

            <a className="header-link" href="mailto:byndfinserve@gmail.com">
              <Mail size={18} color="#9a9aa0" />
              <span>FREE ENQUIRY</span>
            </a>

            <a className="header-cta" href="/partner-with-us">
              Partner With Us
            </a>
          </div>
        </div>
      </header>

      <Navbar />
    </>
  );
}

