import { useState } from "react";
import InvestInCompany from "../assets/investments/main/Invest-In-Company-150x150.webp";
import InvestInMutual from "../assets/investments/main/Invest-In-Mutual-Fund-150x150.webp";
import InvestInPrivate from "../assets/investments/main/Invest-In-Private-Credit-150x150.webp";
import InvestInEquity from "../assets/investments/main/Invest-In-Company-150x150.webp";
import heroImg from "../assets/investments/main/Investment-Plans-home.webp";
import whyImg from "../assets/investments/main/why-849x1024-1-1-768x926.webp";
import affordableIcon from "../assets/investments/main/affordable-300x300.webp";
import securityIcon from "../assets/investments/main/Security-and-Trust-300x300.webp";
import comprehensiveIcon from "../assets/investments/main/Personalized-Solutions-300x300.webp";
import trackIcon from "../assets/investments/main/Proven-Track-Record-300x300.webp";
import expertIcon from "../assets/investments/main/Expert-Guidance-274x300.webp";
import customerStat from "../assets/investments/main/Customers-Served-300x300.webp";
import projectsStat from "../assets/investments/main/Project-Delivered-300x300.webp";
import ratingStat from "../assets/investments/main/Google-Rating-300x300.webp";

const styles = `
	.page {
		font-family: 'Poppins', 'Segoe UI', system-ui, sans-serif;
		background: #ffffff;
		color: #1f2933;
	}

	.hero {
		position: relative;
		width: 100%;
		margin: 0 0 0px;
		padding: 0 16px;
		box-sizing: border-box;
	}

	.hero img {
		width: 100%;
		max-width: 100%;
		height: auto;
		display: block;
		margin: 0 auto;
		border-radius: 12px;
		box-shadow: 0 12px 24px rgba(0, 0, 0, 0.08);
		object-fit: cover;
		object-position: center;
	}

	@media (max-width: 768px) {
		.hero {
			margin: 0 auto 16px;
			padding: 0 12px;
		}

		.hero img {
			border-radius: 10px;
		}
	}

	@media (max-width: 480px) {
		.hero {
			margin: 0 auto 12px;
			padding: 0 10px;
		}

		.hero img {
			border-radius: 8px;
		}
	}

	.section {
		padding: 32px 16px 40px;
		max-width: 1200px;
		margin: 0 auto;
	}

	.section h2 {
		text-align: center;
		margin: 0 0 12px 0;
		font-size: 22px;
		font-weight: 800;
		color: #1f2933;
	}

	.section p.lead {
		text-align: center;
		margin: 0 0 24px 0;
		font-size: 12px;
		color: #3b4252;
		line-height: 1.5;
	}

	.cards {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
		gap: 12px;
	}

	.card {
		background: #ffffff;
		border: 1px solid #e5e7eb;
		border-radius: 10px;
		box-shadow: 0 10px 20px rgba(0, 0, 0, 0.06);
		padding: 12px;
		display: flex;
		flex-direction: column;
		gap: 8px;
		text-align: center;
	}

	.card img {
		width: 68px;
		height: 68px;
		object-fit: contain;
		margin: 0 auto;
	}

	.card h3 {
		margin: 0;
		font-size: 14px;
		color: #1f2933;
		font-weight: 800;
	}

	.card p {
		margin: 0;
		font-size: 12px;
		line-height: 1.5;
		color: #4b5563;
	}

	.why-section-top {
		padding: 32px 16px;
		background: #f3f8e7;
	}

	.why-grid-top {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 16px;
		max-width: 1100px;
		margin: 0 auto;
		align-items: center;
	}

	.why-img {
		width: 100%;
		max-width: 480px;
		margin: 0 auto;
		display: block;
	}

	.why-list {
		display: grid;
		grid-template-columns: 1fr;
		gap: 10px;
	}

	.why-item {
		display: grid;
		grid-template-columns: 44px 1fr;
		gap: 10px;
		align-items: center;
		background: #ffffff;
		border: 1px solid #dfe7c3;
		border-radius: 10px;
		padding: 10px 12px;
		box-shadow: 0 10px 20px rgba(0, 0, 0, 0.06);
	}

	.why-item img {
		width: 44px;
		height: 44px;
		object-fit: contain;
	}

	.why-item h4 {
		margin: 0 0 4px 0;
		font-size: 13px;
		font-weight: 800;
		color: #1f2933;
	}

	.why-item p {
		margin: 0;
		font-size: 11.5px;
		line-height: 1.5;
		color: #4b5563;
	}

	.faq-top {
		padding: 32px 16px 46px;
		background: linear-gradient(180deg, #e9f7c8 0%, #f7fbe6 100%);
	}

	.faq-box {
		max-width: 800px;
		margin: 0 auto;
		background: #ffffff;
		border: 1px solid #dfe7c3;
		border-radius: 10px;
		box-shadow: 0 10px 20px rgba(0, 0, 0, 0.06);
		overflow: hidden;
	}

	.faq-header {
		padding: 14px 16px;
		background: #f3f8e7;
		border-bottom: 1px solid #dfe7c3;
		font-size: 14px;
		font-weight: 800;
		text-align: center;
		color: #1f2933;
	}

	.faq-item {
		padding: 12px 14px;
		border-bottom: 1px solid #eef2d9;
		font-size: 12px;
		color: #3b4252;
		line-height: 1.5;
	}

	.faq-item:last-child {
		border-bottom: none;
	}

	.faq-section {
		background: #b7dd7a;
		padding: 32px 14px 44px;
	}

	.section-shell {
		max-width: 1200px;
		margin: 0 auto;
	}

	.section-title {
		text-align: center;
		margin: 0 0 12px 0;
		font-size: 20px;
		font-weight: 800;
		color: #2e4820;
	}

	.section-sub {
		text-align: center;
		margin: 0 0 22px 0;
		font-size: 12px;
		line-height: 1.55;
		color: #3d4a31;
	}

	.accordion {
		background: #ffffff;
		border-radius: 10px;
		box-shadow: 0 12px 20px rgba(0, 0, 0, 0.08);
		border: 1px solid #d4e6ae;
		overflow: hidden;
	}

	.accordion-item + .accordion-item {
		border-top: 1px solid #e6efd4;
	}

	.accordion-header {
		width: 100%;
		background: #ffffff;
		border: none;
		padding: 12px 16px;
		display: grid;
		grid-template-columns: 1fr auto;
		align-items: center;
		text-align: left;
		cursor: pointer;
		font-size: 12px;
		color: #2f3c24;
		font-weight: 700;
	}

	.caret {
		transition: transform 0.2s ease;
		color: #4d6b2b;
		font-size: 16px;
	}

	.caret.open {
		transform: rotate(180deg);
	}

	.accordion-body {
		padding: 0 16px 12px 16px;
		font-size: 12px;
		line-height: 1.6;
		color: #3f4635;
	}

	.why-section {
		padding: 36px 16px 30px;
		background: #f7fbef;
	}

	.why-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(210px, 1fr));
		gap: 14px;
	}

	.why-card {
		background: #ffffff;
		border: 1px solid #e2e8d5;
		border-radius: 10px;
		box-shadow: 0 10px 18px rgba(0, 0, 0, 0.06);
		padding: 14px 12px;
		display: grid;
		grid-template-columns: 62px 1fr;
		gap: 10px;
		align-items: center;
	}

	.why-card img {
		width: 62px;
		height: 62px;
		object-fit: contain;
	}

	.why-card h3 {
		margin: 0 0 6px 0;
		font-size: 14px;
		font-weight: 800;
		color: #263424;
	}

	.why-card p {
		margin: 0;
		font-size: 12px;
		line-height: 1.55;
		color: #45513c;
	}

	.proud-section {
		padding: 38px 16px 42px;
		background: #f1f6e5;
	}

	.proud-grid {
		display: grid;
		grid-template-columns: 2fr 1fr;
		gap: 18px;
		align-items: start;
	}

	.proud-card {
		background: #ffffff;
		border: 1px solid #e0e7d0;
		border-radius: 12px;
		box-shadow: 0 10px 18px rgba(0, 0, 0, 0.06);
		padding: 16px;
	}

	.proud-card h3 {
		margin: 0 0 8px 0;
		font-size: 16px;
		font-weight: 800;
		color: #243523;
	}

	.proud-card p {
		margin: 0 0 14px 0;
		font-size: 12px;
		line-height: 1.6;
		color: #414b38;
	}

	.stats-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
		gap: 10px;
		margin: 10px 0 14px;
	}

	.stat-card {
		display: grid;
		grid-template-columns: 54px 1fr;
		gap: 10px;
		align-items: center;
		border: 1px solid #e6eed8;
		border-radius: 10px;
		padding: 10px;
		background: #fdfef9;
	}

	.stat-card img {
		width: 54px;
		height: 54px;
		object-fit: contain;
	}

	.stat-card h4 {
		margin: 0;
		font-size: 14px;
		font-weight: 800;
		color: #263424;
	}

	.stat-card span {
		display: block;
		font-size: 11px;
		color: #4b5445;
		margin-top: 2px;
	}

	.contact-btn {
		display: inline-block;
		margin-top: 4px;
		padding: 10px 18px;
		background: linear-gradient(90deg, #ffb703, #f08c00);
		color: #1f2100;
		font-weight: 800;
		border-radius: 8px;
		text-decoration: none;
		border: none;
		cursor: pointer;
		box-shadow: 0 8px 14px rgba(0, 0, 0, 0.12);
	}

	.quote-card {
		background: #ffffff;
		border: 1px solid #e0e7d0;
		border-radius: 12px;
		box-shadow: 0 10px 18px rgba(0, 0, 0, 0.06);
		padding: 16px 14px;
	}

	.quote-title {
		margin: 0 0 2px 0;
		font-size: 15px;
		font-weight: 800;
		color: #233520;
	}

	.quote-sub {
		margin: 0 0 12px 0;
		font-size: 11px;
		color: #4c5746;
	}

	.form-field {
		width: 100%;
		margin-bottom: 10px;
		padding: 9px 10px;
		border: 1px solid #d9e4c7;
		border-radius: 8px;
		font-size: 12px;
		outline: none;
	}

	.form-field:focus {
		border-color: #9bc159;
		box-shadow: 0 0 0 3px rgba(155, 193, 89, 0.2);
	}

	.submit-btn {
		width: 100%;
		padding: 10px 12px;
		background: #9bc159;
		color: #1f2a0f;
		font-weight: 800;
		border: none;
		border-radius: 8px;
		cursor: pointer;
		box-shadow: 0 8px 14px rgba(0, 0, 0, 0.1);
	}

	.brand-section {
		padding: 30px 16px 36px;
		background: #ffffff;
		text-align: center;
	}

	.brand-title {
		margin: 0 0 14px 0;
		font-size: 16px;
		font-weight: 800;
		color: #233520;
	}

	.brand-row {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
		gap: 10px;
		justify-items: center;
	}

	.brand-pill {
		min-height: 48px;
		padding: 10px 12px;
		border: 1px solid #e0e7d0;
		border-radius: 10px;
		background: #f9fbf3;
		font-size: 12px;
		font-weight: 700;
		color: #3b4536;
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	@media (max-width: 960px) {
		.proud-grid { grid-template-columns: 1fr; }
	}

	@media (max-width: 768px) {
		.hero { height: 260px; }
		.cards { grid-template-columns: repeat(auto-fit, minmax(160px, 1fr)); }
		.why-grid-top { grid-template-columns: 1fr; }
		.why-item { grid-template-columns: 40px 1fr; }
	}

	@media (max-width: 540px) {
		.why-card { grid-template-columns: 50px 1fr; }
		.stat-card { grid-template-columns: 46px 1fr; }
	}

	@media (max-width: 520px) {
		.section { padding: 28px 12px 32px; }
		.cards { grid-template-columns: 1fr; }
		hero { height: 220px; }
		.why-item h4 { font-size: 12.5px; }
		.why-item p { font-size: 11px; }
	}
`;

