import React from "react";
import BookConsultancy from "../../components/bookConsultancy";
import Vehicleloans from "../assets/loans/vechileloanbanner.png";
import Vechileloanbanner from "../assets/loans/vehicleloans.png";
import Flexiblerepayment from "../assets/loans/Flexible-Repayment-Options.png";
import Necessary from "../assets/loans/necessarydocuments.png";
import Approval from "../assets/loans/approval.png";
import QuickApprol from "../assets/loans/Quickapproval.png";
import Attractiveinterestrate from "../assets/loans/Attractiveinterestrate.png";
import Insurancecoverage from "../assets/loans/insurancecoverage.png";
import applicationform from "../assets/loans/applicationform.png";
import InvestForm from "../loans/investFormVehicle";

const benefits = [
  {
    title: "Flexible Repayment Options:",
    description:
      "Choose a plan that fits your budget with monthly EMI options. Upto 7 years and for EV Vehicle upto 10 Years.",
    icon: Flexiblerepayment,
  },
  {
    title: "Quick Approval: ",
    description:
      "Fast-track your application and get approval within [X] days.",
    icon: QuickApprol,
  },
  {
    title: "Attractive Interest Rates: ",
    description:
      "Competitive rates to ensure you save more.",
    icon: Attractiveinterestrate,
  },
  {
    title: "Insurance Coverage:",
    description:
      "Optional insurance for your vehicle to protect against unforeseen circumstances.",
    icon: Insurancecoverage,
  },
];

const Keyfeatures = [
  {
    title: "Loan Amount",
    description:
      "Choose a plan that fits your budget with monthly EMI options. Upto 7 years and for EV Vehicle upto 10 Years.",
  },
  {
    title: "Repayment Period: ",
    description:
      "Fast-track your application and get approval within [X] days.",
  },
  {
    title: "Interest Rate: ",
    description:
      "Competitive rates to ensure you save more.",
  },
  {
    title: "Processing Fee:",
    description:
      "Optional insurance for your vehicle to protect against unforeseen circumstances.",
  },
];

const chooseReasons = [
  {
    icon: applicationform,
    text: "Fill out the application form on our website.",
  },
  {
    icon: Necessary,
    text: "Submit necessary documents (ID proof, address proof, income proof, etc.).",
  },
  {
    icon: Approval,
    text: "Get approved within [X] working days and receive the loan amount.",
  },
];

const Documentsrequired = [
  {
    text: "Proof of Identity (Aadhaar Card, Passport, etc.)",
  },
  {
    text: "Proof of Income (Salary Slip, ITR, etc.).",
  },
  {
    text: "Vehicle Proforma Invoice",
  },
  {
    text: "Address Proof",
  },
];

