import React from 'react';
import { useLocation } from 'react-router-dom';
import Layout from "../../layouts/Layout";
import { CheckCircle, XCircle } from 'lucide-react';

const Result = () => {
  const location = useLocation();
  const result = location.state?.result?.toLowerCase();
  const message = location.state?.message;

  const isSpam = result === 'spam';
  const isHam = result === 'ham';

  const displayText = isSpam
    ? ' This message is SPAM!'
    : isHam
    ? ' This message is SAFE!'
    : 'No result';

  const description = isSpam
    ? 'This message appears to be unsolicited or potentially harmful. Be cautious and avoid clicking suspicious links.'
    : isHam
    ? 'This message seems legitimate and does not pose a spam threat.'
    : '';

  const iconStyle = {
    fontSize: '64px',
    marginBottom: '20px',
    color: isSpam ? '#dc3545' : isHam ? '#198754' : '#6c757d',
  };

  return (
    <Layout>
      <div style={{
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f8f9fa',
        padding: '40px'
      }}>
        <div style={{
          maxWidth: '700px',
          width: '100%',
          backgroundColor: '#ffffff',
          borderRadius: '20px',
          padding: '40px',
          boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
          textAlign: 'center',
          fontFamily: 'Segoe UI, sans-serif'
        }}>
          <h2 style={{ fontSize: '22px', marginBottom: '12px', color: '#6c757d' }}>Original Message:</h2>
          <p style={{
            fontSize: '20px',
            marginBottom: '30px',
            padding: '15px',
            backgroundColor: '#f1f3f5',
            borderRadius: '10px',
            border: '1px solid #ced4da',
            color: '#212529'
          }}>
            {message || 'No message provided.'}
          </p>

          {isSpam && <XCircle size={64} style={iconStyle} />}
          {isHam && <CheckCircle size={64} style={iconStyle} />}
          
          <h1 style={{ fontSize: '32px', marginBottom: '20px', color: isSpam ? '#dc3545' : '#198754' }}>
            {displayText}
          </h1>
          <p style={{ fontSize: '18px', color: '#495057' }}>{description}</p>
        </div>
      </div>
    </Layout>
  );
};

export default Result;
