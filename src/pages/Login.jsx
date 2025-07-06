import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await axios.post("http://127.0.0.1:8000/login", {
        email,
        password,
      });

      if (response.data.status === "success") {
        localStorage.setItem("token", response.data.token);
        navigate("/dashboard");
      } else {
        setError("❌ Email və ya şifrə yanlışdır.");
      }
    } catch (err) {
      setError("🚫 Serverlə bağlantı xətası.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white px-6">
      <div className="bg-gray-800 p-8 rounded-2xl shadow-xl w-full max-w-md">
        <h2 className="text-3xl font-bold mb-6 text-center">🔐 Giriş Paneli</h2>
        <input
          type="email"
          placeholder="Email"
          className="w-full mb-4 p-3 rounded-lg text-black"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Şifrə"
          className="w-full mb-4 p-3 rounded-lg text-black"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <button
          onClick={handleLogin}
          className="w-full bg-teal-500 hover:bg-teal-400 text-white py-3 rounded-lg font-semibold"
        >
          ➤ Daxil ol
        </button>
      </div>
    </div>
  );
};

export default Login;

