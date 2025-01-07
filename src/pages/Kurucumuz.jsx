import React from "react";
import Footer from "../components/Footer";
import { Award, Book, Briefcase, GraduationCap } from "lucide-react";
import serdar from "../images/serdar.jpeg";

const Kurucumuz = () => {
  const achievements = [
    {
      icon: <GraduationCap />,
      title: "Eğitim",
      text: "Hacettepe Üniversitesi, Türk Dili ve Edebiyatı mezunu",
    },
    {
      icon: <Book />,
      title: "Akademik",
      text: "Dublin Üniversitesi Davranış Bilimleri Doktora",
    },
    {
      icon: <Award />,
      title: "Uzmanlık",
      text: "Hipnoterapi ve Kişisel Gelişim Uzmanı",
    },
    {
      icon: <Briefcase />,
      title: "Görev",
      text: "MYK Eğitim Uzmanı ve Sınav Değerlendiricisi",
    },
  ];

  return (
    <div className="bg-gradient-to-b from-slate-50 to-blue-50">
      {/* Hero Section with Large Photo */}
      <div className="relative min-h-[60vh] bg-gradient-to-b from-blue-50 to-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-white/90 to-transparent" />

        <div className="relative container mx-auto px-4 pt-32 pb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h1 className="text-4xl lg:text-6xl font-bold text-slate-800 mb-4">
                Kurucumuz Hakkında
              </h1>
              <h2 className="text-2xl lg:text-3xl text-slate-700 mb-8">
                Serdar Mehmet GÖLGELİ
              </h2>
              <p className="text-xl text-slate-600 leading-relaxed">
                1970 yılı, Ankara doğumludur. 30 yılı aşkın eğitim tecrübesi ve
                uluslararası akademik kariyeri ile kişisel gelişim alanında öncü
                çalışmalar yapmaktadır.
              </p>
            </div>

            <div className="order-1 lg:order-2 flex justify-center">
              <div className="relative w-64 h-64 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-slate-200 shadow-xl">
                <img
                  src={serdar}
                  alt="Serdar Mehmet GÖLGELİ"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Achievements Grid */}
      <div className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((item, index) => (
              <div
                key={index}
                className="bg-slate-50 rounded-xl p-6 border border-slate-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="text-blue-600 mb-4 w-12 h-12">{item.icon}</div>
                <h3 className="text-xl font-semibold text-slate-800 mb-2">
                  {item.title}
                </h3>
                <p className="text-slate-600">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Content Sections */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Academic Background */}
          <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-lg">
            <h3 className="text-2xl font-bold text-slate-800 mb-6">
              Akademik Geçmiş
            </h3>
            <div className="space-y-4">
              <p className="text-lg text-slate-700 leading-relaxed">
                Hacettepe Üniversitesi, Türk Dili ve Edebiyatı bölümü mezunudur.
                İleri düzeyde İngilizce bilmektedir.
              </p>
              <p className="text-lg text-slate-700 leading-relaxed">
                Uluslararası Dublin Üniversitesi'nde "Davranış Bilimleri"
                alanında, yüksek lisans ve doktora yapmıştır.
              </p>
              <p className="text-lg text-slate-700 leading-relaxed">
                'Zihin Kontrolü ve Toplumsal Mühendislik", "Algı Yönetimi ve
                Psikolojik Manipülasyon" tez konuları arasındadır.
              </p>
            </div>
          </div>

          {/* Professional Experience */}
          <div className="bg-gradient-to-r from-slate-50 to-white rounded-2xl p-8 border border-slate-200 shadow-lg">
            <h3 className="text-2xl font-bold text-slate-800 mb-6">
              Mesleki Deneyim
            </h3>
            <div className="space-y-4">
              <p className="text-lg text-slate-700 leading-relaxed">
                30 yılı aşkın bir zamandır eğitim ve öğretim alanında, birçok
                kuruluşta idari görevlerde bulunmuştur.
              </p>
              <p className="text-lg text-slate-700 leading-relaxed">
                10 yılı aşkın süredir de "Kişisel Gelişim Alanı"nda
                faaliyetlerini sürdürmektedir.
              </p>
              <p className="text-lg text-slate-700 leading-relaxed">
                "Hipnoterapi, biomatrix, auracerrahi, psikoterapi, manyetizma"
                gibi birçok alanda kişisel gelişim eğitimi almıştır.
              </p>
            </div>
          </div>

          {/* Current Work */}
          <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-lg">
            <h3 className="text-2xl font-bold text-slate-800 mb-6">
              Güncel Çalışmalar
            </h3>
            <div className="space-y-4">
              <p className="text-lg text-slate-700 leading-relaxed">
                Kendi geliştirdiği, "Hipnotik Meditasyon Teknikleri" ve
                "Hipnotik Cerrahi Teknikleri" eğitimleri başlığında, Türkiye
                genelinde halen seminerler vermekte ve çalışmalar yapmaktadır.
              </p>
              <p className="text-lg text-slate-700 leading-relaxed">
                Son iki yıldır, Çalışma Bakanlığı, "MYK Eğitim Uzmanı" ve "MYK
                Sınavları Değerlendiricisi" olarak görev yapmaktadır.
              </p>
              <p className="text-lg text-slate-700 leading-relaxed">
                2024 yılı itibariyle "Hipnodil Akademi"nin temellerini oluşturup
                kurucuları arasında yer almıştır.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Kurucumuz;