const investmentCards = [
	{
		title: "Invest in Company",
		desc: "Benefit from a company's annual turnover as an investor. Earn up to 10% per annum with secured, financed opportunities.",
		icon: InvestInCompany,
	},
	{
		title: "Invest in Mutual Fund",
		desc: "Mutual funds pool money from investors to earn returns through diversified portfolios of stocks, bonds, and other assets.",
		icon: InvestInMutual,
	},
	{
		title: "Invest in Private Credit",
		desc: "Investing in private credit means lending directly to private companies, often outside traditional financing.",
		icon: InvestInPrivate,
	},
	{
		title: "Invest in Equity",
		desc: "When we buy equities, we start looking at returns in months, but real growth is long-term.",
		icon: InvestInEquity,
	},
];

const whyLoveItems = [
	{
		title: "Affordable Professional Services",
		desc: "Proven flagship financial solutions with senior experts.",
		icon: affordableIcon,
	},
	{
		title: "Comprehensive Approach",
		desc: "Holistic view of your financial situation.",
		icon: comprehensiveIcon,
	},
	{
		title: "Proven Track Record",
		desc: "We have helped over 20,000 investors you can trust. Our success speaks for itself.",
		icon: trackIcon,
	},
	{
		title: "Expert Guidance",
		desc: "Insightful financial guidance so you can make informed decisions.",
		icon: expertIcon,
	},
];

