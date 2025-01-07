import React from "react";
import { BookOpen, Target, Users, Clock, Laptop, Award } from "lucide-react";
import Footer from "../components/Footer";
const About = () => {
  const features = [
    {
      icon: <Laptop className="w-6 h-6" />,
      text: "Bilgi çağının getirdiği yenilikler ile gelişen teknolojileri yakından takip ederek hem eğitimlerimizi hem de firmamızı sürekli geliştiriyoruz.",
    },
    {
      icon: <Clock className="w-6 h-6" />,
      text: "Uzman eğitim kadromuzla ve diğer ekip arkadaşlarımızla danışanlarımıza 7 gün 24 saat hizmet vermek için çalışıyoruz.",
    },
    {
      icon: <Award className="w-6 h-6" />,
      text: "Danışanlarımızın bilgi ve becerilerini en üst seviyeye çıkarabilmek için gerekli olan her türlü teknolojik altyapıyı kullanıyoruz.",
    },
  ];

  return (
    <div className="relative px-4 pt-20 pb-16 sm:px-6 lg:px-8 lg:pt-24 font-sans">
      {/* Hero Section */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/50 to-transparent h-96" />

      <div className="relative mx-auto max-w-7xl">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            HAKKIMIZDA
          </h1>
          <div className="mt-6 max-w-3xl mx-auto">
            <span className="px-4 py-2 rounded-full bg-purple-500/20 text-purple-200 text-sm font-medium">
              Hipnodil Akademi - 2024, Ankara
            </span>
          </div>
        </div>

        {/* Biz Kimiz Section */}
        <div className="mt-20">
          <div className="bg-purple-900/30 backdrop-blur-sm rounded-2xl p-8 lg:p-12 border border-purple-700/30">
            <div className="flex items-center gap-4 mb-6">
              <Users className="w-8 h-8 text-teal-400" />
              <h2 className="text-3xl font-bold text-white">Biz Kimiz?</h2>
            </div>
            <p className="text-lg text-purple-100 leading-relaxed">
              "Hipnodil Akademi" 2024 yılında Ankara merkezli kurulan bir eğitim
              akademisidir.
            </p>
            <p className="mt-4 text-lg text-purple-100 leading-relaxed">
              "Çalışma Bakanlığı Mesleki Yeterlilik Kurulu" tarafından yapılan
              "Koçluk Seviye 6" ve "Eğitim Uzmanlığı Seviye 6" sınavları başta
              olmak üzere birçok alanda kişisel gelişim eğitimleri veren bir
              akademiyiz.
            </p>
          </div>
        </div>

        {/* Mission & Vision Grid */}
        <div className="mt-12 grid md:grid-cols-2 gap-8">
          {/* Misyon */}
          <div className="bg-gradient-to-br from-purple-800/30 to-purple-900/30 backdrop-blur-sm rounded-2xl p-8 border border-purple-700/30">
            <div className="flex items-center gap-4 mb-6">
              <Target className="w-8 h-8 text-teal-400" />
              <h2 className="text-3xl font-bold text-white">MİSYONUMUZ</h2>
            </div>
            <p className="text-lg text-purple-100 leading-relaxed">
              Eğitici olarak toplumdaki her bireyi yetenekleri yönünde eğitip,
              yeterli bilgi ve beceriye sahip meslek uzmanı olmalarını
              sağlamaktır.
            </p>
            <p className="mt-4 text-lg text-purple-100 leading-relaxed">
              Faaliyette bulunduğumuz sektörde öncü olarak topluma faydalı,
              yenilikçi, etik ve ahlaki kurallara bağlı kalarak danışma hizmeti
              verdiğimiz kişilerin ve çalışanlarımızın beklentilerini her zaman
              en üst seviyede karşılamak.
            </p>
          </div>

          {/* Vizyon */}
          <div className="bg-gradient-to-br from-purple-800/30 to-purple-900/30 backdrop-blur-sm rounded-2xl p-8 border border-purple-700/30">
            <div className="flex items-center gap-4 mb-6">
              <BookOpen className="w-8 h-8 text-teal-400" />
              <h2 className="text-3xl font-bold text-white">VİZYONUMUZ</h2>
            </div>
            <p className="text-lg text-purple-100 leading-relaxed">
              Eğitimlerimize farklı bakış açıları getirerek kalıcı başarılar
              elde etmek. Her zaman değişim ve gelişime açık tutumumuz sayesinde
              Türkiye'nin en başarılı ve en çok tercih edilen kişisel gelişim
              akademisi olmak.
            </p>
          </div>
        </div>

        {/* Features Grid */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-white text-center mb-12">
            Bunu yapabilmek için;
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-purple-900/20 backdrop-blur-sm rounded-xl p-6 border border-purple-700/30 hover:bg-purple-800/30 transition-colors duration-300"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-2 bg-teal-500/20 rounded-lg text-teal-400">
                    {feature.icon}
                  </div>
                </div>
                <p className="text-purple-100 leading-relaxed">
                  {feature.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
