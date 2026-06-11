import BookConsultancy from "../../components/bookConsultancy";
import loanbanners from "../assets/loans/lapiii.png";
import flexibleloanamount from "../assets/loans/Flexible-Loan-Amounts.png";
import Attinterestrate from "../assets/loans/Attractive-Interest-Rates.png";
import Quickprocessing from "../assets/loans/Quick-and-Hassle-Free-Process.png";
import FlexibleRepayment from "../assets/loans/Flexible-Repayment-Options.png";
import Minimaldocumentation from "../assets/loans/Minimal-Documentation.png";
import ExpertGuidance from "../assets/loans/Expert-Guidance.png";
import Applyonline from "../assets/loans/Applyon.png";
import PropertyValuation from "../assets/loans/Propertyval.png";
import ApprovalandDis from "../assets/loans/Approvalanddiss.png";
import Mngeyourole from "../assets/loans/Manageyourloan.png";
import banner2 from "../assets/loans/img1.png";
import InvestForm from "./investFormlap";

const benefits = [
    {
        title: "Flexible Loan Amounts",
        description:
            "Borrow against your residential or commercial property with ease. We offer competitive loan amounts based on the value of your property, allowing you to access the funds you need for various purposes whether it’s for business expansion, personal investments, or major expenses.",
        icon: flexibleloanamount,
    },
    {
        title: "Attractive Interest Rates",
        description:
            "Benefit from some of the most competitive interest rates in the market. Our transparent pricing ensures you get the best deal possible without any hidden fees..",
        icon: Attinterestrate,
    },
    {
        title: "Quick and Hassle-Free Process:",
        description:
            "Experience a streamlined application process designed to get you the funds you need quickly. Our digital platform simplifies the paperwork, approvals, and disbursement, so you can focus on what matters most.",
        icon: Quickprocessing,
    },
    {
        title: "Flexible Repayment Options:",
        description:
            "Choose a repayment plan that fits your budget and financial situation. Our customizable repayment options allow you to manage your loan comfortably, with choices that suit your cash flow and financial goals.",
        icon: FlexibleRepayment,
    },
    {
        title: "Minimal Documentation",
        description:
            "We’ve streamlined our documentation requirements to make the process as smooth as possible. Enjoy a straightforward application process with minimal paperwork, so you can get your loan approved and disbursed quickly.",
        icon: Minimaldocumentation,
    },
    {
        title: "Expert Guidance",
        description:
            " Our team of financial experts is here to guide you every step of the way. From initial consultation to loan disbursement, we provide personalized support to ensure you make the most informed decisions.",
        icon: ExpertGuidance,
    },
];

const chooseReasons = [
    {
        title: "Apply Online",
        icon: Applyonline,
        text: "We offer customized investment strategies tailored to individual goals, risk tolerance, and financial situations. Our team works closely with clients to develop plans that align with long-term objectives.",
    },
    {
        title: "Property Valuation:",
        icon: PropertyValuation,
        text: "Our experts will conduct a comprehensive valuation of your property to determine its market value and the loan amount you’re eligible for.",
    },
    {
        title: "Approval and Disbursement:",
        icon: ApprovalandDis,
        text: "Once your application is reviewed and approved, We’ll disburse the loan amount to your account swiftly, so you can put the funds to work right away.",
    },
    {
        title: "Manage Your Loan:",
        icon: Mngeyourole,
        text: "Use our digital tools to monitor and manage your loan. Track payments, view statements, and make adjustments as needed—all from the comfort of your home.",
    },
];

