

import React, { useState, useEffect, useContext } from 'react';
import { Bar, Line } from 'react-chartjs-2';
import { Context } from '../main';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, LineElement, Title, Tooltip, Legend, PointElement } from 'chart.js';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


ChartJS.register(CategoryScale, LinearScale, BarElement, LineElement, Title, Tooltip, Legend, PointElement);

const PortfolioPage = () => {
    const [user, setUser] = useState('');

    const { isUserAuthenticated } = useContext(Context);

    const [stocks, setStocks] = useState([]);
    const [loading, setLoading] = useState(false);
    const [aiResponse, setAiResponse] = useState('');
    const [loadingAI, setLoadingAI] = useState(false);

    const navigateTo = useNavigate()

    const StockDetails = async () => {
        setLoading(true);
        try {
            const { data } = await axios.get('http://localhost:8000/api/v1/stock/getStockInfo', {
                withCredentials: true,
            })
            setStocks(data.stocks)
            setLoading(false);
        }
        catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const { data } = await axios.get(
                    "http://localhost:8000/api/v1/user/getUserProfile",
                    {
                        withCredentials: true,
                    }
                )
                setUser(data.userSession);
            } catch (error) {
                setUser({});
            }
        };
        fetchUsers();
    }, [isUserAuthenticated]);

    // Calculate total investment
    const totalInvestment = stocks.reduce((acc, stock) => acc + stock.quantity * stock.price, 0);

    // Bar chart data
    const barChartData = {
        labels: stocks.map(stock => stock.name),
        datasets: [
            {
                label: 'Investment in $',
                // data: stocks.map(stock => stock.quantity * stock.price),
                data: stocks.map(stock => stock.total),
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            },
        ],
    };

    // Line chart data
    const lineChartData = {
        // labels: stocks.map(stock => stock.quantity),
        labels: stocks.map(stock => stock.total),
        datasets: [
            {
                label: 'Portfolio Value Over Time',
                data: stocks.map(stock => stock.price), // Dummy data for now
                borderColor: 'rgba(54, 162, 235, 1)',
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                fill: true,
            },
        ],
    };

    const getAiResponse = async () => {
        if (loading) return; // Prevent multiple submissions
        setLoading(true);
        try {
            const { data } = await axios.get('http://localhost:8000/api/v1/stock/getAiResponse', {
                withCredentials: true
            });

            setAiResponse(data.text);
        }
        catch (error) {
            console.log(error);
        }
        finally {
            setLoading(false);
        }

    }

    useEffect(() => {
        if(isUserAuthenticated){
            StockDetails();
        }
        else if(!isUserAuthenticated){
            navigateTo('/login');
        }
    }, [isUserAuthenticated]);



  const clearResponse = () => {
    setAiResponse('');
  };



    return (
        <div className="container bg-[#0E0F14] p-8 font-roboto space-y-12">
            <div className="bg-gray-800 p-6 rounded-xl text-white">
                {user ? (
                    <div className='text-white text-lg'>
                        <p><strong>Name:</strong> {user.name}</p>
                        <p><strong>Email:</strong> {user.email}</p>
                        <p><strong>Balance:</strong> ${user.balance}</p>
                        <p><strong>Gender:</strong> {user.gender}</p>
                        <p><strong>Phone:</strong> {user.phone}</p>
                    </div>
                ) : (
                    <p>No user data available.</p>
                )}
            </div>


            <div className="bg-gray-800 p-6 rounded-xl text-white">
                <h2 className="text-xl font-bold mb-4">Your Stocks</h2>
                <table className="w-full text-left">
                    <thead>
                        <tr>
                            <th className="pb-2">Stock</th>
                            {/* <th className="pb-2">Symbol</th> */}
                            <th className="pb-2">Avg Price</th>
                            {/* { <th className="pb-2">Quantity</th> */}
                            <th className="pb-2">Price</th>
                            {/* <th className="pb-2">Total Price</th>  */}
                            <th className="pb-2">Total Stocks</th>
                        </tr>
                    </thead>
                    <tbody>
                        {stocks.map((stock, index) => (
                            <tr key={index} className="border-t border-gray-700">
                                <td className="py-2">{stock.name}</td>
                                <td className="py-2">{stock.price}</td>
                                <td className="py-2">{stock.stockPrice}</td>
                                {/* <td className="py-2">{stock.quantity}</td>
                                <td className="py-2">${stock.price.toFixed(2)}</td>
                                <td className="py-2">${(stock.quantity * stock.price).toFixed(2)}</td> */}
                                <td className="py-2">{stock.total}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Charts Section */}
            <div className="bg-gray-800 p-6 rounded-xl text-white grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Bar Chart */}
                <div>
                    <h2 className="text-xl font-bold mb-4">Investment Breakdown</h2>
                    <Bar data={barChartData} />
                </div>

                {/* Line Chart */}
                <div>
                    <h2 className="text-xl font-bold mb-4">Portfolio Value Over Time</h2>
                    <Line data={lineChartData} />
                </div>
            </div>


            <div>
                <button
                    onClick={getAiResponse}
                    className='px-2 py-1 rounded-lg font-medium bg-blue-600 text-white hover:bg-blue-700'
                    disabled={loading}>
                    {loading ? 'Generating...' : 'Portfolio AI Response'}
                </button>

                {aiResponse && (
                    <div className="ai-response text-white font-roboto font-normal mt-4">
                        <div dangerouslySetInnerHTML={{ __html: aiResponse }}></div>
                        <button
                            onClick={clearResponse}
                            className='mt-2 px-2 py-1 rounded-lg font-medium bg-red-600 text-white hover:bg-red-700'>
                            Remove Response
                        </button>
                    </div>
                )}
            </div>




        </div>
    );
};

export default PortfolioPage;


