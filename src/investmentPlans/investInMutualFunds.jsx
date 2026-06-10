import BookConsultancy from "../../components/bookConsultancy";
import mutualCover from "../assets/investments/investment-plans-invest-in-mutual-funds.png";
import mutualBanner from "../assets/investments/Mutual-Fund-Investments-1-768x249.png";
import diversificationIcon from "../assets/investments/Diversification-300x300.webp";
import managementIcon from "../assets/investments/Management-300x300.webp";
import liquidityIcon from "../assets/investments/Liquidity-300x300.webp";
import costIcon from "../assets/investments/Cost-Efficiency-300x300.webp";
import accessibilityIcon from "../assets/investments/Accessibility-300x300.webp";
import personalizedIcon from "../assets/investments/Personalized-Investment-Strategies-300x300.webp";
import trackingIcon from "../assets/investments/Transparent-Performance-Tracking-300x300.webp";
import customerSupportIcon from "../assets/investments/customer-support-300x300.webp";
import commitmentIcon from "../assets/investments/Commitment-to-Your-Success-300x300.webp";
import bannerIcon from "../assets/investments/banner-2.jpg";
import InvestForm from "./investFormMutualFunds";

const styles = `
	.mutual-page {
		background: #ffffff;
		color: #1f2933;
		font-family: 'Poppins', 'Segoe UI', system-ui, sans-serif;
		// padding: 0px 0px 0px;
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
		gap: 18px;
	}

	.mutual-card {
		background: #ffffff;
		border-radius: 12px;
		padding: 14px 16px;
		box-shadow: 0 12px 24px rgba(0, 0, 0, 0.06);
		border: 1px solid #e5e7eb;
	}

	.mutual-card h1,
	.mutual-card h2,
	.mutual-card h3 {
		margin: 0 0 8px 0;
		color: #7ab600;
		font-size: 16px;
		font-weight: 700;
	}

	.mutual-card p {
		margin: 0 0 10px 0;
		color: #3c4453;
		font-size: 13px;
		line-height: 1.55;
	}

	 .mutual-cover {
          height: auto;
          max-height: 600px;
          max-width: 100%;
          object-fit: cover;
          object-position: center;
          background-color: #f8fafc;
        }

	.mutual-banner {
		width: 100%;
		border-radius: 6px;
		margin: 10px 0 12px;
		display: block;
	}

	.mutual-button {
		background: #7ab600;
		color: #ffffff;
		border: 1px solid #6ca200;
		border-radius: 6px;
		padding: 8px 14px;
		font-weight: 700;
		font-size: 12px;
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
		gap: 10px;
		font-size: 12px;
		line-height: 1.5;
	}

	.mutual-inline-icons {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
		gap: 10px;
		align-items: center;
		margin-top: 12px;
	}

	.mutual-inline-icons img {
		width: 72px;
		height: 72px;
		object-fit: cover;
		margin: 0 auto;
	}

	.mutual-list {
		list-style: none;
		padding: 0;
		margin: 0;
		display: flex;
		flex-direction: column;
		gap: 10px;
		color: #1f2937;
		font-size: 13px;
		line-height: 1.55;
	}

	.mutual-list li {
		display: grid;
		grid-template-columns: 48px 1fr;
		gap: 10px;
		align-items: center;
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
		width: 70px;
		height: 70px;
		object-fit: cover;
		margin: 0 auto;
	}

	.mutual-row-icons-item {
		display: flex;
		flex-direction: column;
		gap: 6px;
		align-items: center;
		text-align: center;
		font-size: 11px;
		color: #6b6f76;
	}

	.mutual-sidebar {
		position: sticky;
		top: 12px;
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
			padding: 16px 12px 24px;
		}

		.mutual-card {
			padding: 12px;
		}
	}
`;

const benefits = [
	{
		title: "Diversification",
		description:
			"Mutual funds pool money from multiple investors to invest in a diversified portfolio of stocks, bonds, or other securities. This diversification helps spread risk and can potentially enhance returns.",
		icon: diversificationIcon,
	},
	{
		title: "Professional Management",
		description:
			"Professional managers oversee mutual funds, ensuring they are aligned with specific objectives. This professional management ensures that your investments are guided by market expertise and strategic insight.",
		icon: managementIcon,
	},
	{
		title: "Liquidity",
		description:
			"With a range of mutual fund assets available, from equity to debt and balanced funds, mutual funds offer flexibility to buy or sell shares at the net asset value (NAV) on any trading day.",
		icon: liquidityIcon,
	},
	{
		title: "Accessibility",
		description:
			"Mutual funds offer the flexibility to buy or sell shares at the net asset value (NAV) on any trading day, providing investors with liquidity and the ability to access their investments when needed.",
		icon: accessibilityIcon,
	},
	{
		title: "Cost Efficiency",
		description:
			"Designed to maximize individual investors, mutual funds often offer lower expense ratios and administrative fees. This cost efficiency can contribute to better overall returns.",
		icon: costIcon,
	},
];

