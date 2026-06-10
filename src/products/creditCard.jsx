import { useState } from "react";
import BookConsultancy from "../../components/bookConsultancy";
import mutualCover from "../assets/products/Credit-Cards.webp";
import mutualBanner from "../assets/products/credit-card.webp";
import cardStack from "../assets/products/credit-card-1.webp";
import whyImage from "../assets/products/Why-Choose-Credit-Cards.webp";
import cashbackIcon from "../assets/products/cashback-300x300.webp";
import flightIcon from "../assets/products/flight.webp";
import professionalIcon from "../assets/products/professional-2.webp";
import vipIcon from "../assets/products/vip-card.webp";
import hotSaleIcon from "../assets/products/hot-sale.webp";
import InvestForm from "../products/creditCardForm.jsx";

const styles = `
    .credit-page {
        background: #ffffff;
        color: #243240;
        font-family: 'Poppins', 'Segoe UI', system-ui, sans-serif;
    }

    .hero-wrap {
        position: relative;
        overflow: hidden;
    }

    .hero-bg {
        width: 100%;
        height: 320px;
        object-fit: cover;
        display: block;
    }

    .hero-overlay {
        position: absolute;
        inset: 0;
        display: grid;
        grid-template-columns: 1.05fr 0.95fr;
        align-items: center;
        gap: 20px;
        padding: 28px 32px;
        box-sizing: border-box;
        background: linear-gradient(90deg, rgba(255, 255, 255, 0.94), rgba(255, 255, 255, 0.78));
    }

    .hero-copy h1 {
        margin: 0 0 12px 0;
        font-size: 30px;
        color: #1f2d3d;
        line-height: 1.2;
    }

    .hero-copy p {
        margin: 0 0 14px 0;
        color: #425364;
        line-height: 1.55;
        font-size: 15px;
    }

    .hero-cta {
        display: inline-flex;
        align-items: center;
        gap: 12px;
        background: #7ab600;
        color: #ffffff;
        border: 1px solid #6ca200;
        border-radius: 30px;
        padding: 10px 18px 10px 12px;
        font-weight: 800;
        font-size: 14px;
        box-shadow: 0 12px 22px rgba(122, 182, 0, 0.35);
        cursor: pointer;
    }

    .hero-cta .cta-icon {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: 26px;
        height: 26px;
        border-radius: 50%;
        background: #1f1f1f;
        color: #ffffff;
        font-size: 14px;
        font-weight: 900;
    }

    .hero-cards {
        display: flex;
        justify-content: flex-end;
    }

    .hero-cards img {
        width: 340px;
        max-width: 100%;
        border-radius: 10px;
        box-shadow: 0 18px 32px rgba(0, 0, 0, 0.18);
    }

    .content-shell {
        width: 100%;
        max-width: 1180px;
        margin: 0 auto;
        padding: 20px 18px 32px;
        box-sizing: border-box;
        display: grid;
        grid-template-columns: 1.45fr 0.9fr;
        gap: 18px;
    }

    .content-main {
        display: flex;
        flex-direction: column;
        gap: 22px;
        width: 100%;
        min-width: 0;
    }

    .card-block {
        background: #ffffff;
        border-radius: 12px;
        padding: 16px 18px;
        border: 1px solid #e5e7eb;
        box-shadow: 0 14px 26px rgba(0, 0, 0, 0.06);
    }

    .eyebrow {
        display: inline-block;
        color: #7ab600;
        font-weight: 800;
        margin-bottom: 6px;
        letter-spacing: 0.4px;
        font-size: 13px;
    }

    .card-block h1,
    .card-block h2,
    .card-block h3 {
        margin: 0 0 8px 0;
        color: #7ab600;
        font-size: 17px;
        font-weight: 800;
        line-height: 1.3;
    }

    .card-block p,
    .card-block li {
        color: #304152;
        font-size: 14px;
        line-height: 1.55;
        margin: 0;
    }

    .lead {
        color: #5b6b78;
        font-size: 14px;
        margin-bottom: 10px;
        line-height: 1.55;
    }

    .primary-btn,
    .apply-pill {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        background: #7ab600;
        color: #ffffff;
        border: 1px solid #6da300;
        border-radius: 30px;
        padding: 10px 16px;
        font-weight: 800;
        font-size: 13px;
        cursor: pointer;
        box-shadow: 0 10px 18px rgba(122, 182, 0, 0.25);
        margin-top: 10px;
        text-decoration: none;
        width: fit-content;
    }

    .section-grid {
        display: grid;
        grid-template-columns: 1.1fr 0.9fr;
        gap: 16px;
        align-items: center;
    }

    .ordered-list {
        margin: 0;
        padding-left: 18px;
        display: grid;
        gap: 10px;
    }

    .ordered-list strong {
        color: #243240;
    }

    .list-image {
        width: 100%;
        border-radius: 10px;
        border: 1px solid #e6ebf0;
    }

    .card-type-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
        gap: 12px;
        margin-top: 8px;
    }

    .card-type {
        display: grid;
        grid-template-columns: 64px 1fr;
        gap: 10px;
        align-items: center;
        padding: 12px;
        border: 1px solid #e6ebf0;
        border-radius: 10px;
        background: #f8faf5;
        min-height: 92px;
    }

    .card-type img {
        width: 64px;
        height: 64px;
        object-fit: cover;
        border-radius: 10px;
    }

    .card-type h3 {
        margin: 0 0 6px 0;
        color: #7ab600;
        font-size: 14px;
        font-weight: 800;
    }

    .card-type p {
        font-size: 13px;
        line-height: 1.45;
        margin: 0;
        color: #475567;
    }

    .features-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
        gap: 12px;
    }

    .feature-card {
        background: #ffffff;
        border: 1px solid #e5e7eb;
        border-radius: 12px;
        padding: 12px;
        text-align: center;
        display: grid;
        gap: 8px;
        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.05);
        transition: transform 0.12s ease, box-shadow 0.15s ease;
    }

    .feature-card:hover {
        transform: translateY(-3px);
        box-shadow: 0 12px 22px rgba(0, 0, 0, 0.07);
    }

    .feature-card h3 {
        margin: 0;
        color: #2f3a45;
        font-size: 15px;
        font-weight: 800;
    }

    .feature-card p {
        color: #4a5563;
        font-size: 13px;
        line-height: 1.5;
    }

    .feature-icon {
        width: 56px;
        height: 56px;
        object-fit: cover;
        margin: 0 auto;
    }

    .how-list {
        margin: 0;
        padding-left: 18px;
        display: grid;
        gap: 10px;
        background: #f9fbf3;
        border: 1px solid #e5f0d9;
        border-radius: 12px;
        padding: 12px 14px;
        box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.8);
    }

    .steps-container {
        display: grid;
        gap: 14px;
        margin-top: 16px;
    }

    .step-card {
        display: grid;
        grid-template-columns: 60px 1fr;
        gap: 16px;
        align-items: flex-start;
        padding: 16px;
        background: linear-gradient(135deg, #ffffff 0%, #f9fbf7 100%);
        border: 1px solid #e8eddf;
        border-radius: 12px;
        box-shadow: 0 6px 16px rgba(0, 0, 0, 0.04);
        position: relative;
        transition: all 0.2s ease;
    }

    .step-card:hover {
        transform: translateY(-2px);
        box-shadow: 0 10px 24px rgba(122, 182, 0, 0.12);
        border-color: #d6e5a8;
    }

    .step-number {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 60px;
        height: 60px;
        border-radius: 50%;
        background: linear-gradient(135deg, #7ab600 0%, #6ca200 100%);
        color: #ffffff;
        font-weight: 800;
        font-size: 20px;
        box-shadow: 0 6px 14px rgba(122, 182, 0, 0.28);
        flex-shrink: 0;
    }

    .step-content p {
        margin: 0;
        color: #2f3a48;
        font-size: 14px;
        line-height: 1.6;
        font-weight: 500;
    }

    .step-content p strong {
        color: #1f2d3d;
        font-weight: 800;
    }

    .step-connector {
        position: absolute;
        left: 29px;
        top: 76px;
        width: 2px;
        height: 14px;
        background: linear-gradient(180deg, #7ab600, transparent);
        opacity: 0.6;
    }

    .step-card:last-child {
        margin-bottom: 0;
    }

    @media (max-width: 640px) {
        .step-card {
            grid-template-columns: 50px 1fr;
            gap: 12px;
            padding: 12px;
        }

        .step-number {
            width: 50px;
            height: 50px;
            font-size: 18px;
        }

        .step-content p {
            font-size: 13px;
        }

        .step-connector {
            left: 24px;
            top: 62px;
            height: 10px;
        }
    }

    .benefits-row {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
        gap: 12px;
        text-align: center;
    }

    .benefit-item {
        background: linear-gradient(180deg, #ffffff, #f6fbef);
        border: 1px solid #e3eed5;
        border-radius: 12px;
        padding: 12px;
        display: grid;
        gap: 8px;
        align-items: center;
        box-shadow: 0 10px 22px rgba(0, 0, 0, 0.05);
    }

    .benefit-item strong {
        color: #1f2d3d;
    }

    .cta-band {
        background: linear-gradient(180deg, #f4fbe9, #e9f4d6);
        border: 1px solid #dceac5;
        border-radius: 12px;
        padding: 16px 18px;
        text-align: center;
        box-shadow: 0 12px 24px rgba(0, 0, 0, 0.06);
    }

    .section-shell-wide {
        width: 100%;
        max-width: 1180px;
        margin: 0 auto;
        padding: 0 18px 32px;
        box-sizing: border-box;
        display: grid;
        gap: 16px;
    }

    .flat-section {
        padding: 12px;
        background: #ffffff;
        border: 1px solid #e5e7eb;
        border-radius: 12px;
        box-shadow: 0 10px 18px rgba(0, 0, 0, 0.05);
    }

    .section-shell-wide > .flat-section {
        width: 100vw;
        margin-left: calc(-50vw + 50%);
        padding: 16px 18px;
        border-left: none;
        border-right: none;
        border-radius: 0;
    }

    @media (max-width: 1024px) {
        .section-shell-wide > .flat-section {
            width: 100vw;
            margin-left: calc(-50vw + 50%);
            padding: 14px 16px;
        }
    }

    @media (max-width: 640px) {
        .section-shell-wide > .flat-section {
            width: 100vw;
            margin-left: calc(-50vw + 50%);
            padding: 12px 14px;
        }
    }

    .why-section-top {
        padding: 16px;
        background: #f7fbf2;
        border: 1px solid #e3edd6;
        border-radius: 12px;
        box-shadow: 0 10px 18px rgba(0, 0, 0, 0.05);
    }

    .section-title {
        margin: 0 0 10px 0;
        color: #243240;
        font-size: 19px;
        font-weight: 800;
        text-align: left;
    }

    .why-grid-top {
        display: grid;
        grid-template-columns: 1fr 1.1fr;
        gap: 12px;
        align-items: center;
    }

    .why-img {
        width: 100%;
        border-radius: 12px;
        border: 1px solid #e5e7eb;
        object-fit: cover;
    }

    .why-list {
        display: grid;
        gap: 10px;
    }

    .why-item {
        display: grid;
        grid-template-columns: 52px 1fr;
        gap: 10px;
        align-items: center;
        background: #ffffff;
        border: 1px solid #e5e7eb;
        border-radius: 10px;
        padding: 12px;
    }

    .why-item img {
        width: 52px;
        height: 52px;
        object-fit: cover;
        border-radius: 10px;
    }

    .why-item h4 {
        margin: 0 0 4px 0;
        color: #1f2d3d;
        font-size: 15px;
    }

    .why-item p {
        margin: 0;
        color: #4a5563;
        font-size: 13px;
    }

    .faq-top {
        max-width: none;
        margin: 0;
    }

    .faq-box {
        border: 1px solid #e5e7eb;
        border-radius: 12px;
        background: #ffffff;
        box-shadow: 0 10px 18px rgba(0, 0, 0, 0.05);
        overflow: hidden;
    }

    .faq-header {
        background: #7ab600;
        color: #ffffff;
        font-weight: 800;
        padding: 12px 14px;
    }

    .faq-item {
        padding: 12px 14px;
        border-top: 1px solid #eef1f5;
        display: grid;
        gap: 6px;
    }

    .faq-item strong {
        color: #243240;
    }

    .faq-section {
        max-width: none;
        margin: 0;
        padding: 0;
    }

    .section-shell {
        width: 100%;
        box-sizing: border-box;
    }

    .accordion {
        border: 1px solid #e5e7eb;
        border-radius: 12px;
        background: #ffffff;
        overflow: hidden;
        box-shadow: 0 10px 18px rgba(0, 0, 0, 0.05);
    }

    .accordion-item + .accordion-item {
        border-top: 1px solid #eef1f5;
    }

    .accordion-header {
        width: 100%;
        text-align: left;
        background: transparent;
        border: none;
        padding: 12px 14px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 14px;
        color: #243240;
        cursor: pointer;
    }

    .accordion-body {
        padding: 0 14px 12px 14px;
        color: #4a5563;
        font-size: 13px;
    }

    .caret {
        font-size: 16px;
        color: #7ab600;
        transition: transform 0.15s ease;
    }

    .caret.open {
        transform: rotate(180deg);
    }

    .sidebar {
        display: flex;
        flex-direction: column;
        gap: 14px;
    }

    @media (max-width: 1024px) {
        .hero-overlay {
            grid-template-columns: 1fr;
            padding: 22px 18px;
            text-align: center;
        }

        .hero-cards {
            justify-content: center;
        }

        .content-shell {
            grid-template-columns: 1fr;
            margin-top: 0;
        }
    }

    @media (max-width: 720px) {
        .hero-bg {
            height: 280px;
        }

        .content-shell {
            padding: 0 12px 36px;
        }
    }
`;

