import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import bgImg from '../assets/qwert.png';
import homeLoanIcon from '../assets/loans/Propertyval.png';
import usedCarLoanIcon from '../assets/investments/Management-300x300.webp';
import educationLoanIcon from '../assets/investments/privateCredit/High-Yield-Potential.webp';
import goldLoanIcon from '../assets/loans/approval.png';
import medicalLoanIcon from '../assets/loans/Attractive-Interest-Rates.png';
import machineryLoanIcon from '../assets/investments/Personalized-Investment-Strategies-300x300.webp';
import supplyChainIcon from '../assets/loans/Manageyourloan.png';
import smeLapIcon from '../assets/investments/privateCredit/Tailored-Investment-Solutions.webp';

const cards = [
  { label: 'SME LAP', desc: 'High-value secured loans', badge: 'Quick Approval', icon: smeLapIcon, link: '/loans/loan-against-property' },
  { label: 'Used Car Loan', desc: 'Easy loans for cars', badge: 'Quick Approval', icon: usedCarLoanIcon, link: '/loans/vehicle' },
  { label: 'Home Loan', desc: 'Affordable financing for homes', icon: homeLoanIcon, link: '/loans/home' },
  { label: 'Education Loan', desc: 'Finance higher education easily', icon: educationLoanIcon, link: '/loans/education' },
  { label: 'Gold Loan', desc: 'Instant credit against your gold', icon: goldLoanIcon, link: '/loans/loan-against-share' },
  { label: 'Medical Loan', desc: 'Finance medical expenses', icon: medicalLoanIcon, link: '/loans/medical' },
  { label: 'Life Insurance', desc: 'Finance machinery and equipment', icon: machineryLoanIcon, link: '/products/life-insurance' },
  { label: 'Loan Against Share', desc: 'Improve cash flow efficiency', icon: supplyChainIcon, link: '/loans/loan-against-share' }
];

const underlineWords = [
  'Credit Offers', 'EMI Options', 'Finance Offers', 'Loan Options', 'Private Credit', 'Funding Solutions', 'Smart Loans'
];

export default function HeroSection() {
  const [wordIdx, setWordIdx] = useState(0);
  const [hoveredIdx, setHoveredIdx] = useState(null);
  useEffect(() => {
    const timer = setTimeout(() => {
      setWordIdx((prev) => (prev + 1) % underlineWords.length);
    }, 1800);
    return () => clearTimeout(timer);
  }, [wordIdx]);

  return (
    <section
      className="relative overflow-hidden min-h-[520px] bg-center bg-cover bg-no-repeat py-6 md:py-8 pb-10 md:pb-16"
      style={{
        backgroundImage: `linear-gradient(90deg, rgba(255,255,255,0.92) 60%, rgba(255,255,255,0.85) 100%), url(${bgImg})`,
      }}
      id="hero-section"
    >
      <div className="max-w-[1200px] mx-auto px-3 sm:px-4 md:px-5">
        
        {/* Headline */}
        <div className="text-center pt-5 md:pt-9 mb-6">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-[#1a1a1a] m-0 tracking-wide leading-tight drop-shadow-sm px-2">
            Compare Trusted{' '}
            <span className="text-[#7ab600] font-black relative inline-block min-w-[120px] sm:min-w-[160px] md:min-w-[180px]">
              <span className="relative z-10">
                {underlineWords[wordIdx]}
              </span>
              
              {/* Decorative Underlines */}
              <span className="absolute left-0 -bottom-1.5 h-1.5 w-full rounded-full opacity-50 bg-gradient-to-r from-[#7ab600] to-[#eaffd0]" />
              <span className="absolute left-0 -bottom-0.5 h-[2px] w-full bg-[#7ab600]" />
            </span>
            <br />
            in Just Minutes
          </h1>

          {/* Subtitle */}
          <div className="text-sm sm:text-base md:text-xl lg:text-2xl text-[#3c4453] mt-3 md:mt-5 font-semibold drop-shadow-sm px-2.5 Casino leading-normal">
            One application. Multiple lenders. Clear loan choices.
          </div>

          {/* Primary CTA Button */}
          <div className="mt-4 md:mt-8 mb-8 md:mb-16">
            <Link
              to="/loans/loan-against-property"
              onClick={() => window.scrollTo(0, 0)}
              className="inline-block bg-[#7ab600] text-white rounded-full py-2.5 sm:py-3.5 px-5 sm:px-11 text-sm sm:text-lg lg:text-xl font-extrabold shadow-[0_4px_18px_rgba(122,182,0,0.13)] transition duration-200 hover:bg-[#6aa000]"
            >
              Check Eligibility
            </Link>
          </div>
        </div>
        {/* Product Grid Area */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-7">
          {cards.map((card, idx) => {
            const isHovered = hoveredIdx === idx;

            return (
              <div
                key={card.label}
                className="bg-white rounded-2xl shadow-[0_2px_16px_rgba(139,199,0,0.10)] p-2.5 flex flex-col items-center border border-[#ececec] min-h-[160px] transition-all duration-200"
                onMouseEnter={() => setHoveredIdx(idx)}
                onMouseLeave={() => setHoveredIdx(null)}
              >
                <img 
                  src={card.icon} 
                  alt={card.label} 
                  className="w-12 h-12 mb-3 object-contain" 
                />

                <div className="font-bold text-base sm:text-lg lg:text-xl text-center text-[#1a1a1a]">
                  {card.label}
                </div>

                <div className="text-xs sm:text-sm lg:text-[15.5px] text-center text-gray-600 mb-2.5">
                  {card.desc}
                </div>

                {/* Conditional Visibility Block (Always visible on mobile, hover-triggered on desktop) */}
                <div 
                  className={`mt-auto transition-all duration-200 ${
                    isHovered ? 'md:opacity-100 md:translate-y-0' : 'md:opacity-0 md:translate-y-2 pointer-events-none md:absolute'
                  } block md:block`}
                >
                  <Link
                    to={card.link}
                    onClick={() => window.scrollTo(0, 0)}
                    className="inline-block bg-[#7ab600] text-white rounded-full py-1.5 px-4 text-sm font-bold shadow-[0_2px_8px_rgba(122,182,0,0.10)] transition-colors duration-200 hover:bg-[#6aa000]"
                  >
                    Check Eligibility
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}