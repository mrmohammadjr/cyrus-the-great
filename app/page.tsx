"use client"
import React from "react";
import HeroSection from "./components/Hero-Section";
import Legacy from "./components/Legacy";
import Text from "./components/Text";
import Transition from "./components/Transition";
import Respect from "./components/Respect";
import Outro from "./components/Outro";
import Footer from "./components/Footer";

function Home() {
  return (
    <div>
      <HeroSection />
      <Transition />
      <Legacy />
      <Transition />
      <Text />
      <Transition />
      <Respect />
      <Transition />
      <Outro />
      <Transition />
      <Footer />
    </div>
  );
}

export default Home;
