import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Autoplay } from 'swiper/modules'
import ClientsSection from '@/components/ClientsSection'
import CtaSection from '@/components/CtaSection'
import WhatWeDo from '@/components/whatWeDo'
import HeroSection from './heroSection'
import OurServices from '../../components/ourServices'
// import coverImg from '../assets/loans/Loan-Against-Property-banner.png'
import coverImg from '../assets/homepage/hero.jpg';
import WhyChooseUs from '@/components/whyChooseUs'
import FAQ from '../../components/FAQ'
import FaqSection from '../../components/FaqSection'
import investmentImg from '../assets/service/Investment-Products-768x432.webp'
import insuranceImg from '../assets/service/Insurance-Solutions-1024x576.webp'
import bankingImg from '../assets/service/Banking-Solutions-1024x576.webp'
import advisoryImg from '../assets/service/Financial-Advisory-300x169.webp'
import wealthImg from '../assets/service/Wealth-Management-1024x576.webp'
import taxImg from '../assets/service/Tax-768x364.webp'
import retirementImg from '../assets/service/retirement-300x173.webp'
import estateImg from '../assets/service/estate-and-trust-services-500x500-1-300x189.webp'
import EmiCalculator from '../../components/EmiCalculator'
import 'swiper/css'
import 'swiper/css/navigation'
const partners = [
  {
    name: 'Money View',
    logo: 'https://img-cdn.thepublive.com/fit-in/1280x960/filters:format(webp)/entrackr/media/post_attachments/wp-content/uploads/2022/11/Moneyview.jpg'
  },
  {
    name: 'Godrej Capital',
    logo: 'https://mma.prnewswire.com/media/1797794/Godrej_Capital_Logo.jpg?p=facebook'
  },
  {
    name: 'Incred',
    logo: 'https://th.bing.com/th/id/OIP.RYvIGC3_AsjCfHiNBjD89AHaCs?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3'
  },
  {
    name: 'Muthoot Fincorp',
    logo: 'https://img-cdn.thepublive.com/filters:format(webp)/industry-wired/media/post_attachments/wp-content/uploads/2022/04/Muthoot-FinCorp-Embarks-on-a-Path-Breaking-Digital-Transformation-Journey.jpg'
  },
  {
    name: 'Aambvit Finserv',
    logo: 'https://tse4.mm.bing.net/th/id/OIP.U5TuZsST7bqI60Uy3Jmr-AHaDD?rs=1&pid=ImgDetMain&o=7&rm=3'
  }
]

const data = [
  {
    title: '1. Innovative Technology',
    content:
      'Harness the power of advanced algorithms and real-time data analytics to make informed investment decisions.',
    img: 'https://images.unsplash.com/photo-1518611505868-48510c2e022f?w=800&h=600&fit=crop'
  },
  {
    title: '2. Personalized Investment Strategies',
    content:
      'Our platform tailors investment strategies to fit your goals and risk tolerance.',
    img: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop'
  },
  {
    title: '3. Comprehensive Market Insights',
    content:
      'Access market research, expert analyses, and financial news easily.',
    img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop'
  },
  {
    title: '4. User-Friendly Interface',
    content: 'Navigate your investments with a smooth and intuitive platform.',
    img: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop'
  },
  {
    title: '5. Security and Trust',
    content:
      'We use top-level encryption to protect your data and transactions.',
    img: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=600&fit=crop'
  },
  {
    title: '6. 24/7 Support',
    content: 'Our support team is available anytime to help you.',
    img: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop'
  }
]

