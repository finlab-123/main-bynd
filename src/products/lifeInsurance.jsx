import React, { useState } from "react";
import BookConsultancy from "../../components/bookConsultancy";
import mutualCover from "../assets/products/lifeInsurance/Life-Insurance.webp";
import mutualBanner from "../assets/products/lifeInsurance/Bynd-Finserve-Life-Insurance-768x249.webp";
import InvestForm from "../products/lifeInsuranceForm.jsx";
import peaceIcon from "../assets/products/lifeInsurance/philosophy-300x300.webp";
import wealthIcon from "../assets/products/lifeInsurance/wealth-accumulation-1-300x300.webp";
import loanIcon from "../assets/products/lifeInsurance/approve-300x300.webp";
import legacyIcon from "../assets/products/lifeInsurance/succession-planning-300x300.webp";
import termImg from "../assets/products/lifeInsurance/0_0004_Term-Life-Insurance-1-768x384.webp";
import wholeImg from "../assets/products/lifeInsurance/0_0003_Whole-Life-Insurance-768x384.webp";
import endowmentImg from "../assets/products/lifeInsurance/0_0001_Endowment-Plans-768x384.webp";
import childImg from "../assets/products/lifeInsurance/0_0002_Child-Plans-768x384.webp";
import retirementImg from "../assets/products/lifeInsurance/0_0000_Retirement-Plans-768x384.webp";
import { createPortal } from "react-dom";

const styles = `
    .life-page {
        background: #ffffff;
        color: #1f2d3d;
        font-family: 'Poppins', 'Segoe UI', system-ui, sans-serif;
        padding: 0 0 40px;
    }

    .mutual-cover {
        height: auto;
        max-height: 600px;
        max-width: 100%;
        object-fit: cover;
        object-position: center;
        background-color: #f8fafc;
    }

    .life-shell {
        width: 100%;
        max-width: 1100px;
        margin: 0 auto;
        display: grid;
        grid-template-columns: minmax(0, 1fr) 320px;
        gap: 20px;
        align-items: start;
    }

    .life-main {
        display: flex;
        flex-direction: column;
        gap: 18px;
    }

    .life-card {
        background: #ffffff;
        border: 1px solid #e5e7eb;
        border-radius: 12px;
        padding: 18px 20px;
        box-shadow: 0 12px 24px rgba(0, 0, 0, 0.06);
    }

    .life-card h1,
    .life-card h2 {
        margin: 0 0 12px 0;
        color: #7ab600;
        font-size: 26px;
        font-weight: 800;
        line-height: 1.2;
    }

    .life-card h2 {
        font-size: 24px;
    }

    .life-card p {
        margin: 0 0 12px 0;
        color: #2f3a48;
        font-size: 15px;
        line-height: 1.65;
    }

    .life-lead {
        font-size: 15px;
        line-height: 1.7;
    }

    .apply-btn {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        background: #7ab600;
        color: #ffffff;
        border: 1px solid #6ca200;
        border-radius: 6px;
        padding: 10px 16px;
        font-weight: 800;
        font-size: 14px;
        cursor: pointer;
        box-shadow: 0 10px 18px rgba(122, 182, 0, 0.22);
        text-decoration: none;
    }

    .why-list {
        margin: 0;
        padding-left: 20px;
        display: grid;
        gap: 12px;
        color: #243240;
        font-size: 15px;
        line-height: 1.6;
    }

    .why-list strong {
        color: #111827;
    }

    .highlight {
        display: grid;
        gap: 6px;
        padding: 12px 14px;
        border-radius: 10px;
        background: #f7fbf2;
        border: 1px solid #e3edd6;
        color: #2f3a48;
        font-size: 14px;
        line-height: 1.6;
    }

    .benefit-icons {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
        gap: 12px;
        margin: 12px 0;
        text-align: center;
    }

    .benefit-icon {
        display: grid;
        gap: 6px;
        justify-items: center;
        color: #4a5563;
        font-size: 13px;
        line-height: 1.45;
    }

    .benefit-img {
        width: 72px;
        height: 72px;
        object-fit: cover;
        border-radius: 16px;
        background: #f1f8e6;
        border: 1px solid #d8ebc3;
        box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.7);
    }

    .life-sidebar {
        position: sticky;
        top: 14px;
    }

    .plan-section {
        margin: 18px auto 0;
        background: #f5fbe8;
        border: 1px solid #dcecc6;
        border-radius: 14px;
        padding: 18px 14px 22px;
        box-shadow: 0 12px 22px rgba(0, 0, 0, 0.05);
        max-width: 1040px;
    }

    .plan-title {
        text-align: center;
        color: #1f2d3d;
        font-size: 19px;
        font-weight: 800;
        margin: 0 0 14px 0;
        letter-spacing: 0.1px;
    }

    .plan-list {
        display: grid;
        gap: 14px;
    }

    .plan-card {
        display: grid;
        grid-template-columns: 1.05fr 1fr;
        gap: 14px;
        align-items: center;
        background: #ffffff;
        border: 1px solid #e5e7eb;
        border-radius: 12px;
        padding: 14px 16px;
        box-shadow: 0 12px 22px rgba(0, 0, 0, 0.05);
    }

    .plan-card:nth-child(even) {
        grid-template-columns: 1fr 1.05fr;
    }

    .plan-card:nth-child(even) img {
        order: 2;
    }

    .plan-card:nth-child(even) .plan-copy {
        order: 1;
    }

    .plan-card img {
        width: 100%;
        height: 170px;
        border-radius: 10px;
        border: 1px solid #e8eddc;
        object-fit: cover;
        background: #f7fbf2;
    }

    .plan-copy h3 {
        margin: 0 0 8px 0;
        color: #1f2d3d;
        font-size: 16px;
        font-weight: 800;
    }

    .plan-copy p {
        margin: 0;
        color: #465463;
        font-size: 13px;
        line-height: 1.55;
    }

    @media (max-width: 720px) {
        .plan-card,
        .plan-card:nth-child(even) {
            grid-template-columns: 1fr;
        }

        .plan-card img,
        .plan-card:nth-child(even) img,
        .plan-card .plan-copy,
        .plan-card:nth-child(even) .plan-copy {
            order: initial;
        }

        .plan-card img {
            height: 160px;
        }
    }

    @media (max-width: 960px) {
        .life-shell {
            grid-template-columns: 1fr;
        }

        .life-sidebar {
            position: relative;
            top: 0;
        }
    }

    @media (max-width: 640px) {
        .life-page {
            padding: 20px 14px 28px;
        }

        .life-card {
            padding: 14px 16px;
        }

        .life-card h1,
        .life-card h2 {
            font-size: 22px;
        }
    }
`;

