// import React, { useState, useEffect} from 'react';
// import { Link} from 'react-router-dom'
// import axios from 'axios';

// export default function BuySellPanel() {

//   const [activeButton, setActiveButton] = useState('buy');

//   const [price, setPrice] = useState(null);
//   const [error, setError] = useState(null);
//   const [quantity, setQuantity] = useState('');
//   const [name, setName] = useState('');
//   const [total,setTotal] = useState(0);

//   const submitForm = async(e)=>{
//     e.preventDefault();

//     if(quantity===""){
//       alert("Please enter quantity");
//     }
//     else if(price===""){
//       alert("Please enter price");
//     }
//     else if(name===""){
//       alert("Please enter name");
//     }
//     else{
//       try{
//         let type = 'buyStock';
//         if(activeButton==='buy'){
//           type = 'buyStock';
//         }
//         else if(activeButton==='sell'){
//           type = 'sellStock';
//         }

//         const {data} = await axios.post(`http://localhost:8000/api/v1/stock/${type}`,{
//           price,quantity,name
//         },{
//           withCredentials: true,
//           headers: { "Content-Type": "application/json" },
//         })



//           setName('');
//           setPrice('');
//           setQuantity('');

//       }
//       catch(error){
//         console.log(error);
//       }
//     }
//   }







//   return (
//     <div className="bg-[#0E0F14] text-white pl-8 py-8 pr-16">
//       <div className="flex justify-between">

//         <button
//           className={`w-1/2 py-2 rounded ${activeButton === 'buy' ? 'bg-[#00A86B] text-white' : 'bg-[#00c27862] text-black'
//             }`}
//           onClick={() => setActiveButton('buy')}
//         >
//           Buy
//         </button>

//         <button
//           className={`w-1/2 py-2 rounded ${activeButton === 'sell' ? 'bg-[#791515] text-white' : 'bg-[#281419] text-black'
//             }`}
//           onClick={() => setActiveButton('sell')}
//         >
//           Sell
//         </button>
//       </div>


//       <form onSubmit={submitForm} action="">

//       <div className="mt-4">
//           <label>Name</label>
//           <input type="text" value={name} onChange={(e)=>setName(e.target.value)} className="bg-[#1e1e1e] w-full p-2 mt-1 rounded" />
//         </div>

//          <div className="mt-4">
//           <label>Price</label>
//           {price}
//         </div> 

//         <div className="mt-4">
//           <label>Quantity</label>
//           <input type="text" value={quantity} onChange={(e)=>setQuantity(e.target.value)} className="bg-[#1e1e1e] w-full p-2 mt-1 rounded" />
//         </div>

//          <div className="mt-4">
//           <h2>{`Total: ${price*quantity}`}</h2>
//         </div> 


//         <button type='submit' className={`w-full py-2 mt-4 rounded ${activeButton === 'buy' ? 'bg-[#00A86B] text-white' : 'bg-[#B22222] text-white'
//           }`}>
//           {activeButton === 'buy' ? 'Buy' : 'Sell'}

//         </button>


//       </form>


//       <div className="flex space-x-2 mt-4">
//         <button className="w-1/4 bg-[#0E0F14] py-1 rounded">25%</button>
//         <button className="w-1/4 bg-[#0E0F14] py-1 rounded">50%</button>
//         <button className="w-1/4 bg-[#0E0F14] py-1 rounded">75%</button>
//         <button className="w-1/4 bg-[#0E0F14] py-1 rounded">Max</button>
//       </div>


//       <div className="flex items-center mt-4 space-x-2">
//         <input type="checkbox" />
//         <label>Post Only</label>
//         <input type="checkbox" />
//         <label>IOC</label>
//       </div>

//       <Link to='/home' className='text-white flex items-center py-2 text-lg font-semibold'>Back To Home</Link>
//     </div>
//   );
// }


// import React, { useEffect, useState, memo } from 'react';
// import { Link } from 'react-router-dom'

// function CryptoPrice() {
//   const [price, setPrice] = useState(null);
//   const [symbol, setSymbol] = useState("BTCUSD");

//   const [activeButton, setActiveButton] = useState('buy');

//   const [error, setError] = useState(null);
//   const [quantity, setQuantity] = useState('');
//   const [name, setName] = useState('');
//   const [total, setTotal] = useState(0);

//   const submitForm = async (e) => {
//     e.preventDefault();

//     if (quantity === "") {
//       alert("Please enter quantity");
//     }
//     else if (price === "") {
//       alert("Please enter price");
//     }
//     else if (name === "") {
//       alert("Please enter name");
//     }
//     else {
//       try {
//         let type = 'buyStock';
//         if (activeButton === 'buy') {
//           type = 'buyStock';
//         }
//         else if (activeButton === 'sell') {
//           type = 'sellStock';
//         }

