
#  Credit Card Fraud - Frontend
[Live : https://credit-card-fraud-frontend-ruby.vercel.app] 

This is the **React.js** frontend for the Credit card fraud project. It allows users to input a features and receive a prediction from the backend FastAPI model on whether the message is fraud or not

---

## Project Structure

```
FRONTEND/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── layouts/
│   │   │   ├── Footer.jsx
│   │   │   ├── Header.jsx
│   │   │   └── Layout.jsx
│   ├── pages/
│   │   ├── About Project/
│   │   │   ├── AboutProject.jsx
│   │   │   └── AboutFraud.jsx
│   │   ├── About Us/
│   │   │   └── AboutUs.jsx
│   │   ├── Auth/
│   │   │   ├── Login.jsx
│   │   │   ├── Signup.jsx
│   │   │   └── ForgetPassword.jsx
│   │   ├── Home.jsx
│   │   ├── Error/
│   │   │   └── Error.jsx
│   │   ├── Model/
│   │   │   ├── Predict.jsx
│   │   │   └── Result.jsx
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   ├── main.jsx
│   └── ScrollToTop.jsx
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── package-lock.json
├── README.md
├── vercel.json
└── vite.config.js
```

---

##  Getting Started

Follow the instructions below to set up and run the frontend locally.

### 1. Clone the repository

```bash
git clone https://github.com/your-username/spam-sms-classifier.git
cd spam-sms-classifier/frontend
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the development server

```bash
npm run dev
```

By default, it runs on: [http://localhost:5173](http://localhost:5173)

Ensure that your FastAPI backend is running at [http://127.0.0.1:8000](http://127.0.0.1:8000).

---

## 🔗 API Integration

The frontend communicates with the following endpoint:

```
POST http://127.0.0.1:8000/predict
```

### Request Body:

```json
{
  "Input": "  0.0, -1.3598, -0.07278, 2.5363, 1.3781, -0.3383, 0.4623, 0.2395,
  0.0986, 0.3637, 0.0907, -0.5515, -0.6178, -0.9913, -0.3111,
  1.4681, -0.4704, 0.2079, 0.0257, 0.4039, 0.2514, -0.0183,
  0.2778, -0.1104, 0.0669, 0.1285, -0.1891, 0.1335, -0.0210, 149.62"
}
```

### Response:

```json
{
  "prediction": "Fraud" // or "Safe"
}
```

---

## 🛠 Built With

- React.js (Vite)
- CSS
- FastAPI (Backend)
- Axios (HTTP Requests)

---


---

##  License
All Right Reserved @Data_Seekers team

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).
