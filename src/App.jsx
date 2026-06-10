import { Routes, Route } from 'react-router-dom'
import './App.css'
import Header from '../components/header.jsx'
import Footer from '../components/footer.jsx'
import BookConsultancy from '../components/bookConsultancy.jsx'
import NotFoundPage from './404/404.jsx'
import InvestInMutualFunds from './investmentPlans/investInMutualFunds.jsx'
import InvestInPrivateCredit from './investmentPlans/investInPrivateCredit.jsx'
import InvestInEquity from './investmentPlans/investmentInEquity.jsx'
import InvestmentPlanPage from './investmentPlans/investmentPlan.jsx'
import CreditCardPage from './products/creditCard.jsx'
import CreditCardForm from './products/creditCardForm.jsx'
import LifeInsurancePage from './products/lifeInsurance.jsx'
import GeneralInsurancePage from './products/generalInsurance.jsx'
import Service from './services/service.jsx'
import WhyChooseUs from '../components/whyChooseUs.jsx'
import WhatWeDo from '../components/whatWeDo.jsx'
import FAQ from '../components/FAQ.jsx'
import AboutUs from './support/aboutUs.jsx'
import ContactUs from './support/contactUs.jsx'
import LoanAgainstProperty from './loans/loanAgainstProperty.jsx'
import VehicleLoan from './loans/vehicleLoan.jsx'
import EducationLoan from './loans/educationLoan.jsx'
import MedicalLoan from './loans/medicalLoan.jsx'
import LoanAgainstShare from './loans/loanAgainstShare.jsx'
import ApproachSection from '../components/ApproachSection'
import CtaSection from '../components/CtaSection.jsx'
import LandingPage from './landingPage/landingPage.jsx'
import TermCondition from './policy/termCondition.jsx'
import PrivacyPolicy from './policy/privacyPolicy.jsx'
import Disclaimer from './policy/disclaimer.jsx'
import PartnerWithUs from '../components/partner-with-us.jsx'
import Sitemap from '../components/sitemap.jsx'
import HeroSection from './landingPage/heroSection.jsx'
import InvestFormGeneral from './products/investFormGeneral.jsx'
import OurServices from '../components/ourServices.jsx'
import HomeLoan from './loans/homeLoan.jsx'
import Supplychainfinance from './loans/Supplychain.jsx'
function App () {
  return (
    <div
      style={{
        width: '100%',
        maxWidth: '100%',
        margin: '0 auto',
        padding: '1px'
      }}
    >
      <Header />

      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/hero' element={<HeroSection />} />
        <Route path='/our-services' element={<OurServices />} />
        <Route path='/general-insurance' element={<InvestFormGeneral />} />

        <Route path='/loans/loan-against-property' element={<LoanAgainstProperty />} />
        <Route path='/loans/vehicle' element={<VehicleLoan />} />
        <Route path='/loans/education' element={<EducationLoan />} />
        <Route path='/loans/medical' element={<MedicalLoan />} />
          <Route path='/loans/supply-chain' element={<Supplychainfinance />} />
        <Route
          path='/loans/loan-against-share'
          element={<LoanAgainstShare />}
        />
        <Route path='/loans/home' element={<HomeLoan />} />
        <Route path='/investment-plans' element={<InvestmentPlanPage />} />
        <Route
          path='/investment-plans/mutual-funds'
          element={<InvestInMutualFunds />}
        />
        <Route
          path='/investment-plans/private-credit'
          element={<InvestInPrivateCredit />}
        />
        <Route path='/investment-plans/equity' element={<InvestInEquity />} />

        <Route path='/products/credit-card' element={<CreditCardPage />} />
        <Route
          path='/products/credit-card/apply'
          element={<CreditCardForm />}
        />
        <Route
          path='/products/life-insurance'
          element={<LifeInsurancePage />}
        />
        <Route
          path='/products/general-insurance'
          element={<GeneralInsurancePage />}
        />

        <Route path='/services' element={<Service />} />

        <Route path='/support/about-us' element={<AboutUs />} />
        <Route path='/support/contact-us' element={<ContactUs />} />

        <Route path='/consultancy' element={<BookConsultancy />} />
        <Route path='/faq' element={<FAQ />} />
        <Route path='/why-choose-us' element={<WhyChooseUs />} />
        <Route path='/what-we-do' element={<WhatWeDo />} />

        <Route path='/terms' element={<TermCondition />} />
        <Route path='/privacy-policy' element={<PrivacyPolicy />} />
        <Route path='/disclaimer' element={<Disclaimer />} />
        <Route path='/partner-with-us' element={<PartnerWithUs />} />
        <Route path='/sitemap' element={<Sitemap />} />
        {/* Catch-all 404 — must always be last */}
        <Route path='*' element={<NotFoundPage />} />
         
      </Routes>

      <Footer />
    </div>
  )
}

export default App
