import React, { useState, useEffect } from "react";
import { Play, X } from "lucide-react";
import hipnodil from "../images/hipnodilakademilogo.png";
import { useNavigate } from "react-router-dom";

const HipnodilHeader = () => {
  const [showVideo, setShowVideo] = useState(false);
  const [isLiveActive, setIsLiveActive] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const checkLiveStatus = () => {
      const now = new Date();
      const hours = now.getHours();
      setIsLiveActive(hours >= 18 && hours <= 20);
    };

    // Initial check
    checkLiveStatus();

    // Check every minute
    const interval = setInterval(checkLiveStatus, 60000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container mx-auto">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-12 mb-20">
        <div className="max-w-xl space-y-8">
          <div className="inline-block px-4 py-2 bg-purple-500/20 rounded-full">
            <span className="text-purple-200 font-medium">
              Yeni Başlayanlar İçin
            </span>
          </div>

          <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight">
            Kişisel Gelişimde{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-teal-300">
              Yeni Bir Yolculuk
            </span>
          </h1>

          <p className="text-purple-100 text-lg lg:text-xl leading-relaxed">
            Alanında uzman eğitmenlerle birlikte kendinizi geliştirin.
          </p>

          <div className="flex flex-wrap gap-6">
            <button
              onClick={() => navigate("/register")}
              className="bg-gradient-to-r from-teal-400 to-teal-500 text-white px-8 py-4 rounded-xl font-medium hover:shadow-lg hover:shadow-teal-500/30 transition-all duration-300 transform hover:-translate-y-1"
            >
              Hemen Başla
            </button>
            <button
              onClick={() => setShowVideo(true)}
              className="group bg-purple-900/50 border border-purple-700 text-white px-8 py-4 rounded-xl font-medium hover:bg-purple-800/50 transition-all duration-300 flex items-center gap-3"
            >
              <Play
                size={20}
                className="group-hover:scale-110 transition-transform"
              />
              Tanıtım İzle
            </button>
            <div className="flex flex-col items-start gap-2">
              <button
                disabled={!isLiveActive}
                className={`group px-8 py-4 rounded-xl font-medium transition-all duration-300 flex items-center gap-3
                  ${
                    isLiveActive
                      ? "bg-red-600 hover:bg-red-500 text-white animate-pulse cursor-pointer"
                      : "bg-gray-600 text-gray-300 cursor-not-allowed opacity-75"
                  }`}
              >
                Canlı Yayına Katıl
              </button>
              <span className="text-sm text-purple-200">
                Canlı yayın 18:00 - 20:00 saatleri arası aktiftir
              </span>
            </div>
          </div>
        </div>

        <div className="flex-shrink-0 w-full lg:w-auto">
          <img
            src={hipnodil}
            className="w-full max-w-lg mx-auto lg:mx-0 drop-shadow-2xl hover:scale-105 transition-transform duration-500"
            alt="Hipnodil Logo"
          />
        </div>
      </div>

      {showVideo && (
        <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 backdrop-blur-sm">
          <div className="relative w-full max-w-5xl mx-4">
            <button
              onClick={() => setShowVideo(false)}
              className="absolute -top-12 right-0 text-white/80 hover:text-white transition-colors"
            >
              <X size={32} />
            </button>
            <div className="relative pt-[56.25%] rounded-2xl overflow-hidden shadow-2xl">
              <iframe
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube.com/embed/zwvKs_3S_-A?start=27&autoplay=1"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HipnodilHeader;