const services = [
  {
    img: investmentImg,
    title: 'Investment Planning',
    desc: 'Strategic guidance for wealth growth'
  },
  {
    img: insuranceImg,
    title: 'Insurance Solutions',
    desc: 'Secure your financial future'
  },
  {
    img: bankingImg,
    title: 'Banking Solutions',
    desc: 'Real-time transactions and support'
  },
  {
    img: advisoryImg,
    title: 'Financial Advisory',
    desc: 'Expert advisors dedicated to you'
  },
  {
    img: wealthImg,
    title: 'Wealth Management',
    desc: 'Tailored solutions for your dreams'
  },
  {
    img: taxImg,
    title: 'Tax Planning',
    desc: 'Optimize your financial strategy'
  },
  {
    img: retirementImg,
    title: 'Retirement Planning',
    desc: 'Secure your golden years ahead'
  },
  {
    img: estateImg,
    title: 'Estate & Trust Services',
    desc: 'Protect legacy for future generations'
  }
]
const indianClients = [
  {
    name: 'Amit Sharma',
    img: 'https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=400&h=400&fit=crop'
  },
  {
    name: 'Priya Verma',
    img: 'https://images.unsplash.com/photo-1595152772835-219674b2a8a6?w=400&h=400&fit=crop'
  },
  {
    name: 'Rahul Mehta',
    img: 'https://images.unsplash.com/photo-1615109398623-88346a601842?w=400&h=400&fit=crop'
  },
  {
    name: 'Neha Kapoor',
    img: 'https://images.unsplash.com/photo-1589571894960-20bbe2828d0a?w=400&h=400&fit=crop'
  },
  {
    name: 'Arjun Patel',
    img: 'https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?w=400&h=400&fit=crop'
  },
  {
    name: 'Sneha Iyer',
    img: 'https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=400&h=400&fit=crop'
  }
]