//         const { data } = await axios.post(`http://localhost:8000/api/v1/stock/${type}`, {
//           price, quantity, name
//         }, {
//           withCredentials: true,
//           headers: { "Content-Type": "application/json" },
//         })

//         setName('');
//         setQuantity('');

//       }
//       catch (error) {
//         console.log(error);
//       }
//     }
//   }






//   useEffect(() => {
//     // Fetch price data from an API (mock API used here)
//     const fetchPrice = async () => {
//       try {
//         const response = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd');
//         const data = await response.json();
//         if(name === ""){
//           setPrice(0);
//         }
//         else{
//           setPrice(data[name.toLowerCase()].usd);
//         }

//       } catch (error) {
//         console.error("Error fetching price data:", error);
//       }
//     };

//     fetchPrice();
//   }, [symbol]);



//   return (
//     <div>

//       <div className="bg-[#0E0F14] text-white pl-8 py-8 pr-16">
//         <div className="flex justify-between">

//           <button
//             className={`w-1/2 py-2 rounded ${activeButton === 'buy' ? 'bg-[#00A86B] text-white' : 'bg-[#00c27862] text-black'
//               }`}
//             onClick={() => setActiveButton('buy')}
//           >
//             Buy
//           </button>

//           <button
//             className={`w-1/2 py-2 rounded ${activeButton === 'sell' ? 'bg-[#791515] text-white' : 'bg-[#281419] text-black'
//               }`}
//             onClick={() => setActiveButton('sell')}
//           >
//             Sell
//           </button>
//         </div>


//         <form onSubmit={submitForm} action="">

//           <div className="mt-4">
//             <label>Name</label>
//             <select
//                 id="name"
//                 name="name"
//                 className="bg-[#1e1e1e] w-full p-2 mt-1 rounded
//                 value={name}"
//                 onChange={(e) => setName(e.target.value)}
//               >
//                 <option value=""></option>
//                 <option value="BTCUSD">BTCUSD</option>
//                 <option value="AAPL">AAPL</option>
//                 <option value="AMZN">AMZN</option>
//                 <option value="META">META</option>
//                 <option value="GOOGL">GOOGL</option>
//                 <option value="TSLA">TSLA</option>

//               </select>
//           </div>

//           <div className='text-white mt-4'>
//             <label>Price</label>
//             {(price === null || symbol==="") ? (
//               <p className="bg-[#1e1e1e] w-full p-2 mt-1 rounded">Price...</p>
//             ) : (
//               <p className="bg-[#1e1e1e] w-full p-2 mt-1 rounded">Price: ${price}</p>
//             )}
//           </div>

//           <div className="mt-4">
//             <label>Quantity</label>
//             <input type="text" value={quantity} onChange={(e) => setQuantity(e.target.value)} className="bg-[#1e1e1e] w-full p-2 mt-1 rounded" />
//           </div>

//           <div className="mt-4">
//             <h2>{`Total: ${price * quantity}`}</h2>
//           </div>


//           <button type='submit' className={`w-full py-2 mt-4 rounded ${activeButton === 'buy' ? 'bg-[#00A86B] text-white' : 'bg-[#B22222] text-white'
//             }`}>
//             {activeButton === 'buy' ? 'Buy' : 'Sell'}

//           </button>


//         </form>


//         <div className="flex space-x-2 mt-4">
//           <button className="w-1/4 bg-[#0E0F14] py-1 rounded">25%</button>
//           <button className="w-1/4 bg-[#0E0F14] py-1 rounded">50%</button>
//           <button className="w-1/4 bg-[#0E0F14] py-1 rounded">75%</button>
//           <button className="w-1/4 bg-[#0E0F14] py-1 rounded">Max</button>
//         </div>


//         <div className="flex items-center mt-4 space-x-2">
//           <input type="checkbox" />
//           <label>Post Only</label>
//           <input type="checkbox" />
//           <label>IOC</label>
//         </div>

//         <Link to='/home' className='text-white flex items-center py-2 text-lg font-semibold'>Back To Home</Link>
//       </div>


//     </div>
//   );
// }

// export default memo(CryptoPrice);


