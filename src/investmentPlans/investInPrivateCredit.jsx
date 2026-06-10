import BookConsultancy from "../../components/bookConsultancy";
import InvestForm from "./investFormPrivateCredit";
import coverImg from "../assets/investments/privateCredit/private-credit.jpg";
import banner2 from "../assets/investments/privateCredit/download.jpg";
import bannerImg from "../assets/investments/privateCredit/ir-banner-bg-1536x399.webp";
import highYieldIcon from "../assets/investments/privateCredit/High-Yield-Potential.webp";
import diversificationIcon from "../assets/investments/privateCredit/Diversification-1.webp";
import portfolioIcon from "../assets/investments/privateCredit/portfolio.webp";
import riskManagementIcon from "../assets/investments/privateCredit/Risk-Management.webp";
import strategyIcon from "../assets/investments/privateCredit/Strategy.webp";
import opportunitiesIcon from "../assets/investments/privateCredit/Opportunities.webp";
import tailoredIcon from "../assets/investments/privateCredit/Tailored-Investment-Solutions.webp";
import volatilityIcon from "../assets/investments/privateCredit/Volatility.webp";

const styles = `
	.mutual-page {
		background: #ffffff;
		color: #1f2933;
		font-family: 'Poppins', 'Segoe UI', system-ui, sans-serif;
		padding: 0px 0px 0px;
	}

	.mutual-shell {
		width: 100%;
		max-width: none;
		margin: 0;
		display: grid;
		grid-template-columns: 1.5fr 340px;
		gap: 28px;
		align-items: start;
	}

	.mutual-main {
		display: flex;
		flex-direction: column;
		gap: 22px;
	}

	.mutual-card {
		background: #ffffff;
		border-radius: 12px;
		padding: 18px 20px;
		box-shadow: 0 12px 24px rgba(0, 0, 0, 0.06);
		border: 1px solid #e5e7eb;
	}

	.mutual-card h1,
	.mutual-card h2,
	.mutual-card h3 {
		margin: 0 0 8px 0;
		color: #7ab600;
		font-size: 20px;
		font-weight: 700;
	}

	.mutual-card p {
		margin: 0 0 10px 0;
		color: #3c4453;
		font-size: 15px;
		line-height: 1.65;
	}

	.mutual-cover,
	.mutual-banner {
		width: 100%;
		border-radius: 6px;
		margin: 0px 0 12px;
		display: block;
	}

	 .mutual-cover {
          height: auto;
          max-height: 600px;
          max-width: 100%;
          object-fit: cover;
          object-position: center;
          background-color: #f8fafc;
        }

	.mutual-button {
		background: #7ab600;
		color: #ffffff;
		border: 1px solid #6ca200;
		border-radius: 6px;
		padding: 8px 14px;
		font-weight: 700;
		font-size: 14px;
		cursor: pointer;
		box-shadow: 0 8px 16px rgba(122, 182, 0, 0.25);
		margin-bottom: 10px;
	}

	.mutual-ordered {
		margin: 0;
		padding-left: 18px;
		color: #1f2937;
		display: flex;
		flex-direction: column;
		gap: 12px;
		font-size: 14px;
		line-height: 1.6;
	}

	.mutual-inline-icons {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
		gap: 10px;
		align-items: center;
		margin-top: 12px;
	}

	.mutual-inline-icons img {
		width: 80px;
		height: 80px;
		object-fit: cover;
		margin: 0 auto;
	}

	.mutual-offerings-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
		gap: 12px;
	}

	.mutual-offering-card {
		display: grid;
		grid-template-columns: 48px 1fr;
		align-items: start;
		gap: 10px;
		padding: 12px;
		border-radius: 10px;
		border: 1px solid #e5e7eb;
		background: #f8faf5;
		min-height: 120px;
	}

	.mutual-list img {
		width: 48px;
		height: 48px;
		object-fit: cover;
	}

	.mutual-list strong {
		color: #0b0b0b;
	}

	.mutual-row-icons {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(130px, 1fr));
		gap: 10px;
		margin-top: 8px;
		align-items: start;
	}

	.mutual-row-icons img {
		width: 78px;
		height: 78px;
		object-fit: cover;
		margin: 0 auto;
	}

	.mutual-row-icons-item {
		display: flex;
		flex-direction: column;
		gap: 6px;
		align-items: center;
		text-align: center;
		font-size: 12px;
		color: #6b6f76;
	}

	.mutual-sidebar {
		position: sticky;
		top: 12px;
	}

	.how-section {
		margin: 32px auto 0;
		width: 100%;
		max-width: calc(100% - 32px);
		padding: 28px 18px 32px;
		background: linear-gradient(180deg, #dff4b4 0%, #ecf9d3 100%);
		border-radius: 12px;
		display: flex;
		flex-direction: column;
		gap: 18px;
		box-shadow: 0 10px 28px rgba(105, 153, 28, 0.16);
	}

	@media (min-width: 768px) {
		.how-section {
			max-width: min(1100px, calc(100% - 40px));
			padding: 32px 28px 36px;
		}
	}

	@media (min-width: 1024px) {
		.how-section {
			max-width: 1100px;
			padding: 28px 18px 32px;
		}
	}

	.how-header {
		text-align: center;
		display: flex;
		flex-direction: column;
		gap: 8px;
		color: #1f2933;
	}

	.how-header h2 {
		margin: 0;
		font-size: 22px;
		font-weight: 800;
		letter-spacing: 0.1px;
	}

	.how-header p {
		margin: 0;
		font-size: 13px;
		color: #2f3a48;
	}

	.how-cards {
		display: flex;
		flex-direction: column;
		gap: 12px;
	}

	.how-card {
		display: flex;
		align-items: center;
		gap: 14px;
		background: #ffffff;
		border-radius: 10px;
		padding: 14px;
		box-shadow: 0 10px 22px rgba(0, 0, 0, 0.07);
		border: 1px solid #e2e8d8;
		transition: transform 160ms ease, box-shadow 160ms ease;
		border-left: 4px solid #7ab600;
	}

	.how-card:hover {
		transform: translateY(-2px);
		box-shadow: 0 14px 32px rgba(0, 0, 0, 0.12);
	}

	.how-card.reverse {
		flex-direction: row-reverse;
		border-left: none;
		border-right: 5px solid #7ab600;
	}

	.how-card img {
		width: 100%;
		max-width: 200px;
		height: 118px;
		object-fit: cover;
		border-radius: 10px;
		background: #eef5d1;
		box-shadow: inset 0 0 0 1px rgba(122, 182, 0, 0.2);
		flex-shrink: 0;
	}

	@media (max-width: 640px) {
		.how-card img {
			width: 100%;
			height: 150px;
			max-width: none;
		}
	}

	.how-card-content h3 {
		margin: 0 0 6px 0;
		color: #7ab600;
		font-size: 16px;
		font-weight: 800;
	}

	.how-card-content p {
		margin: 0;
		color: #2f3a48;
		font-size: 12.5px;
		line-height: 1.55;
	}

	.how-cta {
		display: grid;
		grid-template-columns: 1fr;
		gap: 16px;
		align-items: stretch;
		margin-top: 10px;
	}

	@media (min-width: 768px) {
		.how-cta {
			grid-template-columns: 1fr 1fr;
		}
	}

	.how-cta-card {
		background: #f5ffe8;
		border-radius: 10px;
		padding: 18px 20px;
		box-shadow: 0 10px 22px rgba(0, 0, 0, 0.07);
		border: 1px solid #cfe7a5;
		color: #1f2933;
	}

	.how-cta-card h3 {
		margin: 0 0 10px 0;
		font-size: 16px;
		font-weight: 800;
	}

	.how-cta-card p {
		margin: 0 0 12px 0;
		font-size: 12.5px;
		line-height: 1.55;
		color: #2f3a48;
	}

	.how-button {
		display: inline-flex;
		align-items: center;
		gap: 6px;
		background: linear-gradient(90deg, #7ab600, #6ca200);
		color: #ffffff;
		border: 1px solid #649600;
		border-radius: 16px;
		padding: 9px 14px;
		font-size: 12px;
		font-weight: 800;
		cursor: pointer;
		box-shadow: 0 10px 18px rgba(122, 182, 0, 0.22);
		text-transform: uppercase;
		letter-spacing: 0.25px;
	}

	.how-button:hover {
		filter: brightness(0.97);
	}

	@media (max-width: 1024px) {
		.mutual-shell {
			grid-template-columns: 1fr;
		}

		.mutual-sidebar {
			position: relative;
			top: 0;
		}
	}

	@media (max-width: 640px) {
		.mutual-page {
			padding: 18px 14px 26px;
		}

		.mutual-card {
			padding: 14px;
		}

		.mutual-cover {
			height: 170px;
		}

		.how-section {
			margin: 20px 0 0;
			max-width: 100%;
			padding: 18px 14px 22px;
			gap: 14px;
		}

		.how-header h2 {
			font-size: 18px;
		}

		.how-header p {
			font-size: 12px;
		}

		.how-card {
			flex-direction: column;
			text-align: center;
			border-left: 4px solid #7ab600;
			border-right: none;
			gap: 12px;
			padding: 12px;
		}

		.how-card.reverse {
			flex-direction: column;
		}

		.how-card img {
			width: 100%;
			height: 140px;
			max-width: none;
		}

		.how-card-content h3 {
			font-size: 15px;
		}

		.how-card-content p {
			font-size: 12px;
		}

		.how-cta {
			gap: 12px;
		}

		.how-cta-card {
			padding: 16px 14px;
		}

		.how-cta-card h3 {
			font-size: 15px;
		}

		.how-cta-card p {
			font-size: 12px;
		}
	}
`;

