import React from 'react';
import investImg from '../../src/assets/homepage/Invest-in-Company.webp';
import lapImg from '../../src/assets/homepage/Loan-Against-Share-768x300.webp';

const services = [
  {
    title: 'Home Loan',
    subtitle: 'Turn your dream home into reality with our flexible home loan solutions',
    desc: `Byndfinserve offers competitive home loan options with attractive interest rates, minimal paperwork, and quick approvals. Whether you are buying your first home, upgrading, or investing in property, our expert team will guide you every step of the way.`,
    cta1: 'Apply Now',
    cta2: 'Know More',
    img: investImg,
    cta1Link: '#',
    cta2Link: '#'
  },
  {
    title: 'Loan Against Property',
    subtitle: 'Maximize Your Property’s Potential with Our Loan Solutions',
    desc: `At byndfinserve, we understand that your property is more than just a piece of real estate—it’s a valuable asset that can help you achieve your financial goals. Our Loan Against Property (LAP) solutions offer a flexible and efficient way to leverage your property’s value to meet your financial needs.`,
    cta1: 'Apply Now',
    cta2: 'Know More',
    img: lapImg,
    cta1Link: '#',
    cta2Link: '#'
  }
];

const sectionStyle = {
  background: 'none',
  padding: '48px 0',
  minHeight: '100vh',
};

const cardStyle = {
  background: '#fff',
  borderRadius: '16px',
  boxShadow: '0 8px 32px rgba(180,211,48,0.10)',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  margin: '32px 0',
  padding: '32px',
  gap: '32px',
  maxWidth: '1100px',
  width: '100%',
};

const imgStyle = {
  width: '320px',
  maxWidth: '40vw',
  borderRadius: '12px',
  background: '#f8fafc',
  objectFit: 'contain',
  boxShadow: '0 4px 16px rgba(21,48,59,0.10)'
};

const ctaStyle = {
  background: '#b4d330',
  color: '#15303b',
  border: 'none',
  borderRadius: '999px',
  padding: '12px 28px',
  fontWeight: 700,
  fontSize: '1rem',
  marginRight: '16px',
  cursor: 'pointer',
  boxShadow: '0 2px 8px rgba(180,211,48,0.10)'
};

const OurServices = () => (
  <section style={sectionStyle}>
    <div style={{ textAlign: 'center', marginBottom: 32 }}>
      <h2 style={{ color: '#b4d330', fontSize: '2.2rem', fontWeight: 800, marginBottom: 8 }}>Our Services</h2>
      <p style={{ color: '#15303b', fontSize: '1.1rem', maxWidth: 700, margin: '0 auto' }}>
        At Byndfinserve, we are dedicated to providing exceptional solutions tailored to meet the unique needs of our clients. Our comprehensive range of services includes:
      </p>
    </div>
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 32 }}>
      {services.map((service, idx) => (
        <div key={service.title} style={{ ...cardStyle, flexDirection: idx % 2 === 0 ? 'row' : 'row-reverse' }}>
          <div style={{ flex: 1 }}>
            <h3 style={{ color: '#b4d330', fontSize: '1.4rem', fontWeight: 800, marginBottom: 8 }}>{service.title}</h3>
            <h4 style={{ color: '#15303b', fontSize: '1.1rem', fontWeight: 700, marginBottom: 8 }}>{service.subtitle}</h4>
            <p style={{ color: '#15303b', fontSize: '1rem', marginBottom: 18 }}>{service.desc}</p>
            <div>
              <a href={service.cta1Link} style={ctaStyle}>{service.cta1}</a>
              <a href={service.cta2Link} style={{ ...ctaStyle, background: '#fff', color: '#b4d330', border: '2px solid #b4d330' }}>{service.cta2}</a>
            </div>
          </div>
          <img src={service.img} alt={service.title} style={imgStyle} />
        </div>
      ))}
    </div>
  </section>
);

export default OurServices;

