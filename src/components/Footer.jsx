import React from "react";
import {
  Instagram,
  Youtube,
  Phone,
  Mail,
  MapPin,
  MessageCircle,
} from "lucide-react";
import s1 from "../images/hipnodilakademilogo.png";

const Footer = () => {
  return (
    <>
      <div className="container mx-auto px-4 pt-16 pb-8">
        <div className="bg-[#34353A]/50 rounded-3xl p-8 backdrop-blur-sm border border-gray-700/30">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {/* Logo and Contact Information */}
            <div className="space-y-6">
              <img
                src={s1}
                alt="Hipnodil Akademi Logo"
                className="h-12 object-contain"
              />
              <div className="space-y-4">
                <div className="flex items-center gap-3 group">
                  <div className="p-2 rounded-xl bg-purple-500/10 group-hover:bg-purple-500/20 transition-colors">
                    <Phone size={20} className="text-teal-400" />
                  </div>
                  <p className="text-gray-300 hover:text-white transition-colors">
                    +90 (0312) 999 98 07
                  </p>
                </div>
                <div className="flex items-center gap-3 group">
                  <div className="p-2 rounded-xl bg-purple-500/10 group-hover:bg-purple-500/20 transition-colors">
                    <Mail size={20} className="text-teal-400" />
                  </div>
                  <p className="text-gray-300 hover:text-white transition-colors">
                    info@hipnodilakademi.com
                  </p>
                </div>
                <div className="flex items-start gap-3 group">
                  <div className="p-2 rounded-xl bg-purple-500/10 group-hover:bg-purple-500/20 transition-colors">
                    <MapPin size={20} className="text-teal-400" />
                  </div>
                  <p className="text-gray-300 hover:text-white transition-colors">
                    Bağlıca Mahallesi Hilal Caddesi 13/2 Etimesgut/ANKARA
                  </p>
                </div>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="flex flex-col items-start lg:items-center justify-between">
              <div>
                <h3 className="text-xl font-semibold mb-6 bg-gradient-to-r from-purple-400 to-teal-400 text-transparent bg-clip-text">
                  Sosyal Medya
                </h3>
                <div className="flex gap-4">
                  <a
                    href="https://youtube.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gradient-to-br from-red-600 to-red-700 p-3 rounded-xl hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-red-500/20"
                  >
                    <Youtube size={24} />
                  </a>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gradient-to-br from-pink-500 to-purple-500 p-3 rounded-xl hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-pink-500/20"
                  >
                    <Instagram size={24} />
                  </a>
                </div>
              </div>
              <div className="mt-8">
                <button className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 py-3 rounded-xl flex items-center gap-3 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-green-500/20">
                  <MessageCircle className="w-6 h-6" />
                  <span>Whatsapp Müşteri Destek Hattı</span>
                </button>
              </div>
            </div>

            {/* Logo or Additional Content */}
            <div className="lg:text-right flex items-center justify-end"></div>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4">
          <div className="py-6 text-center text-gray-400">
            <p>© 2024 Hipnodil Akademi - Tüm Hakları Saklıdır.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
