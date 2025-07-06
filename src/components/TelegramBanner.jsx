import React from "react";

const TelegramBanner = () => {
  return (
    <div className="bg-blue-900 text-white text-center py-4 px-6 rounded-xl mt-8 shadow-lg">
      <h3 className="text-xl font-semibold mb-1">📬 Telegram Bildiriş Sistemi Aktivdir</h3>
      <p className="text-sm text-blue-200">
        Əməliyyatlarınızla bağlı real vaxt bildirişlər üçün Telegram botumuzu izləyin.
      </p>
      <a
        href="https://t.me/your_bot_username"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block mt-3 bg-white text-blue-800 font-semibold px-4 py-2 rounded hover:bg-gray-100"
      >
        Botu Aç
      </a>
    </div>
  );
};

export default TelegramBanner;
