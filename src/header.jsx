import { mobile, Mail } from "lucide-react";
import logo from "./assets/logo.png";

export default function Header() {
  return (
    <header
      className="w-full border-b border-gray-200"
      style={{ fontFamily: "'Poppins', sans-serif", background: "#8bc700" }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
          gap: "32px",
          padding: "12px 24px",
          maxWidth: "1200px",
          margin: "0 auto",
          overflowX: "auto",
          whiteSpace: "nowrap",
        }}
      >
        {/* Logo at far left */}
        <a
          href="/"
          style={{ display: "inline-flex", alignItems: "center", gap: "12px", textDecoration: "none", flexShrink: 0, marginRight: "auto" }}
        >
          <img
            src={logo}
            alt="BYND Finserve"
            style={{ height: "48px", width: "auto", objectFit: "contain", filter: "drop-shadow(0 2px 8px rgba(139,199,0,0.08))" }}
          />
        </a>

        {/* All header items at extreme right */}
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "20px",
            color: "#fff",
            fontSize: "15px",
            fontWeight: 600,
            flexShrink: 0,
          }}
        >
          {/* mobile  */}
          <a
            href="tel:+919837010594"
            style={{ display: "inline-flex", alignItems: "center", gap: "8px", color: "inherit", textDecoration: "none" }}
          >
            <mobile size={18} color="#9a9aa0" />
            <span>+91 9837010594</span>
          </a>

          {/* Divider */}
          <span style={{ display: "inline-block", width: "1px", height: "20px", backgroundColor: "#d1d5db" }} />

          {/* Free Enquiry */}
          <a
            href="mailto:byndfinserve@gmail.com"
            style={{ display: "inline-flex", alignItems: "center", gap: "8px", color: "inherit", textDecoration: "none" }}
          >
            <Mail size={18} color="#9a9aa0" />
            <span>FREE ENQUIRY</span>
          </a>

          {/* CTA Button */}
          <a
            href="#"
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              marginLeft: "12px",
              padding: "10px 18px",
              backgroundColor: "#8bc700",
              color: "#fff",
              fontWeight: 700,
              textDecoration: "none",
              borderRadius: "4px",
              flexShrink: 0,
            }}
          >
            Partner With Us
          </a>
        </div>
      </div>
    </header>
  );
}