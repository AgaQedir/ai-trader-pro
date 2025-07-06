import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    if (password !== confirm) {
      setError("🔁 Şifrələr uyğun gəlmir");
      return;
    }

    try {
      const res = await axios.post("http://localhost:8000/register", {
        email,
        password,
      });

      if (res.data.success) {
        navigate("/login");
      } else {
        setError("❌ Qeydiyyat alınmadı");
      }
    } catch (err) {
      setError("⚠️ Server xətası");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <form
        onSubmit={handleRegister}
        className="bg-white p-8 rounded-xl shadow-xl w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-4 text-center">📝 Qeydiyyat</h2>

        {error && <p className="text-red-600 mb-4 text-center">{error}</p>}

        <input
          type="email"
          placeholder="📧 Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full mb-4 p-3 border rounded-xl"
          required
        />

        <input
          type="password"
          placeholder="🔑 Şifrə"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full mb-4 p-3 border rounded-xl"
          required
        />

        <input
          type="password"
          placeholder="✅ Şifrə təkrar"
          value={confirm}
          onChange={(e) => setConfirm(e.target.value)}
          className="w-full mb-6 p-3 border rounded-xl"
          required
        />

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-xl"
        >
          ➕ Qeydiyyatdan keç
        </button>
      </form>
    </div>
  );
}

export default Register;
