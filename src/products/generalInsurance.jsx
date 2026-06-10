import React from "react";
import BookConsultancy from "../../components/bookConsultancy";
import InvestForm from "./investFormGeneral";

import mutualCover from "../assets/products/generalInsurance/generalinsuranceee.png";
import banner2 from "../assets/products/generalInsurance/Finserve-General-Insurance.webp";
import bannerImg from "../assets/investments/main/why-849x1024-1-1-768x926.webp";

export default function GeneralInsurancePage() {
  const handleFormSubmit = async (data) => {
    const payload = {
      ...data,
      productCategory: "General Insurance",
      fundType: data.fundType,
    };

    console.log("Submitting Payload:", payload);

    // Example API call
    /*
    await fetch("https://bynd-backend-owi6.onrender.com/api/products/general-insurance", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });
    */
  };

  return (
    <div className="bg-white text-gray-800 font-[Poppins] w-full overflow-hidden">

      {/* HERO SECTION */}
      <div
        className="relative w-full min-h-[400px] rounded-2xl overflow-hidden bg-center bg-cover"
        style={{
          backgroundImage: `url(${mutualCover})`,
        }}
      >
        <div className="absolute bottom-0 left-0 w-full p-10 flex items-end">
          <a
            href="#apply-section"
            className="inline-flex items-center gap-2 bg-lime-400 hover:bg-lime-500 transition-all duration-300 text-black font-bold text-base h-13 px-6 rounded-xl shadow-md"
          >
            Apply Now
            <span>→</span>
          </a>
        </div>
      </div>

      {/* MAIN LAYOUT */}
      <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_340px] gap-7 mt-5 w-full">

        {/* LEFT SIDE */}
        <div className="flex flex-col gap-6">

          {/* APPLY CARD */}
          <article
            id="apply-section"
            className="bg-white rounded-xl p-5 shadow-lg border border-gray-200"
          >
            <h1 className="text-3xl font-bold text-gray-800 mb-4">
              General Insurance
            </h1>

            <InvestForm
              buttonLabel="Apply Now"
              buttonClassName="bg-lime-600 hover:bg-lime-700 text-white px-4 py-2 rounded-md font-bold transition-all duration-300"
              onSubmit={handleFormSubmit}
            />

            <img
              className="w-full rounded-lg mt-5"
              src={banner2}
              alt="General insurance banner"
            />
          </article>

          {/* WHY CHOOSE */}
          <article className="bg-white rounded-xl p-5 shadow-lg border border-gray-200">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">
              Why Choose Bynd Finserve?
            </h2>

            <img
              className="w-full rounded-lg mb-4"
              src={bannerImg}
              alt="Why choose"
            />

            <p className="text-gray-600 leading-7">
              We offer customized, affordable, and comprehensive insurance
              solutions with 24/7 support. Our expert advisors help you choose
              the best insurance plans based on your financial goals and risk
              coverage requirements.
            </p>
          </article>
        </div>

        {/* RIGHT SIDEBAR */}
        <div className="w-full">
          <BookConsultancy />
        </div>
      </div>

      {/* TYPES SECTION */}
      <section className="mt-10 w-full bg-lime-50 p-6 rounded-2xl">
        <h3 className="text-2xl font-bold text-gray-800 mb-4">
          Types of Insurance We Offer
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">

          <div className="bg-white rounded-xl shadow-md p-5 border border-gray-200">
            <h4 className="text-lg font-semibold mb-2">
              Health Insurance
            </h4>

            <p className="text-sm text-gray-600">
              Covers medical expenses, hospitalization, and emergency treatment.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-5 border border-gray-200">
            <h4 className="text-lg font-semibold mb-2">
              Motor Insurance
            </h4>

            <p className="text-sm text-gray-600">
              Protects your vehicle against accidents, theft, and damages.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-5 border border-gray-200">
            <h4 className="text-lg font-semibold mb-2">
              Travel Insurance
            </h4>

            <p className="text-sm text-gray-600">
              Provides coverage for trip cancellations, baggage loss, and emergencies.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-5 border border-gray-200">
            <h4 className="text-lg font-semibold mb-2">
              Home Insurance
            </h4>

            <p className="text-sm text-gray-600">
              Protects your home and belongings against disasters and theft.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-5 border border-gray-200">
            <h4 className="text-lg font-semibold mb-2">
              Commercial Insurance
            </h4>

            <p className="text-sm text-gray-600">
              Business protection against operational and financial risks.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-5 border border-gray-200">
            <h4 className="text-lg font-semibold mb-2">
              Personal Accident Insurance
            </h4>

            <p className="text-sm text-gray-600">
              Financial protection against accidental injuries and disability.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}