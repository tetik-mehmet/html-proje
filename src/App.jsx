// App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import About from "./pages/About";
import Kurucumuz from "./pages/Kurucumuz";
import RegisterForm from "./pages/RegisterForm";
import TrainersSection from "./pages/TrainersSection";
import LoginForm from "./pages/LoginForm";

const App = () => {
  return (
    <Router>
      <div className="relative w-full min-h-screen bg-gradient-to-br from-purple-800 via-purple-700 to-purple-900 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,...')] opacity-10"></div>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/founder" element={<Kurucumuz />} />
          <Route path="/register" element={<RegisterForm />} />
          <Route path="/trainers" element={<TrainersSection />} />
          <Route path="/login" element={<LoginForm />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