import React, { useEffect, useState, memo, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify'
import { FaSpinner } from 'react-icons/fa';
import {Context} from '../main'


function CryptoPrice() {

  const [price, setPrice] = useState(null);
  const [symbol, setSymbol] = useState("");
  const [activeButton, setActiveButton] = useState('buy');
  const [quantity, setQuantity] = useState('');
  const [name, setName] = useState('');
  const [loading, setLoading] = useState(false);

  const {isUserAuthenticated} = useContext(Context);

  const navigateTo = useNavigate()

  const submitForm = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (quantity === "") {
      alert("Please enter quantity");
    } else if (price === "") {
      alert("Please enter price");
    } else if (name === "") {
      alert("Please enter name");
    } else {
      try {
        let type = 'buyStock';
        if (activeButton === 'buy') {
          type = 'buyStock';
        } else if (activeButton === 'sell') {
          type = 'sellStock';
        }

        const { data } = await axios.post(`http://localhost:8000/api/v1/stock/${type}`, {
          price, quantity, name
        }, {
          withCredentials: true,
          headers: { "Content-Type": "application/json" },
        });
        setName('');
        setQuantity('');
        setPrice("");
        console.log(name);
        setLoading(false);
        toast.success("Symbol purchased successfully")
      } catch (error) {
        console.log(error);
        toast.error(error);
        setLoading(false);
      }
    }
  }

  useEffect(() => {
    const fetchPrice = async () => {
      if (name !== "") {
        try {
          const response = await fetch(`https://api.coingecko.com/api/v3/simple/price?ids=${name.toLowerCase()}&vs_currencies=usd`);
          const data = await response.json();
          setPrice(data[name.toLowerCase()]?.usd || 0);
        } catch (error) {
          console.error("Error fetching price data:", error);
        }
      }
    };

    fetchPrice();
  }, [name]);

  useEffect(() => {
    if(!isUserAuthenticated){
      navigateTo('/login')
    }
  }, [isUserAuthenticated])
  

  return (
    <div>
      {loading === "true" ? (
        <div className="flex justify-center items-center h-full">
          <p className="text-white text-lg">Loading...</p>
        </div>
      ) :
        (
          <div className="bg-[#0E0F14] text-white pl-8 py-8 pr-16">
            <div className="flex justify-between">
              <button
                className={`w-1/2 py-2 rounded ${activeButton === 'buy' ? 'bg-[#00A86B] text-white' : 'bg-[#00c27862] text-black'}`}
                onClick={() => setActiveButton('buy')}
              >
                Buy
              </button>
              <button
                className={`w-1/2 py-2 rounded ${activeButton === 'sell' ? 'bg-[#791515] text-white' : 'bg-[#281419] text-black'}`}
                onClick={() => setActiveButton('sell')}
              >
                Sell
              </button>
            </div>

            <form onSubmit={submitForm} action="">
              <div className="mt-4">
                <label>Name</label>
                <select
                  id="name"
                  name="name"
                  className="bg-[#1e1e1e] w-full p-2 mt-1 rounded"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                    setSymbol(e.target.value);
                  }}
                >
                  <option value="">Symbol</option>
                  <option value="bitcoin">BTCUSD</option>
                  {/* <option value="apple">AAPL</option> */}
                  {/* <option value="amazon">AMZN</option> */}
                  {/* <option value="meta">META</option> */}
                  {/* <option value="googl">GOOGL</option> */}
                  <option value="tesla">TSLA</option>
                </select>
              </div>

              <div className='text-white mt-4'>
                <label>Price</label>
                {(price === null || symbol === "") ? (
                  <p className="bg-[#1e1e1e] w-full p-2 mt-1 rounded">Price</p>
                ) : (
                  <p className="bg-[#1e1e1e] w-full p-2 mt-1 rounded">Price: ${price.toFixed(2)}</p>
                )}
              </div>

              <div className="mt-4">
                <label>Quantity</label>
                <input type="text" value={quantity} onChange={(e) => setQuantity(e.target.value)} className="bg-[#1e1e1e] w-full p-2 mt-1 rounded" />
              </div>

              <div className="mt-4">
                <h2>{`Total: ${price * quantity}`}</h2>
              </div>

              <button type='submit' className={`w-full py-2 mt-4 rounded ${activeButton === 'buy' ? 'bg-[#00A86B] text-white' : 'bg-[#B22222] text-white'}`}>
                {activeButton === 'buy' ? 'Buy' : 'Sell'}
              </button>
            </form>

            <div className="flex space-x-2 mt-4">
              <button className="w-1/4 bg-[#0E0F14] py-1 rounded">25%</button>
              <button className="w-1/4 bg-[#0E0F14] py-1 rounded">50%</button>
              <button className="w-1/4 bg-[#0E0F14] py-1 rounded">75%</button>
              <button className="w-1/4 bg-[#0E0F14] py-1 rounded">Max</button>
            </div>

            <div className="flex items-center mt-4 space-x-2">
              <input type="checkbox" />
              <label>Post Only</label>
              <input type="checkbox" />
              <label>IOC</label>
            </div>

            <Link to='/home' className='text-white flex items-center py-2 text-lg font-semibold'>Back To Home</Link>
          </div>
        )}
    </div>

  );

}

export default memo(CryptoPrice);
