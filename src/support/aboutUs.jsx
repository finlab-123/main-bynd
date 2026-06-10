import React from "react";
import visionImg from "../assets/service/Wealth-Management-1024x576.webp";
import missionImg from "../assets/service/Investment-Products-768x432.webp";
import coverImg from "../assets/service/service.webp";
import bankingImg from "../assets/service/Banking-Solutions-1024x576.webp";
import insuranceImg from "../assets/service/Insurance-Solutions-1024x576.webp";
import retirementImg from "../assets/service/retirement-300x173.webp";
import taxImg from "../assets/service/Tax-768x364.webp";
import estateImg from "../assets/service/estate-and-trust-services-500x500-1-300x189.webp";
import businessImg from "../assets/service/Financial-Advisory-300x169.webp";
import WhyChooseUS from "../../components/whyChooseUs.jsx";
import WhatWeDo from "../../components/whatWeDo.jsx";
import FAQ from "../../components/FAQ";
const styles = `
  .about-page {
    font-family: 'Poppins', 'Segoe UI', system-ui, sans-serif;
    color: #0f172a;
    background: #f7f9f5;
  }

  .mutual-cover {
    display: block;
    width: 100%;
    max-width: 100%;
    height: auto;
    object-fit: cover;
  }

  .about-hero {
    padding: 40px 10px   34px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 24px;
    max-width: 90%;
    margin: 0 auto ;
    align-items: center;
  }

  .hero-left h2 {
    margin: 0 0 8px 0;
    font-size: 28px;
    font-weight: 800;
    line-height: 1.25;
    color: #0b1525;
  }

  .hero-underline {
    width: 58px;
    height: 3px;
    background: linear-gradient(90deg, #76b000, #5f8f00);
    border-radius: 6px;
    margin-top: 10px;
  }

  .hero-right h3 {
    margin: 0 0 8px 0;
    font-size: 16px;
    font-weight: 800;
    color: #0b1525;
  }

  .hero-right p {
    margin: 0;
    font-size: 13.5px;
    line-height: 1.65;
    color: #344150;
  }

  .section-band {
    background: #eef1f5;
    padding: 40px 10px 42px;
    margin-top: 6px;
  }

  .band-shell {
    max-width: 90%;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 24px;
    align-items: center;
  }

  .band-text h3 {
    margin: 0 0 8px 0;
    font-size: 18px;
    font-weight: 800;
    color: #0b1525;
  }

  .band-underline {
    width: 48px;
    height: 3px;
    background: #76b000;
    border-radius: 6px;
    margin: 6px 0 12px;
  }

  .band-text p {
    margin: 0;
    font-size: 13px;
    line-height: 1.7;
    color: #3a4755;
  }

  .band-image img {
    width: 100%;
    height: 260px;
    object-fit: cover;
    background: #ffffff;
    border-radius: 12px;
    border: 1px solid #dfe7e7;
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.06);
  }

  .section-alt {
    background: #ffffff;
    padding: 38px 0 44px;
  }

  .alt-shell {
    max-width: 100%;
    margin: 0;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 24px;
    align-items: center;
  }

  .services-section {
    background: #f7f9f5;
    padding: 40px 40px 46px;
  }

  .services-shell {
    max-width: 100%;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 32px;
  }

  .services-header {
    text-align: center;
    max-width: 820px;
    margin: 0 auto 6px;
  }

  .services-header h3 {
    margin: 0 0 10px 0;
    font-size: 22px;
    font-weight: 800;
    color: #0b1525;
  }

  .services-header p {
    margin: 0;
    font-size: 13.5px;
    line-height: 1.7;
    color: #3a4755;
  }

  .service-rows {
    display: flex;
    flex-direction: column;
    gap: 26px;
  }

  .service-row {
    background: #ffffff;
    border: 1px solid #e4ebf3;
    border-radius: 16px;
    box-shadow: 0 14px 26px rgba(15, 23, 42, 0.08);
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 0;
    overflow: hidden;
  }

  .service-row.reverse {
    direction: rtl;
  }

  .service-row.reverse .service-copy,
  .service-row.reverse .service-visual {
    direction: ltr;
  }

  .service-visual {
    position: relative;
    min-height: 220px;
  }

  .service-visual img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .service-copy {
    padding: 20px 22px 22px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    justify-content: center;
  }

  .service-title {
    margin: 0;
    font-size: 18px;
    font-weight: 800;
    color: #0b1525;
    display: inline-flex;
    align-items: center;
    gap: 10px;
  }

  .service-pill {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    background: #e8f4d9;
    color: #456600;
    border-radius: 999px;
    padding: 4px 10px;
    font-size: 11.5px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.4px;
  }

  .service-list {
    margin: 0;
    padding-left: 18px;
    display: flex;
    flex-direction: column;
    gap: 7px;
  }

  .service-list li {
    font-size: 13px;
    line-height: 1.68;
    color: #3a4755;
  }

  @media (max-width: 900px) {
    .service-row {
      grid-template-columns: 1fr;
    }

    .service-row.reverse {
      direction: ltr;
    }

    .service-visual {
      min-height: 200px;
    }
  }

  @media (max-width: 640px) {
    .about-hero {
      padding: 28px 0 28px;
    }

    .section-band,
    .section-alt {
      padding: 28px 10px 32px;
    }

    .band-image img {
      height: 220px;
    }

    .services-section {
      padding: 28px 0 34px;
    }

    .service-image {
      height: 160px;
    }
  }
`;

