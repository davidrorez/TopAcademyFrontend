import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import HomePage from "../pages/Home";
import CoursePage from "../pages/Course";
import NotFound from "../components/NotFound/NotFound";
import AOS from "aos";
import "./App.css";

export default function App() {
  useEffect(() => {
    AOS.init({
      duration: 600,
      easing: "ease-out",
    });
  }, []);

  return (
    <div className="app">
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/curso/:paramName" element={<CoursePage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}