const faqsTop = [
	{
		q: "How do I know which investment plan is right for me?",
		a: "The right investment plan depends on various factors, including your financial goals, time horizon, and risk tolerance. Our advisors work with you to assess your needs and develop a customized plan that aligns with your objectives.",
	},
	{
		q: "What types of investments are included in your plans?",
		a: "We offer a variety of options, including equities, mutual funds, private credit, and company-backed opportunities to suit different risk profiles.",
	},
	{
		q: "What kind of support will I receive after setting up my investment plan?",
		a: "You receive ongoing support, performance tracking, and periodic reviews to keep your plan aligned with your goals.",
	},
	{
		q: "What fees are associated with your investment plans?",
		a: "Fees are transparent and depend on the plan and services selected. We'll walk you through any costs before you invest.",
	},
];

const whyChooseItems = [
	{
		title: "Security and Trust",
		desc: "Your financial security is our top priority. Our platform employs state-of-the-art protection for your data and transactions.",
		icon: securityIcon,
	},
	{
		title: "Comprehensive Approach",
		desc: "We take a holistic view of your financial life, customizing plans that fit your needs and goals.",
		icon: comprehensiveIcon,
	},
	{
		title: "Proven Track Record",
		desc: "Backed by thousands of successful transactions and happy investors, our track record speaks for itself.",
		icon: trackIcon,
	},
	{
		title: "Expert Guidance",
		desc: "Seasoned professionals provide insights and recommendations so you can invest with confidence.",
		icon: expertIcon,
	},
];