const reasonsToInvest = [
  {
    title: "High-Yield Potential",
    description:
      "Private credit can offer attractive yields compared to traditional fixed-income instruments, driven by negotiated terms and bespoke deal structures.",
    icon: highYieldIcon,
  },
  {
    title: "Portfolio Diversification",
    description:
      "Direct lending exposure reduces reliance on public markets, adding an uncorrelated return stream to complement equities and bonds.",
    icon: diversificationIcon,
  },
  {
    title: "Risk Management",
    description:
      "Senior secured positions, covenants, and collateral help manage downside risk while preserving capital.",
    icon: riskManagementIcon,
  },
  {
    title: "Relationship-Driven Deals",
    description:
      "Access to curated borrowers and underwritten opportunities that are often unavailable in public markets.",
    icon: opportunitiesIcon,
  },
  {
    title: "Stable Cash Flows",
    description:
      "Predictable interest payments can support income needs and smooth portfolio volatility over time.",
    icon: portfolioIcon,
  },
];

const howItWorks = [
  {
    title: "Direct Lending",
    description:
      "Capital is deployed directly to businesses with negotiated terms on rates, security, and covenants to balance yield and protection.",
  },
  {
    title: "Deal Structuring",
    description:
      "Every opportunity is underwritten with cash flow analysis, collateral review, and covenant packages to align incentives and mitigate risk.",
  },
  {
    title: "Active Monitoring",
    description:
      "Ongoing oversight tracks performance, compliance, and triggers to protect capital and respond early to stress signals.",
  },
  {
    title: "Income & Upside",
    description:
      "Investors earn contractual interest; select deals may include fees or equity kickers to enhance total return potential.",
  },
];

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

