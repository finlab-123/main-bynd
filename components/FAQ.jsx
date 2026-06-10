import React, { useState } from "react";
import byndImg from "../src/assets/investments/main/why-849x1024-1-1-768x926.webp";
import affordableImg from "../src/assets/investments/main/affordable-300x300.webp";
import comprehensiveImg from "../src/assets/investments/main/Personalized-Solutions-300x300.webp";
import trackImg from "../src/assets/investments/main/Proven-Track-Record-300x300.webp";
import guidanceImg from "../src/assets/investments/main/Expert-Guidance-274x300.webp";
import customersImg from "../src/assets/investments/main/Customers-Served-300x300.webp";
import projectsImg from "../src/assets/investments/main/Project-Delivered-300x300.webp";
import ratingImg from "../src/assets/investments/main/Google-Rating-300x300.webp";
import secureImg from "../src/assets/investments/main/Security-and-Trust-300x300.webp";
import competitiveImg from "../src/assets/investments/main/Competitive-Interest-Rates-300x300.webp";
import balanceSheetImg from "../src/assets/investments/main/balance-sheet-qxy7z8b9r79w74i3h8qoig8v7cipy5vv7d1mqub11c.webp";

const styles = `
  .faq-page {
    font-family: 'Poppins', 'Segoe UI', system-ui, sans-serif;
    color: #1f2b37;
    background: #ffffff;
  }

  .love-section {
    padding: 10px 0px 0px 0px;
    max-width: 1180px;
    margin: 0 auto;
    text-align: center;
  }

  .love-section h2 {
    margin: 0 0 16px 0;
    font-size: 18px;
    font-weight: 800;
    color: #1f2b37;
  }

  .love-grid {
    display: grid;
    grid-template-columns: minmax(320px, 1fr) minmax(280px, 1fr);
    gap: 18px;
    align-items: center;
  }

  .love-graphic {
    background: transparent;
  }

  .love-graphic img {
    width: 100%;
    height: 360px;
    object-fit: contain;
  }

  .love-cards {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  .love-card {
    background: #b8d65f;
    border-radius: 14px;
    padding: 12px 14px;
    box-shadow: 0 10px 18px rgba(0, 0, 0, 0.08);
    border: none;
    display: grid;
    grid-template-columns: auto 1fr;
    gap: 10px;
    align-items: center;
    text-align: left;
  }

  .love-icon {
    width: 44px;
    height: 44px;
    border-radius: 12px;
    background: #ffffff;
    display: grid;
    place-items: center;
    box-shadow: 0 8px 14px rgba(0, 0, 0, 0.06);
  }

  .love-icon img {
    width: 32px;
    height: 32px;
    object-fit: contain;
  }

  .love-card h4 {
    margin: 0;
    font-size: 14px;
    font-weight: 800;
    color: #1f2b37;
  }

  .love-card p {
    margin: 2px 0 0 0;
    font-size: 11.8px;
    line-height: 1.55;
    color: #3a4755;
  }

  .faq-section {
    background: #d2e99b;
    padding: 28px 18px 40px;
  }

  .faq-shell {
    max-width: 880px;
    margin: 0 auto;
    background: #cfe691;
    border-radius: 8px;
    border: none;
    box-shadow: 0 10px 22px rgba(0, 0, 0, 0.08);
    overflow: hidden;
  }

  .faq-section h3 {
    margin: 0 0 16px 0;
    font-size: 15px;
    font-weight: 800;
    text-align: center;
    color: #86a72b;
  }

  .faq-item {
    border-bottom: 1px solid rgba(0, 0, 0, 0.06);
  }

  .faq-item:last-child {
    border-bottom: none;
  }

  .faq-button {
    width: 100%;
    background: none;
    border: none;
    padding: 12px 14px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #3a4755;
    font-size: 12px;
    font-weight: 700;
    cursor: pointer;
    text-align: left;
    gap: 12px;
  }

  .faq-dot {
    width: 10px;
    height: 10px;
    background: #88a82c;
    border-radius: 50%;
    flex-shrink: 0;
  }

  .faq-button:hover {
    background: rgba(255, 255, 255, 0.22);
  }

  .faq-answer {
    padding: 0 14px 12px;
    font-size: 12px;
    color: #2f3a48;
    line-height: 1.55;
  }

  .faq-icon {
    color: #7fa022;
    font-weight: 800;
    font-size: 15px;
  }

  .stats-section {
    background: #d2e99b;
    padding: 26px 18px 32px;
  }

  .stats-grid {
    max-width: 1180px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1.2fr 0.8fr;
    gap: 22px;
    align-items: center;
  }

  .stats-card {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  .stats-card h4 {
    margin: 0;
    font-size: 15px;
    font-weight: 800;
    color: #1f2b37;
  }

  .stat-items {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
    gap: 14px;
  }

  .stat-box {
    background: #ffffff;
    border-radius: 6px;
    padding: 12px;
    box-shadow: 0 10px 18px rgba(0, 0, 0, 0.08);
    text-align: center;
    border: 1px solid rgba(0, 0, 0, 0.04);
    display: grid;
    gap: 6px;
    justify-items: center;
  }

  .stat-icon {
    width: 46px;
    height: 46px;
    border-radius: 50%;
    background: #f3f7e8;
    display: grid;
    place-items: center;
    box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.04);
  }

  .stat-icon img {
    width: 28px;
    height: 28px;
    object-fit: contain;
  }

  .stat-number {
    margin: 0;
    font-size: 18px;
    font-weight: 800;
    color: #d38a1c;
  }

  .stat-label {
    margin: 4px 0 0 0;
    font-size: 11.8px;
    color: #3a4755;
  }

  .quote-card {
    background: #ffffff;
    border-radius: 4px;
    padding: 18px 16px;
    box-shadow: 0 10px 18px rgba(0, 0, 0, 0.08);
    border: 1px solid rgba(0, 0, 0, 0.08);
    display: grid;
    gap: 10px;
    width: 100%;
    max-width: 420px;
    min-height: 100%;
    justify-self: end;
  }

  .quote-card h4 {
    margin: 0;
    font-size: 15px;
    font-weight: 800;
    color: #1f2b37;
  }

  .quote-sub {
    margin: 0;
    font-size: 11px;
    color: #6b7a8a;
  }

  .quote-form {
    display: grid;
    gap: 8px;
  }

  .quote-secure {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    font-size: 11px;
    color: #6b7a8a;
  }

  .quote-secure img {
    width: 18px;
    height: 18px;
  }

  .quote-form input {
    height: 34px;
    border-radius: 2px;
    border: 1px solid #d3d8d2;
    padding: 0 10px;
    font-size: 12px;
    outline: none;
    background: #ffffff;
  }

  .quote-form input:focus {
    border-color: #8cae2e;
    box-shadow: 0 0 0 2px rgba(140, 174, 46, 0.18);
  }

  .quote-form button {
    height: 34px;
    border-radius: 16px;
    border: 1px solid #9ab827;
    background: #9ab827;
    color: #ffffff;
    font-weight: 800;
    cursor: pointer;
    box-shadow: 0 8px 14px rgba(154, 184, 39, 0.35);
    font-size: 12px;
  }

  .quote-form button:hover {
    filter: brightness(1.02);
  }

  @media (max-width: 960px) {
    .love-grid {
      grid-template-columns: 1fr;
    }

    .love-graphic img {
      height: 320px;
    }

    .stats-grid {
      grid-template-columns: 1fr;
    }

    .quote-card {
      justify-self: start;
    }
  }

  @media (max-width: 640px) {
    .love-section {
      padding: 18px 14px 12px;
    }

    .love-section h2 {
      font-size: 17px;
    }

    .love-graphic img {
      height: 260px;
    }

    .faq-section {
      padding: 22px 14px 28px;
    }

    .stats-section {
      padding: 22px 14px 26px;
    }
  }
`;