const reasons = [
    {
        title: "Instant Access to Credit",
        description: "Enjoy instant purchasing power whether you need to pay for a large purchase or manage everyday expenses.",
    },
    {
        title: "Reward Programs",
        description: "Earn points, cashback, or miles on every purchase. Redeem them for exciting rewards, from shopping discounts to exclusive travel perks.",
    },
    {
        title: "Global Acceptance",
        description: "Use your BYND Finserve credit card worldwide, at millions of locations online and offline, offering you unmatched convenience and flexibility.",
    },
    {
        title: "Zero Annual Fee Options",
        description: "Choose cards with low or no annual fees, ensuring you get great value for your spending.",
    },
    {
        title: "Enhanced Security Features",
        description: "Advanced fraud protection, secure online transactions, and contactless payments let you use your credit card with confidence.",
    },
];

const cardTypes = [
    {
        title: "Cashback Card",
        description: "Earn cashback for everyday purchases with higher rewards on select categories like groceries, dining, and utilities.",
        icon: cashbackIcon,
    },
    {
        title: "Travel Card",
        description: "Accumulate travel miles on every spend and redeem them for flights, hotel stays, and upgrades with partner airlines and hotels.",
        icon: flightIcon,
    },
    {
        title: "Premium Card",
        description: "Enjoy exclusive discounts, complimentary lounge access, concierge services, and curated premium experiences.",
        icon: vipIcon,
    },
    {
        title: "Business Credit Card",
        description: "Manage corporate expenses efficiently with higher credit limits, expense tracking tools, and tailored rewards for businesses.",
        icon: professionalIcon,
    },
];