const investSteps = [
	{
		title: "1. Sign Up:",
		text: "Register on our platform and complete your investor profile.",
		image: strategyIcon,
		reverse: false,
	},
	{
		title: "2. Review Opportunities:",
		text: "Access a curated selection of private credit investments, ranging from direct loans to real estate-backed debt.",
		image: opportunitiesIcon,
		reverse: true,
	},
	{
		title: "3. Invest with Confidence:",
		text: "Choose the investment that aligns with your risk and return expectations, and commit your capital.",
		image: diversificationIcon,
		reverse: false,
	},
	{
		title: "4. Track Your Investment:",
		text: "Receive regular updates and performance reports on your private credit investments, keeping you informed and confident in your financial growth.",
		image: riskManagementIcon,
		reverse: true,
	},
];

export default function InvestInPrivateCredit() {
	return (
		<div className="mutual-page">
			<style>{styles}</style>
	            <img className="mutual-cover" src={coverImg} alt="Private credit investing" />
			<div className="mutual-shell">
                
				<div className="mutual-main">
					<article className="mutual-card">
						<h1>Unlock Lucrative Opportunities with Private Credit</h1>
						<p>
							At BYND Finserve, we open access to private credit—direct lending that targets compelling risk-adjusted returns through negotiated, secured transactions. Our team underwrites every deal with discipline so you can pursue higher income with confidence.
						</p>
						<InvestForm buttonLabel="Invest Today" buttonClassName="mutual-button" />
						<img className="mutual-banner" src={banner2} alt="Private credit banner" />
						
					</article>

					<article className="mutual-card">
						<h2>Why Invest in Private Credit?</h2>
						<img className="mutual-banner" src={bannerImg} alt="Private credit banner" />
						<ol className="mutual-ordered">
							{reasonsToInvest.map((item) => (
								<li key={item.title}>
									<strong>{item.title}:</strong> {item.description}
								</li>
							))}
						</ol>
						<div className="mutual-inline-icons">
							{[
								{ icon: highYieldIcon, label: "High-Yield Potential" },
								{ icon: diversificationIcon, label: "Diversification" },
								{ icon: portfolioIcon, label: "Stable Cash Flows" },
								{ icon: riskManagementIcon, label: "Risk Management" },
								{ icon: opportunitiesIcon, label: "Curated Deals" },
							].map(({ icon, label }) => (
								<div key={label} style={{ display: "flex", flexDirection: "column", gap: 6, alignItems: "center", textAlign: "center", fontSize: 11, color: "#6b6f76" }}>
									<img src={icon} alt={label} />
									<span>{label}</span>
								</div>
							))}
						</div>
					</article>

					<article className="mutual-card">
						<h2>How Private Credit Works</h2>
						<ol className="mutual-ordered">
							{howItWorks.map((item) => (
								<li key={item.title}>
									<strong>{item.title}:</strong> {item.description}
								</li>
							))}
						</ol>
					</article>

					<article className="mutual-card">
						<h2>Why Choose BYND Finserve?</h2>
						<ol className="mutual-ordered">
							{chooseReasons.map((item) => (
								<li key={item.title}>
									<strong>{item.title}:</strong> {item.text}
								</li>
							))}
						</ol>
						<div className="mutual-row-icons">
							{[
								{ icon: tailoredIcon, label: "Tailored Solutions" },
								{ icon: strategyIcon, label: "Disciplined Strategy" },
								{ icon: riskManagementIcon, label: "Risk Controls" },
								{ icon: opportunitiesIcon, label: "Curated Opportunities" },
							].map(({ icon, label }) => (
								<div key={label} className="mutual-row-icons-item">
									<img src={icon} alt={label} />
									<span>{label}</span>
								</div>
							))}
						</div>
					</article>
				</div>

				<div className="mutual-sidebar">
					<BookConsultancy />
				</div>
			</div>

			<section className="how-section">
				<div className="how-header">
					<h2>How to Invest in Private Credit with Bynd Finserve?</h2>
					<p>
						Investing in private credit with <strong>Bynd Finserve</strong> is simple:
					</p>
				</div>

				<div className="how-cards">
					{investSteps.map((step) => (
						<div key={step.title} className={`how-card${step.reverse ? " reverse" : ""}`}>
							<img src={step.image} alt={step.title} />
							<div className="how-card-content">
								<h3>{step.title}</h3>
								<p>{step.text}</p>
							</div>
						</div>
					))}
				</div>

				<div className="how-cta">
					<div className="how-cta-card">
						<h3>Start Investing Today</h3>
						<p>
							If you're ready to explore the lucrative world of private credit, <strong>Bynd Finserve</strong> is
							here to guide you every step of the way. Contact us for more information, or start investing directly
							through our platform.
						</p>
                        <InvestForm buttonLabel="Invest Today"   className="how-button"  />
					</div>
					<div className="how-cta-card">
						<h3>Is Private Credit Right for You?</h3>
						<p>
							Private credit is suitable for investors looking for higher returns and greater portfolio diversification,
							but it's important to understand the risks involved. This asset class typically involves longer investment
							horizons and limited liquidity, meaning your funds will be committed for extended periods. However, with
							proper strategy and management, it can be an essential tool for building long-term wealth.
						</p>
					</div>
				</div>
			</section>
		</div>
	);
}
