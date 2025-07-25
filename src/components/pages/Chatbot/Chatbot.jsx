

import React from 'react';
import Layout from "../../layouts/Layout";
import securitytips from "../../../assets/securitytips.jpeg";
import faq from "../../../assets/Faqs.jpeg";
import chatbot1 from "../../../assets/chat-help.jpg";
import { useNavigate } from "react-router-dom";

const Chatbot = () => {
  const navigate = useNavigate();

  return (
    <Layout>
      {/* Hover effect CSS */}
      <style>
        {`
          .hover-scale {
            transition: transform 0.3s ease-in-out;
            cursor: pointer;
          }
          .hover-scale:hover {
            transform: scale(1.05);
          }
        `}
      </style>

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
            borderRadius: "1rem",
            padding: "2rem",
            display: "flex",
            flexDirection: "column"
          }}
        >
          <div
            style={{
              display: "flex",
              gap: "1rem",
              margin: "1rem"
            }}
          >
            <div
            
              className="security-tips"
              style={{
                width: "50%",
                borderRadius: "1rem",
                padding: "2rem",
              }}
              onClick={() => navigate("/Securitytips")}
            >
              <h1>Security Tips</h1>
              <img
                className="hover-scale"
                style={{
                  height: "100%",
                  width: "100%",
                  borderRadius: "1rem",
                }}
                src={securitytips}
                alt='securitytips'
              />
            </div>

            <div
              className="faq"
              style={{
                width: "50%",
                borderRadius: "1rem",
                padding: "2rem",
              }}
              onClick={() => navigate("/Faq")}
            >
              <h1>Faqs</h1>
              <img
                className="hover-scale"
                style={{
                  height: "100%",
                  width: "100%",
                  borderRadius: "1rem",
                }}
                src={faq}
                alt='faq'
              />
            </div>
          </div>

          <div
            style={{
              display: "flex",
              gap: "1rem",
              margin: "1rem",
              alignContent: 'center',
              justifyContent: 'center'
            }}
          >
            <div
              className="chat-help"
              style={{
                width: "50%",
                borderRadius: "1rem",
                padding: "2rem",
              }}
              onClick={() => navigate("/Message")}
            >
              <h1>Chat-help</h1>
              <img
                className="hover-scale"
                style={{
                  height: "100%",
                  width: "100%",
                  borderRadius: "1rem",
                }}
                src={chatbot1}
                alt='chat-help'
              />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Chatbot;