export default function LandingPage() {
  const [activeIndex, setActiveIndex] = useState(null)
  const [image, setImage] = useState(
    'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop'
  )

  return (
    <>
      <style>{`
      
        .mutual-cover,
        .mutual-banner {
          width: 100%;
          max-width: 100%;
          border-radius: 16px;
          margin: 0 auto 0px;
          display: block;
          box-shadow: 0 20px 50px rgba(15,23,42,0.12);
        }

        .mutual-cover {
          height: auto;
          max-height: 800px;
          max-width: 100%;
          object-fit: cover;
          object-position: center;
          background-color: #f8fafc;
        }

        @media (max-width: 768px) {
          .mutual-cover,
          .mutual-banner {
            max-height: 400px;
            max-width: 100%;
            margin: 0 auto 30px;
          }
        }

        @media (max-width: 480px) {
          .mutual-cover,
          .mutual-banner {
            max-height: 280px;
            max-width: 100%;
            margin: 0 auto 20px;
            border-radius: 12px;
          }
        }

        /* Responsive service grid */
        @media (max-width: 768px) {
          .services-grid {
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 16px;
          }
        }

        @media (max-width: 480px) {
          .services-grid {
            grid-template-columns: 1fr;
            gap: 12px;
          }
        }

        /* Responsive why grid */
        @media (max-width: 1024px) {
          .why-grid-responsive {
            grid-template-columns: 1fr;
          }
        }

        /* Image improvement - ensure all images are visible */
        img {
          max-width: 100%;
          height: auto;
        }

        /* Why Choose Us responsive adjustments */
        @media (max-width: 1024px) {
          .why-choose-us-section {
            padding: 24px;
            gap: 20px;
          }
        }

        @media (max-width: 768px) {
          .why-choose-us-section {
            padding: 20px 16px;
            gap: 16px;
          }
        }

        /* Partners section responsive */
        @media (max-width: 768px) {
          .partners-section {
            padding: 30px 16px;
            margin-bottom: 30px;
          }
        }

        @media (max-width: 480px) {
          .partners-section {
            padding: 20px 12px;
            margin-bottom: 20px;
          }
        }

        /* General responsive improvements */
        @media (max-width: 768px) {
          h2 {
            font-size: 24px;
          }
        }

        @media (max-width: 480px) {
          h2 {
            font-size: 20px;
          }
        }

        /* Invest section responsive */
        @media (max-width: 1024px) {
          .invest-section {
            padding: 60px 20px;
          }
          
          .invest-container {
            grid-template-columns: 1fr;
            gap: 32px;
          }
        }

        @media (max-width: 768px) {
          .invest-section {
            padding: 40px 16px;
          }

          .invest-title {
            font-size: 28px;
          }

          .invest-image-wrapper {
            max-height: 350px;
          }
        }

        @media (max-width: 480px) {
          .invest-section {
            padding: 30px 12px;
          }

          .invest-title {
            font-size: 24px;
          }

          .invest-container {
            gap: 20px;
          }

          .invest-image-wrapper {
            max-height: 280px;
          }
        }

        /* EMI Calculator section responsive */
        @media (max-width: 1024px) {
          .emi-section {
            padding: 30px 0 0 0;
          }
        }

        @media (max-width: 768px) {
          .emi-section {
            padding: 20px 0 0 0;
          }
        }

        @media (max-width: 480px) {
          .emi-section {
            padding: 15px 0 0 0;
          }
        }

        /* Remove space between EMI and Clients sections */
        .emi-section + div {
          margin-top: 0 !important;
          padding-top: 0 !important;
        }

        .emi-section ~ section {
          margin-top: 0 !important;
        }
      `}</style>
      <div style={styles.page}>
      <div className="hero-banner">

  {/* ✅ REAL IMAGE */}
  <img src={coverImg} alt="Loan Banner" className="hero-image" />

  {/* Overlay */}
  <div className="overlay">
    <a
      href="#"
      onClick={(e) => {
        e.preventDefault();
        document.getElementById("hero-section")?.scrollIntoView({
          behavior: "smooth",
        });
      }}
      className="apply-btn"
    >
      Apply Now <span>→</span>
    </a>
  </div>

  <style>{`

    .hero-banner {
      width: 100%;
      height: 500px;

      position: relative;
      overflow: hidden;
      border-radius: 20px;

      background: #f5f5f5;
    }

    /* ✅ PERMANENT IMAGE FIX */
    .hero-image {
      position: absolute;
      inset: 0;

      width: 100%;
      height: 100%;

      object-fit: cover;

      /* 🔥 MAIN FIX */
      object-position: top center;

      display: block;
    }

    /* Overlay */
    .overlay {
      position: absolute;
      inset: 0;

      display: flex;
      align-items: flex-end;
      justify-content: flex-start;

      padding: 40px;

      z-index: 2;
    }

    .apply-btn {
      background: #b4dc14;
      color: black;
      font-weight: 700;

      font-size: 16px;
      height: 52px;

      padding: 0 26px;

      border-radius: 12px;
      text-decoration: none;

      display: inline-flex;
      align-items: center;
      gap: 8px;

      box-shadow: 0 8px 24px rgba(122,182,0,0.18);
      transition: all 0.25s ease;
    }

    .apply-btn:hover {
      background: #8bc700;
      transform: translateY(-2px);
    }

    /* ✅ LARGE DESKTOP */
    @media (min-width: 1400px) {
      .hero-banner {
        height: 580px;
      }
    }

    /* ✅ TABLET */
    @media (max-width: 768px) {

      .hero-banner {
        height: 300px;
        border-radius: 14px;
      }

      .overlay {
        padding: 20px;
      }

      .apply-btn {
        height: 46px;
        font-size: 14px;
        padding: 0 18px;
      }
    }

    /* ✅ MOBILE */
    @media (max-width: 480px) {

      .hero-banner {
        height: 220px;
      }

      .apply-btn {
        font-size: 13px;
        height: 42px;
        padding: 0 14px;
      }
    }

  `}</style>

</div>
        <HeroSection />

        {/* OUR SERVICES */}
        <OurServices />

        {/* EMI */}
        <section style={styles.emiSection} className='emi-section'>
          <EmiCalculator />
        </section>
        {/* INVEST IN COMPANY */}
        <section className="invest-section">

          <div className="invest-container">

            {/* TEXT */}
            <div className="invest-text">

              <h2 className="invest-title">
                Empower Your Financial Growth
              </h2>

              <p className="invest-tagline">
                🌟 Your Trusted Loan Partner
              </p>

              <p className="invest-desc">
                Unlock tailored loan solutions with Byndfinserve—your expert
                in secured, transparent, and fast loan services.
              </p>

              <ul className="invest-list">
                <li>Specialized in secured loans: property, vehicle, education, medical & more</li>
                <li>Expert guidance every step of the way</li>
                <li>Quick approvals & minimal paperwork</li>
                <li>Trusted by 1000+ happy clients</li>
              </ul>

              <p className="invest-desc">
                Experience the Byndfinserve difference—where your financial goals come first.
              </p>

              <a href="/investment-plans/" className="primary-btn">
                Explore Loan Options →
              </a>

            </div>

            {/* IMAGE */}
            <div className="invest-image">
              <img
                src="https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?w=800"
                alt="Loan Service"
              />
            </div>

          </div>

          <style>{`

    .invest-section {
      width: 100%;
      padding: 50px 20px;
    }

    .invest-container {
      display: flex;
      align-items: flex-start; /* 🔥 FIX: align top */
      justify-content: space-between;
      gap: 60px;

      max-width: 1200px;
      margin: auto;
    }

    /* TEXT */
    .invest-text {
      flex: 1;
      max-width: 600px;
    }

    .invest-title {
      font-size: clamp(26px, 3vw, 40px);
      font-weight: 800;
      margin-bottom: 12px;
    }

    .invest-tagline {
      font-weight: 700;
      margin-bottom: 10px;
    }

    .invest-desc {
      color: #1e293b;
      margin-bottom: 10px;
      line-height: 1.5;
    }

    .invest-list {
      margin-left: 18px;
      margin-bottom: 14px;
      color: #334155;
    }

    .primary-btn {
      display: inline-block;
      margin-top: 18px;
      background: #b4dc14;
      padding: 12px 24px;
      border-radius: 999px;
      font-weight: 700;
      text-decoration: none;
      color: black;
    }

    /* IMAGE */
    .invest-image {
      flex: 1;
      display: flex;
      justify-content: flex-end;
      align-items: flex-start; /* 🔥 align top */
    }

    .invest-image img {
      width: 100%;
      max-width: 380px;

      border-radius: 16px;

      /* better shape */
      aspect-ratio: 4 / 3;
      object-fit: cover;
    }

    /* ✅ MOBILE */
    @media (max-width: 768px) {
      .invest-container {
        flex-direction: column;
        gap: 30px;
      }

      .invest-image {
        justify-content: center;
      }

      .invest-image img {
        max-width: 100%;
      }

      .primary-btn {
        width: 100%;
        text-align: center;
      }
    }

  `}</style>

        </section>

        <WhatWeDo />

        <div style={styles.partnersSection} className='partners-section'>
          <h2>Our Partners</h2>
          <p>
            Together, we leverage our strengths to enhance the services we
            offer.
          </p>

          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={20}
            slidesPerView={5}
            navigation
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true
            }}
            loop={true}
            breakpoints={{
              0: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 5 }
            }}
          >
            {partners.map((partner, index) => (
              <SwiperSlide key={index}>
                <div style={styles.partnerCard}>
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    style={styles.partnerLogo}
                  />
                  {/* <p style={styles.partnerName}>{partner.name}</p> */}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <ClientsSection />

        {/* WHY CHOOSE US */}
        {/* <section style={styles.section}>
          <div style={styles.whyShell} className='why-choose-us-section'>
            <div style={styles.whyHeader}>
              <div>
                <p style={styles.whyEyebrow}>Clear advice, steady execution</p>
                <h2 style={styles.whyTitle}>Why choose Bynd?</h2>
                <p style={styles.whySub}>
                  A human team you can reach, plain-english updates, and plans
                  built around what matters most to you.
                </p>
              </div>
            </div>

            <div style={styles.whyGrid} className='why-grid-responsive'>
              <div style={styles.whyList}>
                {data.map((item, index) => {
                  const isOpen = activeIndex === index
                  return (
                    <div
                      key={index}
                      style={{
                        ...styles.accordionItem,
                        borderColor: isOpen
                          ? 'hsl(var(--primary))'
                          : 'hsl(var(--border))',
                        boxShadow: isOpen
                          ? '0 12px 26px rgba(0,0,0,0.08)'
                          : '0 8px 18px rgba(0,0,0,0.05)'
                      }}
                    >
                      <button
                        type='button'
                        style={{
                          ...styles.title,
                          color: isOpen ? 'hsl(var(--primary))' : '#0f172a'
                        }}
                        onClick={() => setActiveIndex(isOpen ? null : index)}
                        onMouseEnter={() => setImage(item.img)}
                      >
                        <span>{item.title}</span>
                        <span style={styles.chevron}>{isOpen ? '−' : '+'}</span>
                      </button>
                      {isOpen && <p style={styles.content}>{item.content}</p>}
                    </div>
                  )
                })}
              </div>

              <div style={styles.previewCard}>
                <div style={styles.previewGlow}></div>
                <img src={image} alt='preview' style={styles.previewImage} />
                <div style={styles.previewFooter}>
                  <p style={styles.previewLabel}>
                    Hover a pillar to see the approach
                  </p>
                  <div style={styles.previewPills}>
                    <span style={styles.previewPill}>Straight talk</span>
                    <span style={styles.previewPill}>Regular check-ins</span>
                    <span style={styles.previewPill}>Measured risk</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}


        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          {/* <FAQ /> */}
          <FaqSection />
        </div>


      </div>
    </>
  )
}

/* STYLES */
/* ALL STYLES IN SAME FILE */
const styles = {
  page: {
    fontFamily: 'DM Sans, system-ui, sans-serif',
    color: 'hsl(var(--foreground))',
    background: 'hsl(var(--background))'
  },

  heroFigure: {
    width: '100%',
    maxHeight: '520px',
    overflow: 'hidden',
    borderRadius: '24px',
    boxShadow: '0 30px 80px rgba(0,0,0,0.12)',
    marginBottom: '48px'
  },
  heroImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    display: 'block'
  },

  section: {
    padding: '60px 20px',
    maxWidth: '1200px',
    margin: '0 auto'
  },

  whyShell: {
    display: 'grid',
    gap: '24px',
    padding: '28px',
    borderRadius: '20px',
    background: 'linear-gradient(145deg, #f7f9fb, #eef4f8)',
    boxShadow: '0 14px 36px rgba(15,23,42,0.12)',
    border: '1px solid rgba(15,23,42,0.05)',
    color: '#0f172a'
  },

  whyHeader: {
    display: 'grid',
    gap: '10px'
  },
  whyBadge: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    padding: '6px 12px',
    borderRadius: '999px',
    background: '#ecfdf3',
    color: '#166534',
    fontWeight: 700,
    fontSize: '12px',
    letterSpacing: '0.3px',
    width: 'fit-content',
    border: '1px solid #bbf7d0'
  },
  whyEyebrow: {
    margin: 0,
    color: '#4b5563',
    fontWeight: 700,
    letterSpacing: '0.3px',
    textTransform: 'uppercase',
    fontSize: '12px'
  },
  whyTitle: {
    margin: '2px 0 6px',
    fontSize: '32px',
    lineHeight: 1.2,
    color: '#0f172a'
  },
  whySub: {
    margin: 0,
    color: '#4b5563',
    maxWidth: '720px',
    lineHeight: 1.6
  },

  whyGrid: {
    display: 'grid',
    gap: '24px',
    gridTemplateColumns: 'minmax(0, 1.1fr) minmax(0, 0.9fr)',
    alignItems: 'start'
  },

  whyList: {
    display: 'grid',
    gap: '14px'
  },

  servicesCopy: {
    textAlign: 'center',
    marginBottom: '32px'
  },

  investContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: '40px',
    flexWrap: 'wrap'
  },
  column: {
    flex: 1,
    minWidth: '280px'
  },

  buttonRow: {
    marginTop: '20px',
    display: 'flex',
    gap: '12px',
    flexWrap: 'wrap'
  },
  primaryBtn: {
    padding: '12px 22px',
    background: 'hsl(var(--primary))',
    color: 'hsl(var(--primary-foreground))',
    border: 'none',
    borderRadius: '999px',
    cursor: 'pointer',
    fontWeight: 700,
    boxShadow: '0 12px 30px rgba(0,0,0,0.12)'
  },
  secondaryBtn: {
    textDecoration: 'none',
    color: 'hsl(var(--foreground))',
    fontWeight: 700
  },

  widgetWrapper: {
    width: '100%',
    margin: '0',
    padding: '0',
    display: 'flex',
    justifyContent: 'center'
  },
  widget: {
    position: 'relative',
    paddingBottom: '350px',
    height: 0,
    overflow: 'hidden',
    borderRadius: '0',
    boxShadow: 'none',
    width: '100%',
    margin: '0'
  },
  iframe: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    border: 'none'
  },

  whyContainer: {
    display: 'flex',
    gap: '32px',
    flexWrap: 'wrap'
  },
  left: {
    flex: 1,
    minWidth: '280px'
  },
  right: {
    flex: 1,
    minWidth: '280px',
    textAlign: 'center'
  },
  accordionItem: {
    marginBottom: '12px',
    border: '1px solid hsl(var(--border))',
    padding: '14px 16px',
    borderRadius: '14px',
    background: 'white'
  },
  title: {
    cursor: 'pointer',
    fontWeight: 800,
    padding: 0,
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    fontSize: '16px',
    color: '#0f172a',
    background: 'transparent',
    border: 'none',
    textAlign: 'left'
  },
  content: {
    marginTop: '6px',
    color: '#374151',
    lineHeight: 1.6,
    fontSize: '14px'
  },

  chevron: {
    fontWeight: 800,
    fontSize: '18px',
    color: '#0f172a'
  },

  previewCard: {
    position: 'relative',
    borderRadius: '16px',
    overflow: 'hidden',
    background: '#f8fafc',
    border: '1px solid rgba(15,23,42,0.06)',
    boxShadow: '0 16px 40px rgba(15,23,42,0.16)'
  },
  previewGlow: {
    position: 'absolute',
    inset: 0,
    background:
      'radial-gradient(circle at 20% 20%, rgba(74,222,128,0.12), transparent 32%), radial-gradient(circle at 80% 80%, rgba(56,189,248,0.1), transparent 30%)',
    filter: 'blur(2px)'
  },
  previewImage: {
    position: 'relative',
    zIndex: 1,
    width: '100%',
    aspectRatio: '4 / 3',
    minHeight: '280px',
    objectFit: 'contain',
    objectPosition: 'center',
    display: 'block',
    backgroundColor: '#f8fafc'
  },
  previewFooter: {
    position: 'relative',
    zIndex: 1,
    padding: '14px 16px 16px',
    background:
      'linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.86) 100%)',
    color: '#0f172a'
  },
  previewLabel: {
    margin: 0,
    fontSize: '13px',
    letterSpacing: '0.3px',
    textTransform: 'uppercase',
    color: '#475569'
  },
  previewPills: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '8px',
    marginTop: '8px'
  },
  previewPill: {
    padding: '6px 10px',
    borderRadius: '999px',
    background: '#eef2ff',
    border: '1px solid #e0e7ff',
    color: '#312e81',
    fontSize: '12px',
    fontWeight: 700
  },

  partnersSection: {
    padding: '40px 20px',
    textAlign: 'center',
    maxWidth: '1200px',
    margin: '0 auto 40px'
  },

  // Services Section Styles
  servicesSection: {
    padding: '50px 20px',
    background: '#ffffff',
    position: 'relative'
  },
  servicesContainer: {
    maxWidth: '1200px',
    margin: '0 auto'
  },
  servicesHeader: {
    textAlign: 'center',
    marginBottom: '48px'
  },
  servicesBadge: {
    display: 'inline-block',
    padding: '6px 14px',
    background: 'hsl(var(--primary))',
    color: 'white',
    borderRadius: '999px',
    fontSize: '11px',
    fontWeight: 700,
    letterSpacing: '0.4px',
    textTransform: 'uppercase',
    marginBottom: '12px'
  },
  servicesTitle: {
    fontSize: '32px',
    fontWeight: 700,
    color: '#0f172a',
    margin: '8px 0 10px',
    lineHeight: 1.3
  },
  servicesSubtitle: {
    fontSize: '15px',
    color: '#64748b',
    maxWidth: '500px',
    margin: '0 auto',
    lineHeight: 1.5
  },
  servicesGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '20px'
  },
  serviceCard: {
    padding: '24px 20px',
    background: '#f8fafc',
    borderRadius: '12px',
    border: '1px solid #e2e8f0',
    boxShadow: '0 4px 12px rgba(15,23,42,0.05)',
    transition: 'all 0.3s cubic-bezier(0.16,1,0.3,1)',
    textAlign: 'center',
    cursor: 'pointer'
  },
  serviceImageWrapper: {
    width: '100%',
    aspectRatio: '16 / 9',
    borderRadius: '10px',
    overflow: 'hidden',
    marginBottom: '14px',
    background: '#f1f5f9'
  },
  serviceImage: {
    width: '100%',
    height: '100%',
    objectFit: 'contain',
    objectPosition: 'center',
    display: 'block',
    backgroundColor: '#f1f5f9'
  },
  serviceCardTitle: {
    fontSize: '15px',
    fontWeight: 700,
    color: '#0f172a',
    margin: '0 0 6px'
  },
  serviceCardDesc: {
    fontSize: '13px',
    color: '#64748b',
    lineHeight: 1.5,
    margin: 0
  },
  partnerCard: {
    padding: '6px 2px',
    margin: '10px 8px',
    background: 'linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)',
    borderRadius: '12px',
    border: '1px solid #e2e8f0',
    boxShadow: '0 4px 12px rgba(15,23,42,0.05)',
    transition: 'all 0.3s ease-in-out',
    cursor: 'pointer',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '140px',
    gap: '8px'
  },
  partnerLogo: {
    maxHeight: '90px',
    maxWidth: '90%',
    width: 'auto',
    height: 'auto',
    objectFit: 'contain',
    filter: 'grayscale(0%)',
    transition: 'filter 0.3s ease-in-out'
  },
  partnerName: {
    fontSize: '13px',
    fontWeight: 600,
    color: '#0f172a',
    margin: 0,
    textAlign: 'center',
    lineHeight: 1.3
  },

  // Invest Section Styles
  investSection: {
    padding: '80px 20px',
    background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
    position: 'relative',
    overflow: 'hidden'
  },
  investContainer: {
    maxWidth: '1200px',
    margin: '0 auto',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '48px',
    alignItems: 'center'
  },
  investContent: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    gap: '24px'
  },
  investTitle: {
    fontSize: '36px',
    fontWeight: 700,
    color: '#0f172a',
    margin: '0 0 16px',
    lineHeight: 1.3,
    letterSpacing: '-0.5px'
  },
  investHighlight: {
    fontSize: '16px',
    color: '#1e293b',
    margin: '0 0 12px',
    lineHeight: 1.6,
    fontWeight: 600
  },
  investDescription: {
    fontSize: '15px',
    color: '#64748b',
    margin: '0',
    lineHeight: 1.7,
    maxWidth: '500px'
  },
  investImageWrapper: {
    width: '100%',
    borderRadius: '16px',
    overflow: 'hidden',
    boxShadow: '0 20px 60px rgba(15,23,42,0.15)',
    background: '#f8fafc'
  },
  investImage: {
    width: '100%',
    height: 'auto',
    maxHeight: '500px',
    objectFit: 'cover',
    objectPosition: 'center',
    display: 'block'
  },

  // EMI Section Styles
  emiSection: {
    width: '100vw',
    marginLeft: 'calc(-50vw + 50%)',
    padding: '40px 0 0 0',
    margin: '0 0 0 0',
    background: 'linear-gradient(180deg, #f8fafc 0%, #ffffff 100%)',
    position: 'relative'
  },
  emiWrapper: {
    width: '100%',
    margin: '0',
    padding: '0',
    display: 'flex',
    justifyContent: 'center'
  }
}
