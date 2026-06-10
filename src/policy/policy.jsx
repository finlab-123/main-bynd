import React from 'react';

const styles = `
  .policy-page {
    font-family: 'Poppins', 'Segoe UI', system-ui, sans-serif;
    color: #333;
    background-color: #f8f9fa;
    padding: 2rem;
    line-height: 1.6;
  }
  .policy-container {
    max-width: 1024px;
    margin: 0 auto;
    background-color: #ffffff;
    border: 1px solid #e0e0e0;
    border-radius: 12px;
    box-shadow: 0 6px 24px rgba(0, 0, 0, 0.07);
    padding: 2rem 2.5rem;
  }
  .policy-header {
    text-align: center;
    margin-bottom: 2rem;
    border-bottom: 2px solid #7ab600;
    padding-bottom: 1rem;
  }
  .policy-header h1 {
    color: #7ab600;
    font-size: 2.5rem;
    font-weight: 800;
    margin: 0;
  }
  .policy-header p {
    color: #6c757d;
    font-size: 1rem;
    margin-top: 0.5rem;
  }
  .policy-content h2 {
    font-size: 1.75rem;
    color: #343a40;
    font-weight: 700;
    margin-top: 2.5rem;
    margin-bottom: 1rem;
    border-bottom: 1px solid #dee2e6;
    padding-bottom: 0.5rem;
  }
  .policy-content h3 {
    font-size: 1.25rem;
    color: #495057;
    font-weight: 600;
    margin-top: 1.5rem;
    margin-bottom: 0.5rem;
  }
  .policy-content p, .policy-content li {
    font-size: 0.95rem;
    color: #495057;
    text-align: justify;
  }
  .policy-content ul, .policy-content ol {
    padding-left: 2rem;
  }
  .policy-content strong {
    color: #212529;
    font-weight: 600;
  }
  .policy-footer {
    text-align: center;
    margin-top: 3rem;
    padding-top: 1.5rem;
    border-top: 1px solid #dee2e6;
    color: #6c757d;
    font-size: 0.9rem;
  }
  @media (max-width: 768px) {
    .policy-page {
      padding: 1rem;
    }
    .policy-container {
      padding: 1.5rem;
    }
    .policy-header h1 {
      font-size: 2rem;
    }
    .policy-content h2 {
      font-size: 1.5rem;
    }
  }
`;