export default function LoanAgainstProperty() {
    return (
        <div className="bg-white text-[#1f2933] font-sans p-4 sm:px-3 sm:pt-4 sm:pb-6">
            {/* Hero Banner Section */}
            <div 
                className="w-full rounded-[14px] sm:rounded-[20px] overflow-hidden relative bg-center bg-no-repeat bg-cover min-h-[200px] sm:min-h-[260px] lg:min-h-[400px] xl:min-h-[500px] aspect-auto sm:aspect-[16/6] xl:aspect-[16/5] mb-5"
                style={{ backgroundImage: `url(${loanbanners})` }}
            >
                <div className="absolute inset-0 bottom-0 left-0 w-full flex items-end justify-start p-5 sm:p-10">
                    <a
                        href="#"
                        onClick={(e) => {
                            e.preventDefault();
                            document.getElementById('hero-section')?.scrollIntoView({
                                behavior: 'smooth'
                            });
                        }}
                        className="bg-[#b4dc14] text-black font-bold text-sm sm:text-size-base h-11 sm:h-13 px-4 sm:px-6.5 rounded-xl no-underline inline-flex items-center gap-2 shadow-[0_8px_24px_rgba(122,182,0,0.18)] transition-all duration-250 ease-in-out hover:bg-[#8bc700] hover:-translate-y-0.5"
                    >
                        Apply Now <span>→</span>
                    </a>
                </div>
            </div>

            {/* Layout Shell */}
            <div className="w-full max-w-none m-0 grid grid-cols-1 lg:grid-cols-[1.5fr_340px] gap-7 items-start">
                
                {/* Main Content Area */}
                <div className="flex flex-col gap-4.5">
                    
                    {/* Card 1 */}
                    <article className="bg-white rounded-xl p-3 sm:p-4.5 shadow-[0_12px_24px_rgba(0,0,0,0.06)] border border-[#e5e7eb]">
                        <h1 className="m-0 mb-2 text-[#7ab600] text-base font-bold">Apply For Loan Against Property</h1>
                        <p className="m-0 mb-2.5 text-[#3c4453] text-sm leading-[1.55]">
                            Maximize Your Property’s Potential with Our Loan Solutions at www.byndfinserve.com, we understand that your property is more than just a piece of real estate. It’s a valuable asset that can help you achieve your financial goals. Our Loan Against Property (LAP) solutions offer a flexible and efficient way to leverage your property’s value to meet your financial needs.
                        </p>
                        <InvestForm buttonLabel="Apply Now" buttonClassName="bg-[#7ab600] text-white border border-[#6ca200] rounded-md py-2 px-3.5 font-bold text-xs cursor-pointer shadow-[0_8px_16px_rgba(122,182,0,0.25)] mb-2.5 hover:bg-[#6ca200] transition-colors" />
                        <img className="w-full rounded-md my-2.5 block" src={banner2} alt="Mutual fund investments banner" />
                    </article>

                    {/* Card 2 */}
                    <article className="bg-white rounded-xl p-3 sm:p-4.5 shadow-[0_12px_24px_rgba(0,0,0,0.06)] border border-[#e5e7eb]">
                        <h2 className="m-0 mb-2 text-[#7ab600] text-base font-bold">Why Invest in Mutual Funds?</h2>
                        <ol className="m-0 pl-4.5 text-[#1f2937] flex flex-col gap-2.5 text-xs确 leading-normal">
                            {benefits.map((item) => (
                                <li key={item.title}>
                                    <strong className="text-[#0b0b0b]">{item.title}:</strong> {item.description}
                                </li>
                            ))}
                        </ol>
                        
                        {/* Inline Feature Icons */}
                        <div className="grid grid-cols-[repeat(auto-fit,minmax(120px,1fr))] gap-2.5 items-center mt-3">
                            {[
                                { icon: flexibleloanamount, label: "Flexible Loan Amounts" },
                                { icon: Attinterestrate, label: "Attractive Interest Rates" },
                                { icon: Quickprocessing, label: "Quick Processing" },
                                { icon: FlexibleRepayment, label: "Flexible Repayment" },
                                { icon: Minimaldocumentation, label: "Minimal Documentation" },
                                { icon: ExpertGuidance, label: "Expert Guidance" },
                            ].map(({ icon, label }) => (
                                <div key={label} className="flex flex-col gap-1.5 items-center text-center text-[11px] text-[#6b6f76]">
                                    <img className="w-18 h-18 object-cover mx-auto" src={icon} alt={label} />
                                    <span>{label}</span>
                                </div>
                            ))}
                        </div>
                    </article>

                    {/* Card 3 */}
                    <article className="bg-white rounded-xl p-3 sm:p-4.5 shadow-[0_12px_24px_rgba(0,0,0,0.06)] border border-[#e5e7eb]">
                        <h2 className="m-0 mb-2 text-[#7ab600] text-base font-bold">How It Works</h2>
                        <ol className="m-0 pl-4.5 text-[#1f2937] flex flex-col gap-2.5 text-xs leading-normal">
                            {chooseReasons.map((item) => (
                                <li key={item.title}>
                                    <strong className="text-[#0b0b0b]">{item.title}:</strong> {item.text}
                                </li>
                            ))}
                        </ol>
                        
                        {/* Row Status Icons */}
                        <div className="grid grid-cols-[repeat(auto-fit,minmax(130px,1fr))] gap-2.5 mt-2 items-start">
                            {[
                                { icon: Applyonline, label: "Apply Online" },
                                { icon: PropertyValuation, label: "Property Valuation" },
                                { icon: ApprovalandDis, label: "Approval and Disbursement" },
                                { icon: Mngeyourole, label: "Manage Your Loan" },
                            ].map(({ icon, label }) => (
                                <div key={label} className="flex flex-col gap-1.5 items-center text-center text-[11px] text-[#6b6f76]">
                                    <img className="w-17 h-17 object-cover mx-auto" src={icon} alt={label} />
                                    <span>{label}</span>
                                </div>
                            ))}
                        </div>
                    </article>

                    {/* Card 4 */}
                    <article className="bg-white rounded-xl p-3 sm:p-4.5 shadow-[0_12px_24px_rgba(0,0,0,0.06)] border border-[#e5e7eb]">
                        <h1 className="m-0 mb-2 text-[#7ab600] text-base font-bold">Apply Today and Empower Your Financial Future</h1>
                        <p className="m-0 mb-2.5 text-[#3c4453] text-sm leading-[1.55]">
                            Visit www.byndfinserve.com to apply now and explore how our Loan Against Property solutions can work for you. With BYND Finserve Consultant Pvt. Ltd , financial flexibility is just a click away.
                        </p>
                        <InvestForm buttonLabel="Apply Now" buttonClassName="bg-[#7ab600] text-white border border-[#6ca200] rounded-md py-2 px-3.5 font-bold text-xs cursor-pointer shadow-[0_8px_16px_rgba(122,182,0,0.25)] mb-2.5 hover:bg-[#6ca200] transition-colors" />
                    </article>
                </div>

                {/* Sidebar Area */}
                <div className="relative lg:sticky lg:top-3">
                    <BookConsultancy />
                </div>
            </div>
        </div>
    );
}