import React from "react";
import ayse from "../images/merve.png";
import bulent from "../images/bülent.png";
import merve from "../images/ocut.png";
import serdar from "../images/serdar.jpeg";
import Footer from "../components/Footer";

const TrainersSection = () => {
  const trainers = [
    {
      name: "Merve ÖCÜT",
      title: "PDR Uzmanı | ICF/MYK Profesyonel Koç",
      image: merve,
      description: "Psikolojik Danışmanlık ve Rehberlik Bölümü mezunudur.",
      points: [
        "Psikoloji alanında yüksek lisans eğitimi aldı.",
        "Özel kurumsal bir kolejde uzun yıllar rehberlik ve psikolojik danışmanlık yaptı.",
        "Ayrıca drama alanında eğitim alarak bu alanda çocuklara ve yetişkinlere yönelik psikolojik atölye çalışmaları yaptı.",
        "TEGV'de drama alanında faaliyetlerini sürdürdü.",
        "Yaşam Koçluğu ve Öğrenci Koçluğu alanında danışmanlık veriyor.",
        "Quantum teknikleri ile ilgili eğitim almış olan hocamız bu alanda hizmet vermektedir.",
        "Etkili iletişim ve beden dili alanında da çeşitli çalışmalar yapmaktadır",
        "Aktif olarak ailelere ve ergen çocuklara psikolojik danışmanlık veriyor ve yaşam koçluğu yapmaktadır.",
      ],
      note: "Hipnodil Akademi bünyesinde MYK Seviye 6 Temel Koçluk Eğitimi vermektedir.",
    },
    {
      name: "Serdar Mehmet GÖLGELİ",
      title: "MYK Eğitim Uzmanı | Sınav Değerlendiricisi | Hipnoz Uzmanı",
      image: serdar,
      description:
        "Öğrenim hayatını, Ankara'da tamamlamıştır. Hacettepe Üniversitesi Türk Dili ve Edebiyatı bölümü mezunudur. İleri düzeyde İngilizce bilmektedir. 30 yılı aşkın zamandır eğitim ve öğretim alanında, birçok kuruluşta idari görevlerde bulunmuştur.",
      points: [
        'Uluslararası Dublin Üniversitesi\'nde "Davranış Bilimleri" alanında, yüksek lisans ve doktora yapmıştır.',
        "'Zihin Kontrolü ve Toplumsal Mühendislik', 'Algı Yönetimi ve Psikolojik Manipulasyon' tez konuları arasındadır.",
        '10 yılı aşkın süredir de "Kişisel Gelişim Alanı\'nda" faaliyetlerini sürdürmektedir.',
        '"Hipnoterapi, biomatrix, auracerrahi, psikoterapi, manyetizma" gibi birçok alanda kişisel gelişim eğitimi almıştır.',
        'Kendi geliştirdiği, "Hipnotik Meditasyon Teknikleri" ve "Hipnotik Cerrahi Teknikleri" eğitimleri başlığında, Türkiye genelinde halen seminerler vermekte ve çalışmalar yapmaktadır.',
      ],
      note: "Hipnodil Akademi bünyesinde MYK Seviye 6 Eğitim Uzmanlığı Eğitimi vermektedir.",
    },
    {
      name: "Ayşe ÖZKILIÇ",
      title: "ICF/MYK Belgeli Profesyonel Koç",
      image: ayse,
      description:
        "Anadolu Üniversitesi Kamu Yönetimi mezunudur. Yaşadığı hayat deneyimleri ile kendini keşfetme yolculuğuna kişisel gelişim eğitimleriyle çıkmıştır ve halihazırda koçluk yapmaktadır.",
      certifications: [
        "ICF PROFESYONEL KOÇLUK",
        "ICF NLP (Neuro Linguistic Programming)",
        "MYK BELGELİ KOÇ ( Seviye 6 )",
        "ICF KAHKAHA YOGASI",
        "BİLİNÇALTI UYGULAYICISI",
      ],
      specialties: ["PROFESYONEL KOÇLUK", "OYT – BİLİNÇALTI UYGULAMA"],
      note: "Hipnodil Akademi bünyesinde MYK (Koç Seviye 6) Mentörlük Hizmeti vermektedir.",
    },
    {
      name: "Bülent Gardiyanoğlu",
      title: "Yazar | Kişisel Gelişim Uzmanı",
      image: bulent,
      description:
        "Öğrenimini Kıbrıs'ta tamamlamıştır. İstanbul Marmara Üniversitesi Güzel Sanatlar Fakültesi'ni dereceyle bitirdikten sonra üst düzey yöneticilik yapmış sonra kendi teknoloji şirketini kurmuştur. Yurtdışında çeşitli kişisel gelişim eğitimleri almıştır. Aldığı eğitimleri hayatına uyguladıkça değişimleri fark etmiş ve kendi geliştirdiği teknikleri çevresindeki insanlar ile paylaşmaya başlamıştır. 200'den fazla canlı yayına katılmış, binlerce kişiyle bire bir seanslar yapmış ve yüzbinlerce kişiye uluslararası birçok ülkede seminerler vermiştir. Dünya'nın pek çok noktasında; seminerler ve atölye çalışmaları yapmış, halen çalışmaları devam etmektedir.",
      books: [
        "Evrenin İlahi Dili-Uyanış",
        "İki Tam Bir Tek",
        "Kadın Olmayı Hatırlamak",
        "Her Şey Hakikati Görmekle Başlar",
        "Mucize Şifa",
        "Her Güne Mesajınız Var",
      ],
    },
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <h2 className="text-4xl font-bold text-white text-center mb-12">
        Eğitmenlerimiz
      </h2>

      <div className="space-y-8">
        {trainers.map((trainer, index) => (
          <div
            key={index}
            className="bg-purple-900/30 backdrop-blur-sm rounded-xl border border-purple-700/30 overflow-hidden"
          >
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/3 lg:w-1/4">
                <img
                  src={trainer.image}
                  alt={trainer.name}
                  className="w-full h-full object-cover object-center"
                />
              </div>

              <div className="p-6 md:w-2/3 lg:w-3/4">
                <h3 className="text-2xl font-bold text-white mb-2">
                  {trainer.name}
                </h3>
                <p className="text-teal-400 mb-4">{trainer.title}</p>
                <p className="text-purple-100 mb-4">{trainer.description}</p>

                {trainer.points && (
                  <ul className="space-y-2 text-purple-100 mb-4">
                    {trainer.points.map((point, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {trainer.certifications && (
                  <div className="mb-4">
                    <h4 className="text-white font-medium mb-2">
                      Alınan eğitimler:
                    </h4>
                    <ul className="space-y-1 text-purple-100">
                      {trainer.certifications.map((cert, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="mr-2">•</span>
                          <span>{cert}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {trainer.specialties && (
                  <div className="mb-4">
                    <h4 className="text-white font-medium mb-2">
                      Uzman Olunan Alanlar:
                    </h4>
                    <ul className="space-y-1 text-purple-100">
                      {trainer.specialties.map((specialty, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="mr-2">•</span>
                          <span>{specialty}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {trainer.books && (
                  <div className="mb-4">
                    <h4 className="text-white font-medium mb-2">
                      Yayınlanan Kitapları:
                    </h4>
                    <ul className="space-y-1 text-purple-100">
                      {trainer.books.map((book, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="mr-2">•</span>
                          <span>{book}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {trainer.note && (
                  <p className="text-teal-400 mt-4 font-medium">
                    {trainer.note}
                  </p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default TrainersSection;
