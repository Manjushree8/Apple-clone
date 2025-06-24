import React from "react";
import Navbar from "./components/Navbar";
import PromoBanner from "./components/PromoBanner";
import HeroSection from "./components/HeroSection";
import Footer from "./components/Footer";
import AppleSections from "./components/AppleSections";
import Slider from "./components/Slider";
import TopBar from "./components/TopBar";
import Hero2 from "./components/Hero2";
import Hero3 from "./components/Hero3";




function App() {
  return (
    <>
      <TopBar />
      <Navbar />
      <PromoBanner />
      <HeroSection />
      <Hero2 />
      <Hero3 />
      <AppleSections />
      <Slider />
      <Footer />
    </>
  );
}

export default App;