const services = [
  {
    title: "Wealth Management",
    image: visionImg,
    alt: "Wealth management illustration",
    points: [
      "Investment Advisory: Personalized investment strategies to help you grow and manage your wealth effectively.",
      "Portfolio Management: Professional management of your investments tailored to your risk tolerance and goals.",
      "Financial Planning: Comprehensive financial plans that cover savings, retirement planning, tax strategies, and estate planning.",
      "Retirement Planning: Financial strategies to ensure a comfortable and secure retirement, including retirement savings plans and income planning.",
    ],
  },
  {
    title: "Banking Solutions",
    image: bankingImg,
    alt: "Banking solutions illustration",
    points: [
      "Personal Banking: A range of services including checking and savings accounts, credit cards, and mortgages.",
      "Business Banking: Tailored banking solutions for businesses, including business accounts, loans, and merchant services.",
      "Online Banking: Convenient online and mobile  banking features, bill payments, and account monitoring.",
      "Investment Banking: Services such as trading, mergers and acquisitions, and risk management.",
    ],
  },
  {
    title: "Investment Products",
    image: missionImg,
    alt: "Investment products illustration",
    points: [
      "Mutual Funds: Diversified investment options to achieve various financial goals.",
      "Stocks and Bonds: Options for direct investment in equities and fixed income.",
      "Exchange-Traded Funds (ETFs): Diversified investment vehicles.",
      "Index Funds: Low-cost, passive investments tied to market indices.",
      "Real Estate Investment Trusts (REITs): Investments in real estate markets and properties.",
      "Alternative Investments: Options like hedge funds, private equity, and commodities, potentially higher returns but also increased risk.",
    ],
  },
  {
    title: "Insurance Solutions",
    image: insuranceImg,
    alt: "Insurance solutions illustration",
    points: [
      "Life Insurance: Protection for your family with term life, whole life, universal life, and variable life insurance options.",
      "Health Insurance: Comprehensive healthcare coverage for individuals, families, and businesses.",
      "Auto & Home Insurance: Policies covering vehicles, including liability, collision, comprehensive, and protection for home or renter's insurance.",
      "Commercial Insurance: Protection for businesses, including general liability insurance, commercial property insurance, professional liability, worker's compensation, and coverage for various business insurance needs.",
      "International Insurance: Protection for international belongings, including homeowner, renter, and vehicle insurance.",
    ],
  },
  {
    title: "Retirement Solutions",
    image: retirementImg,
    alt: "Retirement solutions illustration",
    points: [
      "401(k) and 403(b) Plans: Retirement plans for employers, including plan management and retirement options.",
      "Individual Retirement Accounts (IRAs): Traditional and Roth IRAs offering tax advantages and flexible investment options.",
      "Annuities: Investments providing regular income through guaranteed payments for a specified period or for the remainder of your life.",
    ],
  },
  {
    title: "Tax Services",
    image: taxImg,
    alt: "Tax services illustration",
    points: [
      "Tax Planning: Strategies to minimize your tax liability and maximize your savings.",
      "Tax Preparation: Professionally prepared tax returns.",
      "Tax Compliance: Ensuring adherence to tax regulations and business tax filings.",
      "Tax Advisory: Expert advice on complex tax issues, including corporate taxes and international tax planning.",
      "Tax Audit Support: Assistance during audits and tax disputes.",
    ],
  },
  {
    title: "Estate and Trust Services",
    image: estateImg,
    alt: "Estate and trust services illustration",
    points: [
      "Estate Planning: Strategies to manage and plan the distribution of your estate, including wills, trusts, and inheritance planning.",
      "Trust Services: Creation and management of trusts.",
      "Fiduciary Services: Responsibilities related to managing trusts and estates.",
      "Wealth Transfer: Strategies to transfer wealth to future generations while minimizing taxes and legal complications.",
    ],
  },
  {
    title: "Business Financial Services",
    image: businessImg,
    alt: "Business financial services illustration",
    points: [
      "Business Loans: Financing options for business expansion, equipment purchases, and working capital.",
      "Business Credit: Credit cards, lines of credit and credit management.",
      "Cash Management: Solutions to manage cash flow, payables, and receivables.",
      "Merchant Services: Payment processing solutions for businesses.",
      "Business Insurance: Tailored insurance packages, including liability, property, workers' compensation, and other policies.",
    ],
  },
];

