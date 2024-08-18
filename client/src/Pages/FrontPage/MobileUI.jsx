
import React, { useState } from 'react';

function MobileUI() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div
      className={`flex justify-center items-center rounded-2xl bg-[#0E0F14] ${isDarkMode ? 'bg-[#0E0F14]' : 'bg-[#0E0F14]'
        }`}
    >
      <div
        className={`w-60 h-96 rounded-2xl p-4 shadow-2xl relative ${isDarkMode
            ? 'bg-gradient-to-b from-gray-800 to-gray-900'
            : 'bg-gradient-to-b from-white to-gray-200'
          }`}
      >

        <div className="flex justify-between items-center mb-4">
          <span
            className={`${isDarkMode ? 'text-white' : 'text-gray-800'
              } text-xs opacity-75`}
          >
            Account
          </span>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span
              className={`${isDarkMode ? 'text-white' : 'text-gray-800'
                } text-xs opacity-75`}
            >
              Active
            </span>
          </div>
          <button
            onClick={toggleMode}
            className={`${isDarkMode ? 'text-white' : 'text-gray-800'
              } text-xs border border-gray-500 rounded px-2 py-1`}
          >
            {isDarkMode ? 'Light Mode' : 'Dark Mode'}
          </button>
        </div>


        <div className="text-center">
          <p
            className={`text-sm font-light tracking-wider ${isDarkMode ? 'text-white' : 'text-gray-800'
              }`}
          >
            Current Balance
          </p>
          <h2
            className={`text-3xl font-bold mt-2 ${isDarkMode ? 'text-white' : 'text-gray-800'
              }`}
          >
            $100,000
          </h2>
        </div>


        <div
          className={`${isDarkMode ? 'bg-gray-700' : 'bg-gray-300'
            } mt-6 p-3 rounded-lg shadow-md`}
        >
          <div className="flex justify-between text-sm">
            <span
              className={`cursor-pointer ${isDarkMode ? 'text-white' : 'text-gray-800'
                } hover:text-pink-500`}
            >
              Sell
            </span>
            <span
              className={`cursor-pointer ${isDarkMode ? 'text-white' : 'text-gray-800'
                } hover:text-pink-500`}
            >
              Buy
            </span>
          </div>
        </div>


        <div className="mt-4 space-y-2">
          <div
            className={`${isDarkMode ? 'bg-gray-800' : 'bg-gray-200'
              } p-2 rounded-lg flex justify-between items-center shadow-md`}
          >
            <span
              className={`${isDarkMode ? 'text-white' : 'text-gray-800'
                } text-xs`}
            >
              BTC
            </span>
            <span
              className={`${isDarkMode ? 'text-white' : 'text-gray-800'
                } text-xs`}
            >
              +0.005
            </span>
          </div>
          <div
            className={`${isDarkMode ? 'bg-gray-800' : 'bg-gray-200'
              } p-2 rounded-lg flex justify-between items-center shadow-md`}
          >
            <span
              className={`${isDarkMode ? 'text-white' : 'text-gray-800'
                } text-xs`}
            >
              ETH
            </span>
            <span
              className={`${isDarkMode ? 'text-white' : 'text-gray-800'
                } text-xs`}
            >
              -0.12
            </span>
          </div>
        </div>


        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 w-full px-4">
          <div className="bg-pink-500 h-2 rounded-full mb-3 shadow-inner"></div>
          <div
            className={`${isDarkMode ? 'bg-gray-700' : 'bg-gray-300'
              } p-2 rounded-lg shadow-md`}
          >
            <div className="flex justify-between items-center text-xs">
              <div className="bg-pink-500 h-2 w-8 rounded-full shadow-md"></div>
              <div
                className={`${isDarkMode ? 'bg-gray-500' : 'bg-gray-400'
                  } h-2 w-4 rounded-full`}
              ></div>
              <div
                className={`${isDarkMode ? 'bg-gray-500' : 'bg-gray-400'
                  } h-2 w-4 rounded-full`}
              ></div>
              <div
                className={`${isDarkMode ? 'bg-gray-500' : 'bg-gray-400'
                  } h-2 w-4 rounded-full`}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MobileUI;
