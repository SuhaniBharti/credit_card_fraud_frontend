import React from 'react';
import Layout from '../../layouts/Layout';
const AboutSpam = () => {
  return (
    <Layout>
      <div style={{
        minHeight: '100vh',
        width: '100%',
        padding: '60px 20px',
       // backgroundColor: '#f8f9fa',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
        boxSizing: 'border-box'
      }}>
        <div style={{
          maxWidth: '1000px',
          // backgroundColor: '#ffffff',
           backgroundColor: "rgba(0, 0, 0, 0.6)",
          padding: '50px',
          borderRadius: '20px',
          boxShadow: '0 10px 30px rgba(15, 11, 11, 0.1)',
          fontFamily: 'Segoe UI, sans-serif',
          color: '',
          lineHeight: '1.8',
          fontSize: '18px'
        }}>
          <h1 style={{
            fontSize: '36px',
            fontWeight: '700',
            marginBottom: '30px',
            textAlign: 'center',
            color: '#0d6efd'
          }}>
            Understanding Spam SMS
          </h1>

          <p>
            Spam SMS, also known as text spam, refers to unwanted, unsolicited messages sent to your mobile phone via
            SMS (Short Message Service). These messages are typically sent in bulk by advertisers, scammers, or bots with
            the intention of promoting products, phishing for sensitive information, or tricking users into visiting harmful websites.
          </p>

          <p>
            These messages can range from harmless advertisements to malicious scams that aim to steal your personal information,
            such as bank credentials, OTPs, or social security numbers. As smartphones have become central to communication,
            the volume of spam has significantly increased, making it both an annoyance and a security threat.
          </p>

          <h2 style={{ fontSize: '28px', marginTop: '40px', color: '#FFFFE0' }}>🚨 Common Types of Spam Messages</h2>
          <ul style={{ paddingLeft: '20px', marginTop: '15px' }}>
            <li>🎁 "You've won a lottery!" scams urging you to click a suspicious link</li>
            <li>💸 Fake loan or credit card offers from unverified sources</li>
            <li>🛍️ Unwanted promotional ads for products or services</li>
            <li>⚠️ Phishing attempts pretending to be your bank or government service</li>
            <li>🔗 Malicious links promising offers, free gifts, or discounts</li>
          </ul>

          <h2 style={{ fontSize: '28px', marginTop: '40px', color: '#FFFFE0' }}>🧠 Why Spam Filtering Matters</h2>
          <p>
            Spam messages are not just irritating—they are dangerous. Many SMS scams are designed to trick users into revealing
            sensitive data or installing malware. Spam detection and filtering systems help prevent identity theft, fraud,
            and financial loss.
          </p>

          <h2 style={{ fontSize: '28px', marginTop: '40px', color: '#FFFFE0' }}>🛡️ Our Solution</h2>
          <p>
            Our intelligent spam detection model uses advanced machine learning techniques to classify messages as either
            <strong> "spam" </strong> or <strong> "ham" </strong> (not spam). By analyzing patterns in text, such as specific keywords,
            message structure, and context, we provide a reliable tool to help users stay safe and organized.
          </p>

          <p>
            Whether you're an individual protecting personal data or a business defending communication integrity, our solution
            offers peace of mind against the rising threat of mobile spam.
          </p>

          <p style={{
            marginTop: '40px',
            fontStyle: 'italic',
            textAlign: 'center',
            font:'bold'
          }}>
            💬 "Technology can’t stop spam from being sent, but it can stop spam from being seen." – Stay aware, stay protected.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default AboutSpam;
