import { useLocation, useNavigate } from "react-router-dom";

const Result = () => {
  const navigate = useNavigate();
  const { state } = useLocation();

  if (!state) {
    return (
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <h2>No prediction data available</h2>
        <button onClick={() => navigate("/")}>Go Home</button>
      </div>
    );
  }

  return (
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
  );
};

export default Result;
