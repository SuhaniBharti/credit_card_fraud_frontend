import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Error from "./components/pages/Error/Error";
import ScrollToTop from "../src/ScrollToTop";
import Home from "./components/pages/Home/Home";
import Predict from "./components/pages/Model/Predict";
import Result from "./components/pages/Model/Result";
import Aboutfraud from "./components/pages/About-fraud/Aboutfraud";
import AboutUs from "./components/pages/About Us/AboutUs";
import AboutProject from "./components/pages/AboutProject/AboutProject";
import bgImage from './assets/b4.jpg';
function App() {
  return (
    <>
    <img
        src={bgImage}
        alt="background"
        className="fullscreen-bg"
      />
    
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Error />} />
        <Route path="/model" element={<Predict />} />
        <Route path="/predict" element={<Result />} />
        <Route path="/about-fraud" element={<Aboutfraud />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/AboutProject" element={<AboutProject/>}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}
export default App;
