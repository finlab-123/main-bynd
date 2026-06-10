import React from "react";
import BookConsultancy from "../../components/bookConsultancy";
import InvestFormSupplyChain from "../investmentPlans/InvestFormSupplyChain";
import loanbanners from "../assets/loans/supplychain.png";
import liquidity from "../assets/loans/liquidity.png";
import vendorfinancing from "../assets/loans/vendor.png";
import money from "../assets/loans/moneyy.png";
import investment from "../assets/loans/investment.png";
import digitalmarketing from "../assets/loans/digital-marketing.png";
import invoice from "../assets/loans/invoice.png";
import importfinance from "../assets/loans/import.png";
import Applyonline from "../assets/loans/Applyon.png";
import PropertyValuation from "../assets/loans/Propertyval.png";
import ApprovalandDis from "../assets/loans/Approvalanddiss.png";
import Mngeyourole from "../assets/loans/Manageyourloan.png";
import banner222 from "../assets/loans/banner222.png";

const benefits = [
  {
    title: "Invoice Financing",
    description:
      "Unlock instant funds against unpaid invoices with easy Invoice Financing and Bill Discounting solutions.",
    icon: liquidity,
  },
  {
    title: "Vendor & Dealer Financing",
    description:
      "Support your vendors and dealers with smooth financing solutions for uninterrupted business operations.",
    icon: vendorfinancing,
  },
  {
    title: "Purchase Order Funding",
    description:
      "Fulfill large purchase orders confidently with quick and flexible funding support.",
    icon: money,
  },
  {
    title: "Working Capital Support",
    description:
      "Maintain healthy cash flow and manage operational expenses efficiently with customized working capital solutions.",
    icon: investment,
  },
  {
    title: "Digital Onboarding",
    description:
      "Enjoy a simple digital onboarding process with quick approvals and minimal paperwork.",
    icon: digitalmarketing,
  },
  {
    title: "Liquidity & Cash Flow Management",
    description:
      " Improve liquidity and optimize your business cash flow with smarter financial solutions.",
    icon: invoice,
  },
  {
    title: "Import Finance",
    description:
      " Access Import Finance solutions up to ₹50 Cr for smooth international trade and procurement.",
    icon: importfinance,
  },
];

const chooseReasons = [
  {
    title: "Apply Online",
    icon: Applyonline,
    text: "Submit your application quickly through our digital platform.",
  },
  {
    title: "Business Evaluation",
    icon: PropertyValuation,
    text: "Our experts assess your financing requirements and business needs.",
  },
  {
    title: "Approval and Disbursement",
    icon: ApprovalandDis,
    text: "Get fast approvals and quick fund disbursement directly to your account.",
  },
  {
    title: "Manage Your Financing",
    icon: Mngeyourole,
    text: "Track and manage your financing easily with our digital support system.",
  },
];

