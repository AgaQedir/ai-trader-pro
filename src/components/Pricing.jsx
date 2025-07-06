import React from "react";

const Pricing = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white px-6 py-12">
      <h2 className="text-4xl font-bold text-center mb-10">💳 Abunə Planları</h2>

      <div className="flex flex-col md:flex-row justify-center gap-8">
        {/* Plan 1 */}
        <div className="bg-gray-800 p-6 rounded-xl shadow-xl w-full md:w-1/3">
          <h3 className="text-2xl font-bold mb-2 text-teal-400">$20 / ay</h3>
          <p className="mb-4 text-gray-300">Öz OpenAI API açarını istifadə et</p>
          <ul className="list-disc list-inside mb-4 text-sm text-gray-400">
            <li>AI analiz və siqnallar</li>
            <li>Telegram bildirişləri</li>
            <li>Full ticarət avtomatlaşdırması</li>
          </ul>
          <button className="bg-teal-500 hover:bg-teal-400 px-6 py-2 rounded font-semibold w-full">
            Seç və Başla
          </button>
        </div>

        {/* Plan 2 */}
        <div className="bg-gray-800 p-6 rounded-xl shadow-xl w-full md:w-1/3 border-2 border-teal-400">
          <h3 className="text-2xl font-bold mb-2 text-teal-300">$29.99 / ay</h3>
          <p className="mb-4 text-gray-300">Sistemin OpenAI API açarını istifadə et</p>
          <ul className="list-disc list-inside mb-4 text-sm text-gray-400">
            <li>AI analiz və siqnallar</li>
            <li>Telegram + sistem monitorinq</li>
            <li>Ən güclü 3 siqnal ilə maksimum gəlir</li>
          </ul>
          <button className="bg-white text-teal-600 hover:bg-gray-300 px-6 py-2 rounded font-semibold w-full">
            Seç və Başla
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
