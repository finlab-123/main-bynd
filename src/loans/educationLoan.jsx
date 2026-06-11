import React from 'react';
import BookConsultancy from "../../components/bookConsultancy";
import Flexiblerepayment from "../assets/loans/Flexible-Repayment-Options.png";
import Necessary from "../assets/loans/necessarydocuments.png";
import Approval from "../assets/loans/approval.png";
import QuickApprol from "../assets/loans/Quickapproval.png";
import Attractiveinterestrate from "../assets/loans/Attractiveinterestrate.png";
import Insurancecoverage from "../assets/loans/insurancecoverage.png";
import applicationform from "../assets/loans/applicationform.png";
import InvestForm from "./investFormeducation";
import Edubanner from "../assets/loans/edubanner.png";
import Eduimg1 from "../assets/loans/Eduimg1.png";
import EmiCalculator from '../../components/EmiCalculator';

const benefits = [
    {
        title: "Flexible Repayment Options:",
        description: "Pay after completion of the course with an EMI holiday.",
        icon: Flexiblerepayment,
    },
    {
        title: "Competitive Interest Rates:",
        description: "Affordable rates to ease your financial burden.",
        icon: QuickApprol,
    },
    {
        title: "Loan for Tuition, Fees, and Living Expenses:",
        description: "Covers all education-related expenses, including tuition, hostel fees, books, and other living expenses.",
        icon: Attractiveinterestrate,
    },
    {
        title: "No Collateral for Loans Up to [X]:",
        description: "Loans up to [X] can be availed without security.",
        icon: Insurancecoverage,
    },
];

const Keyfeatures = [
    {
        title: "Loan Amount",
        description: "Up to [X] for domestic and [X] for international courses.",
    },
    {
        title: "Interest Rate",
        description: "[X]% p.a. (fixed or floating, as applicable).",
    },
    {
        title: "Repayment Period",
        description: "Loan tenure of up to [X years], with a grace period until course completion.",
    },
];

const chooseReasons = [
    {
        icon: applicationform,
        text: "Apply Online",
    },
    {
        icon: Necessary,
        text: "Submit your admission letter and necessary documents.",
    },
    {
        icon: Approval,
        text: "Get approved and receive disbursement directly to your institution.",
    },
];

const Documentsrequired = [
    { text: "Admission Letter from the institution." },
    { text: "Proof of Identity (Aadhaar, Passport)." },
    { text: "Proof of Income (Income Tax Return, Salary Slip)." },
    { text: "Bank Statement (last 3 months)." }
];

