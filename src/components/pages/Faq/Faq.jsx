// import React from 'react'
// import Layout from '../../layouts/Layout'
// const Faq = () => {

//   return (
//     <Layout>
      

//       </Layout>
//   )
// }

// export default Faq

import React, { useState } from 'react';
import Layout from '../../layouts/Layout';

const faqs = [
  {
    question: "How can I identify a fraudulent email or message?",
    answer:
      "Fraudulent emails often contain urgent requests, unfamiliar sender addresses, spelling errors, or suspicious links. Always verify the source before clicking or responding.",
  },
  {
    question: "What should I do if I suspect a scam involving my bank account?",
    answer:
      "Immediately contact your bank through official channels, report the incident, and change your online banking passwords. Avoid giving personal information to unknown sources.",
  },
  {
    question: "How can I protect my personal information online?",
    answer:
      "Use strong, unique passwords for each account, enable two-factor authentication, and avoid sharing sensitive data on unsecured websites or public Wi-Fi networks.",
  },
  {
    question: "What are common signs of a phishing website?",
    answer:
      "Look for misspelled URLs, lack of HTTPS, unusual design/layout, and requests for sensitive information like passwords or credit card numbers. When in doubt, don’t enter any data.",
  },
];


const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <Layout>

        <div
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "4rem 1rem",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div
          className="text-center"
          style={{
            maxWidth: "900px",
            width: "100%",
            backgroundColor: "rgba(13, 50, 89, 0.8)",
           //backgroundColor: "		rgb(218, 165, 32,0.5)",
            borderRadius: "1rem",
            padding: "2rem",
            //color: "white",
          }}
        >
      <div style={{ maxWidth: '800px', margin: '2rem auto', padding: '1rem' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>Frequently Asked Questions</h2>
        {faqs.map((faq, index) => (
          <div
            key={index}
            style={{
              border: '1px solid #ccc',
              borderRadius: '8px',
              marginBottom: '1rem',
              padding: '1rem',
              backgroundColor: '#f9f9f9',
            }}
          >
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                cursor: 'pointer',
                fontWeight: 'bold',
                color: '#0d3259',
              }}
              onClick={() => toggleAnswer(index)}
            >
              <span>{faq.question}</span>
              <span>{openIndex === index ? '▲' : '▼'}</span>
            </div>
            {openIndex === index && (
              <div style={{ marginTop: '0.75rem', color: '#333' }}>
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
      </div>
      </div>
    </Layout>
  );
};

export default Faq;
