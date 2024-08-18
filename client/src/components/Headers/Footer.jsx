import React from 'react';

function Footer() {
  return (
    <footer className="bg-[#0E0F14] text-gray-200 p-4">
      <div className="container font-semibold mx-auto text-center">
        <p>&copy; 2024 StockExchange App. All rights reserved.</p>
        <div className="space-x-4 mt-2">
          <p className="hover:text-pink-500">Privacy Policy</p>
          <p className="hover:text-pink-500">Terms of Service</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
