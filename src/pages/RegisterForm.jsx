import React, { useState } from "react";
import { AlertCircle } from "lucide-react";

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    isim: "",
    soyisim: "",
    dogumTarihi: "",
    tcKimlik: "",
    telefon: "",
    email: "",
    egitimDurumu: "",
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  const validateField = (name, value) => {
    switch (name) {
      case "isim":
        return value.trim() ? "" : "İsim alanı zorunludur";
      case "soyisim":
        return value.trim() ? "" : "Soyisim alanı zorunludur";
      case "dogumTarihi":
        return value ? "" : "Doğum tarihi zorunludur";
      case "tcKimlik":
        return /^\d{11}$/.test(value)
          ? ""
          : "Geçerli bir TC kimlik numarası giriniz";
      case "telefon":
        return /^\d{10}$/.test(value.replace(/\D/g, ""))
          ? ""
          : "Geçerli bir telefon numarası giriniz";
      case "email":
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
          ? ""
          : "Geçerli bir e-posta adresi giriniz";
      case "egitimDurumu":
        return value ? "" : "Eğitim durumu seçiniz";
      default:
        return "";
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (touched[name]) {
      const error = validateField(name, value);
      setErrors((prev) => ({ ...prev, [name]: error }));
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    const error = validateField(name, value);
    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Tüm alanları doğrula
    const newErrors = {};
    Object.keys(formData).forEach((key) => {
      const error = validateField(key, formData[key]);
      if (error) newErrors[key] = error;
    });

    setErrors(newErrors);
    setTouched(
      Object.keys(formData).reduce((acc, key) => ({ ...acc, [key]: true }), {})
    );

    if (Object.keys(newErrors).length === 0) {
      // Form başarıyla doğrulandı, gönderme işlemi yapılabilir
      console.log("Form gönderiliyor:", formData);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 mt-24 bg-purple-900/30 backdrop-blur-sm rounded-xl shadow-xl border border-purple-700/30">
      <h2 className="text-3xl font-bold text-white mb-6">Üyelik Formu</h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* İsim */}
          <div>
            <label
              htmlFor="isim"
              className="block text-purple-100 text-sm font-medium mb-2"
            >
              İsim
            </label>
            <input
              type="text"
              id="isim"
              name="isim"
              value={formData.isim}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`w-full px-4 py-2 rounded-lg bg-purple-900/50 border ${
                touched.isim && errors.isim
                  ? "border-red-500"
                  : "border-purple-600"
              } text-white placeholder-purple-300 focus:outline-none focus:ring-2 focus:ring-teal-500`}
              placeholder="Adınız"
            />
            {touched.isim && errors.isim && (
              <div className="mt-1 text-red-500 text-sm flex items-center gap-1">
                <AlertCircle size={16} />
                {errors.isim}
              </div>
            )}
          </div>

          {/* Soyisim */}
          <div>
            <label
              htmlFor="soyisim"
              className="block text-purple-100 text-sm font-medium mb-2"
            >
              Soyisim
            </label>
            <input
              type="text"
              id="soyisim"
              name="soyisim"
              value={formData.soyisim}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`w-full px-4 py-2 rounded-lg bg-purple-900/50 border ${
                touched.soyisim && errors.soyisim
                  ? "border-red-500"
                  : "border-purple-600"
              } text-white placeholder-purple-300 focus:outline-none focus:ring-2 focus:ring-teal-500`}
              placeholder="Soyadınız"
            />
            {touched.soyisim && errors.soyisim && (
              <div className="mt-1 text-red-500 text-sm flex items-center gap-1">
                <AlertCircle size={16} />
                {errors.soyisim}
              </div>
            )}
          </div>

          {/* Doğum Tarihi */}
          <div>
            <label
              htmlFor="dogumTarihi"
              className="block text-purple-100 text-sm font-medium mb-2"
            >
              Doğum Tarihi
            </label>
            <input
              type="date"
              id="dogumTarihi"
              name="dogumTarihi"
              value={formData.dogumTarihi}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`w-full px-4 py-2 rounded-lg bg-purple-900/50 border ${
                touched.dogumTarihi && errors.dogumTarihi
                  ? "border-red-500"
                  : "border-purple-600"
              } text-white placeholder-purple-300 focus:outline-none focus:ring-2 focus:ring-teal-500`}
            />
            {touched.dogumTarihi && errors.dogumTarihi && (
              <div className="mt-1 text-red-500 text-sm flex items-center gap-1">
                <AlertCircle size={16} />
                {errors.dogumTarihi}
              </div>
            )}
          </div>

          {/* TC Kimlik */}
          <div>
            <label
              htmlFor="tcKimlik"
              className="block text-purple-100 text-sm font-medium mb-2"
            >
              TC Kimlik Numaranız
            </label>
            <input
              type="text"
              id="tcKimlik"
              name="tcKimlik"
              value={formData.tcKimlik}
              onChange={handleChange}
              onBlur={handleBlur}
              maxLength="11"
              className={`w-full px-4 py-2 rounded-lg bg-purple-900/50 border ${
                touched.tcKimlik && errors.tcKimlik
                  ? "border-red-500"
                  : "border-purple-600"
              } text-white placeholder-purple-300 focus:outline-none focus:ring-2 focus:ring-teal-500`}
              placeholder="TC Kimlik Numaranız"
            />
            {touched.tcKimlik && errors.tcKimlik && (
              <div className="mt-1 text-red-500 text-sm flex items-center gap-1">
                <AlertCircle size={16} />
                {errors.tcKimlik}
              </div>
            )}
          </div>

          {/* Telefon */}
          <div>
            <label
              htmlFor="telefon"
              className="block text-purple-100 text-sm font-medium mb-2"
            >
              Telefon (5xxxxxxxxx)
            </label>
            <input
              type="tel"
              id="telefon"
              name="telefon"
              value={formData.telefon}
              onChange={handleChange}
              onBlur={handleBlur}
              maxLength="10"
              className={`w-full px-4 py-2 rounded-lg bg-purple-900/50 border ${
                touched.telefon && errors.telefon
                  ? "border-red-500"
                  : "border-purple-600"
              } text-white placeholder-purple-300 focus:outline-none focus:ring-2 focus:ring-teal-500`}
              placeholder="5xxxxxxxxx"
            />
            {touched.telefon && errors.telefon && (
              <div className="mt-1 text-red-500 text-sm flex items-center gap-1">
                <AlertCircle size={16} />
                {errors.telefon}
              </div>
            )}
          </div>

          {/* E-posta */}
          <div>
            <label
              htmlFor="email"
              className="block text-purple-100 text-sm font-medium mb-2"
            >
              E-Posta Adresi
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`w-full px-4 py-2 rounded-lg bg-purple-900/50 border ${
                touched.email && errors.email
                  ? "border-red-500"
                  : "border-purple-600"
              } text-white placeholder-purple-300 focus:outline-none focus:ring-2 focus:ring-teal-500`}
              placeholder="ornek@email.com"
            />
            {touched.email && errors.email && (
              <div className="mt-1 text-red-500 text-sm flex items-center gap-1">
                <AlertCircle size={16} />
                {errors.email}
              </div>
            )}
          </div>
        </div>

        {/* Eğitim Durumu */}
        <div>
          <label
            htmlFor="egitimDurumu"
            className="block text-purple-100 text-sm font-medium mb-2"
          >
            Eğitim Durumu
          </label>
          <select
            id="egitimDurumu"
            name="egitimDurumu"
            value={formData.egitimDurumu}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`w-full px-4 py-2 rounded-lg bg-purple-900/50 border ${
              touched.egitimDurumu && errors.egitimDurumu
                ? "border-red-500"
                : "border-purple-600"
            } text-white placeholder-purple-300 focus:outline-none focus:ring-2 focus:ring-teal-500`}
          >
            <option value="">Seçiniz</option>
            <option value="ilkokul">İlkokul</option>
            <option value="ortaokul">Ortaokul</option>
            <option value="lise">Lise</option>
            <option value="onlisans">Ön Lisans</option>
            <option value="lisans">Lisans</option>
            <option value="yukseklisans">Yüksek Lisans</option>
            <option value="doktora">Doktora</option>
          </select>
          {touched.egitimDurumu && errors.egitimDurumu && (
            <div className="mt-1 text-red-500 text-sm flex items-center gap-1">
              <AlertCircle size={16} />
              {errors.egitimDurumu}
            </div>
          )}
        </div>

        {/* Submit Button */}
        <div className="flex justify-end">
          <button
            type="submit"
            className="px-8 py-3 bg-gradient-to-r from-teal-400 to-teal-500 text-white rounded-xl font-medium
              hover:shadow-lg hover:shadow-teal-500/30 transition-all duration-300 transform hover:-translate-y-1"
          >
            Üye Ol
          </button>
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;
