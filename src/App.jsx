import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Courses from "./components/Courses";
import Pricing from "./components/Pricing";
import Contact from "./components/Contact";
import ProgressBar from "./components/ProgressBar";
import ScrollTop from "./components/ScrollTop";
import Footer from "./components/Footer";

import { motion } from "framer-motion";

import "./App.css";

function App() {
  return (
    <>
      <ProgressBar />

      <Navbar />

      <Hero />

      <About />

      <Courses />

      <Pricing />

      <Contact />

      <Footer />

      <ScrollTop />
    </>
  );
}

export default App;