export default function AboutUs() {
  return (
    <div className="about-page">
      <style>{styles}</style>
      <img className="mutual-cover" src={coverImg} alt="about us" />
      <section className="about-hero">
        <div className="hero-left">
          <h2>We have 12 years experience in consulting</h2>
          <div className="hero-underline" aria-hidden="true" />
        </div>
        <div className="hero-right">
          <h3>About Us</h3>
          <p>
            Welcome to Bynd Finserve – where innovation meets financial empowerment. At Bynd Finserve, we are redefining the future of finance with cutting-edge, tech-driven solutions designed to empower individuals and businesses alike. Our mission is to bridge the gap between advanced technology and everyday financial services to create seamless, accessible, and secure experiences.
          </p>
        </div>
      </section>

      <section className="section-band">
        <div className="band-shell">
          <div className="band-text">
            <h3>Our Vision</h3>
            <div className="band-underline" aria-hidden="true" />
            <p>
              We envision a world where financial services are not only smarter but also more inclusive and accessible. By leveraging the power of artificial intelligence, data analytics, and blockchain technology, we aim to provide our clients with solutions that unlock new opportunities, drive financial growth, and streamline operations.
            </p>
          </div>
          <div className="band-image">
            <img src={visionImg} alt="Vision illustration" />
          </div>
        </div>
      </section>

      <section className="section-alt">
        <div className="alt-shell">
          <div className="band-image">
            <img src={missionImg} alt="Mission illustration" />
          </div>
          <div className="band-text">
            <h3>Our Mission</h3>
            <div className="band-underline" aria-hidden="true" />
            <p>
              Our mission is to deliver innovative financial technology solutions that simplify the complexities of modern finance. We believe that everyone, regardless of their financial background, should have the tools and resources to manage, grow, and protect their wealth. From startups to established enterprises, we cater to a diverse range of industries with tailored fintech solutions that foster financial independence and stability.
            </p>
          </div>
        </div>
      </section>

      <section className="services-section">
        <div className="services-shell">
          <div className="services-header">
            <h3>Comprehensive Financial Solutions</h3>
            <p>
              Explore the full spectrum of services we provide to protect, grow, and streamline your finances. Each solution is crafted to match specific needs, whether personal, corporate, or long-term planning.
            </p>
          </div>

          <div className="service-rows">
            {services.map((service, index) => (
              <article
                className={`service-row ${index % 2 ? "reverse" : ""}`}
                key={service.title}
              >
                <div className="service-visual">
                  <img src={service.image} alt={service.alt} />
                </div>
                <div className="service-copy">
                  <div className="service-title">
                    {service.title}
                    {/* <span className="service-pill">
                      {index % 2 ? "02" : "01"}
                    </span> */}
                  </div>
                  <ul className="service-list">
                    {service.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <WhyChooseUS />
      <FAQ />
      <WhatWeDo />
    </div>
  );
}