function PrivacyPolicy() {
  return (
    <div className="policy-page">
      <style>{styles}</style>
      <div className="policy-container">
        <header className="policy-header">
          <h1>Privacy Policy</h1>
          <p>Last Updated: March 25, 2026</p>
        </header>

        <main className="policy-content">
          <p>
            This Privacy Policy governs the manner in which Byndfinserve.com Technologies Solutions Private Limited (“byndfinserve.com ”, “we,” “our,” or “us”) collects, uses, discloses, and safeguards the personal information of users (“you” or “your”) who are availing / intend to avail services of personal loan (“Credit Services”) which is being facilitated through the Byndfinserve.com websites and/ or Applications (“Byndfinserve.com App/ Website”). This privacy policy outlines how we collect, use, store, and disclose personal information in accordance with applicable laws, regulations, and guidelines, including but not limited to the Information Technology Act, 2000 and the rules framed thereunder, as may be amended from time to time (“IT Laws”) and the regulations, directions, circulars, guidelines or other mandates issued by the Reserve Bank of India (“RBI”) and as applicable to the Services (collectively, “Applicable Laws”). By accessing and using our services, you expressly consent to the practices described in this Privacy Policy. Please note, this privacy policy shall be read in conjunction to and harmoniously with other terms & conditions, cookies policy and Privacy Policy of the platform, lending partner and the obligations included in the loan documents.
          </p>

          <h2>Information We Collect</h2>
          <p>
            We collect and store the basic personal information such as your name, address, email address, telemobile number, date of birth, through your use of the Byndfinserve.com Website or by joining the Byndfinserve.com community on social media websites, or which is provided to one of our marketing partners or through any engagement with Byndfinserve.com that are required to our operations as a lending service provider under the extant regulatory guidelines. Further, the basic personal information is required to enable (a) you to avail the Credit Services, (b) lending partner to perform necessary customer due diligence check(s), and to provide you with Credit Services. You may also need to provide certain other additional information as a part of the application process while availing Credit Services. Any information provided specifically for the purpose of accessing Credit Services or generated upon successfully receiving Credit Services, will be retained to the extent required by the applicable laws or as set out in the contractual agreements with the third parties. We do not collect or store biometric data in the Byndfinserve.com App, if need be, for the purpose of onboarding/ KYC requirements in connection to the Credit Services been facilitated for operational functioning, we may seek one-time access for camera, micromobile, location or any other facility necessary.
          </p>

          <h2>Use of your Information</h2>
          <p>We use your basic personal information that we collect in accordance with this Privacy Policy and for the following purposes:</p>
          <ul>
            <li>To offer and provide you with our Credit Services, process applications etc.</li>
            <li>To respond to your inquiries, provide customer support, and address any issues or concerns you may have.</li>
            <li>To communicate with you, send important notifications, updates, and marketing materials related to our Credit Services. You may opt out of marketing communications at any time.</li>
            <li>To analyse and improve our Credit Services, develop new features, and enhance the user experience.</li>
            <li>To comply with the requirements of applicable laws / regulations and / or court orders / regulatory directives received by us. The lending partner may use your basic personal information to further undertake customer due diligence checks which may include but not limited to creditworthiness, Know Your Customer (KYC), anti-money laundering (AML), bank account verification etc. Further to ensure compliance with applicable laws, regulations, guidelines and directions issued by regulatory / government authorities from time to time.</li>
            <li>For the purpose of sending administrative notices and Service-related alerts and similar communication, as detailed under this Privacy Policy, with a view to optimizing the efficiency of the Byndfinserve.com App / Website.</li>
            <li>Doing market research, troubleshooting, protection against error, project planning, fraud and other criminal activity; and</li>
            <li>To enforce the terms of use.</li>
          </ul>

          <h2>Sharing and Storage of Data</h2>
          <p>
            We adhere to maintain security and transparency with the information we have received from you while availing the Credit Services and we will never share any such information without your consent and without disclosing the purpose behind the same. All such data shall be stored in servers located within India. During various processes such as application submission or when availing our product or Credit Service offerings, we may request your consent to use or share your personal data. We strictly adhere to a “need-to-know” principle in our business and operational processes, only sharing the data with designated personnel, partners, service providers, or third parties on a limited basis or if mandated by applicable laws or regulators. We will retain your data for the period that you continue to be our customer and for such period as required to comply with any obligation under any law for the time being in force. You can find the details of our partners, service providers, or third parties with whom we may share your personal data on a limited basis in Annexure – 1, enclosed herewith.
          </p>

          <h2>Consulting</h2>
          <p>
            Byndfinserve.com may partner with another party to provide certain specific services if required. When you sign-up for such services, Byndfinserve.com will share names, or other Personal Information that is necessary for the third party to provide these Services. Byndfinserve.com’s contractual arrangements with such third parties restrict these parties from using personally identifiable information except for the explicit purpose of assisting in the provision of these Services.
          </p>

          <h2>Third-Party Policies</h2>
          <p>
            We may engage with various third parties in connection with the Credit Services availed through the Byndfinserve.com App / Website. In general, the third-party service providers we work with will only collect, use, and disclose your information to the extent necessary to perform the services or activities they provide to us. When sharing information with these service providers, we take appropriate security measures and make commercially reasonable efforts to ensure that all recipients adhere to confidentiality, fidelity, and secrecy obligations as well as sign covenants to that effect. We require such third parties to provide the same or equivalent level of protection to your information as outlined in this Privacy Policy. It is important to note that once you provide information to or interact with third parties through the Byndfinserve.com App / Website, our Privacy Policy will no longer apply, and we cannot be held responsible for the privacy practices of these third parties.
          </p>
          <p>
            However, certain third-party service providers, such as banks, financial institutions, payment aggregators, or credit information companies, may have their own privacy policies governing the information we are required to share with them. We recommend reviewing their privacy policies to understand how they handle your information. It’s important to be aware that certain third-party service providers may be located in or have facilities located in different jurisdictions. Therefore, if you proceed with a transaction involving the services of such a third-party provider, your information may become subject to the laws of the jurisdiction(s) in which the provider is located or where its facilities are located. Once you leave the Byndfinserve.com App / Website and are redirected to a third-party website or application, you will no longer be governed by our Privacy Policy or the Byndfinserve.com’s terms and conditions. Instead, the privacy policy of the respective website or application will apply. We cannot be held liable for the actions or omissions of these third-party service providers.
          </p>

          <h2>Disclosure of Information</h2>
          <p>
            We cooperate with government and law enforcement officials and private parties to enforce and comply with the law. Thus, we may access, use, store, transfer and disclose your information (including Personal Information), including disclosure to third parties such as government or law enforcement officials or private parties as we reasonably determine is necessary and appropriate: (i) to satisfy any applicable law, regulation, governmental requests or legal process. (ii) to protect the safety, rights, property or security of Byndfinserve.com, our Services, the Byndfinserve.com Website or any third party; (iii) to protect the safety of the public for any reason; (iv) to detect, prevent or otherwise address fraud, security or technical issues; and /or (v) to prevent or stop any activity we consider to be, or to pose a risk of being, an illegal, unethical, or legally actionable activity. Such disclosures may be carried out without notice to you.
          </p>

          <h2>Data Security & Retention</h2>
          <p>
            We take appropriate technical and organizational measures to protect your information from unauthorized access, alteration, disclosure, or destruction. We implement industry-standard security practices and regularly review our security measures to ensure the ongoing protection of your information. We retain your information for as long as necessary to fulfil the purposes outlined in this Privacy Policy unless a longer retention period is required or permitted by Applicable Laws.
          </p>

          <h2>Withdrawal of Consent & Rectification</h2>
          <p>
            The consent that you provide for the collection, use and disclosure of your Personal Information will remain valid until such time it is withdrawn by you in writing. If you withdraw your consent, Byndfinserve.com will stop processing the relevant Personal Information except to the extent that we have other grounds for processing such Personal Information under applicable laws. Byndfinserve.com will respond to your request within a reasonable timeframe. You may withdraw your consent at any time by contacting us or by using the functionalities of the Byndfinserve.com Website. We will not retain your information if it is no longer necessary for our purposes and there are no legal requirements mandating its retention. However, please be aware that there may be multiple legal bases that require us to retain certain information at any given time.
          </p>
          <p>
            If any of the information you have provided to us is inaccurate, incomplete, or outdated, we kindly request that you promptly provide us with accurate, complete, and up-to-date information so that we can rectify it on our end. It is important to ensure that you always provide us with accurate and correct information to ensure uninterrupted use of our services.
          </p>

          <h2>Updates to the Privacy Policy</h2>
          <p>
            We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. We encourage you to review this Privacy Policy periodically for any updates. The updated Privacy Policy will be effective as of the revised date stated at the beginning of this document.
          </p>

          <h2>Opt In & Opt Out Procedures</h2>
          <p>
            Upon registration, you may receive certain communication from us, and you may at any time choose to opt-out of receiving further communications from us. To be completely removed from the Byndfinserve.com’s mailing list, you may contact us at contact@Byndfinserve.com If you are using an e-mail forwarding service or other similar service, please make sure to include the correct e-mail address or addresses.
          </p>

          <h2>Grievance Officer</h2>
          <p>
            In accordance with the Information Technology Act, 2000 and the rules made thereunder, the name and contact details of the Grievance Officer are provided below. Any User grievance relating to the discrepancies or misuse of information so provided to Byndfinserve.com may be addressed to the grievance officer, whose details are provided below appointed by Byndfinserve.com for this purpose.
          </p>
          <ul>
            <li><strong>Name:</strong> Sonika Rana</li>
            <li><strong>Grievance Officer</strong></li>
            <li><strong>Contact Number:</strong> 9266330555</li>
            <li><strong>Email Id:</strong> complaint@Byndfinserve.com</li>
          </ul>
          <p>The grievance officer shall address the grievance within one month of the date of receipt of such grievance from the User.</p>

          <h2>Service Providers’ Details</h2>
          <p>Details of our Partners / Service Providers / Third parties with whom we may share users’ information on a partial and “need-to-know” basis.</p>
          <h3>Lending Partner:</h3>
          <ul>
            <li>Money View</li>
            <li>Kisetsu Saison Finance India Private Limited (Credit Saison)</li>
            <li>Incred</li>
            <li>Zype</li>
            <li>Muthoot Fincorp</li>
          </ul>
        </main>

        <footer className="policy-footer">
          <p>&copy; {new Date().getFullYear()} Bynd Finserve Pvt Ltd. All Rights Reserved.</p>
        </footer>
      </div>
    </div>
  );
}

export default PrivacyPolicy;
