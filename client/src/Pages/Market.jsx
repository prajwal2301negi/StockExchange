import React,{useEffect,useContext} from 'react'
import Header from '../components/Header';
import BuySellPanel from '../components/BuySellPanel';
import AdvancedChart from '../components/AdvancedChart';
import { Context } from '../main';
import { useNavigate } from 'react-router-dom';


function Market() {

  const{isUserAuthenticated} = useContext(Context);
  const navigateTo = useNavigate();

  useEffect(() => {
    if (!isUserAuthenticated) {
      navigateTo('/login');
      }
  }, [isUserAuthenticated]);

  return (
    <div className="bg-[#0E0F14] min-h-screen pt-2 pb-1 px-2 flex justify-center flex-col">
      <Header />
      <div className="flex flex-grow px-4 py-1 space-x-4">
        <div className="flex-1 bg-[#0E0F14]">
          <AdvancedChart />
        </div>
        <div className="w-1/8 bg-[#0E0F14]">
          <BuySellPanel />
        </div>
        <div className="App">
        </div>
      </div>
    </div>
  )
}

export default Market