const heroCopy = {
  title: "Life Insurance: Secure Your Family’s Future Today",
  body: "At Bynd Finserve, we understand that life is unpredictable, and the best way to protect your loved ones is to plan ahead. Our range of Life Insurance solutions is designed to provide you with peace of mind, ensuring that your family is financially secure, no matter what the future holds.",
  body2:
    "Whether you are looking to provide for your family in your absence, save for retirement, or protect your loved ones’ financial needs, our life insurance products offer a tailored solution to meet your unique goals.",
};

const whyPoints = [
  {
    title: "Financial Security for Your Loved Ones",
    text: "Life insurance helps ensure that your family and dependents are protected and can maintain their standard of living in unforeseen circumstances.",
  },
  {
    title: "Flexible Plans",
    text: "From term life to whole life policies, choose plans that suit your financial situation and long-term goals.",
  },
  {
    title: "Tax Benefits",
    text: "Potential tax savings on premiums and death benefits help you plan for the future while saving today.",
  },
  {
    title: "Easy Application Process",
    text: "Streamlined application and quick approvals make getting the right life cover simpler than ever.",
  },
  {
    title: "Affordable Premiums",
    text: "Plans tailored to your budget, so you don’t compromise on the coverage you need.",
  },
];

const benefitsList = [
  {
    title: "Peace of Mind",
    text: "Knowing that your family is financially protected can bring peace of mind, especially when life’s uncertainties arise.",
  },
  {
    title: "Wealth Creation",
    text: "Whole life and endowment plans offer the added advantage of wealth accumulation through investments, helping you build a financial legacy.",
  },
  {
    title: "Loan Against Policy",
    text: "You can take loans against your life insurance policy in case of financial emergencies.",
  },
  {
    title: "Legacy Planning",
    text: "Life insurance helps you create a financial legacy for your heirs, allowing you to leave them a substantial inheritance.",
  },
];

const benefitIcons = [
  { label: "Peace of mind", src: peaceIcon },
  { label: "Wealth Creation", src: wealthIcon },
  { label: "Loan Against Policy", src: loanIcon },
  { label: "Legacy Planning", src: legacyIcon },
];

const lifePlans = [
  {
    title: "Term Life Insurance",
    text: "Straightforward protection for a set term (10, 20, 30 years). Pay during the term; your beneficiaries receive the benefit if you pass away during that period. Ideal for affordable, pure life coverage for a set period.",
    image: termImg,
  },
  {
    title: "Whole Life Insurance",
    text: "Lifelong coverage plus cash value growth. Great for those seeking protection and an investment component, guaranteeing coverage for life as long as premiums are paid.",
    image: wholeImg,
  },
  {
    title: "Endowment Plans",
    text: "Blend protection with a savings component. Receive a lump sum on maturity or upon claim, making it ideal for education or retirement goals with added life cover.",
    image: endowmentImg,
  },
  {
    title: "Child Plans",
    text: "Secure your child’s education and financial needs even if uncertainties arise. Combines life cover with a savings component for your child’s growth.",
    image: childImg,
  },
  {
    title: "Retirement Plans",
    text: "Specially designed to provide financial security after you retire, offering returns and benefits that balance protection and peace of mind in your golden years.",
    image: retirementImg,
  },
];

