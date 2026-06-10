import React from 'react';
import investImg from '../src/assets/homepage/Invest-in-Company.webp';
import lapImg from '../src/assets/homepage/Loan-Against-Share-768x300.webp';

const services = [
  {
    title: 'Home Loan Services',
    subtitle: 'Make Your Dream Home a Reality with Flexible Financing',
    desc: `At Byndfinserve, we offer tailored home loan solutions...`,
    cta1: 'Apply for Home Loan',
    cta2: 'Check Eligibility',
    img: investImg,
    cta1Link: '/loans/home',
    cta2Link: '/partner-with-us'
  },
  {
    title: 'Loan Against Property',
    subtitle: 'Maximize Your Property’s Potential...',
    desc: `At byndfinserve, we understand that your property...`,
    cta1: 'Apply Now',
    cta2: 'Check Eligibility',
    img: lapImg,
    cta1Link: '/loans/lap',
    cta2Link: '/partner-with-us'
  }
];

const OurServices = () => (
  <section className="services-section">
    
    <div className="header">
      <h2>Our Services</h2>
      <p>
        At Bynd finserve, we provide solutions tailored to your needs.
      </p>
    </div>

    <div className="services-container">
      {services.map((service, idx) => (
        <div
          key={service.title}
          className={`service-card ${idx % 2 !== 0 ? 'reverse' : ''}`}
        >
          <div className="text">
            <h3>{service.title}</h3>
            <h4>{service.subtitle}</h4>
            <p>{service.desc}</p>

            <div className="btns">
              <a href={service.cta1Link} className="btn primary">
                {service.cta1}
              </a>

              <a href={service.cta2Link} className="btn secondary">
                {service.cta2}
              </a>
            </div>
          </div>

          <img src={service.img} alt={service.title} />
        </div>
      ))}
    </div>

    <style>{`

      * { box-sizing: border-box; }
      img { max-width: 100%; height: auto; }

      .services-section {
        padding: 40px 16px;
      }

      .header {
        text-align: center;
        margin-bottom: 30px;
      }

      .header h2 {
        color: #b4d330;
        font-size: clamp(22px, 5vw, 38px);
      }

      .header p {
        max-width: 600px;
        margin: auto;
        font-size: clamp(14px, 2.5vw, 18px);
      }

      .services-container {
        display: flex;
        flex-direction: column;
        gap: 30px;
        align-items: center;
      }

      .service-card {
        display: flex;
        flex-direction: column;
        gap: 20px;
        padding: 20px;
        background: #fff;
        border-radius: 16px;
        max-width: 1100px;
        width: 100%;
      }

      
      @media (min-width: 768px) {
        .service-card {
          flex-direction: row;
          align-items: center;
          padding: 40px;
        }

        .service-card.reverse {
          flex-direction: row-reverse;
        }
      }

      .service-card img {
        width: 100%;
        max-width: 400px;
        border-radius: 12px;
      }

      .text {
        flex: 1;
      }

      .text h3 {
        font-size: clamp(18px, 3vw, 24px);
        color: #b4d330;
      }

      .text h4 {
        font-size: clamp(14px, 2.5vw, 18px);
      }

      .text p {
        font-size: clamp(13px, 2vw, 16px);
        line-height: 1.6;
      }

      .btns {
        margin-top: 15px;
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
      }

      .btn {
        padding: 10px 16px;
        border-radius: 20px;
        text-decoration: none;
        font-weight: bold;
        font-size: 14px;
        text-align: center;
      }

      .primary {
        background: #b4d330;
        color: #15303b;
      }

      .secondary {
        border: 2px solid #b4d330;
        color: #b4d330;
      }

      
      @media (max-width: 480px) {
        .btn {
          width: 100%;
        }
      }

    `}</style>
  </section>
);

export default OurServices;
