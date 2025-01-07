// ImageSlider.jsx
import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import s1 from "../images/s1.png";
import s2 from "../images/s2.png";
import s3 from "../images/s3.png";

const ImageSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [s1, s2, s3];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <div className="relative max-w-7xl mx-auto bg-gradient-to-b from-purple-900/50 to-purple-950/50 rounded-2xl p-2 backdrop-blur-sm">
      <div className="overflow-hidden rounded-xl">
        <div
          className="flex transition-transform duration-700 ease-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div key={index} className="min-w-full p-2">
              <img
                src={slide}
                alt={`Slide ${index + 1}`}
                className="w-full h-[450px] object-contain rounded-lg hover:scale-[1.02] transition-transform duration-500"
              />
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/30 p-3 rounded-full hover:bg-black/50 transition-colors backdrop-blur-sm hover:scale-110 duration-300"
      >
        <ChevronLeft className="text-white" size={24} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/30 p-3 rounded-full hover:bg-black/50 transition-colors backdrop-blur-sm hover:scale-110 duration-300"
      >
        <ChevronRight className="text-white" size={24} />
      </button>

      <div className="flex justify-center gap-3 mt-6">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              currentSlide === index
                ? "bg-teal-400 scale-125"
                : "bg-white/30 hover:bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
