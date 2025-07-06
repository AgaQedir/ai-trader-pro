import React, { useState } from 'react';
import axios from 'axios';
import NotificationBanner from '../components/NotificationBanner';

function Dashboard() {
  const [status, setStatus] = useState("⏳ AI gözləmədə...");

  const startAI = async () => {
    try {
      const res = await axios.post("http://localhost:8000/start");
      if (res.data.status === "started" || res.data.status === "already_running") {
        setStatus("✅ AI aktivdir");
      }
    } catch (error) {
      setStatus("❌ Başlatma xətası");
    }
  };

  const stopAI = async () => {
    try {
      const res = await axios.post("http://localhost:8000/stop");
      if (res.data.status === "stopped") {
        setStatus("⛔ AI dayandırıldı");
      }
    } catch (error) {
      setStatus("❌ Dayandırma xətası");
    }
  };

  return (
    <>
      <NotificationBanner />
      <div className="p-8">
        <h1 className="text-3xl font-bold mb-4">🤖 AI Trader Pro Paneli</h1>

        <div className="mb-4 flex items-center space-x-4">
          <button
            onClick={startAI}
            className="bg-green-600 hover:bg-green-700 text-white font-semibold px-4 py-2 rounded-xl"
          >
            ▶️ AI-ni Başlat
          </button>
          <button
            onClick={stopAI}
            className="bg-red-600 hover:bg-red-700 text-white font-semibold px-4 py-2 rounded-xl"
          >
            ⏹️ AI-ni Dayandır
          </button>
        </div>

        <div className="text-lg font-medium">{status}</div>
      </div>
    </>
  );
}

export default Dashboard;
