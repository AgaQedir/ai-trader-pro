import React, { useEffect, useState } from 'react';
import axios from 'axios';

function NotificationBanner() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    const fetchMessage = async () => {
      try {
        const res = await axios.get("http://localhost:8000/notifications");
        if (res.data.message && res.data.message !== message) {
          setMessage(res.data.message);
          setTimeout(() => setMessage(""), 10000); // 10 saniyəyə silinir
        }
      } catch (error) {
        console.error("Bildiriş alınmadı:", error);
      }
    };

    const interval = setInterval(fetchMessage, 3000); // hər 3 saniyədə yoxla
    return () => clearInterval(interval);
  }, [message]);

  if (!message) return null;

  return (
    <div className="bg-blue-600 text-white py-2 px-4 fixed top-0 left-0 right-0 z-50 text-center shadow-lg animate-bounce">
      🔔 {message}
    </div>
  );
}

export default NotificationBanner;