const offerings = [
	{
		title: "Equity Funds",
		description:
			"Invest in a diversified portfolio of stocks to potentially benefit from capital appreciation and growth. Suitable for investors with a higher risk tolerance and long-term investment horizon.",
	},
	{
		title: "Bond Funds",
		description:
			"Focus on fixed-income securities to provide regular income with relatively lower risk. Ideal for conservative investors looking for stability and steady returns.",
	},
	{
		title: "Balanced Funds",
		description:
			"Combine both stocks and bonds to offer a blend of growth and income. These funds are perfect for investors seeking a balanced approach with moderate risk.",
	},
	{
		title: "Sector-Specific Funds",
		description:
			"Target specific sectors such as technology, healthcare, or real estate, allowing you to invest in industries that align with your interests and market outlook.",
	},
	{
		title: "Index Funds",
		description:
			"Track specific market indices to offer broad market exposure with lower fees. Index funds are designed for investors seeking to match market performance rather than outperform it.",
	},
];

const chooseReasons = [
	{
		title: "Personalized Investment Strategies",
		icon: personalizedIcon,
		text: "We offer customized investment strategies tailored to individual goals, risk tolerance, and financial situations. Our team works closely with clients to develop plans that align with long-term objectives.",
	},
	{
		title: "Transparent Performance Tracking",
		icon: trackingIcon,
		text: "We provide detailed reports that give insight into portfolio performance and returns. Our transparent reporting ensures clients are always informed.",
	},
	{
		title: "Expert Guidance and Support",
		icon: customerSupportIcon,
		text: "Our experienced financial professionals offer ongoing support, helping clients navigate market fluctuations and make informed investment decisions.",
	},
	{
		title: "Customer-Centric Approach",
		icon: commitmentIcon,
		text: "We prioritize client satisfaction, ensuring personalized service and dedicated attention to meet financial goals. Our focus on transparency, communication, and support builds lasting relationships.",
	},
];

export default function InvestInMutualFunds() {
	return (
		<div className="mutual-page">
			<style>{styles}</style>
            <img className="mutual-cover" src={mutualCover} alt="Invest in mutual funds" />
			<div className="mutual-shell">
                
				<div className="mutual-main">
					<article className="mutual-card">
						<h1>Expert Guidance on Mutual Fund Investments</h1>
						<p>
							Welcome to BYND, your trusted partner in navigating the world of mutual fund investments. Whether you're a seasoned investor or just starting, we explore investment options, our expert team is here to help you achieve your financial goals with confidence and clarity.
						</p>
						<InvestForm buttonLabel="Invest Today" buttonClassName="mutual-button" />
						<img className="mutual-banner" src={bannerIcon} alt="Mutual fund investments banner" />
						
					</article>

					<article className="mutual-card">
						<h2>Why Invest in Mutual Funds?</h2>
						<img className="mutual-banner" src={mutualBanner} alt="Mutual fund investments banner" />
						<ol className="mutual-ordered">
							{benefits.map((item) => (
								<li key={item.title}>
									<strong>{item.title}:</strong> {item.description}
								</li>
							))}
						</ol>
						<div className="mutual-inline-icons">
							{[
								{ icon: diversificationIcon, label: "Diversification" },
								{ icon: managementIcon, label: "Professional Management" },
								{ icon: accessibilityIcon, label: "Accessibility" },
								{ icon: liquidityIcon, label: "Liquidity" },
								{ icon: costIcon, label: "Cost Efficiency" },
							].map(({ icon, label }) => (
								<div key={label} style={{ display: "flex", flexDirection: "column", gap: 6, alignItems: "center", textAlign: "center", fontSize: 11, color: "#6b6f76" }}>
									<img src={icon} alt={label} />
									<span>{label}</span>
								</div>
							))}
						</div>
					</article>

					<article className="mutual-card">
						<h2>Our Mutual Fund Offerings</h2>
						<ol className="mutual-ordered">
							{offerings.map((item) => (
								<li key={item.title}>
									<strong>{item.title}:</strong> {item.description}
								</li>
							))}
						</ol>
					</article>

					<article className="mutual-card">
						<h2>Why Choose BYND?</h2>
						<ol className="mutual-ordered">
							{chooseReasons.map((item) => (
								<li key={item.title}>
									<strong>{item.title}:</strong> {item.text}
								</li>
							))}
						</ol>
						<div className="mutual-row-icons">
							{[
								{ icon: personalizedIcon, label: "Personalized Investment Strategies" },
								{ icon: trackingIcon, label: "Transparent Performance Tracking" },
								{ icon: customerSupportIcon, label: "Expert Advisors" },
								{ icon: commitmentIcon, label: "Commitment to Your Success" },
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
		</div>
	);
}
