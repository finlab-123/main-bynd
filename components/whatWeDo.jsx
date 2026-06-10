import paymentsImg from "../src/assets/service/Banking-Solutions-1024x576.webp";
import lendingImg from "../src/assets/service/Investment-Products-768x432.webp";
import wealthImg from "../src/assets/service/Wealth-Management-1024x576.webp";

const styles = `
  .wwd-page {
    background: #b3e97e;
    color: #1f2b37;
    font-family: 'Poppins', 'Segoe UI', system-ui, sans-serif;
    padding: 34px 18px 42px;
  }

  .wwd-shell {
    width: min(1450px, 100%);
    margin: 0 auto;
    display: grid;
    gap: 22px;
  }

  .wwd-hero {
    display: grid;
    gap: 8px;
    justify-items: center;
    text-align: center;
  }

  .wwd-title {
    margin: 0;
    font-size: 22px;
    font-weight: 800;
    color: #0f1f2d;
  }

  .wwd-underline {
    width: 80px;
    height: 3px;
    background: linear-gradient(90deg, #79b500, #5f8f00);
    border-radius: 8px;
  }

  .wwd-lead {
    margin: 0;
    font-size: 13px;
    line-height: 1.55;
    color: #344150;
    max-width: 720px;
  }

  .wwd-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    gap: 14px;
  }

  .wwd-card {
    background: #ffffff;
    border: 1px solid #dce7c8;
    border-radius: 12px;
    padding: 14px 14px 16px;
    display: grid;
    gap: 10px;
    box-shadow: 0 10px 18px rgba(0, 0, 0, 0.05);
  }

  .wwd-card img {
    width: 100%;
    height: 160px;
    object-fit: cover;
    border-radius: 10px;
    background: #f7fbef;
    border: 1px solid #e3edd5;
  }

  .wwd-card h3 {
    margin: 0;
    font-size: 14px;
    font-weight: 800;
    color: #192633;
    text-align: center;
  }

  .wwd-card p {
    margin: 0;
    font-size: 12.5px;
    line-height: 1.55;
    color: #425164;
    text-align: center;
  }

  .wwd-commit {
    background: #ffffff;
    border: 1px solid #dce7c8;
    border-radius: 14px;
    padding: 18px 18px 20px;
    box-shadow: 0 12px 22px rgba(0, 0, 0, 0.05);
    display: grid;
    gap: 10px;
  }

  .wwd-commit h3 {
    margin: 0;
    font-size: 18px;
    font-weight: 800;
    color: #0f1f2d;
  }

  .wwd-commit h3 span {
    color: #6ca200;
  }

  .wwd-commit p {
    margin: 0;
    font-size: 13px;
    line-height: 1.6;
    color: #2f3a48;
  }

  @media (max-width: 640px) {
    .wwd-page {
      padding: 24px 14px 32px;
    }

    .wwd-title {
      font-size: 20px;
    }

    .wwd-card img {
      height: 110px;
    }
  }
`;

const cards = [
  {
    title: "Loan Against Property (LAP)",
    text: "Unlock the value of your property to meet your financial needs with flexible and competitive LAP solutions.",
    image: paymentsImg,
  },
  {
    title: "Home Loan",
    text: "Make your dream home a reality with our easy, transparent, and quick home loan process.",
    image: lendingImg,
  },
  {
    title: "Vehicle Loan",
    text: "Drive your aspirations with our fast and affordable vehicle loan options for new and used vehicles.",
    image: wealthImg,
  },
];

export default function WhatWeDo() {
  return (
    <div className="wwd-page">
      <style>{styles}</style>
      <div className="wwd-shell">
        <header className="wwd-hero">
          <h2 className="wwd-title">What We Do</h2>
          <div className="wwd-underline" aria-hidden="true" />
          <p className="wwd-lead">
            At Bynd Finserve, we are dedicated loan service providers offering a range of secured loan products tailored to your needs:
          </p>
        </header>

        <section className="wwd-grid">
          {cards.map((card) => (
            <article key={card.title} className="wwd-card">
              <img src={card.image} alt={card.title} />
              <h3>{card.title}</h3>
              <p>{card.text}</p>
            </article>
          ))}
        </section>

        <section className="wwd-commit">
          <h3>
            Our <span>Commitment</span> to You
          </h3>
          <p>
            We are committed to providing expert guidance, quick approvals, and transparent processes for all your loan requirements. Whether you need funds for a new home, your vehicle, or leveraging your property, Bynd Finserve is your trusted partner every step of the way.
          </p>
          <p>
            Experience hassle-free loans with personalized support and competitive rates. Your financial growth is our priority.
          </p>
        </section>
      </div>
    </div>
  );
}
