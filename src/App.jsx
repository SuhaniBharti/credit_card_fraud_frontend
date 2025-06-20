import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Error from "./components/pages/Error/Error";
import ScrollToTop from "../src/ScrollToTop";
import Home from "./components/pages/Home/Home";
import Predict from "./components/pages/Model/Predict";
import Result from "./components/pages/Model/Result";
import AboutSpam from "./components/pages/About Project/AboutSpam";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Error />} />
        <Route path="/model" element={<Predict />} />
        <Route path="/predict" element={<Result />} />
        <Route path="/about-spam" element={<AboutSpam />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
