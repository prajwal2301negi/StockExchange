import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from 'framer-motion';


const TradingViewWidget = () => {
  useEffect(() => {
    // If the widget container is already populated
    const widgetContainer = document.querySelector(".tradingview-widget-container__widget");

    if (!widgetContainer.hasChildNodes()) {

      const script = document.createElement("script");
      script.src = "https://s3.tradingview.com/external-embedding/embed-widget-hotlists.js";
      script.async = true;
      script.innerHTML = JSON.stringify({
        colorTheme: "dark",
        dateRange: "12M",
        exchange: "US",
        showChart: true,
        locale: "en",
        largeChartUrl: "",
        isTransparent: true,
        showSymbolLogo: false,
        showFloatingTooltip: false,
        width: "400",
        height: "550",
        plotLineColorGrowing: "rgba(41, 98, 255, 1)",
        plotLineColorFalling: "rgba(41, 98, 255, 1)",
        gridLineColor: "rgba(42, 46, 57, 0)",
        scaleFontColor: "rgba(209, 212, 220, 1)",
        belowLineFillColorGrowing: "rgba(41, 98, 255, 0.12)",
        belowLineFillColorFalling: "rgba(41, 98, 255, 0.12)",
        belowLineFillColorGrowingBottom: "rgba(41, 98, 255, 0)",
        belowLineFillColorFallingBottom: "rgba(41, 98, 255, 0)",
        symbolActiveColor: "rgba(41, 98, 255, 0.12)",
      });
      widgetContainer.appendChild(script);
    }
  }, []);

  return (
    <div className="bg-[#0E0F14] ">

      <div className="flex justify-center items-center"> <motion.div
        whileHover={{ scale: 1.1 }}  // Hover effect
        whileTap={{ scale: 0.9 }}  // Tap effect
        transition={{ type: 'spring', stiffness: 300 }}
      >

        <Link to='/market' >
          <button
            className="text-lg bg-[#0d195c] font-semibold px-6 py-4 flex items-center justify-center  text-white  shadow-2xl rounded-lg "
            to='/market'
          >
            Buy&Sell Stock
          </button>
        </Link>

      </motion.div>
      </div>

      <div className=" px-20 pb-16 pt-2 bg-[#0E0F14] flex justify-center items-center">

        <div className="tradingview-widget-container">
          <div className="tradingview-widget-container__widget"></div>
          {/* <div className="tradingview-widget-copyright">
        <a
          href="https://www.tradingview.com/"
          rel="noopener nofollow"
          target="_blank"
          className="text-blue-500"
        >
          Track all markets on TradingView
        </a>
      </div> */}
        </div>
      </div>



    </div>




  );
};

export default TradingViewWidget;
