import React from "react";
import { useNavigate } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";
import Layout from "../../layouts/Layout";
import bgImage from '../../../assets/white.jpg';
import "../../../index.css";

const Home = () => {
  const navigate = useNavigate();

  const handleModel1 = () => {
    navigate("/model1"); // Spam Message Classifier
  };

  const handleModel2 = () => {
    navigate("/model2"); // Fraud Detection by Bank Features
  };

  const handleModel3 = () => {
    navigate("/model3"); // Fraud Detection by Bank Details
  };

  return (
    
    <Layout>
       {/* <img
              src={bgImage}
              alt="background"
              className="fullscreen-bg"
            /> */}
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
          }}
        >
          <h1
            className="display-4 fw-bold"
            style={{
              fontFamily: "Merriweather",
              color: "rgba(137, 207, 240,1)",
              letterSpacing: "1px",
            }}
          >
            <Typewriter
              words={["WELCOME TO FRAUD DETECTOR"]}
              loop={1}
              cursor
              cursorStyle="_"
              typeSpeed={100}
              deleteSpeed={0}
              delaySpeed={1000}
            />
          </h1>

          <div className="col-lg-8 mx-auto">
            <p className="animated-text mt-3">
              Detect fraudulent credit card transactions with the power of AI.
            </p>

            <div className="arrow bounce"></div>

            {/* Three model buttons */}
            <div className="d-grid gap-3 mt-4">
              <button
                type="button"
                className="btn btn-outline-light btn-lg px-4"
                onClick={handleModel1}
              >
                Model 1: Spam Message Classifier
              </button>
              <button
                type="button"
                className="btn btn-outline-light btn-lg px-4"
                onClick={handleModel2}
              >
                Model 2: Bank Feature Fraud Detector
              </button>
              <button
                type="button"
                className="btn btn-outline-light btn-lg px-4"
                onClick={handleModel3}
              >
                Model 3: Bank Detail Fraud Detector
              </button>
            </div>

            <div className="subtle-link mt-3">
              To know more about fraud messages,{" "}
              <span onClick={() => navigate("/about-fraud")}>click here</span>.
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