export default function Educationloan() {
    return (
        <div className="bg-white color-[#1f2933] font-['Poppins',_sans-serif] px-3 py-4 sm:p-0">

            {/* 🔥 HERO BANNER SECTION */}
            <div
                className="w-full relative rounded-[10px] sm:rounded-[14px] md:rounded-[20px] overflow-hidden bg-center bg-no-repeat bg-cover flex items-center h-[240px] sm:h-[340px] lg:h-[520px] xl:h-[650px] 2xl:h-[720px]"
                style={{ backgroundImage: `url(${Edubanner})` }}
            >
                <div className="absolute right-3 bottom-3 sm:right-5 sm:bottom-5 md:right-10 md:bottom-10 flex justify-end items-end z-10">
                    <InvestForm
                        buttonLabel="Apply Now"
                        buttonClassName="bg-[#9acd00] text-white border-none h-10 sm:h-11 md:h-[54px] px-[14px] sm:px-[18px] md:px-7 rounded-[10px] md:rounded-xl font-bold text-xs sm:text-sm md:text-16px cursor-pointer shadow-[0_8px_20px_rgba(0,0,0,0.15)] transition-all duration-300 ease-in-out hover:-translate-y-0.5 hover:bg-[#84b800]"
                    />
                </div>
            </div>

            {/* 📦 SHELL STRUCTURE */}
            <div className="w-full max-w-none m-0 grid grid-columns-1 lg:grid-cols-[1.5fr_340px] gap-7 items-start mt-6">

                {/* LEFT MAIN CONTENT */}
                <div className="flex flex-col gap-[18px]">

                    {/* Card 1: Main Callout */}
                    <article className="bg-white rounded-xl p-3 sm:p-[14px_16px] shadow-[0_12px_24px_rgba(0,0,0,0.06)] border border-gray-200">
                        <h1 className="m-0 mb-2 text-[#7ab600] text-base font-bold">Apply For Education Loan</h1>
                        <p className="text-[#3c4453] text-xs sm:text-[13px] line-height-[1.55]">
                            Investing in your education is the first step towards a successful career. Our Educational Loan offers you the financial support you need to pursue higher studies, whether it’s in India or abroad.
                        </p>
                        <div className="mt-3">
                            <InvestForm
                                buttonLabel="Apply Now"
                                buttonClassName="bg-[#7ab600] text-black border border-[#6ca200] rounded-md p-[8px_14px] font-bold text-xs cursor-pointer shadow-[0_8px_16px_rgba(122,182,0,0.25)] mb-[10px]"
                            />
                        </div>
                    </article>

                    {/* Card 2: Key Features */}
                    <article className="bg-white rounded-xl p-3 sm:p-[14px_16px] shadow-[0_12px_24px_rgba(0,0,0,0.06)] border border-gray-200">
                        <h2 className="m-0 mb-2 text-[#7ab600] text-base font-bold">Key Features</h2>

                        <ol className="m-0 pl-[18px] text-gray-800 text-xs line-height-[1.5] list-decimal block">
                            {Keyfeatures?.map((item) => (
                                item?.title && (
                                    <li key={item.title} className="mb-2.5">
                                        <strong>{item.title}:</strong> {item.description || ""}
                                    </li>
                                )
                            ))}
                        </ol>

                        <div className="text-[#3c4453] text-xs sm:text-[13px] line-height-[1.55] mt-3">
                            <span className="font-bold">5. Eligibility</span>
                            <div className="pl-3 mt-1">– Minimum age of [X] years</div>
                            <div className="pl-3">– Stable monthly income of [X amount]</div>
                            <div className="pl-3">– [Other criteria, e.g. employeeType status, credit score, etc.]</div>
                        </div>

                        <img className="w-full rounded-md my-2.5 md:my-3 block object-cover" src={Eduimg1} alt="Mutual fund investments banner" />
                    </article>

                    {/* Card 3: Benefits */}
                    <article className="bg-white rounded-xl p-3 sm:p-[14px_16px] shadow-[0_12px_24px_rgba(0,0,0,0.06)] border border-gray-200">
                        <h2 className="m-0 mb-2 text-[#7ab600] text-base font-bold">Why Choose Our Education Loan?</h2>

                        <ol className="m-0 pl-[18px] text-gray-800 text-xs line-height-[1.5] list-decimal block">
                            {benefits?.map((item) => (
                                item?.title && (
                                    <li key={item.title} className="mb-2.5">
                                        <strong>{item.title}</strong> {item.description || ""}
                                    </li>
                                )
                            ))}
                        </ol>

                        {/* Inline Icon Grid */}
                        <div className="grid grid-cols-[repeat(auto-fit,_minmax(120px,_1fr))] gap-2.5 items-center mt-3">
                            {[
                                { icon: Flexiblerepayment, label: "Flexible Repayment" },
                                { icon: QuickApprol, label: "Quick Approval" },
                                { icon: Attractiveinterestrate, label: "Attractive Interest Rates" },
                                { icon: Insurancecoverage, label: "Insurance Coverage" },
                            ].map(({ icon, label }) => (
                                label && (
                                    <div key={label} className="flex flex-col gap-1.5 items-center text-center text-[11px] text-[#6b6f76]">
                                        {icon && <img src={icon} alt={label} className="w-[72px] h-[72px] object-cover mx-auto" />}
                                        <span>{label}</span>
                                    </div>
                                )
                            ))}
                        </div>
                    </article>

                    {/* EMI Calculator Widget Wrapper */}
                    <section className="w-full">
                        <EmiCalculator />
                    </section>

                    {/* Card 4: Application Process */}
                    <article className="bg-white rounded-xl p-3 sm:p-[14px_16px] shadow-[0_12px_24px_rgba(0,0,0,0.06)] border border-gray-200">
                        <h2 className="m-0 mb-2 text-[#7ab600] text-base font-bold">How It Apply</h2>

                        <ol className="m-0 pl-[18px] text-gray-800 text-xs line-height-[1.5] list-decimal block">
                            {chooseReasons?.map((item, index) => (
                                item?.text && (
                                    <li key={index} className="mb-2.5">
                                        {item.text}
                                    </li>
                                )
                            ))}
                        </ol>

                        {/* Row Icon Grid */}
                        <div className="grid grid-cols-[repeat(auto-fit,_minmax(130px,_1fr))] gap-2.5 mt-2 items-start">
                            {[
                                { icon: applicationform, label: "Application Form" },
                                { icon: Necessary, label: "Document Submit" },
                                { icon: Approval, label: "Approval" },
                            ].map(({ icon, label }) => (
                                label && (
                                    <div key={label} className="flex flex-col gap-1.5 items-center text-center text-[11px] text-[#6b6f76]">
                                        {icon && <img src={icon} alt={label} className="w-[70px] h-[70px] object-cover mx-auto" />}
                                        <span>{label}</span>
                                    </div>
                                )
                            ))}
                        </div>
                    </article>

                    {/* Card 5: Documents Required */}
                    <article className="bg-white rounded-xl p-3 sm:p-[14px_16px] shadow-[0_12px_24px_rgba(0,0,0,0.06)] border border-gray-200">
                        <h2 className="m-0 mb-2 text-[#7ab600] text-base font-bold">Documents Required</h2>
                        <ol className="m-0 pl-[18px] text-gray-800 text-xs line-height-[1.5] list-decimal block">
                            {Documentsrequired?.map((item, index) => (
                                item?.text && (
                                    <li key={index} className="mb-2.5">
                                        {item.text}
                                    </li>
                                )
                            ))}
                        </ol>
                    </article>

                    {/* Card 6: Terms and Conditions */}
                    <article className="bg-white rounded-xl p-3 sm:p-[14px_16px] shadow-[0_12px_24px_rgba(0,0,0,0.06)] border border-gray-200">
                        <h1 className="m-0 mb-2 text-[#7ab600] text-base font-bold">Terms & Conditions</h1>
                        <p className="text-[#3c4453] text-xs sm:text-[13px] line-height-[1.55]">
                            Loan eligibility is subject to credit assessment and course recognition.
                        </p>
                        <p className="text-[#3c4453] text-xs sm:text-[13px] line-height-[1.55] mt-1">
                            Interest rates and repayment options may vary based on the loan amount and tenure.
                        </p>
                        <div className="mt-3">
                            <InvestForm
                                buttonLabel="Apply Now"
                                buttonClassName="bg-[#7ab600] text-black border border-[#6ca200] rounded-md p-[8px_14px] font-bold text-xs cursor-pointer shadow-[0_8px_16px_rgba(122,182,0,0.25)] mb-[10px]"
                            />
                        </div>
                    </article>
                </div>

                {/* RIGHT SIDEBAR PANEL */}
                <div className="lg:sticky lg:top-3 w-full">
                    <BookConsultancy />
                </div>
            </div>
        </div>
    );
}