export default function Vehicleloan() {
  // Shared structural styling variable for internal application CTAs to align with the legacy structure
  const mutualButtonClass = "bg-[#9acd00] hover:bg-[#84b800] text-white border-none h-[54px] px-[28px] rounded-xl font-bold text-base cursor-pointer transition-all duration-300 ease-in-out shadow-[0_8px_20px_rgba(0,0,0,0.15)] hover:-translate-y-0.5 mb-2.5 max-md:h-[46px] max-md:px-[18px] max-md:text-sm max-sm:h-[42px] max-sm:px-3.5 max-sm:text-xs max-sm:rounded-[10px]";

  return (
    <div className="bg-white text-[#1f2933] font-['Poppins',_sans-serif] p-0 max-sm:px-3 max-sm:pt-4 max-sm:pb-6">
      
      {/* Structural Responsive Hero Image Container */}
      <div 
        className="w-full relative rounded-[20px] overflow-hidden bg-center bg-no-repeat bg-cover flex items-center h-[650px] min-[1400px]:h-[720px] max-[1200px]:h-[520px] max-md:h-[340px] max-md:rounded-[14px] max-sm:h-[240px] max-sm:rounded-[10px]"
        style={{ backgroundImage: `url(${Vechileloanbanner})` }}
      >
        <div className="absolute bottom-10 right-10 flex justify-end items-end z-[2] max-md:right-5 max-md:bottom-5 max-sm:right-3.5 max-sm:bottom-3.5">
          <InvestForm
            buttonLabel="Apply Now"
            buttonClassName={mutualButtonClass}
          />
        </div>
      </div>

      {/* Main Two-Column Content Shell */}
      <div className="w-full max-w-none m-0 grid grid-cols-1 lg:grid-cols-[1.5fr_340px] gap-7 items-start mt-6">
        
        {/* Core Informational Row Pipeline */}
        <div className="flex flex-col gap-[18px]">
          
          {/* Card Module 1: Introduction Area */}
          <article className="bg-white rounded-12 p-[14px_16px] max-sm:p-3 shadow-[0_12px_24px_rgba(0,0,0,0.06)] border border-[#e5e7eb]">
            <h1 className="m-0 mb-2 text-[#7ab600] text-base font-bold">Apply For Vehicle Loan</h1>
            <p className="m-0 mb-2.5 text-[#3c4453] text-[13px] leading-[1.55]">
              Our Vehicle Loan is designed to help you get your dream vehicle with affordable financing options. Whether you are looking for a car, motorcycle, or any other type of vehicle, we offer competitive rates and flexible terms to suit your needs.
            </p>
            <InvestForm buttonLabel="Apply Now" buttonClassName={mutualButtonClass} />
          </article>

          {/* Card Module 2: Key Deliverables & Eligibility */}
          <article className="bg-white rounded-12 p-[14px_16px] max-sm:p-3 shadow-[0_12px_24px_rgba(0,0,0,0.06)] border border-[#e5e7eb]">
            <h2 className="m-0 mb-2 text-[#7ab600] text-base font-bold">Key Features</h2>
            <ol className="m-0 pl-[18px] text-[#1f2937] flex flex-col gap-2.5 text-xs leading-[1.5] list-decimal">
              {Keyfeatures.map((item) => (
                <li key={item.title}>
                  <strong className="text-[#0b0b0b] font-bold">{item.title}</strong> {item.description}
                </li>
              ))}
            </ol>
            <img className="w-full rounded-6 mt-2.5 mb-3 block h-auto" src={Vehicleloans} alt="Vehicle loans banner" />
            
            <div className="m-0 mb-2.5 text-[#3c4453] text-[13px] leading-[1.55]">
              <span className="font-bold mr-1">5.</span><strong className="text-[#0b0b0b] font-bold">Eligibility</strong>
              <div className="mt-1">– Minimum age of [X] years</div>
              <div>– Stable monthly income of [X amount]</div>
              <div>– [Other criteria, e.g. employeeType status, credit score, etc.]</div>
            </div>
          </article>

          {/* Card Module 3: Value Options Grid */}
          <article className="bg-white rounded-12 p-[14px_16px] max-sm:p-3 shadow-[0_12px_24px_rgba(0,0,0,0.06)] border border-[#e5e7eb]">
            <h2 className="m-0 mb-2 text-[#7ab600] text-base font-bold">Why Choose Our Vehicle Loan ?</h2>
            <ol className="m-0 pl-[18px] text-[#1f2937] flex flex-col gap-2.5 text-xs leading-[1.5] list-decimal">
              {benefits.map((item) => (
                <li key={item.title}>
                  <strong className="text-[#0b0b0b] font-bold">{item.title}</strong> {item.description}
                </li>
              ))}
            </ol>
            
            <div className="grid grid-cols-[repeat(auto-fit,_minmax(120px,_1fr))] gap-2 items-center mt-3">
              {[
                { icon: Flexiblerepayment, label: "Flexible Repayment" },
                { icon: QuickApprol, label: "Quick Approval" },
                { icon: Attractiveinterestrate, label: "Attractive Interest Rates" },
                { icon: Insurancecoverage, label: "Insurance Coverage" },
              ].map(({ icon, label }) => (
                <div key={label} className="flex flex-col gap-1.5 items-center text-center text-[11px] text-[#6b6f76]">
                  <img src={icon} alt={label} className="w-[72px] h-[72px] object-cover mx-auto" />
                  <span>{label}</span>
                </div>
              ))}
            </div>
          </article>

          {/* Card Module 4: Operations Framework Steps */}
          <article className="bg-white rounded-12 p-[14px_16px] max-sm:p-3 shadow-[0_12px_24px_rgba(0,0,0,0.06)] border border-[#e5e7eb]">
            <h2 className="m-0 mb-2 text-[#7ab600] text-base font-bold">How It Works</h2>
            <ol className="m-0 pl-[18px] text-[#1f2937] flex flex-col gap-2.5 text-xs leading-[1.5] list-decimal">
              {chooseReasons.map((item, index) => (
                <li key={index}>
                  {item.text}
                </li>
              ))}
            </ol>
            
            <div className="grid grid-cols-[repeat(auto-fit,_minmax(130px,_1fr))] gap-2.5 mt-2 items-start">
              {[
                { icon: applicationform, label: "Application Form" },
                { icon: Necessary, label: "Document Submit" },
                { icon: Approval, label: "Approval" },
              ].map(({ icon, label }) => (
                <div key={label} className="flex flex-col gap-1.5 items-center text-center text-[11px] text-[#6b6f76]">
                  <img src={icon} alt={label} className="w-[70px] h-[70px] object-cover mx-auto" />
                  <span>{label}</span>
                </div>
              ))}
            </div>
          </article>

          {/* Card Module 5: Required Compliance Documents */}
          <article className="bg-white rounded-12 p-[14px_16px] max-sm:p-3 shadow-[0_12px_24px_rgba(0,0,0,0.06)] border border-[#e5e7eb]">
            <h2 className="m-0 mb-2 text-[#7ab600] text-base font-bold">Documents Required</h2>
            <ol className="m-0 pl-[18px] text-[#1f2937] flex flex-col gap-2.5 text-xs leading-[1.5] list-decimal">
              {Documentsrequired.map((item, index) => (
                <li key={index}>
                  {item.text}
                </li>
              ))}
            </ol>
          </article>

          {/* Card Module 6: Disclaimer and final UI Actions */}
          <article className="bg-white rounded-12 p-[14px_16px] max-sm:p-3 shadow-[0_12px_24px_rgba(0,0,0,0.06)] border border-[#e5e7eb]">
            <h2 className="m-0 mb-2 text-[#7ab600] text-base font-bold">Terms & Conditions</h2>
            <p className="m-0 mb-2.5 text-[#3c4453] text-[13px] leading-[1.55]">
              Interest rates and processing fees are subject to change as per the bank’s discretion.
            </p>
            <p className="m-0 mb-2.5 text-[#3c4453] text-[13px] leading-[1.55]">
              Default in EMI payment may result in additional charges and a negative impact on your credit score.
            </p>
            <InvestForm buttonLabel="Apply Now" buttonClassName={mutualButtonClass} />
          </article>
        </div>

        {/* Global Floating Actions Sidebar Block */}
        <div className="relative lg:sticky lg:top-3">
          <BookConsultancy />
        </div>
      </div>
    </div>
  );
}