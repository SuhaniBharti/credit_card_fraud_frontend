import React from 'react';
import Layout from '../../layouts/Layout';
const Aboutfraud = () => {
  return (
    <Layout>
      <div style={{
        minHeight: '100vh',
        width: '100%',
        padding: '100px 20px',
       // backgroundColor: '#f8f9fa',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        boxSizing: 'border-box'
      }}>
        <div style={{
         
          maxWidth: '1000px',
         backgroundColor: "rgba(13, 50, 89, 0.9)",
          //  backgroundColor: "rgba(0, 0, 0, 0.6)",
          padding: '50px',
          borderRadius: '20px',
          boxShadow: '0 10px 30px rgba(15, 11, 11, 0.1)',
          //fontFamily: 'Segoe UI, sans-serif',
          fontFamily:'lato',
          // color:'rgba(0,255,0,0.6)',
          color:'rgb(0 255 220 / 89%)',
          lineHeight: '1.8',
          fontSize: '18px'
        }}>
          <h1 style={{
            fontSize: '36px',
            fontWeight: '700',
            marginBottom: '30px',
            textAlign: 'center',
            color: 'white'
          }}>
            Understanding Frauds
          </h1>

          <p>
          Payment frauds are deceptive practices aimed at tricking individuals into revealing sensitive financial information or unknowingly authorizing unauthorised transactions.
           </p>
<p>
  <ul>
        <li> Posing as banks, payment apps, or trusted merchants</li>

        <li>Requesting confidential details like card numbers, CVVs, UPI PINs, or OTPs</li>

        <li>Sending fake payment links or QR codes to manipulate users into making payments</li>

        <li>Claiming failed transactions or refunds to bait users into sharing access</li>
  </ul>

  Falling for such tactics can result in direct financial loss, compromised bank accounts, or unauthorized transactions — making awareness and caution essential.
          </p>

         
        </div>
      </div>
    </Layout>
  );
};

export default Aboutfraud;

// import React from "react";

// const Aboutfraud = () => {
//   return (
//     <div style={{ padding: "2rem", color: "black" }}>
//       <h1>About Fraud Page</h1>
//       <p>This page gives information about fraud messages.</p>
//     </div>
//   );
// };

// export default Aboutfraud;
