import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Courses from "./components/Courses";
import Workshop from "./components/Workshop";
import Pricing from "./components/Pricing";
import Contact from "./components/Contact";
import ProgressBar from "./components/ProgressBar";
import ScrollTop from "./components/ScrollTop";
import Footer from "./components/Footer";
import FounderBio from "./pages/FounderBio";
import { Routes, Route, Navigate } from "react-router-dom";
import { motion } from "framer-motion";


import "./App.css";
import WhoShouldLearn from "./components/WhoShouldLearn";

function App() {
  return (
    <>



      <ProgressBar />

      <Navbar />

      <Hero />

      <About />

      <Routes>
        <Route path="/founder-bio" element={<FounderBio />} />
        <Route path="/digital-marketing-class/" element={<Navigate to="/" replace />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>

      <Courses />

      <WhoShouldLearn />

      <Workshop />

      <Pricing />

      <Contact />


      <Footer />

      <ScrollTop />
    </>
  );
}

export default App;