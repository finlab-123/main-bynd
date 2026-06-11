import React from "react";
import BookConsultancy from "../../components/bookConsultancy";
import loanbanners from "../assets/loans/loanagainstsharee.png";
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
import InvestForm from "./investFormshare";

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

export default function LoanAgainstShare() {
  // Shared structural styling for buttons to maintain parity
  const mutualButtonClass = "bg-[#9acd00] hover:bg-[#84b800] text-white border-none h-[54px] px-7 rounded-xl font-bold text-base cursor-pointer transition-all duration-300 ease-in-out shadow-[0_8px_20px_rgba(0,0,0,0.15)] hover:-translate-y-0.5 mb-2.5";

  return (
    <div className="bg-white text-[#1f2933] font-['Poppins',_system-ui,_sans-serif] p-0 max-sm:px-3 max-sm:pt-4 max-sm:pb-6">
      
      {/* Hero Banner Area */}
      <div 
        className="w-full relative rounded-2xl overflow-hidden bg-center bg-no-repeat bg-cover flex items-center h-[650px] min-[1400px]:h-[720px] max-xl:h-[520px] max-md:h-[340px] max-md:rounded-xl max-sm:h-[240px] max-sm:rounded-lg"
        style={{ backgroundImage: `url(${loanbanners})` }}
      >
        <div className="absolute bottom-10 right-10 z-[2] flex justify-end items-end max-md:right-5 max-md:bottom-5 max-sm:right-3.5 max-sm:bottom-3.5">
          <InvestForm
            buttonLabel="Apply Now"
            buttonClassName="bg-[#9acd00] hover:bg-[#84b800] text-white border-none h-[54px] px-7 rounded-xl font-bold text-base cursor-pointer transition-all duration-300 ease-in-out shadow-[0_8px_20px_rgba(0,0,0,0.15)] hover:-translate-y-0.5 max-md:h-[46px] max-md:px-[18px] max-md:text-sm max-sm:h-[42px] max-sm:px-3.5 max-sm:text-xs max-sm:rounded-lg"
          />
        </div>
      </div>

      {/* Main Container Layout Shell */}
      <div className="w-full max-w-none m-0 grid grid-cols-1 lg:grid-cols-[1.5fr_340px] gap-7 items-start mt-6">
        
        {/* Main Content (Left Column) */}
        <div className="flex flex-col gap-[18px]">
          
          {/* Card 1: Application Intro */}
          <article className="bg-white rounded-xl p-[14px_16px] max-sm:p-3 shadow-[0_12px_24px_rgba(0,0,0,0.06)] border border-[#e5e7eb]">
            <h1 className="m-0 mb-2 text-[#7ab600] text-base font-bold">Apply For Loan Against Share</h1>
            <p className="m-0 mb-2.5 text-[#3c4453] text-sm leading-[1.55]">
              Leverage your shareholdings to unlock liquidity. Our loan against shares offering keeps your investments intact while giving you quick access to funds with transparent terms and guided support.
            </p>
            <InvestForm buttonLabel="Apply Now" buttonClassName={mutualButtonClass} />
            <img className="w-full rounded-md mt-2.5 mb-3 block" src={banner2} alt="Mutual fund investments banner" />
          </article>

          {/* Card 2: Reasons / Benefits */}
          <article className="bg-white rounded-xl p-[14px_16px] max-sm:p-3 shadow-[0_12px_24px_rgba(0,0,0,0.06)] border border-[#e5e7eb]">
            <h2 className="m-0 mb-2 text-[#7ab600] text-base font-bold">Why choose a loan against shares?</h2>
            <ol className="m-0 pl-[18px] text-[#1f2937] flex flex-col gap-2.5 text-xs leading-normal list-decimal">
              {benefits.map((item) => (
                <li key={item.title}>
                  <strong className="text-[#0b0b0b]">{item.title}</strong> {item.description}
                </li>
              ))}
            </ol>
            
            {/* Benefits Icons Grid Layout */}
            <div className="grid grid-cols-[repeat(auto-fit,_minmax(120px,_1fr))] gap-2.5 items-center mt-3">
              {[
                { icon: flexibleloanamount, label: "Flexible Loan Amounts" },
                { icon: Attinterestrate, label: "Attractive Interest Rates" },
                { icon: Quickprocessing, label: "Quick Processing" },
                { icon: FlexibleRepayment, label: "Flexible Repayment" },
                { icon: Minimaldocumentation, label: "Minimal Documentation" },
                { icon: ExpertGuidance, label: "Expert Guidance" },
              ].map(({ icon, label }) => (
                <div key={label} className="flex flex-col gap-1.5 items-center text-center text-[11px] text-[#6b6f76]">
                  <img src={icon} alt={label} className="w-[72px] h-[72px] object-cover mx-auto" />
                  <span>{label}</span>
                </div>
              ))}
            </div>
          </article>

          {/* Card 3: System Pipeline Flow */}
          <article className="bg-white rounded-xl p-[14px_16px] max-sm:p-3 shadow-[0_12px_24px_rgba(0,0,0,0.06)] border border-[#e5e7eb]">
            <h2 className="m-0 mb-2 text-[#7ab600] text-base font-bold">How It Works</h2>
            <ol className="m-0 pl-[18px] text-[#1f2937] flex flex-col gap-2.5 text-xs leading-normal list-decimal">
              {chooseReasons.map((item) => (
                <li key={item.title}>
                  <strong className="text-[#0b0b0b]">{item.title}</strong> {item.text}
                </li>
              ))}
            </ol>
            
            {/* Flow Row Icons Layout */}
            <div className="grid grid-cols-[repeat(auto-fit,_minmax(130px,_1fr))] gap-2.5 mt-2 items-start">
              {[
                { icon: Applyonline, label: "Apply Online" },
                { icon: PropertyValuation, label: "Property Valuation" },
                { icon: ApprovalandDis, label: "Approval and Disbursement" },
                { icon: Mngeyourole, label: "Manage Your Loan" },
              ].map(({ icon, label }) => (
                <div key={label} className="flex flex-col gap-1.5 items-center text-center text-[11px] text-[#6b6f76]">
                  <img src={icon} alt={label} className="w-[70px] h-[70px] object-cover mx-auto" />
                  <span>{label}</span>
                </div>
              ))}
            </div>
          </article>

          {/* Card 4: Action Footer */}
          <article className="bg-white rounded-xl p-[14px_16px] max-sm:p-3 shadow-[0_12px_24px_rgba(0,0,0,0.06)] border border-[#e5e7eb]">
            <h1 className="m-0 mb-2 text-[#7ab600] text-base font-bold">Apply Today and Empower Your Financial Future</h1>
            <p className="m-0 mb-2.5 text-[#3c4453] text-sm leading-[1.55]">
              Visit www.byndfinserve.com to apply now and explore how our Loan Against Property solutions can work for you. With BYND Finserve Consultant Pvt. Ltd, financial flexibility is just a click away.
            </p>
            <InvestForm buttonLabel="Apply Now" buttonClassName={mutualButtonClass} />
          </article>
        </div>

        {/* Floating Sidebar Sticky Container */}
        <div className="relative lg:sticky lg:top-3">
          <BookConsultancy />
        </div>
      </div>
    </div>
  );
}