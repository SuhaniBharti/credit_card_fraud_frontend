
import Layout from "../../../components/layouts/Layout.jsx";

const Securitytips = () => {
  return (
    <Layout>
      <div style={{
        minHeight: '100vh',
        width: '100%',
        padding: '100px 20px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        boxSizing: 'border-box'
      }}>
        <div style={{
          maxWidth: '1000px',
          backgroundColor: "rgba(13, 50, 89, 0.9)",
          padding: '50px',
          borderRadius: '20px',
          boxShadow: '0 10px 30px rgba(15, 11, 11, 0.1)',
          fontFamily: 'lato',
          color: 'rgb(0 255 220 / 89%)',
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
            SECURITY TIPS
          </h1>
          <p style={{ marginBottom: '20px' }}>
            Stay Safe Online: Essential Security Tips
          </p>
          <ul style={{ paddingLeft: '20px' }}>
            <li>Use strong, unique passwords for each of your accounts.</li>
            <li>Enable two-factor authentication wherever possible.</li>
            <li>Be cautious of suspicious emails, links, and attachments — they may be phishing attempts.</li>
            <li>Keep your software and devices updated to protect against known vulnerabilities.</li>
            <li>Avoid sharing sensitive information over public or unsecured Wi-Fi networks.</li>
            <li>Install and regularly update antivirus or antimalware software.</li>
            <li>Log out of accounts when using public or shared devices.</li>
          </ul>
        </div>
      </div>
    </Layout>
  );
};

export default Securitytips;
