import React from "react";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <h2 className="text-3xl font-bold mb-4">📊 Ticarət Paneli</h2>

      <div className="bg-gray-800 p-4 rounded-xl shadow-lg mb-6">
        <p className="text-lg">✅ Bot statusu: <span className="text-green-400">İşləyir</span></p>
        <p className="text-lg mt-2">📈 Son qazanc: <span className="text-teal-300">+$183.50</span></p>
        <p className="text-lg mt-2">📅 Əməliyyatlar: 3 aktiv, 12 tamamlanmış</p>
      </div>

      <div className="bg-gray-800 p-4 rounded-xl shadow-lg">
        <h3 className="text-xl font-semibold mb-3">⚙️ Parametrlər</h3>
        <form className="space-y-4">
          <div>
            <label className="block mb-1 text-sm">OpenAI API açarı:</label>
            <input
              type="text"
              className="w-full p-2 rounded bg-gray-700 text-white border border-gray-600"
              placeholder="sk-..."
            />
          </div>
          <div>
            <label className="block mb-1 text-sm">MT5 Login:</label>
            <input
              type="text"
              className="w-full p-2 rounded bg-gray-700 text-white border border-gray-600"
            />
          </div>
          <div>
            <label className="block mb-1 text-sm">MT5 Şifrə:</label>
            <input
              type="password"
              className="w-full p-2 rounded bg-gray-700 text-white border border-gray-600"
            />
          </div>

          <div className="flex space-x-4 pt-2">
            <button type="button" className="bg-green-600 hover:bg-green-500 px-6 py-2 rounded font-bold">
              ▶️ Start Bot
            </button>
            <button type="button" className="bg-red-600 hover:bg-red-500 px-6 py-2 rounded font-bold">
              ⏹️ Stop Bot
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Dashboard;
