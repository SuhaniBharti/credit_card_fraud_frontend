


import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";
import Layout from "../../layouts/Layout";
import "../../../index.css";

const Home = () => {
  const navigate = useNavigate();
 // const [typingDone, setTypingDone] = useState(false);

  const handleCheckClick = () => {
    navigate("/model");
  };

  const handleSpamClick = () => {
    navigate("/about-fraud");
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
          <h1
            className="display-4 fw-bold"
            style={{
              fontFamily: "Merriweather",
              color: "rgba(137, 207, 240,1)",
              letterSpacing: "1px",
            }}
          >
            <Typewriter
  words={['WELCOME TO FRAUD DETECTOR']}
  loop={1}
  cursor
  cursorStyle='_'
  typeSpeed={100}
  deleteSpeed={0}
  delaySpeed={1000}
  // onLoopDone={() => setTypingDone(true)} // ✅ correct callback
/>



          </h1>
    

          <div className="col-lg-8 mx-auto">
           
              <>
                <p className="animated-text mt-3">
                  Detect fraudulent credit card transactions with the power of AI.
                </p>

                <div className="arrow bounce"></div>

                <button
                  type="button"
                  className="btn btn-outline-light btn-lg px-4 mt-2"
                  onClick={handleCheckClick}
                >
                  Check fraud prediction
                </button>

                <div className="subtle-link">
                  To know more about fraud messages,{" "}
                  <span onClick={handleSpamClick}>click here</span>.
                </div>
              </>
            
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