const loveReasons = [
  {
    title: "Affordable Professional Services",
    desc: "Proven legal and financial solutions with senior experts.",
    icon: affordableImg,
  },
  {
    title: "Comprehensive Approach",
    desc: "Holistic view of your financial situation.",
    icon: comprehensiveImg,
  },
  {
    title: "Proven Track Record",
    desc: "We have the experience and reputation you can trust.",
    icon: trackImg,
  },
  {
    title: "Expert Guidance",
    desc: "Insights that empower you to make informed decisions.",
    icon: guidanceImg,
  },
];

const faqs = [
  {
    q: "What is financial planning?",
    a: "A structured process to set goals, assess your finances, and build an actionable roadmap for saving, investing, protection, and retirement.",
  },
  {
    q: "How is financial planning different from investment planning?",
    a: "Financial planning looks at your entire picture—cash flow, risks, goals, taxes, and retirement. Investment planning focuses mainly on where and how to invest.",
  },
  {
    q: "I already have a CA; why do I need Bynd Finserve?",
    a: "Your CA handles compliance and filings. We complement that with goal-based strategies, risk cover, and investment guidance so your money supports your life goals.",
  },
  {
    q: "Who is a Qualified Financial Advisor?",
    a: "A trained, certified professional who assesses your needs, recommends suitable solutions, and stays accountable as life and markets change.",
  },
  {
    q: "What will I get in the meeting?",
    a: "A clear next-step plan: current-state review, identified gaps, recommended products or allocations, and timelines to execute together.",
  },
];

