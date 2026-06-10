import React from "react";
import tailoredIcon from "../src/assets/investments/privateCredit/Tailored-Investment-Solutions.webp";
import strategyIcon from "../src/assets/investments/privateCredit/Strategy.webp";
import volatilityIcon from "../src/assets/investments/privateCredit/Volatility.webp";
import opportunitiesIcon from "../src/assets/investments/privateCredit/Opportunities.webp";


const chooseReasons = [
  {
    title: "Tailored Investment Solutions",
    icon: tailoredIcon,
    text: "Structures aligned to your objectives—whether income stability, capital preservation, or enhanced yield.",
  },
  {
    title: "Proven Underwriting Discipline",
    icon: strategyIcon,
    text: "A rigorous credit playbook covering cash flows, collateral, industry dynamics, and sponsor strength.",
  },
  {
    title: "Proactive Risk Management",
    icon: volatilityIcon,
    text: "Continuous monitoring, covenants, and contingency plans to reduce drawdowns and protect principal.",
  },
  {
    title: "Curated Deal Access",
    icon: opportunitiesIcon,
    text: "Sourced opportunities across sectors with negotiated terms designed for attractive risk-adjusted returns.",
  },
];

const styles = `
  .why-page {
    background: radial-gradient(circle at 20% 20%, #f2f9e8, #e6f3d8 38%, #f7fbf2 70%);
    color: #13212c;
    font-family: 'Poppins', 'Segoe UI', system-ui, sans-serif;
    padding: 34px 18px 46px;
  }

  .why-shell {
    width: min(1100px, 100%);
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 18px;
  }

  .why-hero {
    background: linear-gradient(135deg, #d9efb9 0%, #f4ffe6 100%);
    border: 1px solid #cfe4a7;
    border-radius: 16px;
    padding: 18px 18px 20px;
    text-align: center;
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.06);
    display: grid;
    gap: 10px;
  }

  .why-badge {
    display: inline-flex;
    align-self: center;
    padding: 6px 12px;
    border-radius: 999px;
    border: 1px solid #9cc869;
    background: #f9fff2;
    color: #3b5327;
    font-size: 11px;
    font-weight: 800;
    letter-spacing: 0.4px;
    text-transform: uppercase;
  }

  .why-hero h2 {
    margin: 0;
    font-size: 22px;
    font-weight: 800;
    color: #0f1f2d;
    letter-spacing: 0.1px;
  }

  .why-hero p {
    margin: 0;
    font-size: 13.5px;
    line-height: 1.6;
    color: #2f3a48;
    max-width: 820px;
    justify-self: center;
  }

  .why-pills {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    justify-content: center;
    margin-top: 4px;
  }

  .why-pill {
    background: #ffffff;
    border: 1px solid #dbe8c6;
    color: #41502f;
    border-radius: 999px;
    padding: 7px 12px;
    font-size: 12px;
    font-weight: 700;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.04);
  }

  .reason-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    gap: 12px;
  }

  .reason-card {
    background: #ffffff;
    border: 1px solid #e0ead1;
    border-radius: 14px;
    padding: 14px;
    display: grid;
    gap: 8px;
    box-shadow: 0 12px 22px rgba(0, 0, 0, 0.05);
    transition: transform 150ms ease, box-shadow 150ms ease, border-color 150ms ease;
  }

  .reason-card:hover {
    transform: translateY(-3px);
    box-shadow: 0 16px 30px rgba(0, 0, 0, 0.08);
    border-color: #c8dfa5;
  }

  .reason-icon {
    width: 62px;
    height: 62px;
    border-radius: 12px;
    background: linear-gradient(145deg, #f5fbef, #e6f3d8);
    border: 1px solid #d5e7bd;
    display: grid;
    place-items: center;
    box-shadow: inset 0 0 0 1px rgba(122, 182, 0, 0.18);
  }

  .reason-icon img {
    width: 46px;
    height: 46px;
    object-fit: contain;
  }

  .reason-card h3 {
    margin: 0;
    font-size: 15px;
    font-weight: 800;
    color: #182433;
  }

  .reason-card p {
    margin: 0;
    font-size: 12.5px;
    line-height: 1.55;
    color: #445365;
  }

  .icon-band {
    display: none;
  }

  .cta-card {
    background: linear-gradient(120deg, #e9f6cf, #f9fff2);
    border: 1px solid #cfe4a7;
    border-radius: 14px;
    padding: 16px 18px;
    text-align: center;
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.05);
    display: grid;
    gap: 8px;
  }

  .cta-card h4 {
    margin: 0;
    font-size: 16px;
    font-weight: 800;
    color: #0f1f2d;
  }

  .cta-card p {
    margin: 0;
    font-size: 13px;
    color: #2f3a48;
  }

  .cta-button {
    justify-self: center;
    margin-top: 4px;
    background: linear-gradient(90deg, #7ab600, #6ca200);
    color: #ffffff;
    border: 1px solid #6ca200;
    border-radius: 999px;
    padding: 10px 18px;
    font-size: 12.5px;
    font-weight: 800;
    letter-spacing: 0.2px;
    cursor: pointer;
    box-shadow: 0 12px 20px rgba(122, 182, 0, 0.25);
    transition: transform 140ms ease, box-shadow 140ms ease;
    text-transform: uppercase;
  }

  .cta-button:hover {
    transform: translateY(-2px);
    box-shadow: 0 14px 24px rgba(122, 182, 0, 0.32);
  }

  @media (max-width: 640px) {
    .why-page {
      padding: 20px 14px 32px;
    }

    .why-hero h2 {
      font-size: 20px;
    }

    .reason-card {
      padding: 13px;
    }
  }
`;

function WhyChooseUs() {
  return (
    <>
    <div className="why-page">
      <style>{styles}</style>
      <div className="why-shell">
        <section className="why-hero">
      
          <h2>Why Choose BYND Finserve?</h2>
          <p>
            A disciplined partner focused on clear outcomes: protecting capital, delivering resilient yield, and growing with thoughtful risk controls.
          </p>
          <div className="why-pills">
            <span className="why-pill">Tailored strategies</span>
            <span className="why-pill">Disciplined underwriting</span>
            <span className="why-pill">Active risk management</span>
            <span className="why-pill">Transparent reporting</span>
          </div>
        </section>

        <section className="reason-grid">
          {chooseReasons.map((item) => (
            <article key={item.title} className="reason-card">
              <div className="reason-icon">
                <img src={item.icon} alt={item.title} />
              </div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </section>

        <div className="cta-card">
          <h4>Ready to see how we fit?</h4>
          <p>Let’s align the right structure to your goals with clear guardrails and responsive support.</p>
          <button className="cta-button" type="button">Talk to an expert</button>
        </div>
      </div>
      </div>
    </>
  );
}

export default WhyChooseUs;

