import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../../layouts/Layout";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Predict = () => {
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
    setLoading(true);

    const features = input.split(",").map(Number);
    if (features.length !== 30) {
      toast.error(" Please enter exactly 30 comma-separated values.");
      setLoading(false);
      return;
    }

    try {
      const response = await fetch("https://credit-card-fraud-backend.onrender.com/predict", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ features }),
      });

      const data = await response.json();
      toast.success(" Prediction complete!");

      setTimeout(() => {
        navigate("/predict", {
          state: {
            result: data.prediction,
            features: input,
          },
        });
      }, 1200);
    } catch (err) {
      toast.error(" Server error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout>
      <ToastContainer position="top-center" autoClose={2500} />
      <div className="flex justify-center items-center min-h-screen bg-gray-100 p-6">
        <div className="w-full max-w-2xl bg-white text-black rounded-2xl p-8 shadow-2xl">
          <h1 className="text-3xl font-bold text-center text-blue-700 mb-6">
             Credit Card Fraud Detection
          </h1>

          <form onSubmit={handleSubmit}>
            <label className="text-gray-800 font-semibold mb-2 block text-lg">
              Input 30 comma-separated transaction features:
            </label>
            <textarea
              rows={6}
              className="w-full border border-gray-300 rounded-lg p-4 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all bg-gray-50 text-black"
              value={input}
              placeholder="Example: 0.0, -1.23, ..., 149.62"
              onChange={(e) => setInput(e.target.value)}
              required
            />

            <button
              type="submit"
              disabled={loading}
              className={`mt-6 w-full py-3 rounded-xl font-semibold text-lg transition-all ${
                loading
                  ? "bg-blue-300 text-white cursor-not-allowed"
                  : "bg-blue-600 hover:bg-blue-700 text-white"
              }`}
            >
              {loading ? " Predicting..." : " Predict Transaction"}
            </button>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default Predict;