export default function LifeInsurancePage() {
  const [showForm, setShowForm] = useState(false);

  React.useEffect(() => {
    if (!showForm) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [showForm]);

  return (
    <div className="life-page">
      <style>{styles}</style>

      <img
        className="mutual-cover"
        src={mutualCover}
        alt="Invest in mutual funds"
        style={{ cursor: "pointer" }}
        onClick={() => setShowForm(true)}
      />
       {/* <a
            href="/partner-with-us"
            style={{
              position: 'absolute',
              top: 484,
              left: 40,
              padding: '18px 38px',
              background: '#b4dc14',
              color: '#000000',
              fontWeight: 700,
              fontSize: '26px',
              borderRadius: '16px',
              boxShadow: '0 8px 24px rgba(122,182,0,0.18)',
              textDecoration: 'none',
              zIndex: 2,
              letterSpacing: '0.5px',
              margin: '24px 0 0 24px',
              transition: 'background 0.2s',
              display: 'flex',
              alignItems: 'center',
              gap: '16px',
            }}
            onMouseOver={e => (e.currentTarget.style.background = '#8bc700')}
            onMouseOut={e => (e.currentTarget.style.background = '#b4dc14')}
            aria-label="Apply Now"
          >
            Apply Now
            <span style={{ fontSize: '32px', fontWeight: 700, display: 'inline-block', marginLeft: '4px', lineHeight: 1 }} aria-hidden="true">→</span>
          </a> */}
      
            

      {showForm && typeof document !== "undefined" && createPortal(
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            background: "rgba(0,0,0,0.4)",
            zIndex: 2147483647,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              background: "#fff",
              borderRadius: 10,
              padding: 24,
              minWidth: 320,
              maxWidth: 420,
              boxShadow: "0 8px 32px rgba(0,0,0,0.18)",
              position: "relative",
              maxHeight: "calc(100vh - 24px)",
              overflowY: "auto",
            }}
          >
            <button
              onClick={() => setShowForm(false)}
              style={{
                position: "absolute",
                top: 10,
                right: 14,
                background: "none",
                border: "none",
                fontSize: 24,
                color: "#888",
                cursor: "pointer",
              }}
            >
              &times;
            </button>
            <InvestForm buttonLabel="Apply Now" buttonClassName="apply-btn" />
          </div>
        </div>,
        document.body
      )}
      <div className="life-shell">
        <div className="life-main">
          <article className="life-card">
            <h1>{heroCopy.title}</h1>
            <p className="life-lead">{heroCopy.body}</p>
            <p>{heroCopy.body2}</p>
            <InvestForm buttonLabel="Apply Now" buttonClassName="apply-btn" />
          </article>

          <article className="life-card">
            <h2>Why Choose Bynd Finserve Life Insurance?</h2>
            <ol className="why-list">
              {whyPoints.map((item) => (
                <li key={item.title}>
                  <strong>{item.title}:</strong> {item.text}
                </li>
              ))}
            </ol>
            <img
              className="mutual-banner"
              src={mutualBanner}
              alt="Mutual fund investments banner"
            />
            <div className="highlight">
              <strong>Ready to protect what matters?</strong>
              <span>
                Apply now and get guidance from our team to choose the right
                cover for your family.
              </span>
            </div>
          </article>

          <article className="life-card">
            <h2>Benefits of Life Insurance</h2>
            <ol className="why-list">
              {benefitsList.map((item) => (
                <li key={item.title}>
                  <strong>{item.title}:</strong> {item.text}
                </li>
              ))}
            </ol>
            <div className="benefit-icons">
              {benefitIcons.map((icon) => (
                <div key={icon.label} className="benefit-icon">
                  <img
                    className="benefit-img"
                    src={icon.src}
                    alt={icon.label}
                  />
                  <span>{icon.label}</span>
                </div>
              ))}
            </div>
            <InvestForm buttonLabel="Apply Now" buttonClassName="apply-btn" />
          </article>
        </div>

        <aside className="life-sidebar">
          <BookConsultancy />
        </aside>
      </div>
      <section className="plan-section">
        <h3 className="plan-title">Types of Life Insurance We Offer:</h3>
        <div className="plan-list">
          {lifePlans.map((plan) => (
            <div key={plan.title} className="plan-card">
              <img src={plan.image} alt={plan.title} />
              <div className="plan-copy">
                <h3>{plan.title}</h3>
                <p>{plan.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
