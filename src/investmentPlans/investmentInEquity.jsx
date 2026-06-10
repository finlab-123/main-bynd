import BookConsultancy from "../../components/bookConsultancy";
import InvestFormEquity from "./investFormEquity";
import coverImg from "../assets/investments/Equity-Funding-768x300.webp";
import banner2 from "../assets/investments/banner-2.jpg";
import bannerImg from "../assets/investments/Mutual-Fund-Investments-1-768x249.png";
import growthIcon from "../assets/investments/Commitment-to-Your-Success-300x300.webp";
import diversificationIcon from "../assets/investments/Diversification-300x300.webp";
import liquidityIcon from "../assets/investments/Liquidity-300x300.webp";
import managementIcon from "../assets/investments/Management-300x300.webp";
import personalizedIcon from "../assets/investments/Personalized-Investment-Strategies-300x300.webp";
import transparencyIcon from "../assets/investments/Transparent-Performance-Tracking-300x300.webp";
import accessibilityIcon from "../assets/investments/Accessibility-300x300.webp";
import costIcon from "../assets/investments/Cost-Efficiency-300x300.webp";
import mutualCover from "../assets/investments/equity-5351039_1280.jpg";
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

    .mutual-cover{
        width: 100%;
        height: 800px;  
       
        object-fit: cover;
        border-radius: 12px;
        background: #f0f4e8;
        box-shadow: inset 0 0 0 1px rgba(122, 182, 0, 0.2);
        }
    
    .mutual-banner {
        width: 100%;
        border-radius: 6px;
        margin: 10px 0 12px;
        height: 240px;
        display: block;
    }

    .mutual-cover {
        height: 240px;
        object-fit: cover;
        object-position: center;
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
        max-width: 1100px;
        background: linear-gradient(180deg, #dff4b4 0%, #ecf9d3 100%);
        border-radius: 12px;
        padding: 28px 18px 32px;
        display: flex;
        flex-direction: column;
        gap: 18px;
        box-shadow: 0 10px 28px rgba(105, 153, 28, 0.16);
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
        width: 200px;
        height: 118px;
        object-fit: cover;
        border-radius: 10px;
        background: #eef5d1;
        box-shadow: inset 0 0 0 1px rgba(122, 182, 0, 0.2);
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
            padding: 22px 14px 26px;
        }

        .how-card {
            flex-direction: column;
            text-align: center;
            border-left: 4px solid #7ab600;
            border-right: none;
            gap: 12px;
        }

        .how-card.reverse {
            flex-direction: column;
        }

        .how-card img {
            width: 100%;
            height: 130px;
        }
    }
`;

const reasonsToInvest = [];
const howItWorks = [];
const chooseReasons = [];
const investSteps = [];

export default function InvestInEquity() {
    return (
        <div className="mutual-page">
            <style>{styles}</style>
            <img className="mutual-cover" src={mutualCover} alt="Invest in mutual funds" />
            <div className="mutual-shell">
                <div className="mutual-main">
                    <article className="mutual-card">
                        <h1>Equity Funding</h1>
                        <p>
                            When we buy equities, we start looking at the price the next day or next week. For many who call themselves investors, the long run is 1 month. But do you think the management of the business of which we buy shares really looks at their business growth in such a short period?
                        </p>
                        <InvestFormEquity buttonLabel="Apply Now" />
                    </article>

                    <article className="mutual-card">
                        <h2>This basic rule states that</h2>
                        <ol className="mutual-ordered">
                            <li>You first have to sow a seed.</li>
                            <li>Keep watering it for it to grow.</li>
                            <li>Wait for some time with patience.</li>
                            <li>With the passage of time, you will get the fruits of your hard work and patience.</li>
                        </ol>
                        <img className="mutual-banner" src={coverImg} alt="Equity growth" />
                    </article>

                    <article className="mutual-card">
                        <h2>Protection you need in Equity Funding</h2>
                        <p>
                            People think that stocks are the magic answer to instant wealth with no risk. The only solution to this is education. The key to protecting yourself in the stock market is to understand where you are putting your money or get a financial planner/analyst to handle your equity portfolio.
                        </p>
                    </article>

                    <article className="mutual-card">
                        <h2>How To Gain Profit</h2>
                        <p>
                            Stocks are generally considered riskier investments and require a higher rate of return. You can lose all of your investment with stocks. The flip side of this is you can make a lot of money if you invest in the right company. With the right-hand holding, make sure you don't get into the market before you are ready. Be conservative and never invest in anything you do not understand.
                        </p>
                        <InvestFormEquity buttonLabel="Apply Now" />
                    </article>
                </div>

                <div className="mutual-sidebar">
                    <BookConsultancy />
                </div>
            </div>
        </div>
    );
}
