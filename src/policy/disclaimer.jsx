import React from 'react';

const styles = `
  .policy-page {
    font-family: 'Segoe UI', 'Helvetica Neue', Arial, sans-serif;
    color: #333;
    background-color: #f8f9fa;
    padding: 2rem;
    line-height: 1.7;
  }
  .policy-container {
    max-width: 960px;
    margin: 2rem auto;
    background-color: #ffffff;
    border: 1px solid #dee2e6;
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
    padding: 3rem;
  }
  .policy-header {
    text-align: left;
    margin-bottom: 2.5rem;
    border-bottom: 2px solid #0056b3;
    padding-bottom: 1.5rem;
  }
  .policy-header h1 {
    color: #0056b3;
    font-size: 2.5rem;
    font-weight: 700;
    margin: 0;
  }
  .policy-content h2 {
    font-size: 1.75rem;
    color: #212529;
    font-weight: 600;
    margin-top: 2.5rem;
    margin-bottom: 1.25rem;
    padding-bottom: 0.5rem;
  }
  .policy-content p {
    font-size: 1rem;
    color: #495057;
    text-align: justify;
    margin-bottom: 1.25rem;
  }
  .policy-content strong {
    color: #212529;
    font-weight: 600;
  }
  .policy-footer {
    text-align: center;
    margin-top: 3rem;
    padding-top: 1.5rem;
    border-top: 1px solid #e9ecef;
    color: #6c757d;
    font-size: 0.9rem;
  }
  @media (max-width: 768px) {
    .policy-page {
      padding: 1rem;
    }
    .policy-container {
      padding: 1.5rem;
      margin: 1rem auto;
    }
    .policy-header h1 {
      font-size: 2rem;
    }
    .policy-content h2 {
      font-size: 1.5rem;
    }
  }
`;

function Disclaimer() {
  return (
    <div className="policy-page">
      <style>{styles}</style>
      <div className="policy-container">
        <header className="policy-header">
          <h1>Website Disclaimer</h1>
        </header>

        <main className="policy-content">
          <h2>General Information Only</h2>
          <p>
            Welcome to <strong>BYND FINSERVE PRIVATE LIMITED</strong>. The information provided on this website is for general informational purposes only. We do our best to keep the information up-to-date and correct, but we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability with respect to the website or the information, products, services, or related graphics contained on the website for any purpose. Any reliance you place on such information is therefore strictly at your own risk.
          </p>

          <h2>No Professional Advice</h2>
          <p>
            The information contained on this website is not intended as, and shall not be understood or construed as, professional financial, investment, legal, or tax advice. The information is not a substitute for advice from a professional who is aware of the facts and circumstances of your individual situation. We strongly recommend that you consult with the appropriate professionals before making any decisions.
          </p>

          <h2>External Links</h2>
          <p>
            Through this website, you may be able to link to other websites which are not under the control of <strong>BYND FINSERVE PRIVATE LIMITED</strong>. We have no control over the nature, content, and availability of those sites. The inclusion of any links does not necessarily imply a recommendation or endorse the views expressed within them.
          </p>

          <h2>Limitation of Liability</h2>
          <p>
            In no event will we be liable for any loss or damage including without limitation, indirect or consequential loss or damage, or any loss or damage whatsoever arising from loss of data or profits arising out of, or in connection with, the use of this website. Your use of our services and website is solely at your own risk.
          </p>
        </main>

        <footer className="policy-footer">
          <p>&copy; {new Date().getFullYear()} BYND FINSERVE PRIVATE LIMITED. All Rights Reserved.</p>
        </footer>
      </div>
    </div>
  );
}

export default Disclaimer;
