import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-gray-800 p-4 text-white flex justify-between items-center">
      <Link to="/" className="text-xl font-bold">
        🤖 AI Trader Pro
      </Link>
      <div className="space-x-4">
        <Link to="/login" className="hover:underline">
          Giriş
        </Link>
        <Link to="/register" className="hover:underline">
          Qeydiyyat
        </Link>
        <Link to="/dashboard" className="hover:underline">
          Panel
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
