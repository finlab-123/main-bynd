import React from "react";
import BookConsultancy from "../../components/bookConsultancy";
import homeLoanBanner from "../assets/home_files/homeImage.png";
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
import InvestForm from "./investFormHome";

const benefits = [
  { title: "Flexible Loan Amounts", description: "Get the right loan amount for your dream home, tailored to your eligibility and property value.", icon: flexibleloanamount },
  { title: "Attractive Interest Rates", description: "Enjoy competitive and transparent interest rates for your home loan.", icon: Attinterestrate },
  { title: "Quick and Hassle-Free Process", description: "Fast approvals and minimal paperwork to help you move in sooner.", icon: Quickprocessing },
  { title: "Flexible Repayment Options", description: "Choose repayment plans that fit your budget and lifestyle.", icon: FlexibleRepayment },
  { title: "Minimal Documentation", description: "Simple documentation process for a stress-free experience.", icon: Minimaldocumentation },
  { title: "Expert Guidance", description: "Our home loan experts guide you at every step, from application to disbursal.", icon: ExpertGuidance },
];

const chooseReasons = [
  { title: "Apply Online", icon: Applyonline, text: "Start your home loan journey with our easy online application." },
  { title: "Property Valuation", icon: PropertyValuation, text: "Get a fair and transparent valuation of your chosen property." },
  { title: "Approval and Disbursement", icon: ApprovalandDis, text: "Swift approval and direct disbursement to your account." },
  { title: "Manage Your Loan", icon: Mngeyourole, text: "Track your loan, payments, and more with our digital tools." },
];

export default function HomeLoan() {
  return (
    <div className="bg-[#f8fafc] text-[#1f2933] font-sans p-4 sm:p-0">
      {/* Hero Banner Section */}
      <div 
        className="w-100 relative rounded-[10px] sm:rounded-[14px] md:rounded-[20px] overflow-hidden bg-center bg-no-repeat bg-cover flex items-center h-[240px] sm:h-[340px] md:h-[520px] xl:h-[650px] 2xl:h-[720px]"
        style={{ backgroundImage: `url(${homeLoanBanner})` }}
      >
        <div className="absolute right-3 bottom-3 sm:right-5 sm:bottom-5 md:right-10 md:bottom-10 flex justify-end items-end z-10">
          <InvestForm
            buttonLabel="Apply Now"
            buttonClassName="bg-[#9acd00] hover:bg-[#84b800] text-white border-none h-10 sm:h-11 md:h-[54px] px-3 sm:px-4 md:px-7 rounded-lg md:rounded-xl font-bold text-xs sm:text-sm md:text-base cursor-pointer transition-all duration-300 ease-in-out shadow-[0_8px_20px_rgba(0,0,0,0.15)] hover:-translate-y-0.5"
          />
        </div>
      </div>

      {/* Grid Layout Shell */}
      <div className="w-full max-w-none mt-6 grid grid-columns-1 lg:grid-cols-[1.5fr_340px] gap-7 items-start">
        
        {/* Main Content Area */}
        <div className="flex flex-col gap-[18px]">
          
          <article className="bg-white rounded-xl p-4.5 shadow-[0_12px_24px_rgba(0,0,0,0.06)] border border-[#e5e7eb]">
            <h1 className="m-0 mb-2 text-[#8bc700] text-base font-bold">Apply For Home Loan</h1>
            <p className="m-0 mb-2.5 text-[#3c4453] text-[13px] line-height-[1.55]">
              Make your dream home a reality with our flexible and affordable home loan solutions. Whether you are buying, building, or renovating, we offer competitive rates, fast processing, and expert support at every step.
            </p>
            <InvestForm 
              buttonLabel="Apply Now" 
              buttonClassName="bg-[#8bc700] text-[#121111] border border-[#005fa3] rounded-md py-2 px-3.5 font-bold text-xs cursor-pointer shadow-[0_8px_16px_rgba(0,112,192,0.15)] mb-2.5" 
            />
            <img className="w-full rounded-md mt-0 mb-3 block" src={banner2} alt="Home loan process banner" />
          </article>

          <article className="bg-white rounded-xl p-4.5 shadow-[0_12px_24px_rgba(0,0,0,0.06)] border border-[#e5e7eb]">
            <h2 className="m-0 mb-2 text-[#8bc700] text-base font-bold">Why Choose Our Home Loan?</h2>
            <ol className="m-0 pl-4.5 text-[#1f2937] flex flex-col gap-2.5 text-xs line-height-normal">
              {benefits.map((item) => (
                <li key={item.title}>
                  <strong className="font-bold">{item.title}:</strong> {item.description}
                </li>
              ))}
            </ol>
            <div className="grid grid-cols-[repeat(auto-fit,minmax(120px,1fr))] gap-2.5 items-center mt-3">
              {benefits.map(({ icon, title }) => (
                <div key={title} className="flex flex-col gap-1.5 items-center text-center text-[11px] text-[#6b6f76]">
                  <img src={icon} alt={title} className="w-[72px] height-[72px] object-cover mx-auto" />
                  <span>{title}</span>
                </div>
              ))}
            </div>
          </article>

          <article className="bg-white rounded-xl p-4.5 shadow-[0_12px_24px_rgba(0,0,0,0.06)] border border-[#e5e7eb]">
            <h2 className="m-0 mb-2 text-[#8bc700] text-base font-bold">How It Works</h2>
            <ol className="m-0 pl-4.5 text-[#1f2937] flex flex-col gap-2.5 text-xs line-height-normal">
              {chooseReasons.map((item) => (
                <li key={item.title}>
                  <strong className="font-bold">{item.title}:</strong> {item.text}
                </li>
              ))}
            </ol>
            <div className="grid grid-cols-[repeat(auto-fit,minmax(130px,1fr))] gap-2.5 mt-2 items-start">
              {chooseReasons.map(({ icon, title }) => (
                <div key={title} className="flex flex-col gap-1.5 items-center text-center text-[11px] text-[#6b6f76]">
                  <img src={icon} alt={title} className="w-[70px] height-[70px] object-cover mx-auto" />
                  <span>{title}</span>
                </div>
              ))}
            </div>
          </article>

          <article className="bg-white rounded-xl p-4.5 shadow-[0_12px_24px_rgba(0,0,0,0.06)] border border-[#e5e7eb]">
            <h1 className="m-0 mb-2 text-[#8bc700] text-base font-bold">Apply Today and Move In Sooner</h1>
            <p className="m-0 mb-2.5 text-[#3c4453] text-[13px] line-height-[1.55]">
              Visit www.byndfinserve.com to apply now and discover how our home loan solutions can help you own your dream home. With BYND Finserve Consultant Pvt. Ltd, your homeownership journey is just a click away.
            </p>
            <InvestForm 
              buttonLabel="Apply Now" 
              buttonClassName="bg-[#8bc700] text-[#121111] border border-[#005fa3] rounded-md py-2 px-3.5 font-bold text-xs cursor-pointer shadow-[0_8px_16px_rgba(0,112,192,0.15)] mb-2.5" 
            />
          </article>
        </div>

        {/* Sidebar */}
        <div className="relative lg:sticky lg:top-3">
          <BookConsultancy />
        </div>
      </div>
    </div>
  );
}