const faqs = [
	{
		q: "How do I know which investment plan is right for me?",
		a: "Our advisors evaluate your goals, financial health, risk tolerance, and time horizon to tailor an investment plan that fits you.",
	},
	{
		q: "What types of investments are included in your plans?",
		a: "We design diversified portfolios across equities, mutual funds, private credit, and company-backed opportunities based on your profile.",
	},
	{
		q: "What kind of support will I receive after setting up my investment plan?",
		a: "You receive ongoing performance tracking, periodic reviews, and direct access to our team for adjustments as your goals evolve.",
	},
	{
		q: "What fees are associated with your investment plans?",
		a: "Fees are transparent and shared upfront; they vary by plan complexity and services included.",
	},
];

const stats = [
	{ title: "20,000+", subtitle: "Customers Served", icon: customerStat },
	{ title: "51,980+", subtitle: "Project Delivered", icon: projectsStat },
	{ title: "4.8/5", subtitle: "Google Rating", icon: ratingStat },
];

const brands = [
	"AMPLO",
	"Andela",
	"Aryeo",
	"AXION RAY",
	"FUNDBOX",
	"Ironclad",
	"GORDIAN",
	"Parsley Health",
	"kyte",
	"KIRIA Housing",
	"wist home",
	"TravelPerk",
];

