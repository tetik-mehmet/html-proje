import React, { useState } from "react";
import { Eye, EyeOff, AlertCircle, LogIn } from "lucide-react";

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  const validateField = (name, value) => {
    switch (name) {
      case "email":
        if (!value) return "E-posta adresi zorunludur";
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
          return "Geçerli bir e-posta adresi giriniz";
        }
        return "";
      case "password":
        if (!value) return "Şifre zorunludur";
        if (!/[A-Z]/.test(value)) {
          return "Şifre en az bir büyük harf içermelidir";
        }
        if (!/\d/.test(value)) {
          return "Şifre en az bir rakam içermelidir";
        }
        return "";
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
    setTouched({
      email: true,
      password: true,
    });

    if (Object.keys(newErrors).length === 0) {
      // Form başarıyla doğrulandı, giriş işlemi yapılabilir
      console.log("Giriş yapılıyor:", formData);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-md w-full p-6 bg-purple-900/30 backdrop-blur-sm rounded-xl shadow-xl border border-purple-700/30">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-white">Giriş Yap</h2>
          <p className="text-purple-200 mt-2">
            Hipnodil Akademi'ye hoş geldiniz
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
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
              placeholder="ornek@email.com"
              className={`w-full px-4 py-2 rounded-lg bg-purple-900/50 border ${
                touched.email && errors.email
                  ? "border-red-500"
                  : "border-purple-600"
              } text-white placeholder-purple-300 focus:outline-none focus:ring-2 focus:ring-teal-500`}
            />
            {touched.email && errors.email && (
              <div className="mt-1 text-red-500 text-sm flex items-center gap-1">
                <AlertCircle size={16} />
                {errors.email}
              </div>
            )}
          </div>

          {/* Şifre */}
          <div>
            <label
              htmlFor="password"
              className="block text-purple-100 text-sm font-medium mb-2"
            >
              Şifre
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`w-full px-4 py-2 rounded-lg bg-purple-900/50 border ${
                  touched.password && errors.password
                    ? "border-red-500"
                    : "border-purple-600"
                } text-white placeholder-purple-300 focus:outline-none focus:ring-2 focus:ring-teal-500`}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-purple-300 hover:text-white transition-colors"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
            {touched.password && errors.password && (
              <div className="mt-1 text-red-500 text-sm flex items-center gap-1">
                <AlertCircle size={16} />
                {errors.password}
              </div>
            )}
          </div>

          {/* Giriş Yap Butonu */}
          <button
            type="submit"
            className="w-full px-8 py-3 bg-gradient-to-r from-teal-400 to-teal-500 text-white rounded-xl 
              font-medium hover:shadow-lg hover:shadow-teal-500/30 transition-all duration-300 
              transform hover:-translate-y-1 flex items-center justify-center gap-2"
          >
            <LogIn size={20} />
            Giriş Yap
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
