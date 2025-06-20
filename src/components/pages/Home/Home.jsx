import React from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../../layouts/Layout";

const Home = () => {
  const navigate = useNavigate();

  return (
    <Layout>
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-600 to-purple-600 text-white px-4">
        <div className="max-w-2xl w-full bg-black/60 backdrop-blur p-8 rounded-2xl text-center shadow-lg">
          <h1 className="text-4xl font-bold mb-4">Welcome to Fraud Detector</h1>
          <p className="text-lg mb-6">
            Detect fraudulent credit card transactions with the power of AI.
          </p>
          <button
            onClick={() => navigate("/model")}
            className="bg-white text-indigo-600 font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-gray-200 transition"
          >
             Start Prediction
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