export default function InvestmentPlanPage() {
	const [openIndex, setOpenIndex] = useState(0);

	const toggleIndex = (idx) => {
		setOpenIndex((current) => (current === idx ? -1 : idx));
	};

	return (
		<div className="page">
			<style>{styles}</style>

			<div className="hero">
				<img src={heroImg} alt="Investment Plans" />
			</div>

			<section className="section">
				<h2>Our Investment Plans</h2>
				<p className="lead">
					At www.byndfinserve.com, we understand that every investor is different. Our investment plans are customizable, allowing us to align strategies with your individual objectives, risk tolerance, and time horizons. Our experienced team works closely with you to develop a plan that suits your financial goals.
				</p>
				<div className="cards">
					{investmentCards.map((card) => (
						<div key={card.title} className="card">
							<img src={card.icon} alt={card.title} />
							<h3>{card.title}</h3>
							<p>{card.desc}</p>
						</div>
					))}
				</div>
			</section>

			<section className="why-section-top">
				<h2 className="section-title">Why do customers love us?</h2>
				<div className="why-grid-top">
					<img className="why-img" src={whyImg} alt="Why BYND" />
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

			<section className="faq-top">
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

			<section className="faq-section">
				<div className="section-shell">
					<h2 className="section-title">Frequently Asked Questions</h2>
					<div className="accordion">
						{faqs.map((item, idx) => (
							<div className="accordion-item" key={item.q}>
								<button className="accordion-header" onClick={() => toggleIndex(idx)}>
									<span>{item.q}</span>
									<span className={`caret ${openIndex === idx ? "open" : ""}`}>
										{openIndex === idx ? "⌃" : "⌄"}
									</span>
								</button>
								{openIndex === idx && <div className="accordion-body">{item.a}</div>}
							</div>
						))}
					</div>
				</div>
			</section>

			<section className="why-section">
				<div className="section-shell">
					<h2 className="section-title">Why Choose us?</h2>
					<p className="section-sub">
						Our team specializes in finding custom solutions that match your personal needs and lifestyle. We work closely with you to identify prospects that align with your vision of luxury.
					</p>
					<div className="why-grid">
						{whyChooseItems.map((item) => (
							<div className="why-card" key={item.title}>
								<img src={item.icon} alt={item.title} />
								<div>
									<h3>{item.title}</h3>
									<p>{item.desc}</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>

			<section className="proud-section">
				<div className="section-shell proud-grid">
					<div className="proud-card">
						<h3>We are Proud of Our Works</h3>
						<p>
							Ready to explore the benefits of real estate investing? Contact byndfinserve.com today to start building your investment portfolio with confidence.
						</p>
						<div className="stats-grid">
							{stats.map((stat) => (
								<div className="stat-card" key={stat.title}>
									<img src={stat.icon} alt={stat.subtitle} />
									<div>
										<h4>{stat.title}</h4>
										<span>{stat.subtitle}</span>
									</div>
								</div>
							))}
						</div>
						<button className="contact-btn" type="button">Contact Us</button>
					</div>

					<div className="quote-card">
						<h4 className="quote-title">Get Instant Quote Free</h4>
						<p className="quote-sub">100+ Happy Reviews</p>
						<input className="form-field" placeholder="Your Name" />
						<input className="form-field" placeholder="Your Email" />
						<input className="form-field" placeholder="Your Phone No." />
						<select className="form-field" defaultValue="">
							<option value="" disabled>
								Choose your query
							</option>
							<option>Investment Plan</option>
							<option>Private Credit</option>
							<option>Mutual Funds</option>
							<option>Equity</option>
						</select>
						<button className="submit-btn" type="button">Get A Quote</button>
					</div>
				</div>
			</section>

			<section className="brand-section">
				<div className="section-shell">
					<h3 className="brand-title">Trusted by over 20000+ clients</h3>
					<div className="brand-row">
						{brands.map((brand) => (
							<div className="brand-pill" key={brand}>
								{brand}
							</div>
						))}
					</div>
				</div>
			</section>
		</div>
	);
}
