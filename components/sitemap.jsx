import React from 'react';
import { Link } from 'react-router-dom';

const sections = [
  {
    title: "Loans",
    links: [
      { label: 'Loan Against Property', href: '/loans/lap' },
      { label: 'Vehicle Loan', href: '/loans/vehicle' },
      { label: 'Education Loan', href: '/loans/education' },
      { label: 'Medical Loan', href: '/loans/medical' },
      { label: 'Loan Against Share', href: '/loans/loan-against-share' },
    ],
  },
  {
    title: "Investments",
    links: [
      { label: 'Investment Plans', href: '/investment-plans' },
      { label: 'Mutual Funds', href: '/investment-plans/mutual-funds' },
      { label: 'Private Credit', href: '/investment-plans/private-credit' },
      { label: 'Equity Investment', href: '/investment-plans/equity' },
    ],
  },
  {
    title: "Products",
    links: [
      { label: 'Credit Card', href: '/products/credit-card' },
      { label: 'Apply Credit Card', href: '/products/credit-card/apply' },
      { label: 'Life Insurance', href: '/products/life-insurance' },
      { label: 'General Insurance', href: '/products/general-insurance' },
    ],
  },
  {
    title: "Company",
    links: [
      { label: 'About Us', href: '/support/about-us' },
      { label: 'Contact Us', href: '/support/contact-us' },
      { label: 'Book Consultancy', href: '/consultancy' },
      { label: 'FAQs', href: '/faq' },
      { label: 'Why Choose Us', href: '/why-choose-us' },
      { label: 'What We Do', href: '/what-we-do' },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: 'Terms & Conditions', href: '/terms' },
      { label: 'Privacy Policy', href: '/privacy-policy' },
      { label: 'Disclaimer', href: '/disclaimer' },
      { label: 'Partner With Us', href: '/partner-with-us' },
    ],
  },
];

function Sitemap() {
  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h1 style={styles.title}>Explore Our Sitemap</h1>
        <p style={styles.subtitle}>
            
        Find everything you need in one place 
        </p>
      </div>

      <div style={styles.grid}>
        {sections.map((section) => (
          <div key={section.title} style={styles.card}>
            <h2 style={styles.cardTitle}>{section.title}</h2>
            <ul style={styles.list}>
              {section.links.map((link) => (
                <li key={link.href}>
                  <Link to={link.href} style={styles.link}>
                    → {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: 1100,
    margin: '0 auto',
    padding: '40px 20px',
    fontFamily: 'sans-serif',
  },
  header: {
    textAlign: 'center',
    marginBottom: 40,
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    height: 40,
    background: 'linear-gradient(90deg, #7ab600, #00c6ff)',
    WebkitBackgroundClip: 'text',
    color: 'transparent',
  },
  subtitle: {
    color: '#666',
    marginTop: 10,
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
    gap: 20,
  },
  card: {
    background: '#fff',
    borderRadius: 12,
    padding: 20,
    boxShadow: '0 8px 20px rgba(0,0,0,0.08)',
    transition: 'transform 0.3s, box-shadow 0.3s',
  },
  cardTitle: {
    fontSize: 20,
    marginBottom: 12,
    color: '#333',
  },
  list: {
    listStyle: 'none',
    padding: 0,
  },
  link: {
    display: 'block',
    padding: '6px 0',
    color: '#7ab600',
    textDecoration: 'none',
    transition: 'all 0.2s',
  },
};


document.addEventListener('mouseover', (e) => {
  if (e.target.closest('.card')) {
    e.target.closest('.card').style.transform = 'translateY(-5px)';
    e.target.closest('.card').style.boxShadow = '0 12px 25px rgba(0,0,0,0.12)';
  }
});
document.addEventListener('mouseout', (e) => {
  if (e.target.closest('.card')) {
    e.target.closest('.card').style.transform = 'translateY(0)';
    e.target.closest('.card').style.boxShadow = '0 8px 20px rgba(0,0,0,0.08)';
  }
});

export default Sitemap;
