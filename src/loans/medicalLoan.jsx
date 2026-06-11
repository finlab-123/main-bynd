import React from "react";
import BookConsultancy from "../../components/bookConsultancy";
import InvestForm from "./investFormmedical";
import coverImg from "../assets/loans/medicalloann.png";
import banner2 from "../assets/loans/Medical-Loan (1).webp";
import flexibleLoanAmount from "../assets/loans/Flexible-Loan-Amounts.png";
import quickProcess from "../assets/loans/Quick-and-Hassle-Free-Process.png";
import attractiveRate from "../assets/loans/Attractive-Interest-Rates.png";
import flexibleRepay from "../assets/loans/Flexible-Repayment-Options.png";
import minimalDocs from "../assets/loans/Minimal-Documentation.png";
import expertHelp from "../assets/loans/Expert-Guidance.png";
import applyOnline from "../assets/loans/Applyon.png";
import medicalBills from "../assets/loans/Propertyval.png";
import approvalFast from "../assets/loans/Approvalanddiss.png";
import manageLoan from "../assets/loans/Manageyourloan.png";
import FAQ from "../../components/FAQ";

const keyFeatures = [
  "Loan Amount: Available up to the limit based on medical requirements.",
  "Repayment Tenure: Flexible options from 6 months to 2 years.",
  "Interest Rate: Competitive rates with transparent terms.",
  "Processing Fee: From 1% of the loan amount.",
  "Eligibility: Age 21-60, salaried/self-employed with stable income; co-applicant may be required.",
];

const whyChoose = [
  { title: "No Collateral", icon: flexibleLoanAmount, text: "Get the loan without pledging assets." },
  { title: "Quick Disbursement", icon: quickProcess, text: "Fast approvals and disbursal for medical needs." },
  { title: "Flexible Tenure", icon: flexibleRepay, text: "Repayment options tailored to your cash flow." },
  { title: "Minimal Documentation", icon: minimalDocs, text: "Simple paperwork to speed up processing." },
  { title: "Available for Medical Needs", icon: expertHelp, text: "Covers surgeries, hospital bills, treatment, and equipment." },
];

const steps = [
  { title: "Apply Online", icon: applyOnline, text: "Start your application digitally with basic details." },
  { title: "Submit Medical Bills", icon: medicalBills, text: "Provide medical estimate and required documents." },
  { title: "Loan Approval", icon: approvalFast, text: "Quick assessment and approval for your requirement." },
  { title: "Funds Disbursed", icon: quickProcess, text: "Swift disbursal to your account for medical expenses." },
  { title: "Manage Your EMI", icon: manageLoan, text: "Track and manage repayments easily through our support." },
];

const documents = [
  "Medical estimate from hospital/healthcare provider.",
  "Proof of identity (Identity Proof/Passport).",
  "Proof of income (salary slips/ITR).",
  "Bank statements (last 3 months).",
];

const terms = [
  "Loan approval is subject to credit assessment and internal checks.",
  "Repayment terms and rates may vary based on loan amount and tenure.",
];

