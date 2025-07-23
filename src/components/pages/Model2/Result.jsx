import React from "react";
import { useLocation } from "react-router-dom";
import Layout from "../../layouts/Layout";
import { CheckCircle, XCircle } from "lucide-react";

const Result = () => {
  const location = useLocation();
  const result = location.state?.result || "Unknown";
  const features = location.state?.features || "No input provided.";

  const isFraud = result === "Fraud";
  const isSafe = result === "Not Fraud";

  return (
    <Layout>
      {/* <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-blue-100 to-indigo-200 px-4">
        <div className="bg-white text-black p-10 rounded-2xl shadow-xl max-w-xl w-full text-center"> */}
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
        
          <h2 className="text-lg text-gray-700 mb-2 font-medium">Input Features:</h2>
          <p className="text-sm bg-gray-100 p-3 rounded-lg border border-gray-300 mb-6 text-gray-800 "
          style={{
        wordBreak: 'break-word',     
         whiteSpace: 'normal',        
         overflowWrap: 'anywhere',    
  }}>
            {features}
          </p>

          {isFraud ? (
            <div className="text-red-600">
              <XCircle size={64} className="mx-auto mb-4" />
              <h1 className="text-3xl font-bold mb-2"> Fraud Detected</h1>
              <p>This transaction appears suspicious. Please investigate further.</p>
            </div>
          ) : isSafe ? (
            <div className="text-green-600">
              <CheckCircle size={64} className="mx-auto mb-4" />
              <h1 className="text-3xl font-bold mb-2">Transaction Safe</h1>
              <p>This transaction does not appear to be fraudulent.</p>
            </div>
          ) : (
            <div className="text-yellow-600">
              <h1 className="text-2xl font-bold mb-2"> No Result</h1>
              <p>Something went wrong or prediction was not received properly.</p>
            </div>
          )}
         
        </div>
      </div>
    </Layout>
  );
};

export default Result;
