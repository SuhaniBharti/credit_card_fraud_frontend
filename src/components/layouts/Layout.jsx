
import Header from './Header';
import Footer from './Footer';
import chatbotlogo from '../../assets/chatbot1.jpg';
import { Link } from 'react-router-dom'; 

const Layout = (props) => {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        color: "white",
        position: "relative",
      }}
    >
   
      <style>
        {`
          .hover-scale {
            transition: transform 0.3s ease-in-out;
            cursor: pointer;
          }
          .hover-scale:hover {
            transform: scale(1.1);
          }
        `}
      </style>

      <Header />
      
      <main style={{ flexGrow: 1, padding: '1rem 0' }}>
        {props.children}
      </main>

      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          paddingRight: "20px",
          marginBottom: "30px",
          zIndex: 1,
        }}
      >
        <Link to="/Chatbot">
          <div
            style={{
              width: "60px",
              height: "60px",
              borderRadius: "50%",
              overflow: "hidden",
              boxShadow: "0 0 10px rgba(0,0,0,0.5)",
              backgroundColor: "#fff",
            }}
          >
            <img
              src={chatbotlogo}
              alt="Chatbot"
              className="hover-scale"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
        </Link>
      </div>

      <Footer />
    </div>
  );
};

export default Layout;