export default function MedicalLoan() {
  // Reusable styling logic for standard card action buttons
  const standardButtonClass = "bg-[#9acd00] hover:bg-[#84b800] text-white border-none h-[54px] px-[28px] rounded-xl font-bold text-base cursor-pointer transition-all duration-300 ease-in-out shadow-[0_8px_20px_rgba(0,0,0,0.15)] hover:-translate-y-0.5 mb-2.5";

  return (
    <div className="bg-white text-[#1f2933] font-['Poppins',_sans-serif] p-0 max-sm:px-3.5 max-sm:pt-[18px] max-sm:pb-6">
      
      {/* Hero Banner Component Layout Section */}
      <div 
        className="w-full relative rounded-[20px] bg-center bg-no-repeat bg-cover flex items-center h-[650px] min-[1400px]:h-[720px] max-xl:h-[520px] max-md:h-[340px] max-md:rounded-e-[14px] max-sm:h-[170px] max-sm:rounded-lg"
        style={{ backgroundImage: `url(${coverImg})` }}
      >
        <div className="absolute bottom-10 right-10 z-[2] flex justify-end items-end max-md:right-5 max-md:bottom-5 max-sm:right-3.5 max-sm:bottom-3.5">
          <InvestForm
            buttonLabel="Apply Now"
            buttonClassName="bg-[#9acd00] hover:bg-[#84b800] text-white border-none h-[54px] px-[28px] rounded-xl font-bold text-base cursor-pointer transition-all duration-300 ease-in-out shadow-[0_8px_20px_rgba(0,0,0,0.15)] hover:-translate-y-0.5 max-md:h-[46px] max-md:px-[18px] max-md:text-sm max-sm:h-[42px] max-sm:px-3.5 max-sm:text-xs max-sm:rounded-xl"
          />
        </div>
      </div>

      {/* Main Structural Layout Grid Splitter */}
      <div className="w-full max-w-none m-0 grid grid-cols-1 lg:grid-cols-[1.5fr_340px] gap-6 items-start mt-6">
        
        {/* Core Informational Grid Cards Stack */}
        <div className="flex flex-col gap-2">
          
          {/* Card Module 1: Intro Pitch */}
          <article className="bg-white rounded-xl p-[18px_20px] max-sm:p-3.5 shadow-[0_12px_24px_rgba(0,0,0,0.06)] border border-[#e5e7eb]">
            <h1 className="m-0 mb-2 text-[#6ca200] text-[20px] font-extrabold">Apply For Medical Loan</h1>
            <p className="m-0 mb-2.5 text-[#3c4453] text-sm leading-[1.62]">
              Medical expenses can be unpredictable. Get fast access to funds for treatment, hospitalization, or emergencies without compromising on care. Flexible terms, quick decisions, and transparent pricing.
            </p>
            <InvestForm buttonLabel="Apply Now" buttonClassName={standardButtonClass} />
            <img className="w-full rounded-lg mt-3 mb-3.5 block object-contain object-center h-auto max-sm:h-[170px]" src={banner2} alt="Medical loan" />
          </article>

          {/* Card Module 2: High Level Features */}
          <article className="bg-white rounded-xl p-[18px_20px] max-sm:p-3.5 shadow-[0_12px_24px_rgba(0,0,0,0.06)] border border-[#e5e7eb]">
            <h2 className="m-0 mb-2 text-[#6ca200] text-[20px] font-extrabold">Key Features</h2>
            <ol className="m-0 pl-[18px] mt-2.5 text-[#1f2937] flex flex-col gap-2.5 text-[13.5px] leading-[1.6] list-decimal">
              {keyFeatures.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ol>
          </article>

          {/* Card Module 3: Value Proposition */}
          <article className="bg-white rounded-xl p-[18px_20px] max-sm:p-3.5 shadow-[0_12px_24px_rgba(0,0,0,0.06)] border border-[#e5e7eb]">
            <h2 className="m-0 mb-2 text-[#6ca200] text-[20px] font-extrabold">Why Choose Our Medical Loan?</h2>
            <ol className="m-0 pl-[18px] mt-2.5 text-[#1f2937] flex flex-col gap-2.5 text-[13.5px] leading-[1.6] list-decimal">
              {whyChoose.map((item) => (
                <li key={item.title}>
                  <strong className="text-inherit">{item.title}:</strong> {item.text}
                </li>
              ))}
            </ol>
            
            {/* Value Proposition Grid Alignment */}
            <div className="grid grid-cols-[repeat(auto-fit,_minmax(130px,_1fr))] gap-2.5 mt-2 items-start">
              {whyChoose.map(({ icon, title }) => (
                <div key={title} className="flex flex-col gap-1.5 items-center text-center text-[11.5px] text-[#6b6f76]">
                  <img src={icon} alt={title} className="w-[70px] h-[70px] object-cover mx-auto" />
                  <span>{title}</span>
                </div>
              ))}
            </div>
          </article>

          {/* Card Module 4: Execution Journey */}
          <article className="bg-white rounded-xl p-[18px_20px] max-sm:p-3.5 shadow-[0_12px_24px_rgba(0,0,0,0.06)] border border-[#e5e7eb]">
            <h2 className="m-0 mb-2 text-[#6ca200] text-[20px] font-extrabold">How It Works</h2>
            <ol className="m-0 pl-[18px] mt-2.5 text-[#1f2937] flex flex-col gap-2.5 text-[13.5px] leading-[1.6] list-decimal">
              {steps.map((item) => (
                <li key={item.title}>
                  <strong className="text-inherit">{item.title}:</strong> {item.text}
                </li>
              ))}
            </ol>
            
            {/* Process Pipeline Row Grid Map */}
            <div className="grid grid-cols-[repeat(auto-fit,_minmax(130px,_1fr))] gap-2.5 mt-2 items-start">
              {steps.map(({ icon, title }) => (
                <div key={title} className="flex flex-col gap-1.5 items-center text-center text-[11.5px] text-[#6b6f76]">
                  <img src={icon} alt={title} className="w-[70px] h-[70px] object-cover mx-auto" />
                  <span>{title}</span>
                </div>
              ))}
            </div>
          </article>

          {/* Card Module 5: Required Paperwork */}
          <article className="bg-white rounded-xl p-[18px_20px] max-sm:p-3.5 shadow-[0_12px_24px_rgba(0,0,0,0.06)] border border-[#e5e7eb]">
            <h2 className="m-0 mb-2 text-[#6ca200] text-[20px] font-extrabold">Documents Required</h2>
            <ol className="m-0 pl-[18px] mt-2.5 text-[#1f2937] flex flex-col gap-2.5 text-[13.5px] leading-[1.6] list-decimal">
              {documents.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ol>
          </article>

          {/* Card Module 6: Framework Constraints */}
          <article className="bg-white rounded-xl p-[18px_20px] max-sm:p-3.5 shadow-[0_12px_24px_rgba(0,0,0,0.06)] border border-[#e5e7eb]">
            <h2 className="m-0 mb-2 text-[#6ca200] text-[20px] font-extrabold">Terms and Conditions</h2>
            <ol className="m-0 pl-[18px] mt-2.5 text-[#1f2937] flex flex-col gap-2.5 text-[13.5px] leading-[1.6] list-decimal mb-3">
              {terms.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ol>
            <InvestForm buttonLabel="Apply Now" buttonClassName={standardButtonClass} />
          </article>
        </div>

        {/* Sidebar Sticky Panel Area */}
        <div className="relative lg:sticky lg:top-3">
          <BookConsultancy />
        </div>
      </div>
            <FAQ />
    </div>
  );
}