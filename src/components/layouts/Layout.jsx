

import React from 'react';
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

          .chatbot-wrapper {
            position: fixed;
            bottom: 20px;
            right: 20px;
            z-index: 1000;
            display: flex;
            flex-direction: column;
            align-items: flex-end;
          }

          .chatbot-popup {
            background-color: rgba(0, 0, 0, 0.8);
            color: white;
            padding: 10px 15px;
            border-radius: 10px;
            margin-bottom: 8px;
            font-size: 14px;
            max-width: 200px;
            opacity: 0;
            transform: translateY(10px);
            transition: all 0.3s ease-in-out;
            pointer-events: none;
          }

          .chatbot-wrapper:hover .chatbot-popup {
            opacity: 1;
            transform: translateY(0);
            pointer-events: auto;
          }
        `}
      </style>

      <Header />

      <main style={{ flexGrow: 1, padding: '1rem 0' }}>
        {props.children}
      </main>

      {/* Chatbot with hover popup */}
      <div className="chatbot-wrapper">
        <div className="chatbot-popup">
           Welcome to UCO Bank!<br />
          I'm your personal assistant.please fell free to ask any questions oe seek information about banking services. How can I help you?
        </div>
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