const stats = [
  { number: "20,000+", label: "Customers Served", icon: customersImg },
  { number: "51,980+", label: "Projects Delivered", icon: projectsImg },
  { number: "4.8/5", label: "Google Rating", icon: ratingImg },
  { number: "Security", label: "Trust & Compliance", icon: secureImg },
  { number: "98%", label: "Client Satisfaction", icon: comprehensiveImg },
  { number: "24/7", label: "Priority Support", icon: competitiveImg },
  { number: "A+", label: "Financial Strength", icon: balanceSheetImg },
  { number: "15k", label: "Delivered", icon: ratingImg },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="faq-page">
      <style>{styles}</style>

      <section className="love-section">
        <h2>Why do customers love us?</h2>
        <div className="love-grid">
          <div className="love-graphic">
            <img src={byndImg} alt="bynd" />
          </div>
          <div className="love-cards">
            {loveReasons.map((item) => (
              <div className="love-card" key={item.title}>
                <div className="love-icon" aria-hidden="true">
                  <img src={item.icon} alt={item.title} />
                </div>
                <div>
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="faq-section">
        <h3>Frequently Asked Questions</h3>
        <div className="faq-shell">
          {faqs.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div className="faq-item" key={item.q}>
                <button
                  className="faq-button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                >
                  <span className="faq-dot" aria-hidden="true" />
                  <span>{item.q}</span>
                  <span className="faq-icon">{isOpen ? "–" : "+"}</span>
                </button>
                {isOpen && (
                  <div className="faq-answer">
                    {item.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      <section className="stats-section">
        <div className="stats-grid">
          <div className="stats-card">
            <h4>We are Proud of Our Works</h4>
            <div className="stat-items">
              {stats.map((item) => (
                <div className="stat-box" key={item.label}>
                  <div className="stat-icon">
                    <img src={item.icon} alt={item.label} />
                  </div>
                  <p className="stat-number">{item.number}</p>
                  <p className="stat-label">{item.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="quote-card">
            <h4>Get Instant Quote Free</h4>
            <p className="quote-sub">10.6k+ Happy Reviews</p>
            <form className="quote-form">
              <input type="text" name="name" placeholder="Your Name" />
              <input type="tel" name="mobile" placeholder="Your mobile NO." />
              <input type="email" name="email" placeholder="Your Email" />
              <button type="button">Get A Quote</button>
            </form>
            <span className="quote-secure">
              <img src={secureImg} alt="Secure" />
              Secure & private
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}