const featureCards = [
    { title: "Cashback Rewards", description: "Earn on all purchases with boosted rewards on dining, groceries, and fuel.", icon: cashbackIcon },
    { title: "Travel Miles", description: "Collect miles on every spend and redeem them for flights, stays, and upgrades.", icon: flightIcon },
    { title: "Exclusive Discounts", description: "Access seasonal offers at select retailers, dining outlets, and online stores.", icon: vipIcon },
    { title: "Flexible Payments", description: "Pay in full or convert spends to EMIs to manage cash flow without stress.", icon: professionalIcon },
   
    { title: "24/7 Support", description: "Get help any time with dedicated customer service for queries and card support.", icon: mutualCover },
];

const howSteps = [
    "Choose Your Card: Browse BYND Finserve credit cards and select the one that suits your needs.",
    "Fill in the Application: Complete our easy online form with personal details and financial background.",
    "Submit Documents: Upload necessary ID, address proof, and income statements for verification.",
    "Approval and Activation: Once approved, your card will be sent to you—activate it and start enjoying benefits.",
    "Start Earning Rewards: Begin using your card for purchases and earn rewards from day one.",
];

const benefitItems = [
    { title: "Build Credit History", text: "Responsible usage helps build a positive credit score for future loans.", icon: cashbackIcon },
    { title: "Emergency Spending Power", text: "Access immediate purchasing power for unexpected expenses.", icon: cardStack },
    { title: "Cashless Convenience", text: "Shop online, dine out, or travel globally without cash.", icon: mutualBanner },
    { title: "Discounts", text: "Enjoy seasonal sales and member-only promotions on card spends.", icon: hotSaleIcon },
];

