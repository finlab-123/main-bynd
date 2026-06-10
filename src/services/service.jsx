import React from "react";
import heroImg from "../assets/service/service.webp";
import wealthImg from "../assets/service/Wealth-Management-1024x576.webp";
import bankingImg from "../assets/service/Banking-Solutions-1024x576.webp";
import investmentImg from "../assets/service/Investment-Products-768x432.webp";
import insuranceImg from "../assets/service/Insurance-Solutions-1024x576.webp";
import retirementImg from "../assets/service/retirement-300x173.webp";
import taxImg from "../assets/service/Tax-768x364.webp";
import estateImg from "../assets/service/estate-and-trust-services-500x500-1-300x189.webp";

const styles = `
  .services-page {
    background: #e9f4d6;
    color: #1f2b37;
    font-family: 'Poppins', 'Segoe UI', system-ui, sans-serif;
    padding: 0px 0px 0px;
  }

  .services-shell {
    width: min(1700px, 100%);
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 0px;
  }

  .services-hero {
    background: #d8eeb2;
    border-radius: 12px;
    padding: 18px;
    display: flex;
    flex-direction: column;
    gap: 12px;
    align-items: cover;
    object-fit: contain;
    text-align: center;
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.06);
    border: 1px solid #cfe2a3;
  }

  .services-hero h1 {
    margin: 0 0 8px 0;
    font-size: 22px;
    font-weight: 800;
    color: #0f1f2d;
  }

  .services-hero p {
    margin: 0;
    font-size: 13.5px;
    line-height: 1.6;
    max-width: 760px;
  }

  .services-hero img {
    width: 100%;
    max-width: 100%;
    // height: 1230px;
    object-fit: cover;
    background: #f5f9ec;
    border-radius: 10px;
    border: 1px solid #d9e7be;
    display: block;
  }

  .service-card {
    display: grid;
    grid-template-columns: 1.05fr 0.95fr;
    gap: 12px;
    background: #dff0c4;
    border-radius: 12px;
    padding: 16px;
    border: 1px solid #d0e3a5;
    box-shadow: 0 10px 18px rgba(0, 0, 0, 0.05);
    align-items: center;
    opacity: 0;
    transform: translateX(60px);
    animation: fadeInLeft 0.8s cubic-bezier(0.4,0,0.2,1) forwards;
    animation-delay: var(--delay, 0ms);
  }

  .service-card.reverse {
    grid-template-columns: 0.95fr 1.05fr;
    transform: translateX(-60px);
    animation-name: fadeInRight;
  }

  @keyframes fadeInLeft {
    from {
      opacity: 0;
      transform: translateX(60px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
  @keyframes fadeInRight {
    from {
      opacity: 0;
      transform: translateX(-60px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  .service-card.reverse {
    grid-template-columns: 0.95fr 1.05fr;
  }

  .service-copy h2 {
    margin: 0 0 8px 0;
    font-size: 16px;
    font-weight: 800;
    color: #182433;
    text-align: center;
  }

  .service-copy ol {
    margin: 0;
    padding-left: 0;
    display: flex;
    flex-direction: column;
    gap: 6px;
    font-size: 12.5px;
    color: #2f3a48;
    line-height: 1.5;
    list-style: none;
  }

  .service-copy ol li {
    position: relative;
    padding-left: 38px;
    min-height: 34px;
    display: flex;
    align-items: center;
  }
  .service-copy ol li::before {
    content: "\\2192";
    /* Unicode right arrow */
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    color: #7bbd3b;
    font-size: 34px;
    line-height: 1;
    font-weight: bold;
  }

  .service-card img {
    width: 100%;
    height: 180px;
    object-fit: contain;
    background: #ffffff;
    border-radius: 10px;
    border: 1px solid #dfe8c8;
    order: 1;
  }

  .service-card.reverse img {
    order: 2;
  }

  .service-card.reverse .service-copy {
    order: 1;
  }

  .service-card .service-copy {
    order: 2;
  }

  .article-card {
    background: #dff0c4;
    border-radius: 12px;
    padding: 16px;
    border: 1px solid #d0e3a5;
    box-shadow: 0 10px 18px rgba(0, 0, 0, 0.05);
  }

  .article-card h3 {
    margin: 0 0 8px 0;
    font-size: 15px;
    font-weight: 800;
    color: #182433;
    text-align: center;
  }

  .article-card ol {
    margin: 0;
    padding-left: 18px;
    display: grid;
    gap: 6px;
    font-size: 12.5px;
    color: #2f3a48;
    line-height: 1.5;
  }

  @media (max-width: 900px) {
    .service-card,
    .service-card.reverse {
      grid-template-columns: 1fr;
    }

    .service-card img {
      order: 1;
      height: 170px;
    }

    .service-card .service-copy,
    .service-card.reverse .service-copy {
      order: 2;
    }
  }

  @media (max-width: 640px) {
    .services-page {
      padding: 20px 14px 32px;
    }

    .services-hero h1 {
      font-size: 20px;
    }

    .service-card img {
      height: 160px;
    }
  }
`;

