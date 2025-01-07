// pages/Home.jsx
import React from "react";
import HipnodilHeader from "../components/HipnodilHeader";
import ImageSlider from "../components/ImageSlider";
import EducationSection from "../components/EducationSection";
import ReferencesSection from "../components/ReferencesSection";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="relative px-8 pt-24 pb-12 lg:py-20">
      <HipnodilHeader />
      <ImageSlider />
      <EducationSection />
      <ReferencesSection />
      <Footer />
    </div>
  );
};

export default Home;