const whyLoveItems = [
    {
        title: "Everyday flexibility",
        desc: "Use one card for bills, shopping, and travel with global acceptance.",
        icon: mutualCover,
    },
    {
        title: "Rewards that add up",
        desc: "Earn cashback, miles, or points on every spend and redeem them easily.",
        icon: cashbackIcon,
    },
    {
        title: "Protection built-in",
        desc: "Zero-liability protection, fraud monitoring, and secure online payments.",
        icon: professionalIcon,
    },
];

const faqsTop = [
    {
        q: "Do I need a salary slip?",
        a: "Income proof helps determine eligibility and your starting credit limit.",
    },
    {
        q: "How long does approval take?",
        a: "Most applications get a decision within 24–48 hours after verification.",
    },
];

const faqs = [
    {
        q: "Can I convert purchases to EMI?",
        a: "Yes, eligible transactions can be converted to EMIs via your dashboard or support.",
    },
    {
        q: "What fees should I expect?",
        a: "Annual or joining fee (if applicable) and finance charges on revolved balances; pay on time to avoid interest.",
    },
    {
        q: "Is there a contactless limit?",
        a: "Yes, tap payments follow network-specific per-transaction limits for security.",
    },
];
export default function CreditCardPage() {
    const [openIndex, setOpenIndex] = useState(null);
    const toggleIndex = (idx) => setOpenIndex(openIndex === idx ? null : idx);

    return (
        <div className="credit-page">
            <style>{styles}</style>

            <section className="hero-wrap">
                <img className="hero-bg" src={mutualCover} alt="Credit card background" />
                <div className="hero-overlay">
                    <div className="hero-copy">
                        <h1>We believe in giving you more than just a credit card</h1>
                        <p>
                            Empower your spending with cashback, travel rewards, and premium privileges built around your lifestyle. Enjoy secure,
                            contactless payments and flexible repayment options that move with you.
                        </p>
                        <InvestForm
                            buttonClassName="hero-cta"
                            buttonLabel={(
                                <>
                                    <span className="cta-icon">➜</span>
                                    Apply Now
                                </>
                            )}
                        />
                    </div>
                    {/* <div className="hero-cards">
                        <img src={cardStack} alt="Credit cards" />
                    </div> */}
                </div>
            </section>

            <div className="content-shell">
                <div className="content-main">
                    <article className="card-block">
                        <span className="eyebrow">Credit Cards</span>
                        <h1>Empower Your Spending with Flexible, Rewarding Options</h1>
                        <p className="lead">
                            At BYND Finserve, we believe in giving you more than just a credit card—we provide a powerful tool to manage your spending,
                            earn rewards, and enjoy exclusive benefits tailored to your needs.
                        </p>
                        <InvestForm buttonLabel="Apply Now" buttonClassName="apply-pill" />
                    </article>

                    <article className="card-block">
                        <h2>Why Choose Credit Cards?</h2>
                        <div className="section-grid">
                            <ol className="ordered-list">
                                {reasons.map((item) => (
                                    <li key={item.title}>
                                        <strong>{item.title}:</strong> {item.description}
                                    </li>
                                ))}
                            </ol>
                            <img className="list-image" src={mutualBanner} alt="Paying with credit card" />
                        </div>
                    </article>

                    <article className="card-block">
                        <h2>Types of Credit Cards We Offer</h2>
                        <div className="card-type-grid">
                            {cardTypes.map((card) => (
                                <div key={card.title} className="card-type">
                                    <img src={card.icon} alt={card.title} />
                                    <div>
                                        <h3>{card.title}</h3>
                                        <p>{card.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <InvestForm buttonLabel="Apply Now" buttonClassName="apply-pill" />
                    </article>

                    

                   
                </div>
                <aside className="sidebar">
                    <div className="card-block">
                        <BookConsultancy />
                    </div>
                </aside>
            </div>
            <div className="section-shell-wide">
                <article className="flat-section">
                    <h2>Features & Benefits</h2>
                    <div className="features-grid">
                        {featureCards.map((feature) => (
                            <div key={feature.title} className="feature-card">
                                <img className="feature-icon" src={feature.icon} alt={feature.title} />
                                <h3>{feature.title}</h3>
                                <p>{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </article>

                <article className="flat-section">
                    <h2>How to Apply for a Credit Card</h2>
                    <div className="steps-container">
                        {howSteps.map((step, index) => (
                            <div key={step} className="step-card">
                                <div className="step-number">{index + 1}</div>
                                <div className="step-content">
                                    <p>{step}</p>
                                </div>
                                {index < howSteps.length - 1 && <div className="step-connector"></div>}
                            </div>
                        ))}
                    </div>
                </article>

                <article className="cta-band flat-section">
                    <h2>Is a Credit Card Right for You?</h2>
                    <p className="lead">
                        Credit cards are flexible tools that help build credit history, manage cash flow, and earn rewards. Used responsibly, they add
                        convenience and security to your payments.
                    </p>
                </article>

                <section className="why-section-top">
                    <h2 className="section-title">Why do customers love us?</h2>
                    <div className="why-grid-top">
                        <img className="why-img" src={whyImage} alt="Why BYND" />
                        <div className="why-list">
                            {whyLoveItems.map((item) => (
                                <div key={item.title} className="why-item">
                                    <img src={item.icon} alt={item.title} />
                                    <div>
                                        <h4>{item.title}</h4>
                                        <p>{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="faq-top flat-section">
                    <div className="faq-box">
                        <div className="faq-header">Frequently Asked Questions</div>
                        {faqsTop.map((item) => (
                            <div key={item.q} className="faq-item">
                                <strong>{item.q}</strong>
                                <div>{item.a}</div>
                            </div>
                        ))}
                    </div>
                </section>

           
                <article className="flat-section">
                    <h2>Benefits of Using a Credit Card</h2>
                    <div className="benefits-row">
                        {benefitItems.map((item) => (
                            <div key={item.title} className="benefit-item">
                                <img className="feature-icon" src={item.icon} alt={item.title} />
                                <strong>{item.title}</strong>
                                <p>{item.text}</p>
                            </div>
                        ))}
                    </div>
                </article>

                <article className="cta-band flat-section">
                    <h2>Ready to Apply for a Credit Card?</h2>
                    <p className="lead">
                        Whether you want cashback, travel rewards, or premium benefits, BYND Finserve has a card for you. Apply now and take your next
                        step toward smarter spending.
                    </p>
                    <InvestForm buttonLabel="Apply Now" buttonClassName="apply-pill" />
                </article>
            </div>
        </div>
    );
}