const serviceSections = [
  {
    title: "Wealth Management",
    image: wealthImg,
    bullets: [
      "Investment Advisory: Personalized strategies to help you grow and manage your wealth.",
      "Portfolio Management: Professional oversight with disciplined rebalancing.",
      "Retirement Planning: Comprehensive strategies for secure post-work life.",
      "Financial Planning: Holistic planning across cash flow, goals, and taxes.",
      "Risk Management: Structured protection for capital and income streams.",
      "Estate Planning: Tailored wealth transfer and succession solutions.",
      "Inheritance Planning: Structured approaches to transfer wealth.",
      "Tax Planning: Efficient tax positioning and compliance support.",
      "Philanthropy Planning: Align giving with long-term wealth objectives.",
    ],
  },
  {
    title: "Banking Solutions",
    image: bankingImg,
    bullets: [
      "Personal Banking: Checking, savings, credit cards, and personal loans.",
      "Business Banking: Accounts, treasury, and cash management for businesses.",
      "Online & mobile  Banking: Secure digital banking for flexibility.",
      "Mortgage Services: Home purchase, refinance, and advisory support.",
      "Foreign Exchange: Reliable currency exchange and global payments.",
      "Trade Finance: Letters of credit and working-capital solutions.",
    ],
  },
  {
    title: "Investment Products",
    image: investmentImg,
    bullets: [
      "Mutual Funds: Diversified investments to reduce risks and maximize returns.",
      "Stocks and Bonds: Direct ownership opportunities in companies and bonds.",
      "Fixed Income: Stable income from bonds and fixed income products.",
      "Alternative Investments: Diversification beyond traditional assets.",
      "Portfolio Analysis: Evaluate and optimize your investment portfolios.",
      "Thematic Investing: Curated ideas around sectors and trends.",
      "Model Portfolios: Professionally designed allocations for your goals.",
    ],
  },
  {
    title: "Insurance Solutions",
    image: insuranceImg,
    bullets: [
      "Life Insurance: Term, whole, and universal life options.",
      "Health Insurance: Comprehensive coverage for medical expenses.",
      "Auto Insurance: Protection against vehicle damages and liability.",
      "Home Insurance: Coverage for property and personal belongings.",
      "Travel Insurance: Protect against travel-related risks and emergencies.",
      "Critical Illness: Financial protection for serious illnesses.",
      "Income Protection: Safeguard income from accidents or medical issues.",
      "Business Insurance: Tailored coverage for commercial needs.",
    ],
  },
  {
    title: "Retirement Solutions",
    image: retirementImg,
    bullets: [
      "401(k) and 403(b): Employer plans with tax advantages.",
      "IRAs and Roth IRAs: Individual accounts with flexible options.",
      "Pension Maximization: Strategies to optimize benefits.",
      "Annuities: Income streams designed for retirement stability.",
      "Social Security Timing: Guidance on claiming strategies.",
    ],
  },
  {
    title: "Tax Services",
    image: taxImg,
    bullets: [
      "Tax Planning: Maximize benefits while maintaining compliance.",
      "Tax Preparation: Support for individual and business returns.",
      "IRS Representation: Expert support for audits and inquiries.",
      "Tax Reduction: Optimizing deductions, credits, and deferrals.",
      "Estate and Gift Tax: Managing transfer taxes and filings.",
      "Quarterly Planning: Estimated payments and withholding reviews.",
    ],
  },
  {
    title: "Estate and Trust Services",
    image: estateImg,
    bullets: [
      "Estate Planning: Comprehensive strategies to plan and manage your estate.",
      "Trust Services: Expertise in creating and managing trusts.",
      "Asset Protection: Safeguard assets while ensuring compliance.",
      "Succession Planning: Smooth handover for family businesses.",
      "Document Reviews: Wills, powers of attorney, and healthcare directives.",
    ],
  },
];
const extraArticles = [
  {
    title: "Advisor Support & Training",
    points: [
      "Advisor Coaching: Guidance to elevate financial advisory practices.",
      "Regulatory Readiness: Training on compliance and client care standards.",
      "Client Communication: Best practices for presenting financial plans.",
      "Practice Efficiency: Tools and templates to streamline delivery.",
    ],
  },
  {
    title: "Insights & Education",
    points: [
      "Accredited Courses: Investment advisory fundamentals and advanced topics.",
      "Case Studies: Real-world scenarios to sharpen decision-making.",
      "Workshops: Interactive sessions on markets, risk, and planning.",
      "Resource Library: Guides, checklists, and implementation playbooks.",
    ],
  },
];

export default function Service() {
  return (
    <div className="services-page">
      <style>{styles}</style>
      <div className="services-shell">
        <section className="services-hero">
          <img src={heroImg} alt="Our services overview" />

        </section>
        <div style={{ margin: '32px 0 24px 0', textAlign: 'center' }}>
          <h1
            style={{
              fontSize: 36,
              fontWeight: 900,
              color: '#0f1f2d',
              letterSpacing: 1.2,
              textTransform: 'uppercase',
              marginBottom: 8,
              lineHeight: 1.1,
              textShadow: '0 2px 12px rgba(80,120,60,0.08)'
            }}
          >
            Our Services
          </h1>
          <div style={{
            width: 60,
            height: 4,
            background: 'linear-gradient(90deg, #b6d36b 0%, #7bbd3b 100%)',
            borderRadius: 2,
            margin: '0 auto 0 auto'
          }} />
        </div>
        {serviceSections.map((section, idx) => (
          <article
            key={section.title}
            className={`service-card ${idx % 2 === 1 ? "reverse" : ""}`}
            style={{
              '--delay': `${idx * 120}ms`
            }}
          >
            <div className="service-copy">
              <h2>{section.title}</h2>
              <ol>
                {section.bullets.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ol>
            </div>
            <img src={section.image} alt={section.title} />
          </article>
        ))}

        {extraArticles.map((article) => (
          <article className="article-card" key={article.title}>
            <h3>{article.title}</h3>
            <ol>
              {article.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ol>
          </article>
        ))}


      </div>
    </div>
  );
}