export default function Supplychainfinance() {
  const mutualButtonClass = "bg-[#9acd00] hover:bg-[#84b800] text-white border-none h-[54px] px-[28px] rounded-xl font-bold text-base cursor-pointer transition-all duration-300 ease-in-out shadow-[0_8px_20px_rgba(0,0,0,0.15)] hover:-translate-y-0.5 mb-2.5 max-md:h-[46px] max-md:px-[18px] max-md:text-sm max-sm:h-[42px] max-sm:px-3.5 max-sm:text-xs max-sm:rounded-xl";

  return (
    <div className="bg-white text-[#1f2933] font-['Poppins',_sans-serif] p-4 max-sm:px-3 max-sm:pt-4 max-sm:pb-6">
      
      {/* Hero Banner Section */}
      <div 
        className="w-full relative rounded-[20px] overflow-hidden bg-center bg-no-repeat bg-cover flex items-center h-[650px] min-[1400px]:h-[720px] max-[1200px]:h-[520px] max-md:h-[340px] max-md:rounded-[14px] max-sm:h-[240px] max-sm:rounded-e-[10px]"
        style={{ backgroundImage: `url(${loanbanners})` }}
      >
        <div className="absolute bottom-10 right-10 flex justify-end items-end z-[2] max-md:right-5 max-md:bottom-5 max-sm:right-3.5 max-sm:bottom-3.5">
          <InvestFormSupplyChain
            buttonLabel="Apply Now"
            buttonClassName={mutualButtonClass}
          />
        </div>
      </div>

      {/* Main Layout Grid Splitter */}
      <div className="w-full max-w-none m-0 grid grid-cols-1 lg:grid-cols-[1.5fr_340px] gap-7 items-start mt-6">
        
        {/* Main Content Scroll Grid */}
        <div className="flex flex-col gap-[18px]">
          
          {/* Section 1: Introduction Panel */}
          <article className="bg-white rounded-12 p-[14px_16px] max-sm:p-3 shadow-[0_12px_24px_rgba(0,0,0,0.06)] border border-[#e5e7eb]">
            <h1 className="m-0 mb-2 text-[#7ab600] text-base font-bold">Apply For Supply Chain Finance</h1>
            <p className="m-0 mb-2.5 text-[#3c4453] text-[13px] leading-[1.55]">
              Boost your business growth with smart and flexible Supply Chain Finance solutions at BYND Finserve. We help businesses manage cash flow, vendor payments, purchase orders, and working capital with fast and hassle-free financing solutions.
            </p>
            <InvestFormSupplyChain buttonLabel="Apply Now" buttonClassName={mutualButtonClass} />
            <img className="w-full rounded-6 mt-2.5 mb-3 block h-auto" src={banner222} alt="Supply Chain Finance Banner" />
          </article>

          {/* Section 2: Key Benefits */}
          <article className="bg-white rounded-12 p-[14px_16px] max-sm:p-3 shadow-[0_12px_24px_rgba(0,0,0,0.06)] border border-[#e5e7eb]">
            <h2 className="m-0 mb-2 text-[#7ab600] text-base font-bold">Why Choose Our Supply Chain Finance Solutions?</h2>
            <ol className="m-0 pl-[18px] text-[#1f2937] flex flex-col gap-2.5 text-xs leading-[1.5] list-decimal">
              {benefits.map((item) => (
                <li key={item.title}>
                  <strong className="text-[#0b0b0b] font-bold">{item.title}:</strong> {item.description}
                </li>
              ))}
            </ol>
            
            {/* Horizontal Grid List */}
            <div className="grid grid-cols-[repeat(auto-fit,_minmax(120px,_1fr))] gap-2.5 items-center mt-3">
              {[
                { icon: liquidity, label: "Invoice Financing" },
                { icon: vendorfinancing, label: "Vendor & Dealer Financing" },
                { icon: money, label: "Purchase Order Funding" },
                { icon: investment, label: "Working Capital Support" },
                { icon: digitalmarketing, label: "Digital Onboarding" },
                { icon: invoice, label: "Liquidity & Cash Flow Management" },
                { icon: importfinance, label: "Import Finance" },
              ].map(({ icon, label }) => (
                <div key={label} className="flex flex-col gap-1.5 items-center text-center text-[11px] text-[#6b6f76]">
                  <img src={icon} alt={label} className="w-[72px] h-[72px] object-cover mx-auto" />
                  <span>{label}</span>
                </div>
              ))}
            </div>
          </article>

          {/* Section 3: Operational Workflow */}
          <article className="bg-white rounded-12 p-[14px_16px] max-sm:p-3 shadow-[0_12px_24px_rgba(0,0,0,0.06)] border border-[#e5e7eb]">
            <h2 className="m-0 mb-2 text-[#7ab600] text-base font-bold">How It Works</h2>
            <ol className="m-0 pl-[18px] text-[#1f2937] flex flex-col gap-2.5 text-xs leading-[1.5] list-decimal">
              {chooseReasons.map((item) => (
                <li key={item.title}>
                  <strong className="text-[#0b0b0b] font-bold">{item.title}:</strong> {item.text}
                </li>
              ))}
            </ol>
            
            {/* Icons Flow Grid */}
            <div className="grid grid-cols-[repeat(auto-fit,_minmax(130px,_1fr))] gap-2.5 mt-2 items-start">
              {[
                { icon: Applyonline, label: "Apply Online" },
                { icon: PropertyValuation, label: "Business Evaluation" },
                { icon: ApprovalandDis, label: "Approval and Disbursement" },
                { icon: Mngeyourole, label: "Manage Your Financing" },
              ].map(({ icon, label }) => (
                <div key={label} className="flex flex-col gap-1.5 items-center text-center text-[11px] text-[#6b6f76]">
                  <img src={icon} alt={label} className="w-[70px] h-[70px] object-cover mx-auto" />
                  <span>{label}</span>
                </div>
              ))}
            </div>
          </article>

          {/* Section 4: Call To Action Footer Panel */}
          <article className="bg-white rounded-12 p-[14px_16px] max-sm:p-3 shadow-[0_12px_24px_rgba(0,0,0,0.06)] border border-[#e5e7eb]">
            <h1 className="m-0 mb-2 text-[#7ab600] text-base font-bold">Apply Today and Empower Your Financial Future</h1>
            <p className="m-0 mb-2.5 text-[#3c4453] text-[13px] leading-[1.55]">
              Visit BYND Finserve Official Website and explore our Supply Chain Finance solutions designed to help your business grow with confidence.
              <br /><br />
              With BYND Finserve Consultant Pvt. Ltd., smarter business financing starts here. We work for you. With BYND Finserve Consultant Pvt. Ltd , financial flexibility is just a click away.
            </p>
            <InvestFormSupplyChain buttonLabel="Apply Now" buttonClassName={mutualButtonClass} />
          </article>
        </div>

        {/* Sidebar Panel Section */}
        <div className="relative lg:sticky lg:top-3">
          <BookConsultancy />
        </div>
      </div>
    </div>
  );
}