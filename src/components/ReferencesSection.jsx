import React from "react";
import s8 from "../images/s8.png";
import s9 from "../images/s9.png";
import s10 from "../images/s10.png";
import s11 from "../images/s11.png";

const ReferencesSection = () => {
  const references = [
    {
      id: 1,
      name: "Passcert Euro",
      image: s8,
      alt: "Passcert Euro Logo",
    },
    {
      id: 2,
      name: "Euro Passcard",
      image: s9,
      alt: "Euro Passcard Logo",
    },
    {
      id: 3,
      name: "Megaverse Coach",
      image: s10,
      alt: "Megaverse Coach Logo",
    },
    {
      id: 4,
      name: "Modern 3D Concept",
      image: s11,
      alt: "Modern 3D Concept Logo",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-20">
      <div className="text-center mb-16">
        <h2 className="text-5xl font-bold text-white leading-tight">
          Referanslarımız{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-teal-300">
            & İş Ortaklarımız
          </span>
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 max-w-7xl mx-auto items-center">
        {references.map((reference) => (
          <div
            key={reference.id}
            className="bg-gray-100 rounded-2xl p-8 transform transition-all duration-300 hover:-translate-y-2 hover:bg-gray-50 flex items-center justify-center h-48 shadow-lg hover:shadow-xl"
          >
            <img
              src={reference.image}
              alt={reference.alt}
              className="w-full h-full object-contain filter transition-all duration-300"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReferencesSection;
