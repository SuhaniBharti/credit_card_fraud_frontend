import { useLocation, useNavigate } from "react-router-dom";
import Layout from "../../layouts/Layout";
const Result = () => {
  const navigate = useNavigate();
  const { state } = useLocation();

  if (!state) {
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
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <h2>No prediction data available</h2>
        <button onClick={() => navigate("/")}>Go Home</button>
      </div>
      </div>
      </div>
      </Layout>
    );
  }

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
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Prediction Result</h2>
      <p>
        <strong>Prediction:</strong>{" "}
        {state.prediction === 1 ? "🚨 Fraud" : "✅ Not Fraud"}
      </p>
      <p>
        <strong>Confidence:</strong> {(state.probability * 100).toFixed(2)}%
      </p>
      <button onClick={() => navigate("/")}>Try Again</button>
    </div>
    </div>
    </div>
    </Layout>
  );
};

export default Result;
