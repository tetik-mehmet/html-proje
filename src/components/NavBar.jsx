import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const navItems = [
    { label: "Ana Sayfa", to: "/" },
    { label: "Hakkımızda", to: "/about" },
    { label: "Kurucumuz", to: "/founder" },
    { label: "Eğitmenlerimiz", to: "/trainers" },
    { label: "İletişim", to: "/contact" },
    { label: "Üye Ol", to: "/register" },
    { label: "Giriş Yap", to: "/login" },
  ];

  const handleNavigate = (to) => {
    setIsOpen(false);
    navigate(to);
  };

  return (
    <nav className="bg-purple-900/50 backdrop-blur-sm fixed top-0 left-0 right-0 z-50 border-b border-purple-700/30">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link to="/" className="text-white text-xl font-bold">
              Hipnodil
            </Link>
          </div>

          <div className="hidden md:flex space-x-8">
            {navItems.map((item, index) => (
              <button
                key={index}
                onClick={() => handleNavigate(item.to)}
                className={`text-purple-100 hover:text-white px-2 py-1 text-sm font-sans transition-colors duration-200
                  ${
                    index === navItems.length - 2 &&
                    "ml-4 bg-purple-600/50 rounded-lg hover:bg-purple-500/50"
                  }
                  ${
                    index === navItems.length - 1 &&
                    "bg-teal-500/80 rounded-lg hover:bg-teal-400/80"
                  }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-purple-100 hover:text-white p-2"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item, index) => (
                <button
                  key={index}
                  onClick={() => handleNavigate(item.to)}
                  className={`block w-full text-left text-purple-100 hover:text-white px-3 py-2 rounded-md text-base font-medium transition-colors duration-200
                    ${
                      index === navItems.length - 2 &&
                      "mt-4 bg-purple-600/50 hover:bg-purple-500/50"
                    }
                    ${
                      index === navItems.length - 1 &&
                      "bg-teal-500/80 hover:bg-teal-400/80"
                    }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
