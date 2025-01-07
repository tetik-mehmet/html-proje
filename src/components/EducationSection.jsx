import React from "react";
import s4 from "../images/s4.png";
import s5 from "../images/s5.png";
import s6 from "../images/s6.png";
import s7 from "../images/s7.png";

const EducationSection = () => {
  const courses = [
    {
      id: 1,
      title: "MYK KOÇ SEVİYE 6 HAZIRLIK EĞİTİMİ",
      instructors: "MERVE ÖĞÜT & ÖZLEM İSA",
      image: s4,
      buttonColor: "bg-[#E31E24]",
    },
    {
      id: 2,
      title: "MYK KOÇ SEVİYE 6 SINAVINA HAZIRLIK (MENTÖRLÜK EĞİTİMİ)",
      instructors: "AYŞE ÖZKILIÇ",
      image: s5,
      buttonColor: "bg-[#00A551]",
    },
    {
      id: 3,
      title: "MYK EĞİTİM UZMANLIĞI SINAVINA HAZIRLIK (MENTÖRLÜK EĞİTİMİ)",
      instructors: "SERDAR MEHMET GÖLBEL",
      image: s6,
      buttonColor: "bg-[#2E3192]",
    },
    {
      id: 4,
      title: "KURUMSAL KOÇLUK EĞİTİMİ",
      instructors: "BÜLENT GARDİYANOĞLU",
      image: s7,
      buttonColor: "bg-[#F7941D]",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <h2 className="text-5xl font-bold text-white leading-tight">
          Eğitimlerimiz{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-teal-300">
            & Kurslarımız
          </span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {courses.map((course) => (
          <div
            key={course.id}
            className="bg-white/5 backdrop-blur-sm rounded-2xl shadow-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-2 border border-purple-700/30"
          >
            <div className="relative">
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-[280px] object-cover"
              />
              <button
                className={`absolute top-4 left-4 ${course.buttonColor} text-white px-4 py-2 rounded-md font-medium hover:opacity-90 transition-opacity`}
              >
                KAYIT OL
              </button>
            </div>

            <div className="p-6">
              <h3 className="text-lg font-semibold text-center text-white/90 h-24 flex items-center justify-center">
                {course.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EducationSection;
