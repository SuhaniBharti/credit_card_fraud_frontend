import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const genderMap = { E: 0, F: 1, M: 2, U: 3 };
const ageMap = {
  "0-20": 0,
  "20-30": 1,
  "30-40": 2,
  "40-50": 3,
  "50-60": 4,
  "60-70": 5,
  "70+": 6,
  U: 7,
};
const categoryMap = {
  "es_transportation": 0,
  "es_health": 1,
  "es_otherservices": 2,
  "es_food": 3,
  "es_hotelservices": 4,
  "es_barsandrestaurants": 5,
  "es_tech": 6,
  "es_sportsandtoys": 7,
  "es_wellnessandbeauty": 8,
  "es_hyper": 9,
  "es_fashion": 10,
  "es_home": 11,
  "es_contents": 12,
  "es_travel": 13,
  "es_leisure": 14,
};

const Predict = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    step: 1,
    customer: 12345,
    age: "30-40",
    gender: "F",
    merchant: 67890,
    category: "es_food",
    amount: 500.0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async () => {
    try {
      const mappedData = {
        step: Number(form.step),
        customer: Number(form.customer),
        age: ageMap[form.age],
        gender: genderMap[form.gender],
        merchant: Number(form.merchant),
        category: categoryMap[form.category],
        amount: Number(form.amount),
      };

      const res = await axios.post("https://fraud-detection-model-backend.onrender.com/predict3", {
        data: mappedData,
      });

      navigate("/predict3", { state: res.data });
    } catch (err) {
      alert("Prediction failed: " + err.message);
    }
  };

  return (
    <div style={{ padding: "20px", maxWidth: "500px", margin: "0 auto" }}>
      <h2>Bank Fraud Detection</h2>

      <div style={{ marginBottom: "12px" }}>
        <label>Step</label>
        <input type="number" name="step" value={form.step} onChange={handleChange} />
      </div>

      <div style={{ marginBottom: "12px" }}>
        <label>Customer ID</label>
        <input type="number" name="customer" value={form.customer} onChange={handleChange} />
      </div>

      <div style={{ marginBottom: "12px" }}>
        <label>Age Group</label>
        <select name="age" value={form.age} onChange={handleChange}>
          {Object.keys(ageMap).map((label) => (
            <option key={label} value={label}>{label}</option>
          ))}
        </select>
      </div>

      <div style={{ marginBottom: "12px" }}>
        <label>Gender</label>
        <select name="gender" value={form.gender} onChange={handleChange}>
          {Object.keys(genderMap).map((label) => (
            <option key={label} value={label}>{label}</option>
          ))}
        </select>
      </div>

      <div style={{ marginBottom: "12px" }}>
        <label>Merchant ID</label>
        <input type="number" name="merchant" value={form.merchant} onChange={handleChange} />
      </div>

      <div style={{ marginBottom: "12px" }}>
        <label>Transaction Category</label>
        <select name="category" value={form.category} onChange={handleChange}>
          {Object.keys(categoryMap).map((label) => (
            <option key={label} value={label}>{label}</option>
          ))}
        </select>
      </div>

      <div style={{ marginBottom: "12px" }}>
        <label>Amount</label>
        <input type="number" name="amount" value={form.amount} onChange={handleChange} />
      </div>

      <button onClick={handleSubmit}>Submit & Predict</button>
    </div>
  );
};

export default Predict;
